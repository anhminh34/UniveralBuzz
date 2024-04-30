//EventRepository.java
package com.sacstate.universalbuzz;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Find a single event
    Optional<Event> findByEventName(String eventName);

    List<Event> findAll();

    @Query("SELECT e FROM Event e")
    List<Event> listAllEvents();
}