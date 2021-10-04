package com.jumia.phonebook.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jumia.phonebook.persistence.dto.CustomerDTO;
import com.jumia.phonebook.serivce.CustomerService;

import io.swagger.v3.oas.annotations.Parameter;
import com.jumia.phonebook.util.PaginationUtils;

@RestController
@CrossOrigin
public class CustomerController {

  private CustomerService customerService;

  @Autowired
  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }

  @GetMapping("/customers")
  public ResponseEntity<Page<CustomerDTO>> getCustomers(
      @Parameter(description = "requested page number")
      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
      @Parameter(description = "size of the requested page")
      @RequestParam(value = "size", required = false, defaultValue = "10") Integer size,
      @Parameter(description = "the property which will be sorted by")
      @RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
      @Parameter(description = "the direction in which the sorting would be executed. Either "
          + "DESC for descending or ASC for ascending direction.")
      @RequestParam(value = "sortDirection", required = false, defaultValue = "DESC")
          String sortDirection
  ) {
    Pageable pageable = PaginationUtils.createPageable(page, size, sortBy, sortDirection);
    return ResponseEntity.ok(customerService.findAll(pageable));
  }

  @GetMapping("/customers/filterByCountry")
  public ResponseEntity<Page<CustomerDTO>> filterCustomersByCountry(
      @Parameter(description = "requested page number")
      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
      @Parameter(description = "size of the requested page")
      @RequestParam(value = "size", required = false, defaultValue = "10") Integer size,
      @Parameter(description = "the property which will be sorted by")
      @RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
      @Parameter(description = "the direction in which the sorting would be executed. Either "
          + "DESC for descending or ASC for ascending direction.")
      @RequestParam(value = "sortDirection", required = false, defaultValue = "DESC")
          String sortDirection,
      @Parameter(description = "the country name to be filtered with ")
      @RequestParam(value = "countryName", required = true) String countryName) {
    Pageable pageable = PaginationUtils.createPageable(page, size, sortBy, sortDirection);
    return ResponseEntity.ok(customerService.findByCountry(countryName, pageable));
  }

  @GetMapping("/customers/filterByState")
  public ResponseEntity<Page<CustomerDTO>> filterCustomersByState(
      @Parameter(description = "requested page number")
      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
      @Parameter(description = "size of the requested page")
      @RequestParam(value = "size", required = false, defaultValue = "10") Integer size,
      @Parameter(description = "the property which will be sorted by")
      @RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
      @Parameter(description = "the direction in which the sorting would be executed. Either "
          + "DESC for descending or ASC for ascending direction.")
      @RequestParam(value = "sortDirection", required = false, defaultValue = "DESC")
          String sortDirection,
      @Parameter(description = "the country name to be filtered with")
      @RequestParam(value = "state", required = true)
          boolean state
  ) {
    Pageable pageable = PaginationUtils.createPageable(page, size, sortBy, sortDirection);
    return ResponseEntity.ok(customerService.findByState(state, pageable));
  }

  @GetMapping("/customers/filterByCountryAndState")
  public ResponseEntity<Page<CustomerDTO>> filterCustomersByCountryAndState(
      @Parameter(description = "requested page number")
      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
      @Parameter(description = "size of the requested page")
      @RequestParam(value = "size", required = false, defaultValue = "10") Integer size,
      @Parameter(description = "the property which will be sorted by")
      @RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
      @Parameter(description = "the direction in which the sorting would be executed. Either "
          + "DESC for descending or ASC for ascending direction.")
      @RequestParam(value = "sortDirection", required = false, defaultValue = "DESC")
          String sortDirection,
      @Parameter(description = "the country name to be filtered with")
      @RequestParam(value = "state", required = true) boolean state,
      @Parameter(description = "the country name to be filtered with ")
      @RequestParam(value = "countryName", required = true) String countryName) {
    Pageable pageable = PaginationUtils.createPageable(page, size, sortBy, sortDirection);


    return ResponseEntity.ok(customerService.findByStateAndCountry(countryName, state, pageable));
  }
}
