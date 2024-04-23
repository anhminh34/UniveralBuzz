package com.sacstate.universalbuzz.service;
@Service
@Slf4j
@Transactional(rollbackOn=Exception.class)
@RequiredArgsConstructor
public class LoginService {
     private final UserRepo userRepo;

     public Page<UserInfo> getUsers(int page, int size) {
         return userRepo.findall(PageRequest.of(page,size, Sort.by("name")));
     }

     public UserInfo getUser(String id){
         return userRepo.findById(id).orElseThrow(()->new RuntimeException("Contact not found"));
     }

     public UserInfo createNewUser(Userinfo newUser){
         return userRepo.save(newUser);
     }

     public void deleteUser(UserInfo user){
         // assignment
     }
     
     public String uploadPhoto(String id, MulipartFile file)
}