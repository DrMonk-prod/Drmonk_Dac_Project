package com.finddr.security;

import com.finddr.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepository userDao;

  @Autowired
  public CustomUserDetailsService(UserRepository userDao) {
    this.userDao = userDao;
  }


  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    return new CustomUserDetails(userDao.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email)));
  }
}
