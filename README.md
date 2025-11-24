# 📚 SchoolNotes

<div align="center">

![MEAN Stack](https://skillicons.dev/icons?i=mongodb,express,angular,nodejs)

**A modern, full-stack note-taking application designed for students**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Deployment](#-deployment) • [Support](#-support)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

---

## 🎯 Overview

SchoolNotes is a comprehensive note-taking application built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js). It provides students with an intuitive platform to organize, manage, and search through their academic notes efficiently.

![SchoolNotes Screenshot](https://github.com/user-attachments/assets/466fca57-3a58-41c4-b645-ba91f6a5b81f)

---

## ✨ Features

### Core Functionality
- ✅ **Create Notes** - Quickly add new notes with rich content
- ✅ **Read Notes** - View your notes in a clean, readable format
- ✅ **Edit Notes** - Update and modify existing notes seamlessly
- ✅ **Delete Notes** - Remove notes you no longer need
- ✅ **Categorize Notes** - Organize notes by subjects and categories
- ✅ **Search Notes** - Find notes instantly with powerful search functionality
- ✅ **Category Management** - Add, edit, and customize categories

### Additional Highlights
- 📱 **Mobile-Responsive Design** - Access your notes from any device
- 🚀 **High Performance** - Optimized for fast loading and smooth interactions
- 🔍 **Advanced Search** - Lightning-fast note searching capabilities
- 📊 **Scalable Architecture** - Built with MongoDB for efficient data management
- 🎨 **Modern UI/UX** - Clean and intuitive user interface

---

## 🛠 Tech Stack

This project is built using the MEAN stack:

- **[MongoDB](https://www.mongodb.com)** - NoSQL database for data storage
- **[Express.js](https://expressjs.com)** - Web application framework for Node.js
- **[Angular](https://angular.dev)** - Front-end framework for building user interfaces
- **[Node.js](https://nodejs.org)** - JavaScript runtime environment

---

## 📁 Project Structure

```
school-notes-angular/
├── client/                 # Angular front-end application
│   ├── src/
│   │   ├── app/
│   │   │   ├── comps/      # Angular components
│   │   │   ├── core/       # Services, interfaces, pipes
│   │   │   └── ...
│   │   └── ...
│   └── package.json
├── server/                 # Express.js back-end API
│   ├── db/                # Database connection
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── package.json           # Root package configuration
```

### Architecture Overview

- **Client**: The Angular front-end application handles user interactions and displays the UI
- **Server**: The Express.js REST API manages data operations and business logic
- **Database**: MongoDB stores all notes, categories, and user data

> **Note**: Both client and server must run simultaneously for the application to function properly. While they can run concurrently during development, they should be deployed separately in production for optimal performance.

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | 18.x or higher | [Download Node.js](https://nodejs.org/en) |
| **Git** | Latest | [Download Git](https://git-scm.com/downloads) |
| **MongoDB** | (Optional for local) | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) |

### Setup Instructions

#### Step 1: Clone the Repository

```bash
git clone https://github.com/davismiler/school-notes-angular.git
cd school-notes-angular
```

#### Step 2: Set Up MongoDB

1. Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (follow [this tutorial](https://youtu.be/VkXvVOb99g0) if needed)
3. Get your MongoDB connection string

#### Step 3: Configure Environment Variables

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a `.env` file (if `.example.env` exists, rename it):
   ```bash
   # Windows
   copy .example.env .env
   
   # Linux/Mac
   cp .example.env .env
   ```

3. Open the `.env` file and add your MongoDB connection string:
   ```env
   MDB_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&appName=SchoolNotes
   ```
   
   > Replace `username`, `password`, and `cluster` with your actual MongoDB Atlas credentials.

#### Step 4: Install Dependencies

From the root directory, run:

```bash
npm run install:everything
```

This will install dependencies for both client and server.

#### Step 5: Start the Application

```bash
npm start
```

This command will:
- Install all dependencies (if not already installed)
- Start the Express.js server
- Start the Angular development server

> ⏱️ **Note**: The initial setup may take 5-15 minutes depending on your internet connection.

#### Step 6: Access the Application

Once both servers are running, you'll see output in your terminal. The Angular app will typically be available at:

```
http://localhost:4200
```

Open this URL in your web browser to start using SchoolNotes!

#### Stopping the Application

Press `CTRL + C` in the terminal to stop both servers.

---

## 💻 Usage

### Getting Started

1. **Create Your First Note**: Click the "New Note" button to create a note
2. **Organize by Category**: Assign notes to categories for better organization
3. **Search Notes**: Use the search functionality to quickly find specific notes
4. **Manage Categories**: Add or edit categories through the category settings

### Video Tutorial

For a visual walkthrough of the application, check out this tutorial:

[📹 Watch the Video Tutorial](https://youtu.be/m-1DHXa-0FI)

---

## 🌐 Deployment

### Production Deployment Guide

For production deployment, the client and server should be hosted separately for better performance and scalability.

#### Deploying the Client (Angular)

1. **Build the Application**:
   ```bash
   cd client
   ng build --configuration production
   ```
   
   This creates an optimized build in the `dist/` directory.

2. **Deploy the Build**:
   - Upload the contents of `client/dist/` to your web hosting service
   - Popular options: [Vercel](https://vercel.com), [Netlify](https://netlify.com), [GitHub Pages](https://pages.github.com), or any static hosting service

3. **Configure API Endpoint**:
   - Update the API base URL in your Angular environment files to point to your production server

#### Deploying the Server (Express.js)

1. **Set Up Environment Variables**:
   - Ensure your production `.env` file contains the correct MongoDB connection string
   - Add any other required environment variables

2. **Deploy Using PM2** (Recommended):
   ```bash
   cd server
   npm install -g pm2
   pm2 start server.js --name school-notes-api
   pm2 save
   pm2 startup
   ```

3. **Alternative Deployment Options**:
   - **Heroku**: Use the Heroku CLI and Git
   - **DigitalOcean**: Use App Platform or Droplets
   - **AWS**: Use EC2 or Elastic Beanstalk
   - **Railway**: Simple Node.js deployment platform

4. **Configure CORS**:
   - Update CORS settings in `server.js` to allow requests from your client domain

#### Database Configuration

- Use [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) for managed database hosting
- Ensure your database connection string is secure and uses proper authentication
- Configure IP whitelist in MongoDB Atlas to allow connections from your server

#### Security Checklist

- ✅ Use environment variables for sensitive data
- ✅ Enable HTTPS for both client and server
- ✅ Configure proper CORS policies
- ✅ Use MongoDB authentication
- ✅ Set up proper error handling and logging
- ✅ Implement rate limiting (if needed)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📞 Support

If you encounter any issues or have questions:

- 🐛 **Report Bugs**: Open an issue on [GitHub](https://github.com/davismiler/school-notes-angular/issues)
- 💬 **Get Help**: Contact me via [GitHub](https://github.com/davismiler)
- 📖 **Documentation**: Check the code comments and inline documentation

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

- This project was inspired by [CS50x](https://cs50.harvard.edu/x/2024/)
- Built with the MEAN stack technologies
- Thanks to all contributors and users of SchoolNotes

---

<div align="center">

**Made with ❤️ by [davismiler](https://github.com/davismiler)**

⭐ Star this repo if you find it helpful!

</div>
