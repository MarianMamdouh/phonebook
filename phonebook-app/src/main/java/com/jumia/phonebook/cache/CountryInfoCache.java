package com.jumia.phonebook.cache;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;

@Component
public class CountryInfoCache {
  private ImmutableList<String> countries;
  private ImmutableMap<String , CountryInfo> countryInfoMap;
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

     countries = ImmutableList.<String>builder()
         .add("Cameroon")
         .add("Ethiopia")
         .add("Morocco")
         .add("Mozambique")
         .add("Uganda")
         .build();
  }

  public CountryInfo getCountryInfo(String phonePrefix) {
    return this.countryInfoMap.get(phonePrefix);
  }

  public String getCountryCode(String countryName) {
    return this.countryNameToCountryCodeMap.get(countryName);
  }

  public ImmutableList<String> getCountries() {
    return this.countries;
  }
}
