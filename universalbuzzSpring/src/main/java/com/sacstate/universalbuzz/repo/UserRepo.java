package com.sacstate.universalbuzz.repo;

import com.sacstate.universalbuzz.Login.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserInfo, String>{
    Optional<UserInfo> findbyId(String id);
}

