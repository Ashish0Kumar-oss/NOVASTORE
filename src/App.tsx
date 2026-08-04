import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { OrdersPage } from './pages/OrdersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ReturnRefundPage } from './pages/ReturnRefundPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

// Common Modals & Overlays
import { QuickViewModal } from './components/common/QuickViewModal';
import { CompareModal } from './components/common/CompareModal';
import { LiveSearchModal } from './components/common/LiveSearchModal';
import { NewsletterModal } from './components/common/NewsletterModal';
import { CookieNotice } from './components/common/CookieNotice';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ToastContainer } from './components/common/ToastContainer';

const MainContent: React.FC = () => {
  const { pageView } = useStore();

  const renderView = () => {
    switch (pageView) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      case 'forgot-password':
        return <ForgotPasswordPage />;
      case 'orders':
        return <OrdersPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-conditions':
        return <TermsPage />;
      case 'return-refund-policy':
        return <ReturnRefundPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-red-500 selection:text-white">
      {/* Navigation Bar */}
      <Header />
      <MobileMenu />

      {/* Main Body View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <QuickViewModal />
      <CompareModal />
      <LiveSearchModal />
      <NewsletterModal />
      <CookieNotice />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}

export default App;
