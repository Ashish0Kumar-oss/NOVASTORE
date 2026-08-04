import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, WishlistItem, User, Order, FilterState, PageView, Toast, Category, ShippingInfo, PaymentInfo } from '../types';
import { DEMO_PRODUCTS } from '../data/products';

interface StoreContextType {
  // Theme & Navigation
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  pageView: PageView;
  setPageView: (view: PageView) => void;
  selectedProductId: string | null;
  openProductDetails: (id: string) => void;

  // Products & Filters
  products: Product[];
  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: string, color?: string, size?: string) => void;
  updateCartQuantity: (productId: string, quantity: number, color?: string, size?: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  appliedCoupon: { code: string; discountPercent: number; discountAmount: number } | null;
  applyCoupon: (code: string) => boolean;

  // Wishlist
  wishlist: WishlistItem[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;

  // Recently Viewed & Compare
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;

  // Auth & User
  user: User | null;
  loginUser: (email: string, pass: string) => { success: boolean; message: string };
  registerUser: (name: string, email: string, pass: string) => { success: boolean; message: string };
  logoutUser: () => void;
  
  // Orders
  orders: Order[];
  placeOrder: (shipping: ShippingInfo, payment: PaymentInfo) => Order | null;

  // Search & Toasts
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  toasts: Toast[];
  addToast: (message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
}

const initialFilters: FilterState = {
  search: '',
  category: 'All',
  brand: 'All',
  minPrice: 0,
  maxPrice: 3000,
  minRating: 0,
  inStockOnly: false,
  onSaleOnly: false,
  sortBy: 'featured'
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('novastore_theme') as 'dark' | 'light') || 'dark';
  });

  // Apply dark class to document HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('novastore_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Page View & Selected Product
  const [pageView, setPageView] = useState<PageView>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>('prod-1');

  const openProductDetails = (id: string) => {
    setSelectedProductId(id);
    const prod = DEMO_PRODUCTS.find(p => p.id === id);
    if (prod) {
      addToRecentlyViewed(prod);
    }
    setPageView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filters State
  const [filters, setFiltersState] = useState<FilterState>(initialFilters);

  const setFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFiltersState(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFiltersState(initialFilters);
  };

  // Modals & UI overlays
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Cart State (Local Storage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('novastore_cart');
      return saved ? JSON.parse(saved) : [
        { product: DEMO_PRODUCTS[0], quantity: 1, selectedColor: 'Space Gray' },
        { product: DEMO_PRODUCTS[8], quantity: 1, selectedColor: 'Electric Crimson', selectedSize: 'US 10' }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('novastore_cart', JSON.stringify(cart));
  }, [cart]);

  // Wishlist State (Local Storage)
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem('novastore_wishlist');
      return saved ? JSON.parse(saved) : [
        { product: DEMO_PRODUCTS[4], addedAt: new Date().toISOString() },
        { product: DEMO_PRODUCTS[12], addedAt: new Date().toISOString() }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('novastore_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Recently Viewed State
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('novastore_recently_viewed');
      return saved ? JSON.parse(saved) : [DEMO_PRODUCTS[0], DEMO_PRODUCTS[1], DEMO_PRODUCTS[4]];
    } catch {
      return [];
    }
  });

  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, 10);
      localStorage.setItem('novastore_recently_viewed', JSON.stringify(updated));
      return updated;
    });
  };

  // Compare List
  const [compareList, setCompareList] = useState<Product[]>([]);

  const toggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast(`Removed ${product.name} from comparison`, 'info');
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          addToast('You can compare up to 4 products at a time', 'warning');
          return prev;
        }
        addToast(`Added ${product.name} to comparison`, 'success');
        return [...prev, product];
      }
    });
  };

  // Cart actions
  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCart(prev => {
      const colorVal = color || (product.colors && product.colors.length > 0 ? product.colors[0] : undefined);
      const sizeVal = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined);
      
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor === colorVal && item.selectedSize === sizeVal
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor: colorVal, selectedSize: sizeVal }];
      }
    });
    addToast(`Added "${product.name}" to your cart`, 'success');
  };

  const removeFromCart = (productId: string, color?: string, size?: string) => {
    setCart(prev => prev.filter(item => {
      if (item.product.id !== productId) return true;
      if (color && item.selectedColor !== color) return true;
      if (size && item.selectedSize !== size) return true;
      return false;
    }));
    addToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number, color?: string, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedColor === color && item.selectedSize === size) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Coupon
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number; discountAmount: number } | null>(null);

  const applyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'NOVA20') {
      const discountAmount = Math.round(cartSubtotal * 0.2);
      setAppliedCoupon({ code: clean, discountPercent: 20, discountAmount });
      addToast('20% discount coupon applied successfully!', 'success');
      return true;
    } else if (clean === 'WELCOME10') {
      const discountAmount = Math.round(cartSubtotal * 0.1);
      setAppliedCoupon({ code: clean, discountPercent: 10, discountAmount });
      addToast('10% welcome coupon applied successfully!', 'success');
      return true;
    } else {
      addToast('Invalid coupon code. Try "NOVA20" or "WELCOME10"', 'error');
      return false;
    }
  };

  // Wishlist actions
  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.product.id === product.id);
      if (exists) {
        addToast(`Removed "${product.name}" from wishlist`, 'info');
        return prev.filter(item => item.product.id !== product.id);
      } else {
        addToast(`Added "${product.name}" to wishlist`, 'success');
        return [...prev, { product, addedAt: new Date().toISOString() }];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.product.id === productId);
  };

  const wishlistCount = wishlist.length;

  // Auth User
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('novastore_auth');
      return saved ? JSON.parse(saved) : {
        id: 'usr-1',
        fullName: 'Alex Vance',
        email: 'alex.vance@example.com',
        phone: '+1 (555) 234-5678',
        address: '742 Evergreen Terrace',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94107',
        createdAt: '2026-01-10'
      };
    } catch {
      return null;
    }
  });

  const loginUser = (email: string, pass: string) => {
    if (!email || !pass) {
      return { success: false, message: 'Please enter both email and password.' };
    }
    // Check saved users
    const usersRaw = localStorage.getItem('novastore_users');
    const existingUsers: User[] = usersRaw ? JSON.parse(usersRaw) : [];
    const matched = existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    const loggedInUser: User = matched || {
      id: 'usr-' + Date.now(),
      fullName: email.split('@')[0].replace('.', ' '),
      email: email,
      createdAt: new Date().toISOString()
    };

    setUser(loggedInUser);
    localStorage.setItem('novastore_auth', JSON.stringify(loggedInUser));
    addToast(`Welcome back, ${loggedInUser.fullName}!`, 'success');
    return { success: true, message: 'Logged in successfully' };
  };

  const registerUser = (name: string, email: string, pass: string) => {
    if (!name || !email || !pass) {
      return { success: false, message: 'Please fill out all required fields.' };
    }
    const newUser: User = {
      id: 'usr-' + Date.now(),
      fullName: name,
      email: email,
      createdAt: new Date().toISOString()
    };
    // Save to users array
    const usersRaw = localStorage.getItem('novastore_users');
    const existingUsers: User[] = usersRaw ? JSON.parse(usersRaw) : [];
    existingUsers.push(newUser);
    localStorage.setItem('novastore_users', JSON.stringify(existingUsers));

    setUser(newUser);
    localStorage.setItem('novastore_auth', JSON.stringify(newUser));
    addToast(`Account created for ${name}!`, 'success');
    return { success: true, message: 'Registration successful' };
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('novastore_auth');
    addToast('Logged out of NovaStore', 'info');
  };

  // Orders State
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('novastore_orders');
      return saved ? JSON.parse(saved) : [
        {
          id: 'ORD-98421',
          date: '2026-07-28',
          items: [{ product: DEMO_PRODUCTS[0], quantity: 1, selectedColor: 'Space Gray' }],
          shipping: {
            fullName: 'Alex Vance',
            email: 'alex.vance@example.com',
            phone: '+1 (555) 234-5678',
            address: '742 Evergreen Terrace',
            city: 'San Francisco',
            state: 'CA',
            zipCode: '94107',
            shippingMethod: 'express'
          },
          paymentMethod: 'Credit Card',
          subtotal: 349,
          shippingFee: 0,
          tax: 27.92,
          discount: 0,
          total: 376.92,
          status: 'Delivered',
          estimatedDelivery: '2026-07-31'
        }
      ];
    } catch {
      return [];
    }
  });

  const placeOrder = (shipping: ShippingInfo, payment: PaymentInfo): Order | null => {
    if (cart.length === 0) return null;

    const sub = cartSubtotal;
    const shipFee = shipping.shippingMethod === 'overnight' ? 29 : shipping.shippingMethod === 'express' ? 19 : sub > 100 ? 0 : 15;
    const tax = Math.round(sub * 0.08 * 100) / 100;
    const disc = appliedCoupon ? appliedCoupon.discountAmount : 0;
    const total = Math.max(0, sub + shipFee + tax - disc);

    const newOrder: Order = {
      id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toISOString().split('T')[0],
      items: [...cart],
      shipping,
      paymentMethod: payment.method === 'card' ? 'Credit Card (**** ' + (payment.cardNumber?.slice(-4) || '4242') + ')' : payment.method === 'upi' ? 'UPI Wallet' : 'Cash on Delivery',
      subtotal: sub,
      shippingFee: shipFee,
      tax,
      discount: disc,
      couponCode: appliedCoupon?.code,
      total,
      status: 'Processing',
      estimatedDelivery: new Date(Date.now() + 3 * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setOrders(prev => {
      const updated = [newOrder, ...prev];
      localStorage.setItem('novastore_orders', JSON.stringify(updated));
      return updated;
    });

    clearCart();
    addToast(`Order #${newOrder.id} placed successfully!`, 'success');
    return newOrder;
  };

  // Toast System
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: Toast['type'] = 'info') => {
    const id = 'toast-' + Date.now() + '-' + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        toggleTheme,
        pageView,
        setPageView,
        selectedProductId,
        openProductDetails,
        products: DEMO_PRODUCTS,
        filters,
        setFilter,
        resetFilters,
        quickViewProduct,
        setQuickViewProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        appliedCoupon,
        applyCoupon,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        recentlyViewed,
        addToRecentlyViewed,
        compareList,
        toggleCompare,
        isCompareOpen,
        setIsCompareOpen,
        user,
        loginUser,
        registerUser,
        logoutUser,
        orders,
        placeOrder,
        isSearchOpen,
        setIsSearchOpen,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
