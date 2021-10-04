package com.jumia.phonebook.persistence.dto;

import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jumia.phonebook.cache.CountryInfo;
import com.jumia.phonebook.cache.CountryInfoCache;
import com.jumia.phonebook.persistence.model.Customer;

@Component
public class CustomerConversion {

  private CountryInfoCache countryInfoCache;

  @Autowired
  public CustomerConversion(CountryInfoCache countryInfoCache) {
    this.countryInfoCache = countryInfoCache;
  }

  private ModelMapper modelMapper = new ModelMapper();

  public CustomerDTO convertToDto(Customer customer) {
    CustomerDTO customerDTO = modelMapper.map(customer, CustomerDTO.class);
    CountryInfo countryInfo = this.countryInfoCache.getCountryInfo(customer.getPhone().substring(1,4));
    customerDTO.setCountryName(countryInfo.getCountryName());
    customerDTO.setValid(isValid(customer.getPhone(), countryInfo.getCountryPhoneRegex()));
    return customerDTO;
  }
  private boolean isValid(String customerPhoneNumber, String countryPhoneRegex ) {
    Pattern pattern = Pattern.compile(countryPhoneRegex);
    Matcher matcher = pattern.matcher(customerPhoneNumber);
    return matcher.matches();
  }

}