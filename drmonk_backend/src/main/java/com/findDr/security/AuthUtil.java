package com.findDr.security;

import com.findDr.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
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

}
