package com.sacstate.Events;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Eventdb extends JpaRepository<Event, String> {
    Optional<Event>findById(String id);
}