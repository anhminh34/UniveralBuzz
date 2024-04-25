package com.sacstate.universalbuzz;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "User")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(NON_DEFAULT)
public class UserInfo {
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
