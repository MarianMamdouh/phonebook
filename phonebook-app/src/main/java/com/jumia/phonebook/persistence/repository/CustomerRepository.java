package com.jumia.phonebook.persistence.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.jumia.phonebook.persistence.model.Customer;

/*
 * The main repository which represents our DAO to help us access the db
 * with different CRUD operations but mainly we only need Retrieval
 * so we can get our customers as in page or as in list, filtered by phone number
 * or not.
 */

@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Long> {
  Page<Customer> findByPhoneStartsWith(@Param("phone") String phone, Pageable pageable);
  List<Customer> findByPhoneStartsWith(@Param("phone") String phone);
}
