package com.jumia.phonebook.mapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
 * CustomerDTO class which represents a modifiable version of the customer
 * entity in the DB by adding countryName field which is based on phone
 * number prefix and a valid field which tells whether the phone number
 *  matches the country phone number regular expression or not
 *  for easier filtering operations and UI representation.
 */

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO {
  private String name;
  private String phone;
  private String countryName;
  private boolean valid;
}
