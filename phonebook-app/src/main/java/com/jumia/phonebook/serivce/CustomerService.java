package com.jumia.phonebook.serivce;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.jumia.phonebook.persistence.dto.CustomerDTO;

public interface CustomerService {

   Page<CustomerDTO> findAll(Pageable pageable);
   Page<CustomerDTO> findByCountry(String countryCode, Pageable pageable);
   Page<CustomerDTO> findByState(boolean state, Pageable pageable);
   Page<CustomerDTO> findByStateAndCountry(String countryCode, boolean state, Pageable pageable);
}
