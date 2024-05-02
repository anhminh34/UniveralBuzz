package com.sacstate.universalbuzz;
//EventConfig.java


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Configuration
@EnableJpaRepositories
public class EventConfig {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    public EventConfig(EventRepository eventRepository, EventService eventService) {
        this.eventRepository = eventRepository;
    }

    @PostMapping("/submitEvent")
    public String eventSubmission(@ModelAttribute Event event, Model model) {
        Event eventInserted = eventRepository.save(event);

        model.addAttribute("successMessage", eventInserted.getEventName() + " inserted.");
        model.addAttribute("message", "Thank you for your submission! Your application will be reviewed and added if deemed appropriate.");

        System.out.println("Adding a new event: " + event.toString());

        // Redirecting back to the same page
        return "redirect:/EventSubmissionPage.html";
    }

    // Use this code to manually add events
    /*@Bean
    CommandLineRunner commandLineRunner(EventRepository repository) {
        // This is for testing, manually adding events into the server.
        System.out.println("Adding to database...");

        return args -> {
            repository.saveAll(
                List.of(
                        new Event("Event 3", LocalDate.of(2024, 5, 1), "Location 1", "Description 1")//,
                        //new Event("Event 2", LocalDate.of(2024, 5, 1), "Location 2", "Description 2")
                    )
                );
                
                // Call the printAllEvents() method using the eventService instance
                eventService.printAllEvents();
            };
    }*/
}