package com.finddr.security;

import com.finddr.entity.User;
import com.finddr.exception.ApiException;
import com.finddr.exception.ErrorCode;
import com.finddr.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

  private final UserRepository userDao;
  private final AuthUtil authUtil;

  private final HandlerExceptionResolver handlerExceptionResolver;

  @Override
  protected void doFilterInternal(HttpServletRequest request,
                                  @NotNull HttpServletResponse response,
                                  @NotNull FilterChain filterChain) throws ServletException, IOException {

    log.info("Incoming request: {}", request.getRequestURI());

    final String authHeader = request.getHeader("Authorization");
    String token;
    Long userId = null;

    try {
      // 1. Extract token
      if (authHeader != null && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      } else {
        log.debug("No valid Authorization header found");
        filterChain.doFilter(request, response);
        return;
      }

      // 2. Parse token
      if (authUtil.isTokenExpired(token)) {
        throw new ApiException(ErrorCode.INVALID_TOKEN, "Invalid or tampered token", HttpStatus.UNAUTHORIZED);
      }
      userId = authUtil.getUserId(token);

      // 3. Authenticate if not already
      if (userId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        User user = userDao.findById(userId)
                .orElseThrow(() -> new ApiException(ErrorCode.USER_NOT_FOUND, "User not found", HttpStatus.UNAUTHORIZED));

        if (!user.isActive()) {
          throw new ApiException(ErrorCode.USER_INACTIVE, "User is inactive", HttpStatus.UNAUTHORIZED);
        }

        CustomUserDetails userDetails = new CustomUserDetails(user);
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(user, null, userDetails.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authToken);
      }

    } catch (Exception ex) {
      handlerExceptionResolver.resolveException(request, response, null, ex);
      return;
    }

    // 4. Continue the filter chain
    filterChain.doFilter(request, response);
  }
}
