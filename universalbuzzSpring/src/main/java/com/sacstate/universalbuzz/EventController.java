//EventController.java
package com.sacstate.universalbuzz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class EventController {

    @Autowired
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // When an event is submitted, save it, and reload the page.
    @PostMapping("/submitEvent")
    private RedirectView eventSubmission(@ModelAttribute Event event, Model model) {
        // Save the event
        Event eventInserted = eventService.saveEvent(event);

        // Print the inputted event for testing
        System.out.println(eventInserted.toString());

        // Create a RedirectView to redirect back to the same page
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/EventSubmissionPage.html");

        eventService.printAllEvents();
        
        return redirectView;
    }

    @GetMapping("/EventsPage")
    private String eventsPage(Model model) {
        // Add events to the model
        model.addAttribute("eventList", eventService.listAllEvents());
        
        eventService.printAllEvents();
        
        // Return the template name
        return "EventsPage";
    }
}