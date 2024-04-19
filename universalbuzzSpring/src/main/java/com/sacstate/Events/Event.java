    package com.sacstate.universalbuzz;

    /* Events.java
    * Sets up the information to be stored for the events page
    * 
    * IN PROGRESS***
    */

    import jakarta.persistence.Entity;
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
        private String name;
        private String date;
        private String location;
    }