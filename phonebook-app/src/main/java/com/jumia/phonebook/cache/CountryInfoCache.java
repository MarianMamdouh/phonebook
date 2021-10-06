package com.jumia.phonebook.cache;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;

/*
 * Setting immutable maps to ease retrieving country related
 * data based on the given table attached in the exercise.
 */

@Component
public class CountryInfoCache {

  private static final Logger LOGGER = LoggerFactory.getLogger(CountryInfoCache.class);
  private ImmutableList<String> countriesNames;
  private ImmutableMap<String, CountryInfo> countryInfoMap;
  private ImmutableMap<String, String> countryNameToCountryCodeMap;

  @PostConstruct
  private void createCountryInfoCache() {
     countryInfoMap = ImmutableMap.<String, CountryInfo>builder()
         .put("+237", new CountryInfo("Cameroon", "+237", "\\(237\\)\\ ?[2368]\\d{7,8}$"))
         .put("+251", new CountryInfo("Ethiopia", "+251", "\\(251\\)\\ ?[1-59]\\d{8}$"))
         .put("+212", new CountryInfo("Morocco", "+212", "\\(212\\)\\ ?[5-9]\\d{8}$"))
         .put("+258", new CountryInfo("Mozambique", "+258", "\\(258\\)\\ ?[28]\\d{7,8}$"))
         .put("+256", new CountryInfo("Uganda", "+256", "\\(256\\)\\ ?\\d{9}$"))
         .build();

     countryNameToCountryCodeMap = ImmutableMap.<String, String>builder()
         .put("Cameroon", "+237")
         .put("Ethiopia", "+251")
         .put("Morocco", "+212")
         .put("Mozambique", "+258")
         .put("Uganda", "+256")
         .build();

    countriesNames = ImmutableList.<String>builder()
         .add("Cameroon")
         .add("Ethiopia")
         .add("Morocco")
         .add("Mozambique")
         .add("Uganda")
         .build();
     LOGGER.info("Regular expressions validating data and country phone numbers have been initialized successfully!");
  }

  public CountryInfo getCountryInfo(String phonePrefix) {
    return this.countryInfoMap.get(phonePrefix);
  }

  public String getCountryCode(String countryName) {
    String capitalizedCountryName = countryName.substring(0, 1).toUpperCase() + countryName.substring(1);
    return this.countryNameToCountryCodeMap.get(capitalizedCountryName);
  }

  public ImmutableList<String> getCountriesNames() {
    return this.countriesNames;
  }
}
