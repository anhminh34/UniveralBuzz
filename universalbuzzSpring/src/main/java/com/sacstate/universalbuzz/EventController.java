package com.sacstate.universalbuzz;
//EventController.java


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpSession;

@Controller
//@ResponseBody
public class EventController {
 
    EventService eventService;
    EventRepository eventRepository;

    @Autowired
    public EventController(EventService eventService, EventRepository eventRepository) {
        this.eventService = eventService;
        this.eventRepository = eventRepository;
    }

    // When an event is submitted, save it, and reload the page.
    @PostMapping("/submitEvent")
    public RedirectView submitEventForm(@ModelAttribute Event event, Model model) {
        try {
            Event savedEvent = eventService.saveEvent(event);

            // Print the saved event for testing
            System.out.println("Creating a new event: " + savedEvent.toString());

            return new RedirectView("/EventSubmissionPage.html");

        } catch (Exception e) {
            // Redirect to an error page if an exception occurs
            e.printStackTrace();
            return new RedirectView("/error");
        }
    }

    @PostMapping("/adminRemoveEvent")
    public RedirectView adminRemoveEvent(@RequestParam("eventName") String eventName) {
        try {
            System.out.println("Admin Page removing an event...");
            eventService.printAllEvents();

            eventService.removeByEventName(eventName); 
            System.out.println("Event " + eventName + " removed.");

            return new RedirectView("AdminPage.html");
        } catch(Exception e) {
            System.out.println("Event "+ eventName + " does not exist!");
            return new RedirectView("AdminPage.html");
        }
    }

    @GetMapping("/EventsPage")
    public String eventsPage(Model model, HttpSession session) {

        System.out.println("eventsPage called");
        eventService.printAllEvents();

        try {

            // Create an events object, add it to the HTML attributes
            List<Event> events = eventService.getEvents();
            model.addAttribute("events", events);

            // Print to the terminal for debugging purposes.
            System.out.println("Running eventsPage controller code.");
            eventService.printAllEvents();

            return "EventsPage.html";
        
        } catch (Exception e) {
            System.out.println("eventsPage directory error");
            e.printStackTrace();
            return "error";
        }
        
    }
}