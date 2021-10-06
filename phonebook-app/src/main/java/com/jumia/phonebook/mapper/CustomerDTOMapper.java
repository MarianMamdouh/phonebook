package com.jumia.phonebook.mapper;

import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Nonnull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jumia.phonebook.cache.CountryInfo;
import com.jumia.phonebook.cache.CountryInfoCache;
import com.jumia.phonebook.persistence.model.Customer;

/*
 * CustomerDTOMapper class to map the customer entity in the DB
 * to another model by adding countryName field which is based on phone
 * number prefix and a valid field which tells whether the phone number
 * matches the country phone number regular expression or not
 * for easier filtering operations and UI representation.
 */

@Component
public class CustomerDTOMapper {

  private final CountryInfoCache countryInfoCache;
  private ModelMapper modelMapper = new ModelMapper();

  @Autowired
  public CustomerDTOMapper(@Nonnull CountryInfoCache countryInfoCache) {
    this.countryInfoCache = Objects.requireNonNull(countryInfoCache);
  }

  public CustomerDTO convertToDto(Customer customer) {
    CountryInfo countryInfo = this.countryInfoCache.getCountryInfo("+" + customer.getPhone().substring(1,4));

    CustomerDTO customerDTO = modelMapper.map(customer, CustomerDTO.class);
    customerDTO.setCountryName(countryInfo.getCountryName());
    customerDTO.setValid(isValid(customer.getPhone(), countryInfo.getCountryPhoneRegex()));
    return customerDTO;
  }

  private boolean isValid(String customerPhoneNumber, String countryPhoneRegex) {
    Pattern pattern = Pattern.compile(countryPhoneRegex);
    Matcher matcher = pattern.matcher(customerPhoneNumber);
    return matcher.matches();
  }
}
