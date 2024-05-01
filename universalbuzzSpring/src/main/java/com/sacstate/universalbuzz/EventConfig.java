//EventConfig.java
package com.sacstate.universalbuzz;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Configuration
@EnableJpaRepositories
public class EventConfig {

    private EventRepository eventRepository;
    private final EventService eventService;

    @Autowired
    public EventConfig(EventRepository eventRepository, EventService eventService) {
        this.eventRepository = eventRepository;
        this.eventService = eventService;
    }

    @PostMapping("/submitEvent")
    public String eventSubmission(@ModelAttribute Event event, Model model) {

        System.out.println(event.toString());
        // validate
        System.out.println(event.getEventName());
        System.out.println(event.getId());
        System.out.println(event.getEventDate());

        Event eventInserted = eventRepository.save(event);
        model.addAttribute("message", eventInserted.getEventName() + " inserted.");

        model.addAttribute("message", "Thank you for your submission! Your application will be reviewed and added if deemed appropriate.");

        // Redirecting back to the same page
        return "redirect:/EventSubmissionPage.html";
    }

    @Bean
    CommandLineRunner commandLineRunner(EventRepository repository) {
        // This is for testing, manually adding events into the server.
        System.out.println("Adding to database...");
        
        // Call the printAllEvents() method using the eventService instance
        eventService.printAllEvents();
        
        return args -> {
            repository.saveAll(
                List.of(
                    new Event("Event 1", LocalDate.of(2024, 5, 1), "Location 1", "Description 1"),
                    new Event("Event 2", LocalDate.of(2024, 5, 1), "Location 1", "Description 1")
                )
            );

            // Call the printAllEvents() method using the eventService instance
            eventService.printAllEvents();
        };
    }

}