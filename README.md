<h1 align=center>SchoolNotes</h1>
<p align="center">
  <a href="https://hansana.is-a.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,express,angular,nodejs" alt="MEAN Stack Technologies" />
  </a>
</p>

<h3 align="center">A Simple Note-Taking Application for Students</h3>

![SchoolNotes Screenshot](https://github.com/user-attachments/assets/466fca57-3a58-41c4-b645-ba91f6a5b81f)

## Features
With SchoolNotes, you can:
- Create notes
- Read notes
- Edit notes
- Delete notes
- Categorize notes
- Search notes
- Add new categories
- Edit category settings

Additional highlights:
- Mobile-friendly design
- Scalability with a MongoDB database
- Super-fast note searching
- Faster loading times

## How to Use
Watch this quick video tutorial to see how to use SchoolNotes:
[Watch the video](https://youtu.be/m-1DHXa-0FI)

### Project Structure
The project folder consists of two main directories:

- **`client`**: The front-end application built using [Angular](https://angular.dev/).
- **`server`**: The back-end REST API built with [Express.js](https://expressjs.com/), [Node.js](https://nodejs.org/en), and [MongoDB](https://mongodb.com/). The server uses the MongoDB native driver for efficient database operations.

The `server` acts as the REST API for the `client`. For the application to function properly, both the `client` and `server` need to run simultaneously. While a concurrent package is used for local development convenience, it is important to host each part separately in a production environment for better performance and scalability. Check out the [How to Host in Production](#how-to-host-this-on-production-environment) section for detailed guidance.

## How to Run It Locally
Follow these steps to set up and run the application on your computer:

### Prerequisites
1. Install the following software:
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/en)
   - [Mongosh](https://www.mongodb.com/try/download/shell)

2. Create a free MongoDB Cluster by following this tutorial:  
   [How to Create a MongoDB Cluster](https://youtu.be/VkXvVOb99g0)

### Setup
1. Navigate to the `../school-note-angular/server` folder.
2. Rename the `.example.env` file to `.env`.
3. Update the `MDB_URL` field in the `.env` file with your MongoDB URI. Example:

   ```env
   MDB_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&appName=yourAppName
   ```

### Run in on your computer
1. Open your terminal and execute the following commands (this process may take 5-15 minutes):
   ```bash
   git clone https://github.com/DevHanza/school-notes-angular.git
   cd school-notes-angular
   npm run start
   ```
2. Once the setup is complete, a link will appear in the terminal. Open this link in your browser to use the application.
3. To stop the application, press `CTRL + C` in the terminal.
4. Done! ✅

## How to Host This on Production Environment
To host SchoolNotes in a production environment, follow these steps:

1. **Host the Client**:
   - Build the Angular application using the command:
     ```bash
     cd client
     ng build
     ```
   - Serve the built files using a web server like Nginx or Apache.

2. **Host the Server**:
   - Use a Node.js process manager like PM2 to manage the server:
     ```bash
     cd server
     pm2 start server.js
     ```
   - Ensure the server is accessible via a public IP or domain name.

3. **Database Configuration**:
   - Use a managed MongoDB service like [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) for scalable and secure database hosting.

4. **Environment Variables**:
   - Securely configure the server's environment variables (e.g., `MDB_URL`).


## Need Help?
If you encounter any issues, feel free to contact me on [LinkedIn](https://www.linkedin.com/in/devhanza/).

---

SchoolNotes is built using the MEAN stack:
- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Node.js](https://nodejs.org)

### Inspiration
This project was inspired by [CS50x](https://cs50.harvard.edu/x/2024/).
