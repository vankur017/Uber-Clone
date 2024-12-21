
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
- `password` (string, required): A string with at least 3 characters.

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


```