package com.sacstate.universalbuzz;
//EventService.java


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    public final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    // Find and return every event
    public List<Event> listAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> sortEvents(String query) {
        // If a search query is provided, sort by event name
        if (query != null && !query.isEmpty()) {
            return eventRepository.findAll(Sort.by(Sort.Direction.ASC, "eventName"));
        }
        // If no search query is provided, sort by event date
        else {
            return eventRepository.findAll(Sort.by(Sort.Direction.ASC, "eventDate"));
        }
    }

    // Test function to iterate over all events and print their details
    public void printAllEvents() {
        List<Event> events = eventRepository.findAll();
        for (Event event : events) {
            System.out.println(event.toString());
        }
    }

    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    // Delete an event after searching for its name
    public void removeByEventName(String eventName) {
        // Search for the event name
        Event eventToRemove = eventRepository.findByEventName(eventName);

        // Error checking, search for the event
        if (eventToRemove != null) {
            // If the event exists, delete it
            eventRepository.delete(eventToRemove);
        } else {
            // Otherwise if the event does not exist, print to the console and error.
            throw new IllegalArgumentException(eventName + " does not exist.");
        }
    }

}