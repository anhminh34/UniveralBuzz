//UniversalbuzzApplication.java
package com.sacstate.universalbuzz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@SpringBootApplication
@RestController
@EnableScheduling
@ComponentScan(basePackageClasses=EventController.class)
public class UniversalbuzzApplication {

    public static void main(String[] args) {
        SpringApplication.run(UniversalbuzzApplication.class, args);
    }
    
}