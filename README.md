# 🔐 React + NestJS Authentication App

A full-stack authentication system built using **React + TypeScript** on the frontend and **NestJS** on the backend.

This app allows users to register, log in, receive a JWT token, and access a protected home screen with their user details.

---

### ✅ Frontend (React + TypeScript + CSS)

- Login page with form validation
- Registration modal with user signup
- Protected route using `localStorage` + `React Router`
- Logout button
- Axios integration with token-based headers
- Clean responsive UI (pure CSS)

---

## 🔧 Installation

cd frontend
npm install
npm start

## Folder Structure

frontend/
├── components/
│ └── RegisterModal.tsx
├── pages/
│ ├── Login.tsx
│ └── Home.tsx
├── routes/
│ └── ProtectedRoute.tsx
├── services/
│ └── api.ts
├── styles/
│ ├── Login.css
│ ├── RegisterModal.css
│ └── Home.css

backend/
├── auth/
│ ├── auth.controller.ts
│ ├── auth.service.ts
│ ├── auth.module.ts
│ ├── jwt.strategy.ts
│ ├── user.entity.ts
│ └── dto/
├── app.module.ts
├── main.ts

# 🛡️ NestJS Auth API

This is a secure and modular **Authentication API** built using **NestJS**, featuring:

- 🔐 JWT-based authentication
- 🧾 User registration & login
- ✅ Input validation via DTOs
- 📦 TypeORM + In-memory SQLite (for dev/testing)
- 🧪 Auto-generated Swagger API docs

---

## 📁 Tech Stack

- **NestJS** – Progressive Node.js Framework
- **TypeORM** – ORM for DB operations
- **SQLite** – In-memory DB for dev/testing
- **JWT** – JSON Web Tokens for authentication
- **Bcrypt** – Password hashing
- **class-validator** – DTO-based validation
- **Swagger** – API documentation via `@nestjs/swagger`
- **@nestjs/config** – Environment variable handling

---

## 🔧 Installation

```bash
git clone https://github.com/your-username/nestjs-auth-api.git
cd nestjs-auth-api
npm install


🧠 Developer Notes
- Uses localStorage to persist JWT on the frontend.

- Axios interceptors attach token automatically.

- NestJS uses JwtStrategy to protect routes.

- DTOs ensure type-safe request validation.

- Swagger provides full API documentation.
```
