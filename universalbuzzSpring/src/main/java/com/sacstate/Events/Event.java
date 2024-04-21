    package com.sacstate.Events;

    import org.hibernate.annotations.UuidGenerator;
    import jakarta.persistence.Column;

/* Events.java
    * Sets up the information to be stored for the events page
    * 
    * IN PROGRESS***
    */

    import jakarta.persistence.Entity;
    import jakarta.persistence.Id;
    import jakarta.persistence.Table;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    @Entity
    @Table(name = "Event")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class Event {
        @Id
        @UuidGenerator
        @Column(name = "id", unique = true, updatable = false)
        private String id;

        private String eventName;
        private String eventDate;
        private String eventLocation;
        private String eventDescription;

        public String getId() {
            return id;
        }

        public String getName() {
            return eventName;
        }

        public String getDate() {
            return eventDate;
        }

        public String getLocation() {
            return eventLocation;
        }

        public String getDescription() {
            return eventDescription;
        }

        @Override
        public String toString() {
            return "Event id = " + id + ", name = " + eventName + ", date = " + eventDate +
                ", location = " + ", description = \n";
        }
    }