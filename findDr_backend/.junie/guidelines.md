# FindDr Backend Project Guidelines

## Project Overview

FindDr is a doctor appointment and clinic finding system that helps patients find doctors based on specialties, location, and availability. The backend is built using Spring Boot and provides RESTful APIs for the frontend application.

### Key Features

- User authentication and authorization with JWT
- Doctor profiles with specialties and ratings
- Clinic management with services and locations
- Doctor scheduling and appointment booking (in development)
- Review system for doctors and clinics

## Project Structure

The project follows a standard Spring Boot application structure:

```
src/main/java/com/finddr/
├── config/                 # Configuration classes
├── controller/             # REST API controllers
├── dto/                    # Data Transfer Objects
├── entity/                 # JPA entity classes
│   └── type/               # Enum types
├── exception/              # Exception handling
├── repository/             # Spring Data JPA repositories
├── security/               # Security configuration and JWT handling
└── FindDrApiApplication.java  # Main application class
```

### Key Components

1. **Entities**:
   - User: Base user entity with authentication details
   - Doctor: Doctor profile linked to a user
   - Clinic: Medical facility with location and services
   - Speciality: Medical specializations
   - DoctorSchedule: Doctor availability (in development)

2. **Security**:
   - JWT-based authentication
   - Role-based access control
   - Stateless session management

3. **APIs**:
   - Authentication endpoints (/auth/*)
   - Patient endpoints (/patient/*)
   - Doctor endpoints (in development)
   - Clinic endpoints (in development)

## Development Guidelines

### Building the Project

The project uses Maven for dependency management and building:

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

### Environment Setup

The application requires the following environment variables:
- `DB_USERNAME`: Database username (defaults to "root" if not provided)
- `DB_PASSWORD`: Database password
- `JWT_SECRET_KEY`: Secret key for JWT token generation

### Database

The application uses MySQL database. The connection details are configured in `application.properties`:
- Database name: findDr
- Default port: 3306
- Schema management: Hibernate auto-update

### Testing

When implementing new features or fixing bugs:
1. Write unit tests for new functionality
2. Run existing tests to ensure no regressions
3. Test API endpoints using Swagger UI (available at /swagger-ui/)

### Code Style

1. Follow standard Java naming conventions
2. Use Lombok annotations to reduce boilerplate code
3. Validate input using Jakarta Validation annotations
4. Document public APIs with appropriate comments
5. Follow RESTful API design principles

### Git Workflow

1. Create feature branches from the main branch
2. Use descriptive commit messages
3. Create pull requests for code review before merging
4. Keep commits focused on single logical changes

## Current Development Status

The application is in active development with the following components:
- User authentication: Complete
- Doctor and clinic entities: Complete
- Patient functionality: In progress
- Doctor scheduling: In progress
- Appointment booking: Planned

## API Documentation

API documentation is available through Swagger UI at `/swagger-ui/` when the application is running.