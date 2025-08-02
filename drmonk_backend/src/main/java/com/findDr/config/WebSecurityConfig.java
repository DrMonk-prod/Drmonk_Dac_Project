package com.findDr.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.HandlerExceptionResolver;

import static com.findDr.entity.type.RoleType.*;

@Configuration
public class WebSecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, HandlerExceptionResolver handlerExceptionResolver) throws Exception {
    httpSecurity
            .csrf(csrfConfig -> csrfConfig.disable())
            .sessionManagement(sessionConfig ->
                    sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth->auth
                    .requestMatchers("/public/**","/auth/**","/v3/api-docs/**","/swagger-ui/**").permitAll()
                    .requestMatchers("/admin/**").hasRole(ADMIN.name())
                    .requestMatchers("/doctors/**").hasAnyRole(DOCTOR.name(), ADMIN.name())
                    .anyRequest().authenticated()
            )
//            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(exceptionHandlingConfigurer ->
                    exceptionHandlingConfigurer.accessDeniedHandler((request, response, accessDeniedException) -> handlerExceptionResolver.resolveException(request, response, null, accessDeniedException)));

    return httpSecurity.build();
  }
}
