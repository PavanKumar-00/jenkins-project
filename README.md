# Notes App

This is a simple Node.js Notes App with Docker support.

## Features
- Add, view, and delete notes via API endpoints.
- Runs on port 4000 inside Docker.
- Includes basic test script using Axios.

## Docker Instructions

### Build the Docker Image

docker build -t notes-app:latest .

### Run the Container

docker run -p 4000:4000 notes-app:latest


### Access the App
- Open browser or use Postman: `http://localhost:4000/notes`

### Run Tests

npm install
npm test

