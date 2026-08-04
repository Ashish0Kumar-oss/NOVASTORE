export type Category = 
  | 'All'
  | 'Electronics'
  | 'Fashion'
  | 'Shoes'
  | 'Watches'
  | 'Furniture'
  | 'Beauty'
  | 'Gaming'
  | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: string;
  description: string;
  specifications: Record<string, string>;
  price: number;
  originalPrice: number;
  discount: number; // percentage, e.g. 15 for 15% off
  rating: number; // e.g. 4.8
  reviews: number; // review count
  stock: number;
  image: string;
  gallery: string[];
  featured?: boolean;
  trending?: boolean;
  bestseller?: boolean;
  colors?: string[];
  sizes?: string[];
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt: string;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  shippingMethod: 'standard' | 'express' | 'overnight';
}

export interface PaymentInfo {
  method: 'card' | 'cod' | 'upi';
  cardNumber?: string;
  cardHolder?: string;
  expiry?: string;
  cvv?: string;
  upiId?: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  shipping: ShippingInfo;
  paymentMethod: string;
  subtotal: number;
  shippingFee: number;
  tax: number;
  discount: number;
  couponCode?: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  estimatedDelivery: string;
}

export interface FilterState {
  search: string;
  category: Category;
  brand: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  onSaleOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest' | 'bestseller';
}

export type PageView =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'wishlist'
  | 'about'
  | 'contact'
  | 'faq'
  | 'login'
  | 'register'
  | 'forgot-password'
  | 'orders'
  | 'compare'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'return-refund-policy'
  | 'disclaimer';

export interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}
