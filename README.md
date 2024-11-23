# User Service

This is a user service application built with Node.js, Express, and MongoDB. It provides user registration and login functionalities, and it uses JWT for authentication. The application is containerized using Docker and Docker Compose.

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual MongoDB credentials and database name.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mustafaangi/user-service.git
   cd user-service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Using Node.js

Start the server:

```bash
npm run dev
```

The server will be running on `http://localhost:5001`.

### Using Docker

Build and run the containers:

```bash
docker-compose up --build
```

The server will be running on `http://localhost:5001`.

## API Endpoints

### User Registration

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### User Login

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

## Running Tests

Run the tests:

```bash
npm test
```

## Troubleshooting

By following these steps and using the provided information, you should be able to successfully run and test your user service application. If you encounter any further issues, please provide specific error messages or logs for additional assistance.
```
