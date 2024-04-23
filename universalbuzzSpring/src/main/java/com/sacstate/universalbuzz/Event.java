//Event.java
package com.sacstate.universalbuzz;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table //(name = "Event")
public class Event {
    @Id
    @SequenceGenerator(
        name = "event_sequence",
        sequenceName = "event_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "event_sequence"
    )
    private String id;

    @Column(name = "name", unique = true, updatable = false)
    private String eventName;

    @Column(name = "published", updatable = true)
    private Boolean published;

    private LocalDate eventDate;
    private String eventLocation;
    private String eventDescription;

    public Event(String id, String eventName, Boolean published, LocalDate eventDate, String eventLocation,
            String eventDescription) {
        this.id = id;
        this.eventName = eventName;
        this.published = published;
        this.eventDate = eventDate;
        this.eventLocation = eventLocation;
        this.eventDescription = eventDescription;
    }

    public Event() {
    }

    //Getters and Setters, toString at the bottom
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    @Override
    public String toString() {
        return "Event id = " + id + ", name = " + eventName + ", date = " + eventDate + ", location = "
        + eventLocation + ", description = " + eventDescription + ", published == " + published;
    }
}