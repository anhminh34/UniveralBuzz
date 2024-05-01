//EventController.java
package com.sacstate.universalbuzz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpSession;

@Controller
public class EventController {

    @Autowired
    private EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // When an event is submitted, save it, and reload the page.
    @PostMapping("/submitEvent")
    public RedirectView eventSubmission(@ModelAttribute Event event, Model model) {
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
    public RedirectView eventsPage(Model model, HttpSession session) {
        //session.setAttribute("eventList", eventService.listAllEvents());

        // Add events to the model
        model.addAttribute("eventList", eventService.listAllEvents());
        
        System.out.println("Running eventsPage controller code.");
        eventService.printAllEvents();
        
        // Return the template name
        //return "EventsPage.html";

        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/EventsPage.html");
        
        return redirectView;
    }
}