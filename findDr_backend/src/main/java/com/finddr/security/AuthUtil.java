package com.finddr.security;

import com.finddr.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
@Slf4j
public class AuthUtil {

  @Value("${jwt.secret}")
  private String jwtSecretKey;

  @Value("${jwt.expirationMs}")
  private long jwtExpirationMs;

  private SecretKey getJwtSecretKey() {
    return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
  }

  public String generateToken(User user) {
    return Jwts.builder()
            .setSubject(user.getEmail())
            .claim("userId", user.getId())
            .claim("role", user.getRole().name())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
            .signWith(getJwtSecretKey(), SignatureAlgorithm.HS256)
            .compact();
  }


  public Claims getAllClaims(String token) {
    return Jwts.parserBuilder()
            .setSigningKey(getJwtSecretKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
  }

  public String getEmail(String token) {
    return getAllClaims(token).getSubject();
  }

  public Long getUserId(String token) {
    return getAllClaims(token).get("userId", Long.class);
  }

  public String getRole(String token) {
    return getAllClaims(token).get("role", String.class);
  }

//  public boolean validateToken(String token, User user) {
//    try {
//      Claims claims = getAllClaims(token);
//
//      Long userId = claims.get("userId", Long.class);
//
//      return userId.equals(user.getId()) && !isTokenExpired(claims);
//    } catch (JwtException | IllegalArgumentException e) {
//      log.warn("Invalid JWT: " + e.getMessage());
//      return false;
//    }
//  }

  public boolean isTokenExpired(String token) {
    return getAllClaims(token).getExpiration().before(new Date());
  }
}
