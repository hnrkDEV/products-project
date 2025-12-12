# 🛒 Product Inventory Management System (TypeScript)

This project is a **console-based Product Inventory Management System** developed in **TypeScript**, applying **Object-Oriented Programming (OOP)** principles such as **inheritance, polymorphism, encapsulation, and abstraction**.

The system simulates the control of products in an online store, allowing the registration, management, and visualization of different product types.

---

## 📌 Project Overview

The goal of this project is to build an inventory control system where:

- A **base class (`Product`)** represents common attributes.
- Multiple **child classes** represent specific product types.
- A **controller** manages all CRUD operations.
- A **menu-driven interface** allows user interaction via the terminal.

This project was developed as part of an academic assignment focused on **OOP and TypeScript best practices**.

---

## 🧱 Project Structure

src/
├── controller/
│ └── ProductController.ts
│
├── models/
│ ├── Product.ts
│ ├── FoodProduct.ts
│ ├── ElectronicProduct.ts
│ ├── ClothingProduct.ts
│ └── BookProduct.ts
│
├── repository/
│ └── ProductInterface.ts
│
├── utils/
│ └── Colors.ts
│
├── Main.ts

---

## 🧩 Main Features

- ✅ Add products by type
- ✅ List all products
- ✅ List products by category
- ✅ Search products by name or ID
- ✅ Buy products (decrease stock)
- ✅ Restock products (increase stock)
- ✅ Update product information
- ✅ Delete products
- ✅ Automatic ID generation
- ✅ Colored terminal menu (optional)

---

## 🧠 Object-Oriented Concepts Applied

- **Inheritance**  
  All product types extend the base `Product` class.

- **Polymorphism**  
  Each product type overrides behavior using protected methods.

- **Encapsulation**  
  Attributes are private/protected and accessed via getters and setters.

- **Abstraction**  
  The `Product` class defines shared behavior.

- **Interface (Repository Pattern)**  
  CRUD contracts are defined using `ProductInterface`.

---

## 🛍️ Product Types Implemented

- **FoodProduct**

  - Expiration date
  - Weight
  - Perishable flag

- **ElectronicProduct**

  - Voltage
  - Warranty period

- **ClothingProduct**

  - Size
  - Color

- **BookProduct**
  - Author
  - Number of pages
