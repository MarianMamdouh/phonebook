package com.jumia.phonebook.cache;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/*
 * Country information model to map the country data
 * table attached in the exercise.
 */

@Setter
@Getter
@AllArgsConstructor
public class CountryInfo {
  String countryName;
  String countryPhoneCode;
  String countryPhoneRegex;
}
