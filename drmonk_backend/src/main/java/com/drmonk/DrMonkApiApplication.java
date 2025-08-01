package com.drmonk;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DrMonkApiApplication {

  // Load environment variables from .env file
  static {
    Dotenv dotenv = Dotenv.load();
    dotenv.entries().forEach(entry ->
            System.setProperty(entry.getKey(), entry.getValue())
    );
  }

  public static void main(String[] args) {
    SpringApplication.run(DrMonkApiApplication.class, args);
  }

}
