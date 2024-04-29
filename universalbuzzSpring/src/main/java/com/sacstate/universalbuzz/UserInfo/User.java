package com.sacstate.universalbuzz.UserInfo;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_DEFAULT;

@Entity
@Table(name = "User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(NON_DEFAULT)
public class User {
    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, updatable = false)
    private String ID;
    private String firstName;
    private String lastName;
    private String email;
    private String birthDate;
    private String gender;
    private String username;
    private String password;

}
