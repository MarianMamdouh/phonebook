package com.jumia.phonebook.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.jumia.phonebook.mapper.CustomerDTO;

public interface CustomerService {
   Page<CustomerDTO> filterCustomers(String countryName, Boolean phoneNumberState, Pageable pageable);
}
