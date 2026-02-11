🛍️ FakeStore React App

A responsive e‑commerce frontend built with React, React‑Bootstrap, and the FakeStore API, featuring product listing, product details, add/update/delete workflows, and a clean UI with carousel banners.

ERDiagram

    Category {
        string name PK
    }

    Product {
        int id PK
        string title
        float price
        string description
        string category FK
        string image
    }

    Rating {
        float rate
        int count
    }

    Category ||--o{ Product : "contains"
    Product ||--|| Rating : "has"

Relationship Summary
Category → Product: One‑to‑Many
A category contains many products

Product → Rating: One‑to‑One
Each product has a single rating object

Product contains all core fields used in your React components:
title
description
price
category
image

✨ Features
Browse all products with a responsive grid layout
View detailed product information with images, pricing, and category
Add new products using a controlled form
Update existing products with pre‑filled form fields
Delete products with confirmation modal
Navigation bar with routing to all pages
Carousel banner on the home page
Error handling, loading states, and success alerts

🛠️ Tech Stack
React (Hooks, Router)
React‑Bootstrap (UI components)
Axios (API calls)
FakeStore API (https://fakestoreapi.com)
JavaScript / JSX

📂 Project Structure

<img width="232" height="219" alt="image" src="https://github.com/user-attachments/assets/6bc46a25-861d-4124-b2db-be466d077257" />

🚀 Getting Started
1. Clone the repository
git clone <your-repo-url>
cd fakestore-react-app

2. Install dependencies
npm install

3. Start the development server
npm run dev
Your app will be available at:
http://localhost:5173/

🔗 API Used
This project uses the public FakeStore API:


GET    https://fakestoreapi.com/products
GET    https://fakestoreapi.com/products/:id
POST   https://fakestoreapi.com/products
PUT    https://fakestoreapi.com/products/:id
DELETE https://fakestoreapi.com/products/:id

📸 Screens & Components
Home Page
Carousel banner
Special offer section

Product List
Fetches all products
Displays cards with images, titles, and prices

Product Details
Shows full product info
Add to cart counter
Update & Delete actions

Add Product
Controlled form
Success & error alerts

Edit Product
Pre‑filled form
Updates product via PUT request
