# 🤖 AGPT-AI (AI Learning Assistant - MERN Stack Project)

A full-stack AI Learning Assistant web application built using **MERN Stack (MongoDB, Express.js, React.js, Node.js)** with AI integration, authentication, quiz system, and protected routes.
it
It allows users to register and log in securely, and interact with an AI assistant through a chat interface to get instant responses to their queries.
---

## 🚀 Features

- 🔐 User Authentication (Register/Login with JWT)
- 🤖 AI Chat Assistant (Groq AI / Llama model integration)
- 🔒 Protected routes using JWT middleware
- 💾 MongoDB database integration
- ⚡ Real-time API communication (Axios)
- 🎯 Clean and responsive UI
- 📱 Mobile-friendly design 

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- CSS3 (Custom styling)
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js
- dotenv
- Groq SDK (AI API)

---

## 📌 Topics Covered

- MERN Stack Development
- Authentication (JWT + bcrypt)
- REST API Development
- Protected Routes (Middleware)
- React Hooks (useState, useEffect)
- React Router (Navigation)
- API Integration (Axios)
- AI Integration (LLM API)
- CRUD Operations
- MVC Architecture
- State Management in React
- Form Handling
- Error Handling

---

## 📂 Project Structure
```

MERN-Stack-Project-AGPT-AI/
│
├── frontend/
│ │
│ ├── src/
│ │ │
│ │ ├── components/
│ │ │ ├── ChatBox.jsx
│ │ │ └── Navbar.jsx
│ │ │
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Quiz.jsx
│ │ │
│ │ ├── services/
│ │ │ └── api.js
│ │ │
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ │
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js
│ └──.gitignore
│ 
│
├── backend/
│ │
│ ├── config/
│ │ └── db.js
│ │
│ ├── controllers/
│ │ ├── userController.js
│ │ ├── quizController.js
│ │ ├── promptController.js
│ │ └── protectedController.js
│ │
│ ├── middleware/
│ │ └── authMiddleware.js
│ │
│ ├── models/
│ │ ├── userModel.js
│ │ ├── quizModel.js
│ │ └── promptModel.js
│ │
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── quizRoutes.js
│ │ ├── promptRoutes.js
│ │ ├── protectedRoutes.js
│ │ └── aiRoutes.js
│ │
│ ├── server.js
│ ├── package.json
│ ├── package-lock.json
│ └── .gitignore

```
---

## ⚙️ Installation & Setup

### 1. Clone Repository
```
git clone https://github.com/godhaniyaarbham2000-spec/MERN-Stack-Project-AGPT-AI.git
```
### 2. Setup Backend
```
cd MERN-Stack-Project-AGPT-AI/backend
npm install
```
###  Run Backend
```
npm run dev
```
### Backend Runs On
```
http://localhost:5000
```
### 3. Setup Frontend
```
cd MERN-Stack-Project-AGPT-AI/frontend
npm install
```
### Run Frontend
```
npm run dev
```
### Frontend Runs ON
```
http://localhost:5173
```
---
### 1. 🔐 Environment Variables (.env)

### Backend.env
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```
### Frontend.env
```
VITE_API_URL=http://localhost:5000/api
```
---
## 💡 Usage

- Register a new account  
- Login to access dashboard  
- Ask AI questions in Dashboard  
- Access protected routes using JWT token  

---

## ⚠️ Notes

- Backend must run before frontend  
- MongoDB Atlas recommended for deployment  
- Never expose API keys in frontend  
- JWT token stored in localStorage  
- AI API calls are handled via backend for security  
- Ensure `.env` file is properly configured  

---

## 📸 Preview

- 🔐 Login & Register Authentication UI  
- 🤖 AI Chat Dashboard Interface  
- 🔒 Protected Routes (JWT based access)  
- 🎯 Clean and responsive UI design  
- ⚡ Fast API response integration  

---

## 🧠 Key Learning Points

- MERN Stack Architecture (Frontend + Backend separation)  
- JWT Authentication & Authorization  
- Password hashing using bcrypt.js  
- REST API development using Express.js  
- MongoDB CRUD operations with Mongoose  
- React Hooks (useState, useEffect)  
- React Router for navigation  
- Axios API integration  
- Middleware usage (auth protection)  
- AI API integration (Groq / LLM model)  
- MVC (Model-View-Controller) structure  

---

## 📌 Future Improvements

- 🧾 AI chat history UI  
- 📊 Quiz result scoring system  
- 📱 Fully responsive mobile UI  
- 🔔 Notifications system  
- ☁️ Deployment on Render + Vercel  
- 🎨 Better UI/UX with animations  

---

## 👨‍💻 Author

**Arbham Godhaniya**  
MERN Stack Developer 🚀
