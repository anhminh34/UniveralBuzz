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
}