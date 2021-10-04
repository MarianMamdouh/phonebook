package com.jumia.phonebook.cache;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

@Component
public class CountryInfoCache {
  private Map<String , CountryInfo> countryInfoMap  =  new HashMap<>();

  @PostConstruct
  private Map<String , CountryInfo> createCountryInfoCache() {
    countryInfoMap.put("237", new CountryInfo("Cameroon", "+237", "\\(237\\)\\ ?[2368]\\d{7,8}$"));
    countryInfoMap.put("251", new CountryInfo("Ethiopia", "+251", "\\(251\\)\\ ?[1-59]\\d{8}$"));
    countryInfoMap.put("212", new CountryInfo("Morocco", "+212", "\\(212\\)\\ ?[5-9]\\d{8}$"));
    countryInfoMap.put("258", new CountryInfo("Mozambique", "+258", "\\(258\\)\\ ?[28]\\d{7,8}$"));
    countryInfoMap.put("256", new CountryInfo("Uganda", "+256", "\\(256\\)\\ ?\\d{9}$"));
   return countryInfoMap;
  }

  public CountryInfo getCountryInfo(String phonePrefix) {
    return this.countryInfoMap.get(phonePrefix);
  }

}
