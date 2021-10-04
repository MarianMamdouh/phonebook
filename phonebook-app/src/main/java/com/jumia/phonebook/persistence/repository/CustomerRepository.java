package com.jumia.phonebook.persistence.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import com.jumia.phonebook.persistence.model.Customer;

@Transactional
@RepositoryRestResource(path = "customer", collectionResourceRel = "customer")
public interface CustomerRepository extends JpaRepository<Customer, Long>, PagingAndSortingRepository<Customer, Long> {

  Page<Customer> findByPhoneStartsWith(@Param("name") String phone, Pageable pageable);
  //List<Customer> findByPhoneStartsWith(@Param("name") String phone);
}
