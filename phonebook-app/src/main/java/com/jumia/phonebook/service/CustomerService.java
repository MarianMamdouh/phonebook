package com.jumia.phonebook.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.jumia.phonebook.persistence.dto.CustomerDTO;

public interface CustomerService {

   Page<CustomerDTO> filterCustomers(String countryCode, Boolean state, Pageable pageable);
}
