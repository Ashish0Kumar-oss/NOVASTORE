# 🛍️ NovaStore - Project Documentation

*Note: For the primary formatted markdown file, see `README.md`.*

---

## 📌 Project Summary

NovaStore is a responsive luxury e-commerce application built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. It incorporates complete shopping workflows, user authentication interfaces, order management, and dedicated legal compliance pages required for **Google AdSense approval**.

---

## 🛠️ Technology Stack
* **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Motion
* **Backend Status**: Client-side SPA with `localStorage` state persistence. Express server capabilities and `@google/genai` integration are pre-configured in `package.json` for server-side expansion.

---

## 📋 System Requirements
* Node.js v18.0.0+
* npm v9.0.0+
* Port: 3000

---

## ✨ Implemented Pages (17 Total)
1. **HomePage**: Hero carousel, flash sale timer, collections, testimonials.
2. **ShopPage**: Search, category filters, price range slider, star rating, sorting, view toggle.
3. **ProductDetailPage**: Image gallery, variant selection, reviews, related products.
4. **CartPage**: Dynamic cart calculations, coupons, free shipping progress bar, tax breakdown.
5. **CheckoutPage**: Shipping form, payment gateway selection (Card, UPI, PayPal), place order.
6. **OrdersPage**: Order status tracking, itemized details, delivery details.
7. **WishlistPage**: Saved favorites grid with quick add-to-cart.
8. **LoginPage**: User login interface.
9. **RegisterPage**: New account registration.
10. **ForgotPasswordPage**: Password recovery workflow.
11. **AboutPage**: Brand narrative, statistics, team showcase.
12. **ContactPage**: Support contact form, address, business hours.
13. **FAQPage**: Categorized interactive FAQ accordions.
14. **PrivacyPolicyPage**: GDPR, CCPA, and Google AdSense DART cookies disclosure.
15. **TermsPage**: Terms & Conditions of service and intellectual property rules.
16. **ReturnRefundPage**: 30-day return policy breakdown & step-by-step process.
17. **DisclaimerPage**: AdSense advertising notice, affiliate disclosure, and product warranties.

---

## 🚀 How to Run
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run lint     # Check TypeScript compilation
npm run build    # Build production bundle in dist/
```
