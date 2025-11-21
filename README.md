# 🚗 KR MOTORS

> A modern, full-stack vehicle parts e-commerce platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)

## 📋 Overview

KR MOTORS is a comprehensive vehicle parts website that provides users with an intuitive platform to browse, search, and purchase automotive parts. Built with modern web technologies, it features a robust backend API and a responsive React frontend.

## ✨ Features

- 🔍 **Advanced Search**: Find parts quickly with intelligent search functionality
- 🛒 **Shopping Cart**: Seamless cart management and checkout process
- 📦 **Order Management**: Track and manage orders efficiently
- 👤 **User Authentication**: Secure user registration and login
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with performance optimization in mind
- 🔐 **Admin Panel**: Comprehensive admin dashboard for inventory management

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (assumed from structure)
- **Architecture**: MVC Pattern

### Frontend
- **Framework**: React 18.x
- **Styling**: CSS3
- **Build Tool**: Vite/Create React App
- **State Management**: React Hooks

## 📁 Project Structure

```
KR-MOTORS/
├── BE/                          # Backend
│   ├── controllers/             # Route controllers
│   │   ├── cartControllers.js
│   │   ├── orderControllers.js
│   │   ├── productControllers.js
│   │   └── userControllers.js
│   ├── models/                  # Database models
│   │   ├── cart.js
│   │   ├── order.js
│   │   ├── otp.js
│   │   ├── product.js
│   │   └── user.js
│   ├── routers/                 # API routes
│   │   ├── cartRouter.js
│   │   ├── orderRouter.js
│   │   ├── productRouter.js
│   │   └── userRouter.js
│   ├── .env                     # Environment variables
│   ├── index.js                 # Server entry point
│   └── package.json
│
└── FE/                          # Frontend
    ├── src/
    │   ├── assets/              # Static assets
    │   │   └── components/
    │   ├── Pages/               # Page components
    │   │   ├── admin/           # Admin pages
    │   │   ├── customer/        # Customer pages
    │   │   ├── adminPage.jsx
    │   │   ├── homePage.jsx
    │   │   ├── loginPage.jsx
    │   │   └── registerPage.jsx
    │   ├── utils/               # Utility functions
    │   ├── App.jsx              # Main App component
    │   ├── App.css              # Global styles
    │   ├── main.jsx             # React entry point
    │   └── index.css
    ├── public/
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kr-motors.git
   cd kr-motors
   ```

2. **Backend Setup**
   ```bash
   cd BE
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `BE` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Frontend Setup**
   ```bash
   cd ../FE
   npm install
   ```

### Running the Application

#### Backend Server
```bash
cd BE
node index.js
```
The backend server will start on `http://localhost:5000` (or your configured port)

#### Frontend Development Server
```bash
cd FE
npm start
```
The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration

Configure your backend settings in `BE/.env`:
- Database connection string
- JWT secret for authentication
- Server port
- Email service credentials (for OTP)

### Frontend Configuration

Update API endpoints in your frontend configuration to match your backend URL.

## 📡 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `POST /api/users/verify-otp` - OTP verification

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Orders
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (Admin)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

Kavindu Rathnayaka
