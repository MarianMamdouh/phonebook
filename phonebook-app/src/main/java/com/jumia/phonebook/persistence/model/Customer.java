package com.jumia.phonebook.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity(name = "customer")
@Table(name = "customer")
@Setter
@Getter
public class Customer {
  @Id
//  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "name")
  String name;

  @Column(name = "phone")
  String phone;

}
