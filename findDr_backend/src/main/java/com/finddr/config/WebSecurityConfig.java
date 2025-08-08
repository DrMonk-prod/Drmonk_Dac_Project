package com.finddr.config;

import com.finddr.security.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Configuration
@RequiredArgsConstructor
public class WebSecurityConfig {

  final JwtAuthFilter jwtAuthFilter;
  private final CorsConfigurationSource corsConfigurationSource;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, HandlerExceptionResolver handlerExceptionResolver) throws Exception {
    httpSecurity
            .cors(cors -> cors.configurationSource(corsConfigurationSource))
            .csrf(csrfConfig -> csrfConfig.disable())
            .sessionManagement(sessionConfig ->
                    sessionConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/public/**", "/auth/**", "/v3/api-docs/**", "/swagger-ui/**").permitAll()
                    .requestMatchers("/me/**").authenticated()
                    //.requestMatchers(HttpMethod.GET, "/patient/**").permitAll()
                    .requestMatchers("/**").permitAll()
                    //.requestMatchers("/admin/**").hasRole(ADMIN.name())
                    //.requestMatchers("/doctors/**").hasAnyRole(DOCTOR.name(), ADMIN.name())
                    .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(exceptionHandlingConfigurer ->
                    exceptionHandlingConfigurer.accessDeniedHandler((request, response, accessDeniedException) -> handlerExceptionResolver.resolveException(request, response, null, accessDeniedException)));

    return httpSecurity.build();
  }
}
