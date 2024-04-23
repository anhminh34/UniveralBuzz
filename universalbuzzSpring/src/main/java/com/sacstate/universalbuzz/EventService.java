package com.sacstate.universalbuzz;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EventService {
    
    public List<Event> getEvents() {
        return List.of(
            new Event("1", "Event 1", true, LocalDate.now(), "Location 1", "Description 1"),
            new Event("2", "Event 2", false, LocalDate.of(2024, 5, 1), "Location 2", "Description 2")
        );
    }

}
