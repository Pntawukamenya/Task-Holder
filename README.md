This is a ReadMe file for a simple todo list webapp that I created for a class assignment.

How to Run the Application Locally Prerequisites:

Make sure Node.js and Git are installed on your machine. 
Clone the Repository: git clone <repository_url>

Navigate to the Project Directory: cd <project_directory> Install Dependencies:

npm install Start the Application: npm start

Access the Application: Open a web browser and navigate to http://localhost:8081.

Building the Docker Image and Running a Container Build the Docker Image:

docker build -t yourusername/yourwebapp . Replace yourusername with your Docker Hub username and yourwebapp with the name you want to give to your Docker image.

Run a Container Using the Image:

docker run -d -p 8081:80 yourusername/yourwebapp This command will run the container in detached mode (-d) and map port 8081 of the container to port 8081 of your local machine (-p 8081:80).

Webapp link: https://pntawukamenya.github.io/

Assumptions or Decisions Made During Development Base Image: Chose the official Node.js image as the base image for simplicity and compatibility. 
Dependency Management: Used npm for managing dependencies as it's commonly used in the Node.js ecosystem. 
Exposing Port: Assumed the application runs on port 8081 by default, but this can be adjusted as needed. 
Start Command: Assumed the start command specified in package.json is npm start, which is common for Node.js applications.
