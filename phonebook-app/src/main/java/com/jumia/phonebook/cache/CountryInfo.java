package com.jumia.phonebook.cache;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class CountryInfo {
  String countryName;
  String countryPhoneCode;
  String countryPhoneRegex;
}
