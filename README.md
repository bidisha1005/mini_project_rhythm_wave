# 🎵 Rhythm Wave 🎵  
### 3rd Semester Mini Project

Rhythm Wave is a full-stack web application built with React (Frontend) and Node.js (Backend) as part of our **3rd Semester Mini Project**. It allows users to explore and interact with music.

## Project Structure
```
mini_project_rhythm_wave/ (Root Directory)
├── rhythm-wave-test/  # Frontend (React)
├── backend/           # Backend (Node.js)
│   ├── config/        # Database Configurations
│   ├── controllers/   # API Controllers
│   ├── middleware/    # Authentication Middleware
│   ├── models/        # Database Models
│   ├── routes/        # API Routes
│   ├── .env           # Environment Variables (Not Tracked)
│   ├── app.js         # Entry Point
│   ├── package.json   # Backend Dependencies
├── .gitignore         # Ignored Files
├── README.md          # Project Documentation
```

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mini_project_rhythm_wave.git
   cd mini_project_rhythm_wave
   ```

2. **Install dependencies:**
   - **Backend:**
     ```bash
     cd backend
     npm install
     ```
   - **Frontend:**
     ```bash
     cd ../rhythm-wave-test
     npm install
     ```

3. **Run the application:**
   - **Backend:**
     ```bash
     cd backend
     npx nodemon app.js
     ```
   - **Frontend: Open a new terminal and run**
     ```bash
     cd rhythm-wave-test
     npm start
     ```

## Features
User authentication (Login/Register)  
Secure API with JWT authentication  
Responsive UI built with React  
CRUD operations via REST API  

