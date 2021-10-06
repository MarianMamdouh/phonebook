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
import com.jumia.phonebook.mapper.CustomerDTOMapper;
import com.jumia.phonebook.mapper.CustomerDTO;
import com.jumia.phonebook.persistence.model.Customer;
import com.jumia.phonebook.persistence.repository.CustomerRepository;

/*
 * Our customer service layer where we can access
 * our CustomerRepository to perform all the filtering operations
 * needed which are:
 *
 * if no available filters are present, then all customer data are returned,
 * if only phone number state filter is present, then it will filter by phone number state only,
 * if only country name filter is present, then it will filter by country only,
 * if both phone number state and country filters are present, then it will filter by both
 * country name and phone number state together.
 *
 * it also takes care to map our customer entity to customerDTO model
 */
@Service
public class CustomerServiceImpl implements CustomerService {
  private static final Logger LOGGER = LoggerFactory.getLogger(CustomerServiceImpl.class);

  private final CustomerRepository customerRepository;
  private final CustomerDTOMapper customerDTOMapper;
  private final CountryInfoCache countryInfoCache;

  @Autowired
  public CustomerServiceImpl(@Nonnull CustomerRepository customerRepository,
      @Nonnull CustomerDTOMapper customerDTOMapper,
      @Nonnull CountryInfoCache countryInfoCache) {
    this.customerRepository = Objects.requireNonNull(customerRepository);
    this.customerDTOMapper = Objects.requireNonNull(customerDTOMapper);
    this.countryInfoCache = Objects.requireNonNull(countryInfoCache);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> filterCustomers(String countryName, Boolean phoneNumberState, Pageable pageable) {
    boolean isFilterByCountryName = Optional.ofNullable(countryName).isPresent();
    boolean isFilterbyPhoneNumberState = Optional.ofNullable(phoneNumberState).isPresent();

    if(!isFilterByCountryName && !isFilterbyPhoneNumberState) {
      return findAllCustomers(pageable);
    } else if (!isFilterByCountryName) {
      return filterByPhoneNumberState(phoneNumberState, pageable);
    } else if (!isFilterbyPhoneNumberState) {
      return filterByCountryName(countryName, pageable);
    }
    return filterByPhoneNumberStateAndCountry(countryName, phoneNumberState, pageable);
  }

  private Page<CustomerDTO> findAllCustomers(Pageable pageable) {
    Page<Customer> customerPage = customerRepository.findAll(pageable);
    LOGGER.info("Finding all customers data is requested...");
    return toCustomerDTOPage(customerPage);
  }

  private Page<CustomerDTO> filterByCountryName(String countryName, Pageable pageable) {
    String countryCode = getCountryCode(countryName);
    Page<Customer> customerPage = customerRepository.findByPhoneStartsWith("(" + countryCode.substring(1) + ")", pageable);
    LOGGER.info("Filtering customers data by {} country name is requested...", countryName);
    return toCustomerDTOPage(customerPage);
  }

  private Page<CustomerDTO> filterByPhoneNumberState(boolean phoneNumberState, Pageable pageable) {
    List<Customer> customerList = customerRepository.findAll();
    LOGGER.info("Filtering customers data by {} valid state is requested...", phoneNumberState);
    return filterByPhoneNumberState(phoneNumberState, pageable, customerList);
  }

  private Page<CustomerDTO> filterByPhoneNumberState(boolean phoneNumberState, Pageable pageable, List<Customer> customerList) {
    List<CustomerDTO> customerDTOList = toCustomerDTOList(customerList);
    List<CustomerDTO> filteredCustomerDTOList = customerDTOList.stream()
        .filter(customerDTO -> customerDTO.isValid() == phoneNumberState)
        .collect(Collectors.toList());
    return toCustomerPage(filteredCustomerDTOList, pageable);
  }

  private Page<CustomerDTO> filterByPhoneNumberStateAndCountry(String countryName, boolean phoneNumberState, Pageable pageable) {
    String countryCode = getCountryCode(countryName);
    List<Customer> customerList = customerRepository.findByPhoneStartsWith("(" + countryCode.substring(1) + ")");
    LOGGER.info("Filtering customers data by {} valid state and {} country name is requested...", phoneNumberState, countryName);
    return filterByPhoneNumberState(phoneNumberState, pageable, customerList);
  }

  private String getCountryCode(String countryName) {
    return Optional.ofNullable(this.countryInfoCache.getCountryCode(countryName))
        .orElseThrow(() -> new IllegalArgumentException("Country name " + countryName + " is invalid."));
  }

  private Page<CustomerDTO> toCustomerDTOPage(Page<Customer> customersPage) {
    return customersPage.map(customerDTOMapper::convertToDto);
  }

  private List<CustomerDTO> toCustomerDTOList(List<Customer> customersPage) {
    return customersPage.stream()
        .map(customerDTOMapper::convertToDto)
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
