package com.jumia.phonebook.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
    Pageable pageable = PageRequest.of(0, 4);
    Page<Customer> customerPage = new PageImpl<>(getAllCustomers(), pageable, 4);
    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);

    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, null, pageable);
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 4);
  }

  @Test
  public void testFindAllCustomersWithNoPaginationInfo() {
    Pageable pageable = Pageable.unpaged();
    Page<Customer> customerPage = new PageImpl<>(getAllCustomers());

    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);
    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, null, pageable);
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 4);
  }

  @Test
  public void testFilterCustomersByCountryName() {
    Pageable pageable = PageRequest.of(0, 10);
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));

    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Cameroon", null, pageable);
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
  }

  @Test
  public void testFilterCustomersByCountryNameWithNoPaginationInfo() {
    Pageable pageable = Pageable.unpaged();
    Page<Customer> customerPage = new PageImpl<>(Lists.list(getCameroonValidCustomer()));

    Mockito.when(customerRepository.findByPhoneStartsWith("(237)", pageable)).thenReturn(customerPage);
    Mockito.when(countryInfoCache.getCountryCode("Cameroon")).thenReturn("+237");

    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Cameroon", null, pageable);
    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
  }

//  @Test
//  public void testFilterCustomersByTrueValidity() {
//    Pageable pageable = PageRequest.of(0, 10);
//    List<Customer> customerList = getAllCustomers();
////    Page<Customer> validCustomerPage = new PageImpl<>(Lists.list(getUgandaValidCustomer(), getCameroonValidCustomer()));
////    Page<CustomerDTO> customerDTOPage = validCustomerPage.map(customer ->
////        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findAll()).thenReturn(customerList);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, true, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 2);
//  }
//
//  @Test
//  public void testFilterCustomersByTrueValidityWithNoPagintaionInfo() {
//    Pageable pageable = Pageable.unpaged();
//    List<Customer> customerList = getAllCustomers();
//
////    Page<Customer> validCustomerPage = new PageImpl<>(Lists.list(getUgandaValidCustomer(), getCameroonValidCustomer()));
////    Page<CustomerDTO> customerDTOPage = validCustomerPage.map(customer ->
////        customerConversion.convertToDto(customer));
//    Mockito.when(customerRepository.findAll()).thenReturn(customerList);
//    CustomerDTO customerDTO = new CustomerDTO();
//    customerDTO.setValid(true);
//    for (Customer customer: customerList) {
//      Mockito.when(customerConversion.convertToDto(customer)).thenReturn(customerDTO);
//    }
//
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers(null, true, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 2);
//  }

//  @Test
//  public void testFilterCustomersByFalseValidity() {
//    Pageable pageable = PageRequest.of(0, 10);
//    Page<Customer> customerPage = new PageImpl<>(getAllCustomers());
//    Page<Customer> validCustomerPage = new PageImpl<>(Lists.list(getMoroccoInvalidCustomer(), getMozambiqueInvalidCustomer()));
//    Page<CustomerDTO> customerDTOPage = validCustomerPage.map(customer ->
//        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenReturn(customerDTOPage);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("", false, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 2);
//  }
//
//  @Test
//  public void testFilterCustomersByFalseValidityWithNoPagintaionInfo() {
//    Pageable pageable = Pageable.unpaged();
//    Page<Customer> customerPage = new PageImpl<>(getAllCustomers());
//    Page<Customer> validCustomerPage = new PageImpl<>(Lists.list(getMoroccoInvalidCustomer(), getMozambiqueInvalidCustomer()));
//    Page<CustomerDTO> customerDTOPage = validCustomerPage.map(customer ->
//        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findAll(pageable)).thenReturn(customerPage);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenReturn(customerDTOPage);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("", false, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 2);
//  }
//
//  @Test
//  public void testFilterCustomersByCountryNameAndTrueValidity() {
//    Pageable pageable = PageRequest.of(0, 10);
////    Page<Customer> customerPage = new PageImpl<>(Lists.list(getUgandaValidCustomer()));
////    Page<CustomerDTO> customerDTOPage = customerPage.map(customer ->
////        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findByPhoneStartsWith("(256)")).thenReturn(Lists.list(getUgandaValidCustomer()));
//    Mockito.when(countryInfoCache.getCountryCode("Uganda")).thenReturn("+256");
//
//
//    //    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenReturn(customerDTOPage);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Uganda", true, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
//  }
//
//  @Test
//  public void testFilterCustomersByCountryNameAndTrueValidityWithNoPaginationInfo() {
//    Pageable pageable = Pageable.unpaged();
//    Page<Customer> customerPage = new PageImpl<>(Lists.list(getUgandaValidCustomer()));
//    Page<CustomerDTO> customerDTOPage = customerPage.map(customer ->
//        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findByPhoneStartsWith("(256)", pageable)).thenReturn(customerPage);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenReturn(customerDTOPage);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Uganda", true, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
//  }
//
//  @Test
//  public void testFilterCustomersByCountryNameAndFalseValidity() {
//    Pageable pageable = PageRequest.of(0, 10);
//    Page<Customer> customerPage = new PageImpl<>(Lists.list(getMoroccoInvalidCustomer()));
//    Page<CustomerDTO> customerDTOPage = customerPage.map(customer ->
//        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findByPhoneStartsWith("(212)", pageable)).thenReturn(customerPage);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenReturn(customerDTOPage);
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Morocco", false, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
//  }
//
//  @Test
//  public void testFilterCustomersByCountryNameAndFalseValidityWithNoPaginationInfo() {
//    Pageable pageable = PageRequest.of(0, 10);
//    Page<Customer> customerPage = new PageImpl<>(Lists.list(getMoroccoInvalidCustomer()));
//    Page<CustomerDTO> customerDTOPage = customerPage.map(customer ->
//        customerConversion.convertToDto(customer));
//
//    Mockito.when(customerRepository.findByPhoneStartsWith("(212)", pageable)).thenReturn(customerPage);
////    Mockito.when(customerService.filterCustomers("Morocco", false, pageable)).thenReturn(
////        (Page<CustomerDTO>) Mockito.any(CustomerDTO.class));
//    Page<CustomerDTO> expectedCustomerDTOPage = customerService.filterCustomers("Morocco", false, pageable);
//    assertEquals(expectedCustomerDTOPage.getTotalElements(), 1);
//  }
//
//  @Test
//  public void testFilterCustomersByInvalidCountryName() {
//    Pageable pageable = PageRequest.of(0, 10);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.isNull(), Mockito.any())).thenThrow(new IllegalArgumentException());
//    assertThrows(IllegalArgumentException.class, () -> {customerService.filterCustomers("invalidCountryName", null, pageable);
//    });
//  }
//
//  @Test
//  public void testFilterCustomersByInvalidCountryNameWithNoPaginationInfo() {
//    Pageable pageable = Pageable.unpaged();
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.isNull(), Mockito.any())).thenThrow(new IllegalArgumentException());
//    assertThrows(IllegalArgumentException.class, () -> {customerService.filterCustomers("invalidCountryName", null, pageable);
//    });
//  }
//
//  @Test
//  public void testFilterCustomersByInvalidCountryNameAndState() {
//    Pageable pageable = PageRequest.of(0, 10);
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(), Mockito.anyBoolean(), Mockito.any())).thenThrow(new IllegalArgumentException());
//    assertThrows(IllegalArgumentException.class, () -> {customerService.filterCustomers("invalidCountryName", Boolean.valueOf("invalidState"), pageable);
//    });
//  }
//
//  @Test
//  public void testFilterCustomersByInvalidCountryNameAndStateWithNoPaginationInfo() {
//    Pageable pageable = Pageable.unpaged();
//    Mockito.when(customerService.filterCustomers(Mockito.anyString(),  Mockito.anyBoolean(), Mockito.any())).thenThrow(new IllegalArgumentException());
//    assertThrows(IllegalArgumentException.class, () -> {customerService.filterCustomers("invalidCountryName", Boolean.valueOf("invalidState"), pageable);
//    });
//  }

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
