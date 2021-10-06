package com.jumia.phonebook.service;

import java.util.Objects;

import javax.annotation.Nonnull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.ImmutableList;
import com.jumia.phonebook.cache.CountryInfoCache;

/*
 * Our country service layer where we can access
 * our counyryInfoCache and get countries names list
 * to be used as a filter dropdown list in the UI part.
 */

@Service
public class CountryServiceImpl implements CountryService {

  private final CountryInfoCache countryInfoCache;

  @Autowired
  public CountryServiceImpl(@Nonnull CountryInfoCache countryInfoCache) {
    this.countryInfoCache = Objects.requireNonNull(countryInfoCache);
  }

  @Override
  @Transactional(readOnly = true)
  public ImmutableList<String> getCountriesNames() {
    return this.countryInfoCache.getCountriesNames();
  }
}
