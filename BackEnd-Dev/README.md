# User Management Backend API Documentation

This API documentation provides information about the endpoints, request/response formats, and error handling for the User Management Backend system.

**Table of Contents**
1. User Registration
2. User Login

**Dotenv file**
Create a .env file in the root of your project directory.

Add your environment-specific configurations in the .env file using the KEY=VALUE format. For example:

PORT=3000
HOSTNAME=localhost
MONGO_DATABASE=mongodb://localhost:27017/myapp

# User Registration
Endpoint

```Javascript
POST /user/register
```
**Request**
The request body should contain the following parameters:

. name (string, required): The name of the user.
. userId (string, required, unique): The User id of the user.
. email (string, required, unique): The email address of the user.
. password (string, required): The password for the user's account.

**Example Request:**

POST /user/register
Content-Type: application/json

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "secretpassword"
}
```
**Response**
Example Response:
```json
{
    "Success": true,
    "message": "User Registered Successfully"
}
```

**Error Handling**
. If any of the required parameters are missing or invalid: All input fields are required.
. If the email address is already registered: User already exist.

Example Error Response:

400 Bad Request
Content-Type: application/json

```json
{
    "Success": false,
    "message": "All input fields are required"
}
```

# User Login

**Endpoint**

```javascript
POST /user/login
```

**Request**
The request body should contain the following parameters:

. email (string, required): The email address of the user.
. password (string, required): The password for the user's account.

**Example Request:**

POST /user/login
Content-Type: application/json

```json
{
  "email": "kartikSahu@gmail.com",
  "password": "helloWorld"
}
```
**Response**
**Example Response:**

Status: 200 OK
Content-Type: application/json

```json
{
    "success": true,
    "message": "User Login Successfully"
}
```

**Error Handling**

.If any of the required parameters are missing or invalid: All input fields are required. Status:400 Bad Request.
.If the provided email is incorrect: No account associate with this email.
.If the provided password is incorrect: Password is wrong. Status:401 Unauthorized.

**Example Error Response:**

401 Unauthorized
Content-Type: application/json

```json
{
    "success": false,
    "message": "No account associate with this email"
}
```

**Conclusion**
This API documentation provides an overview of the user management backend system's endpoints, request/response formats, and error handling.