package com.jumia.phonebook.controllers;

import java.util.Objects;

import javax.annotation.Nonnull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.ImmutableList;
import com.jumia.phonebook.service.CountryService;

/*
 * Countries controller to retrieve all of the country names
 * to be used as a filter dropdown list in the UI part.
 */
@RestController
@CrossOrigin
@RequestMapping("/countries")
public class CountryController {

  private final CountryService countryService;

  @Autowired
  public CountryController(@Nonnull CountryService countryService) {
    this.countryService = Objects.requireNonNull(countryService);
  }

  @GetMapping
  public ResponseEntity<ImmutableList<String>> getCountriesNames() {
    return ResponseEntity.ok(countryService.getCountriesNames());
  }
}
