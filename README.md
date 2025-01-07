# Product Store - MERN Stack Application

A full-stack web application for managing products with CRUD operations built using the MERN stack and Chakra UI.

## Features

- 📝 Create new products with name, price, and image URL
- 📋 View all products in a responsive grid layout
- ✏️ Update existing product details
- 🗑️ Delete products
- 🎨 Modern UI with Chakra UI components

## Tech Stack

### Frontend
- React.js
- Chakra UI
- React Router DOM
- Zustand (State Management)
- React Icons
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas Account
- npm or yarn

### Installation

1. Clone the repository
    ```bash
    git clone <repository-url>
    cd Fullstack_Product_Store
    ```

2. Install dependencies for backend
    ```bash
    npm i
    ```

3. Install dependencies for frontend
    ```bash
    cd frontend
    npm i
    ```

4. Create a .env file in the root directory with your MongoDB Atlas connection string
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

5. Start the backend server
    ```bash
    npm run dev
    ```

6. Start the frontend server
    ```bash
    cd frontend
    npm run dev
    ```

## API Endpoints

### Products
- GET /api/products - Get all products
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product
