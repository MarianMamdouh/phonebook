package com.jumia.phonebook.serivce;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jumia.phonebook.persistence.dto.CustomerConversion;
import com.jumia.phonebook.persistence.dto.CustomerDTO;
import com.jumia.phonebook.persistence.model.Customer;
import com.jumia.phonebook.persistence.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

  private CustomerRepository customerRepository;
  private CustomerConversion customerConversion;

  @Autowired
  public CustomerServiceImpl(CustomerRepository customerRepository,
      CustomerConversion customerConversion) {
    this.customerRepository = Objects.requireNonNull(customerRepository);
    this.customerConversion = Objects.requireNonNull(customerConversion);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> findAll(Pageable pageable) {
    Page<Customer> customerPage = customerRepository.findAll(pageable);
   return toCustomerDTOPage(customerPage);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> findByCountry(String countryCode, Pageable pageable) {

    Page<Customer> customerPage = customerRepository.findByPhoneStartsWith(countryCode, pageable);
    return toCustomerDTOPage(customerPage);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> findByState(boolean state, Pageable pageable) {
    List<Customer> customerPage = customerRepository.findAll();
    List<CustomerDTO> customerDto = toCustomerDTOList(customerPage);
    List<CustomerDTO> customerDTOList = customerDto.stream()
        .filter(customerDTO -> customerDTO.isValid() == state)
        .collect(Collectors.toList());
    return toCustomerPage(customerDTOList, pageable);
  }

  @Override
  @Transactional(readOnly = true)
  public Page<CustomerDTO> findByStateAndCountry(String countryCode, boolean state, Pageable pageable) {
    Page<Customer> customerPage = customerRepository.findByPhoneStartsWith(countryCode, pageable);
    Page<CustomerDTO> customerDto = toCustomerDTOPage(customerPage);
    List<CustomerDTO> customerDTOList = customerDto.stream()
        .filter(customerDTO -> customerDTO.isValid() == state)
        .collect(Collectors.toList());
    return toCustomerPage(customerDTOList, pageable);
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
