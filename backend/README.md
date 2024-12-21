
# User Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It requires the user's full name, email, and password.

## Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
    - `firstname`(string, required): A string with at least 3 characters.
    - `lastname` (string, optional): A string with at least 3 characters.
- `email`(string, required): A valid email address.
- `password` : A string with at least 3 characters.

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Response
The response will be a JSON object containing the authentication token and the user details.

### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

## Status Codes
- `201 Created`: The user was successfully registered.
- `400 Bad Request`: The request was invalid or missing required fields.
- `500 Internal Server Error`: An error occurred on the server.

## Validation Errors
If the request body does not meet the validation requirements, the response will include an array of error messages.

### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "First name must be at least 3 characters",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Last name must be at least 3 characters",
            "param": "fullname.lastname",
            "location": "body"
        }
    ]
}
```
# User Login Endpoint Documentation

#  `POST  /users/login` Endpoint

## Description
The `/users/login` endpoint allows users to log in to the application by providing their email and password. Upon successful authentication, the user receives a JSON Web Token (JWT) for session management.

---

## Endpoint

**URL:** `/users/login`  
**Method:** `POST`  
**Content-Type:** `application/json`  
**Authentication Required:** No (but returns a token for subsequent authenticated requests)

---

## Request Parameters

### Body Parameters
The following parameters must be included in the request body:

| Field       | Type   | Required | Description                              |
|-------------|--------|----------|------------------------------------------|
| `email`     | String | Yes      | The email address of the user. Must be valid. |
| `password`  | String | Yes      | The user's password. Must be at least 3 characters. |

### Example Request Body
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

---

## Response

### Successful Response
**Status Code:** `200 OK`  
**Description:** The user is successfully authenticated.  

**Example Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Error Responses
| Status Code | Description                               | Example Response                                                                                                                                                  |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `400 Bad Request` | Validation error for the input fields. | ```json {"errors": [{"msg": "Invalid Email"}]} ```                                                                                                     |
| `401 Unauthorized` | Invalid credentials provided.         | ```json {"message": "Invalid email or password"} ```                                                                                                     |
| `500 Internal Server Error` | Server encountered an issue.         | ```json {"message": "An error occurred. Please try again later."} ```                                                                                       |

---

## Validation Rules
- `email`: Must be a valid email address.
- `password`: Must be at least 3 characters long.

---

## Implementation

The endpoint is implemented in the following files:
- **Route Definition:** [`user.routes.js`](#7)  
- **Model Schema:** [`user.model.js`](#8)

---

## Notes
- The JWT returned should be included in the `Authorization` header (e.g., `Bearer <token>`) for accessing protected resources.
- The endpoint checks both email format and password length before processing the login.

