# 🛍️ NovaStore - Modern E-Commerce Web Application

**NovaStore** is a high-performance, responsive e-commerce application designed with a sleek luxury theme, smooth animations, comprehensive shopping features, and full compliance with **Google AdSense** and international privacy guidelines (GDPR/CCPA).

---

## 📌 Table of Contents
1. [Project Overview](#-project-overview)
2. [Technology Stack](#-technology-stack)
3. [Architecture & Backend Status](#-architecture--backend-status)
4. [System Requirements](#-system-requirements)
5. [Key Features & Implemented Pages](#-key-features--implemented-pages)
6. [AdSense & Legal Compliance](#-adsense--legal-compliance)
7. [Installation & Setup](#-installation--setup)
8. [Project Structure](#-project-structure)
9. [Project Progress Summary](#-project-progress-summary)

---

## 🛍️ Project Overview

NovaStore provides an intuitive online shopping platform featuring a modern dark/light luxury visual style, real-time product filtering, quick view popups, wishlist management, cart calculation with free shipping incentives, multi-step checkout, order history tracking, and legal policy pages formatted for **Google AdSense approval**.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Frontend library for building UI components |
| **TypeScript** | Type-safe programming language |
| **Vite 6** | Next-generation frontend build tool and development server |
| **Tailwind CSS v4** | Utility-first styling framework |
| **Lucide React** | High-quality icon set for UI elements |
| **Motion** | Fluid animations and page transitions |
| **Express & Node.js** | Available server capability for API routing & production builds |
| **@google/genai** | Server-side Gemini AI integration support |

---

## 🏗️ Architecture & Backend Status

### Does it have a Backend?
* **Current State**: NovaStore operates as a **Client-Side Single Page Application (SPA)** with persistent state managed via **React Context (`StoreContext`)** and **`localStorage`**. User credentials, active cart items, wishlist records, user preferences, and order history persist across sessions.
* **Server Readiness**: An **Express.js** backend configuration (`express`, `@google/genai`, `dotenv`) is prepared in `package.json` for seamless API route expansion or database integration (e.g., Firestore or PostgreSQL) whenever needed.

---

## 📋 System Requirements

To run and build this project locally, ensure your environment meets the following requirements:

* **Node.js**: Version 18.0.0 or higher
* **npm**: Version 9.0.0 or higher
* **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge) with JavaScript enabled
* **Port**: Runs by default on port `3000`

---

## ✨ Key Features & Implemented Pages

### 1. 🏠 Core Shopping Experience
* **Home Page (`/src/pages/HomePage.tsx`)**: Hero banner carousel, category showcases, flash sale timers, featured products, and customer testimonials.
* **Shop Page (`/src/pages/ShopPage.tsx`)**: Product browsing with search bar, category filtering, price range slider, star rating filters, sorting (price low-high, high-low, rating), and grid/list view toggles.
* **Product Detail Page (`/src/pages/ProductDetailPage.tsx`)**: Image gallery, stock indicators, size/color selectors, detailed specifications, customer reviews, and related product recommendations.
* **Cart Page (`/src/pages/CartPage.tsx`)**: Quantity modifiers, coupon application system, dynamic free shipping progress bar, tax calculator, and order summary.
* **Checkout Page (`/src/pages/CheckoutPage.tsx`)**: Multi-step checkout with address forms, shipping methods, payment options (Credit Card, UPI, PayPal), order placement, and immediate order summary confirmation.
* **Order History Page (`/src/pages/OrdersPage.tsx`)**: Real-time order status tracking (Processing, Shipped, Delivered), itemized cost breakdowns, and delivery address verification.
* **Wishlist Page (`/src/pages/WishlistPage.tsx`)**: Saved favorite products grid with one-click "Move to Cart" options.

### 2. 🔑 User Account & Authentication
* **Login Page (`/src/pages/LoginPage.tsx`)**: User sign-in interface.
* **Register Page (`/src/pages/RegisterPage.tsx`)**: New account registration form.
* **Forgot Password Page (`/src/pages/ForgotPasswordPage.tsx`)**: Account recovery request flow.

### 3. ℹ️ Support & Information Pages
* **About Us Page (`/src/pages/AboutPage.tsx`)**: Brand story, core values, quality statistics, and leadership team overview.
* **Contact Us Page (`/src/pages/ContactPage.tsx`)**: Interactive support contact form, store locations, and business hours.
* **Help Center & FAQ (`/src/pages/FAQPage.tsx`)**: Categorized accordion FAQs (Shipping, Payment, Account, Returns).

---

## 📜 AdSense & Legal Compliance

NovaStore includes required legal policy pages structured specifically to fulfill **Google AdSense Publisher Requirements** and international privacy laws:

* **🔒 Privacy Policy Page (`/src/pages/PrivacyPolicyPage.tsx`)**: Outlines data collection, GDPR/CCPA user rights, data protection policies, and explicit disclosures regarding **Google AdSense DART cookies** and third-party ad networks.
* **⚖️ Terms & Conditions Page (`/src/pages/TermsPage.tsx`)**: Governs website usage, intellectual property, user conduct, product pricing accuracy, and purchase contracts.
* **📦 Return & Refund Policy Page (`/src/pages/ReturnRefundPage.tsx`)**: Details the 30-day money-back guarantee, non-returnable categories, exchange policies, and a visual 4-step return process.
* **⚠️ Disclaimer Page (`/src/pages/DisclaimerPage.tsx`)**: Legal notices regarding automated Google AdSense advertisements, affiliate links disclosures, and product specification accuracy.
* **🍪 Cookie & Privacy Consent Banner (`/src/components/common/CookieNotice.tsx`)**: Global cookie acceptance notification banner linking directly to the Privacy Policy.

---

## 🚀 Installation & Setup

Follow these steps to set up the application locally:

```bash
# 1. Clone or extract the project workspace
cd novastore

# 2. Dependencies are managed via package.json
# Run development server (runs on port 3000)
npm run dev

# 3. Type-check / Lint the project
npm run lint

# 4. Build for production
npm run build
```

---

## 📁 Project Structure

```text
├── metadata.json                 # Application name & metadata
├── package.json                  # Dependencies & scripts
├── README.md                     # Project documentation
├── index.html                    # HTML entry point
├── src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Main router and layout wrapper
│   ├── types.ts                  # Shared TypeScript interfaces & types
│   ├── index.css                 # Global CSS and Tailwind CSS setup
│   ├── context/
│   │   └── StoreContext.tsx      # Global state (Cart, Wishlist, User, Orders, Theme)
│   ├── data/
│   │   └── products.ts           # Product catalog data
│   ├── components/
│   │   ├── common/               # Modals, Breadcrumbs, StarRating, CookieNotice
│   │   └── layout/               # Header, Navigation, Footer
│   └── pages/                    # 17 complete application pages
│       ├── HomePage.tsx
│       ├── ShopPage.tsx
│       ├── ProductDetailPage.tsx
│       ├── CartPage.tsx
│       ├── CheckoutPage.tsx
│       ├── OrdersPage.tsx
│       ├── WishlistPage.tsx
│       ├── LoginPage.tsx
│       ├── RegisterPage.tsx
│       ├── ForgotPasswordPage.tsx
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       ├── FAQPage.tsx
│       ├── PrivacyPolicyPage.tsx
│       ├── TermsPage.tsx
│       ├── ReturnRefundPage.tsx
│       └── DisclaimerPage.tsx
```

---

## 📊 Project Progress Summary

- [x] **Core E-Commerce UI**: Completed with modern dark/light luxury theme.
- [x] **Product Navigation & Filtering**: Full search, category, and price range filters.
- [x] **Cart & Checkout Logic**: Functional cart calculations, tax, free shipping threshold, coupon code, and multi-step checkout.
- [x] **Order Tracking**: Implemented order placement and history viewer.
- [x] **User Management**: Auth screens for Login, Register, and Password Reset.
- [x] **Legal & AdSense Pages**: Added Privacy Policy, Terms & Conditions, Return & Refund Policy, and Disclaimer pages.
- [x] **Cookie Banner**: Added cookie consent pop-up with direct links to legal pages.
- [x] **Type Safety & Build Verification**: Zero TypeScript errors; `npm run lint` and `npm run build` pass successfully.

---
*Built with React, TypeScript, and Tailwind CSS.*
