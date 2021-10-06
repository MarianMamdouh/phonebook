package com.jumia.phonebook.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.List;

import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.jumia.phonebook.cache.CountryInfoCache;
import com.jumia.phonebook.controllers.IntegrationTest;
import com.jumia.phonebook.mapper.CustomerDTOMapper;
import com.jumia.phonebook.mapper.CustomerDTO;
import com.jumia.phonebook.persistence.model.Customer;
import com.jumia.phonebook.persistence.repository.CustomerRepository;

@RunWith(MockitoJUnitRunner.class)
public class CustomerServiceTest extends IntegrationTest {

  @InjectMocks
  private CustomerServiceImpl customerService;
  @Mock
  private CustomerRepository customerRepository;
  @Mock
  private CustomerDTOMapper customerDTOMapper;
  @Mock
  private CountryInfoCache countryInfoCache;
  @Mock
  private ModelMapper modelMapper;

  @Before
  public void before() {
    customerService = Mockito.mock(CustomerServiceImpl.class);
    customerRepository = Mockito.mock(CustomerRepository.class);
    customerDTOMapper = Mockito.mock(CustomerDTOMapper.class);
    countryInfoCache = Mockito.mock(CountryInfoCache.class);
    modelMapper = Mockito.mock(ModelMapper.class);
  }

  @Test
  public void testFindAllCustomers() {
    //When
    Pageable pageable = PageRequest.of(0, 4);
    Page<Customer> customerPage = new PageImpl<>(getAllCustomers(), pageable, 4);
    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);

    //Then
    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, null, pageable);

    //Result
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 4);
  }

  @Test
  public void testFindAllCustomersWithNoPaginationInfo() {
    //When
    Pageable pageable = Pageable.unpaged();
    Page<Customer> customerPage = new PageImpl<>(getAllCustomers());
    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);

    //Then
    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, null, pageable);

    //Result
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 4);
  }

  @Test
  public void testFilterCustomersByCountryName() {
    //When
    Pageable pageable = PageRequest.of(0, 10);
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));
    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    //Then
    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Cameroon", null, pageable);

    //Result
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
  }

  @Test
  public void testFilterCustomersByCountryNameWithNoPaginationInfo() {
    //When
    Pageable pageable = Pageable.unpaged();
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));
    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    //Then
    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Cameroon", null, pageable);

    //Result
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
  }

  @Test
  public void testFilterCustomersByInvalidCountryName() {
    //When
    Pageable pageable = PageRequest.of(0, 10);
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));
    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    //Then
    assertThrows(IllegalArgumentException.class,
        () -> {
      customerService.filterCustomers("invalidCountryName", null, pageable);
    });
  }

  @Test
  public void testFilterCustomersByInvalidCountryNameWithNoPaginationInfo() {
    //When
    Pageable pageable = Pageable.unpaged();
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));
    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    //Then
    assertThrows(IllegalArgumentException.class,
        () -> {
      customerService.filterCustomers("invalidCountryName", null, pageable);
    });
  }

  private List<Customer> getAllCustomers() {
    Customer UgandaValidCustomer = getUgandaValidCustomer();
    Customer CameroonValidCustomer = getCameroonValidCustomer();
    Customer MoroccoInvalidCustomer = getMoroccoInvalidCustomer();
    Customer MozambiqueInvalidCustomer = getMozambiqueInvalidCustomer();
    return Lists.newArrayList(UgandaValidCustomer, CameroonValidCustomer, MoroccoInvalidCustomer, MozambiqueInvalidCustomer);
  }

  private Customer getUgandaValidCustomer() {
    return createCustomer(1l, "Uganda Valid Customer", "(256) 714660221");
  }

  private Customer getCameroonValidCustomer() {
    return createCustomer(2l, "Cameroon Valid Customer", "(237) 699209115");
  }

  private Customer getMoroccoInvalidCustomer() {
    return createCustomer(3l, "Morocco Invalid Customer", "(212) 6617344445");
  }

  private Customer getMozambiqueInvalidCustomer() {
    return createCustomer(4l, "Mozambique Invalid Customer", "(258) 042423566");
  }

  private Customer createCustomer(Long id, String name, String phone) {
    Customer customer = new Customer();
    customer.setId(id);
    customer.setName(name);
    customer.setPhone(phone);
    return customer;
  }
}
