package com.sacstate.universalbuzz;
//EventRepository.java


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Find a single event
    Optional<Event> findByEventName(String eventName);

    // Find all events
    List<Event> findAll();

    // Return a list of events
    @Query("SELECT e FROM Event e")
    List<Event> listAllEvents();

    List<Event> findByeventNameContaining(String name);

    Event save(Event event);
}