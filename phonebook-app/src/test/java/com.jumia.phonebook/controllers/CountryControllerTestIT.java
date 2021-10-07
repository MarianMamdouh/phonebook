package com.jumia.phonebook.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.hasItems;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

public class CountryControllerTestIT extends IntegrationTest {

  private MockMvc mockMvc;
  @Autowired
  WebApplicationContext context;

  @BeforeEach
  public void setUp(){
    mockMvc = webAppContextSetup(context).build();
  }

  @Test
  public void testFindAllCustomers() throws Exception {
    mockMvc.perform(get("/countries"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(5)))
        .andExpect(jsonPath("$", hasItems("Cameroon", "Uganda")));
  }
}
