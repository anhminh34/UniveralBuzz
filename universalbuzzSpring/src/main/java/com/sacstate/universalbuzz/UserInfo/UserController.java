package com.sacstate.universalbuzz.UserInfo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class UserController {
    @GetMapping
    public ResponseEntity<String> login() {
        return new ResponseEntity<String>("Test Test", HttpStatus.OK);
    }
}
