package com.jumia.phonebook.service;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.annotation.Nonnull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jumia.phonebook.cache.CountryInfoCache;
import com.jumia.phonebook.persistence.dto.CustomerConversion;
import com.jumia.phonebook.persistence.dto.CustomerDTO;
import com.jumia.phonebook.persistence.model.Customer;
import com.jumia.phonebook.persistence.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
  private static final Logger LOGGER = LoggerFactory.getLogger(CustomerServiceImpl.class);

  private final CustomerRepository customerRepository;
  private final CustomerConversion customerConversion;
  private final CountryInfoCache countryInfoCache;

  @Autowired
  public CustomerServiceImpl(@Nonnull CustomerRepository customerRepository,
      @Nonnull CustomerConversion customerConversion,
      @Nonnull CountryInfoCache countryInfoCache) {
    this.customerRepository = Objects.requireNonNull(customerRepository);
    this.customerConversion = Objects.requireNonNull(customerConversion);
    this.countryInfoCache = Objects.requireNonNull(countryInfoCache);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> filterCustomers(String countryName, Boolean state, Pageable pageable) {
    boolean  isFilterByCountry = Optional.ofNullable(countryName).isPresent();
    boolean isFilterbyState = Optional.ofNullable(state).isPresent();

    if(!isFilterByCountry && !isFilterbyState) {
      return findAllCustomers(pageable);
    } else if (!isFilterByCountry) {
      return findByState(state, pageable);
    } else if (!isFilterbyState) {
      return findByCountry(countryName, pageable);
    }
    return findByStateAndCountry(countryName, state, pageable);
  }

  private Page<CustomerDTO> findAllCustomers(Pageable pageable) {
    Page<Customer> customerPage = customerRepository.findAll(pageable);
    return toCustomerDTOPage(customerPage);
  }

  private Page<CustomerDTO> findByCountry(String countryName, Pageable pageable) {
    String countryCode = this.countryInfoCache.getCountryCode(countryName);
    Page<Customer> customerPage = customerRepository.findByPhoneStartsWith("(" + countryCode.substring(1) + ")", pageable);
    return toCustomerDTOPage(customerPage);
  }

  private Page<CustomerDTO> findByState(boolean state, Pageable pageable) {
    List<Customer> customerList = customerRepository.findAll();
    return findByState(state, pageable, customerList);
  }

  private Page<CustomerDTO> findByStateAndCountry(String countryName, boolean state, Pageable pageable) {
    String countryCode = this.countryInfoCache.getCountryCode(countryName);
    List<Customer> customerList = customerRepository.findByPhoneStartsWith("(" + countryCode.substring(1) + ")");
    return findByState(state, pageable, customerList);
  }

  private Page<CustomerDTO> findByState(boolean state, Pageable pageable, List<Customer> customerList) {
    List<CustomerDTO> customerDTOList = toCustomerDTOList(customerList);
    List<CustomerDTO> filteredCustomerDTOList = customerDTOList.stream()
        .filter(customerDTO -> customerDTO.isValid() == state)
        .collect(Collectors.toList());
    return toCustomerPage(filteredCustomerDTOList, pageable);
  }

  private Page<CustomerDTO> toCustomerDTOPage(Page<Customer> customersPage) {
    return customersPage.map(customer ->
        customerConversion.convertToDto(customer));
  }

  private List<CustomerDTO> toCustomerDTOList(List<Customer> customersPage) {
    return customersPage.stream()
        .map(customer ->
        customerConversion.convertToDto(customer))
        .collect(Collectors.toList());
  }

  private Page<CustomerDTO> toCustomerPage(List<CustomerDTO> customerDTOList, Pageable pageable) {
    int pageSize = pageable.getPageSize();
    int currentPage = pageable.getPageNumber();
    int startItem = currentPage * pageSize;
    List<CustomerDTO> list;

    if (customerDTOList.size() < startItem) {
      list = Collections.emptyList();
    } else {
      int toIndex = Math.min(startItem + pageSize, customerDTOList.size());
      list = customerDTOList.subList(startItem, toIndex);
    }

    Page<CustomerDTO> customerDTOPage
        = new PageImpl<CustomerDTO>(list, PageRequest.of(currentPage, pageSize), customerDTOList.size());
    return customerDTOPage;
  }
}
