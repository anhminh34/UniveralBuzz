package com.sacstate.universalbuzz;

public class User{
    private long id;
    private String firstName, lastName, email, username, password, address, sex, birthdate, classYear;
    private boolean administrator;


    public user(long id, String firstName, String lastName, String email, String username, String password, String address, String sex, String birthdate, String classYear){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
        this.sex = sex;
        this.birthdate = birthdate;
        this.classYear = classYear;
    }

    public String toString(){
        return String.format("User[id=%d, firstName='%s', lastName='%s']", id, firstName, lastName);
    }
    // include setters and getters

}
