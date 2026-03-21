import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartProvider';
import { WishlistProvider } from './context/WishlistProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartSidebar } from './components/features/CartSidebar';
import { WishlistSidebar } from './components/features/WishlistSidebar';
import { ProductModal } from './components/features/ProductModal';
import { NewsletterModal } from './components/features/NewsletterModal';
import { BackToTop } from './components/features/BackToTop';
import { CustomCursor } from './components/ui/CustomCursor';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';

import { Preloader } from './components/ui/Preloader';

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

import { NotificationProvider } from './context/NotificationContext';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Elegant loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <ThemeProvider>
      <NotificationProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="font-sans text-primary dark:text-[#f5f5f5] transition-colors duration-300">
              <AnimatePresence mode="wait">
                {isLoading && <Preloader key="loader" />}
              </AnimatePresence>
              
              <CustomCursor />
              <Navbar onOpenWishlist={() => setIsWishlistOpen(true)} />

              <main className="min-h-screen">
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AnimatedPage><Home onOpenModal={handleOpenModal} /></AnimatedPage>} />
                    <Route path="/shop" element={<AnimatedPage><Shop onOpenModal={handleOpenModal} /></AnimatedPage>} />
                    <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                    <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                    <Route path="/checkout" element={<AnimatedPage><Checkout /></AnimatedPage>} />
                  </Routes>
                </AnimatePresence>
              </main>

              <Footer />

              <CartSidebar />
              <WishlistSidebar isOpen={isWishlistOpen} setIsOpen={setIsWishlistOpen} />
              <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
              <NewsletterModal />
              <BackToTop />
            </div>
          </WishlistProvider>
        </CartProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
