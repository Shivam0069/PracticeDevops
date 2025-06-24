# Backend API Documentation

## Endpoints

### 1. Register User

- **URL:** `/users/register`
- **Method:** POST
- **Body Parameters:**
  - `userName` (string, required)
  - `email` (string, required)
  - `password` (string, required)
  - `dateOfBirth` (string, required)

### 2. User Login

- **URL:** `/users/login`
- **Method:** POST
- **Body Parameters:**
  - `email` (string, required)
  - `password` (string, required)

### 3. Get User Profile

- **URL:** `/users/profile`
- **Method:** GET
- **Description:** Returns user data. Authentication required.

### 4. User Logout

- **URL:** `/users/logout`
- **Method:** POST
- **Description:** Logs out the current user.

---

Update this file as you add more endpoints or features.
