package com.jumia.phonebook.controllers;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.Map;

//@RestController
// we allow localhost:4200 for testing purposes
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/book")
@CrossOrigin
public class HelloController {

    @RequestMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> index() {
        return Collections.singletonMap("message", "Greetings from Spring Boot!");
    }


//    @OmsPutOperation(tags = { "Orders" }, description = "Put an order" +
//        "<br><br>Required User Privilege: <b>" + Constant.PrivilegeAnnotation.ORDER_WRITE + "</b>")
//    @OmsPutMapping
//    public ResponseEntity<Order> putOrder(
//        @RequestBody @Valid Order interchangeOrder
//    ) {
//        Order interchangePersistedOrder = interchangeOrderService.saveV3Order(interchangeOrder);
//        if (interchangePersistedOrder.getMeta().getVersion() == 0) {
//            return ResponseEntity.status(HttpStatus.CREATED).body(interchangePersistedOrder);
//        }
//        return ResponseEntity.ok(interchangePersistedOrder);
//    }

}
