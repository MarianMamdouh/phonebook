package com.jumia.phonebook.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
 * Cutomer entity is our main entity which represents
 * the customer in SQLite file that holds the customer id,
 * name and phone number.
 */

@Entity
@Table(name = "customer")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
  @Id
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "name")
  String name;

  @Column(name = "phone")
  String phone;

}
