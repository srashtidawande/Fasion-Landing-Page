import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
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
                  <Route path="/" element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                      <Home onOpenModal={handleOpenModal} />
                    </motion.div>
                  } />
                  <Route path="/shop" element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                      <Shop onOpenModal={handleOpenModal} />
                    </motion.div>
                  } />
                  <Route path="/about" element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                      <About />
                    </motion.div>
                  } />
                  <Route path="/contact" element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                      <Contact />
                    </motion.div>
                  } />
                  <Route path="/checkout" element={
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                      <Checkout />
                    </motion.div>
                  } />
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
    </ThemeProvider>
  );
}

export default App;
