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

}