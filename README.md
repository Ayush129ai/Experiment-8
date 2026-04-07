# Role-Based Authorization in Spring Boot (Experiment 7)

## 🎯 Objective
This project demonstrates how to implement authentication and role-based authorization in a Spring Boot application using Spring Security. It features protected APIs restricted by specific user roles (`USER` and `ADMIN`).

## 🛠️ Tech Stack
- **Java 17**
- **Spring Boot 3.2.x** (Web, Security, Data JPA)
- **H2 Database** (In-memory)
- **Lombok**
- **Maven**

## 🧩 Features
1. **Authentication:** Users can authenticate via Basic Authentication (can be tested easily in Postman).
2. **Authorization:** API endpoints are protected using `SecurityFilterChain`.
3. **Database Integration:** Uses H2 in-memory database initialized with standard users.
4. **Password Encryption:** Uses `BCryptPasswordEncoder` to secure passwords.

## 📁 Project Structure
The project follows a standard Spring Boot layer architecture:
- `config/` - Security and configuration classes
- `controller/` - REST API endpoints
- `entity/` - JPA Entities (User)
- `repository/` - Database access repositories
- `service/` - Business logic and UserDetailsService

## 👤 Pre-configured Test Users
The database is pre-seeded with the following users (passwords are BCrypt encoded in the DB):

| Username | Password | Role |
| :--- | :--- | :--- |
| `user1` | `user123` | `ROLE_USER` |
| `admin1` | `admin123` | `ROLE_ADMIN` |

## 🚀 How to Run
Since this is a Maven project, use your IDE (VS Code Spring Boot dashboard, IntelliJ, or Eclipse) to run the `Experiment7Application.java` main class.
The server will start on port `8080`.

## 🧪 Postman Testing Guide

### 1. Public Endpoint (No Authentication)
- **Method & URL:** `GET http://localhost:8080/api/public/hello`
- **Expected Result:** `200 OK`
```json
{
  "message": "This is a public endpoint"
}
```

### 2. User Endpoint Access (Requires USER or ADMIN)
- **Method & URL:** `GET http://localhost:8080/api/user/profile`
- **Auth:** Basic Auth -> Username: `user1`, Password: `user123`
- **Expected Result:** `200 OK`
```json
{
  "message": "Welcome, authenticated user"
}
```

### 3. Forbidden Access (USER trying to access ADMIN endpoint)
- **Method & URL:** `GET http://localhost:8080/api/admin/dashboard`
- **Auth:** Basic Auth -> Username: `user1`, Password: `user123`
- **Expected Result:** `403 Forbidden`

### 4. Admin Endpoint Access
- **Method & URL:** `GET http://localhost:8080/api/admin/dashboard`
- **Auth:** Basic Auth -> Username: `admin1`, Password: `admin123`
- **Expected Result:** `200 OK`
```json
{
  "message": "Welcome, admin"
}
```

### 5. Unauthorized Access (Accessing secured endpoint without credentials)
- **Method & URL:** `GET http://localhost:8080/api/user/profile`
- **Auth:** No Auth
- **Expected Result:** `401 Unauthorized`

## 📸 Screenshots
*(Students: Place your Postman testing screenshots in the `screenshots/` directory at the root of the project, covering the scenarios outlined above).*
- `screenshots/01-login-success.png`
- `screenshots/02-user-endpoint-success.png`
- `screenshots/03-admin-endpoint-success.png`
- `screenshots/04-access-denied.png`
