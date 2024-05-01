package com.sacstate.universalbuzz;
//EventController.java


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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

    /*@GetMapping("/")
    public String root() {
        return "Events";
    }*/

    /*@GetMapping("/api/Events")
	public ResponseEntity<List<Event>> getAllEvents(@RequestParam(required = false) String title) {
        try {
            List<Event> events = new ArrayList<Event>();

            if (title == null) {
                eventRepository.findAll().forEach(events::add);
            }else {
				eventRepository.findByeventNameContaining(title).forEach(events::add);
            }

            if (events.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

	/*@GetMapping("/Events/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable("id") long id) {
		Optional<Event> eventData = eventRepository.findByID(id);
	}*/

	/*@PostMapping("/Events")
	public ResponseEntity<Event> createEvent(@RequestBody Event event) {
		try {
			Event _event = eventRepository.save(new Event(event.getEventName(), event.getEventDate(), event.getEventLocation(), event.getEventDescription()));
			return new ResponseEntity<>(_event, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}*/

	/*@PutMapping("/Events/{id}")
	public ResponseEntity<Event> updateEvent(@PathVariable("id") long id, @RequestBody Event Event) {
		
	}*/

	/*@DeleteMapping("/Events/{id}")
	public ResponseEntity<HttpStatus> deleteEvent(@PathVariable("id") long id) {
		
	}*/

	/*@DeleteMapping("/Events")
	public ResponseEntity<HttpStatus> deleteAllEvents() {
		
	}*/

	/*@GetMapping("/Events/published")
	public ResponseEntity<List<Event>> findByPublished() {
		
	}*/

    // When an event is submitted, save it, and reload the page.
    @PostMapping("/submitEvent")
    public RedirectView submitEventForm(@ModelAttribute Event event, Model model) {
        try {
            // Save the event
            Event savedEvent = eventService.saveEvent(event);

            // Print the saved event for testing
            System.out.println(savedEvent.toString());

            // Redirect to the EventsPage after submitting the event
            return new RedirectView("/EventsPage");

        } catch (Exception e) {

            e.printStackTrace();
            
            // Redirect to an error page if an exception occurs
            return new RedirectView("/error");
        }
    }

    @GetMapping("/EventsPage")
    private String eventsPage(Model model, HttpSession session) {

        System.out.println("eventsPage called");
        eventService.printAllEvents();

        try {

            // Create an events object, add it to the HTML attributes
            List<Event> events = eventService.getEvents();
            model.addAttribute("events", events);

            // Print to the terminal for debugging purposes.
            System.out.println("Running eventsPage controller code.");
            eventService.printAllEvents();

            return "Events";
        
        } catch (Exception e) {
            System.out.println("eventsPage directory error");
            e.printStackTrace();
            return "error";
        }
        
    }
}