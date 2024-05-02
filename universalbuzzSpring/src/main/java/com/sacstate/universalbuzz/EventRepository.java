package com.sacstate.universalbuzz;
//EventRepository.java


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Find a single event
    Event findByEventName(String eventName);

    // Delete an event, with its name
    void deleteByEventName(String eventName);

    // Find all events
    List<Event> findAll();

    // Return a list of events
    @Query("SELECT e FROM Event e")
    List<Event> listAllEvents();
}