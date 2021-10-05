package com.jumia.phonebook.controllers;


import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import javax.annotation.Nonnull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jumia.phonebook.persistence.dto.CustomerDTO;
import com.jumia.phonebook.service.CustomerService;

import io.swagger.v3.oas.annotations.Parameter;
import com.jumia.phonebook.util.PaginationUtils;

@RestController
@CrossOrigin
@RequestMapping("/customers/filter")
public class CustomerController {

  private final CustomerService customerService;

  @Autowired
  public CustomerController(@Nonnull CustomerService customerService) {
    this.customerService = Objects.requireNonNull(customerService);
  }

  @GetMapping
  public ResponseEntity<Page<CustomerDTO>> filterCustomers(
      @Parameter(description = "requested page number")
      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
      @Parameter(description = "size of the requested page")
      @RequestParam(value = "size", required = false, defaultValue = "10") Integer size,
      @Parameter(description = "the property which will be sorted by")
      @RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
      @Parameter(description = "the direction in which the sorting would be executed. Either "
          + "DESC for descending or ASC for ascending direction.")
      @RequestParam(value = "sortDirection", required = false, defaultValue = "ASC")
          String sortDirection,
      @Parameter(description = "the phone state to be filtered with")
      @RequestParam(value = "state", required = false) Boolean state,
      @Parameter(description = "the country name to be filtered with")
      @RequestParam(value = "countryName", required = false) String countryName) {
    Pageable pageable = PaginationUtils.createPageable(page, size, sortBy, sortDirection);
    return ResponseEntity.ok(customerService.filterCustomers(countryName, state, pageable));
  }
}
