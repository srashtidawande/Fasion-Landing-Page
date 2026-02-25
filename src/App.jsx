import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { CartSidebar } from './components/features/CartSidebar';
import { WishlistSidebar } from './components/features/WishlistSidebar';
import { ProductModal } from './components/features/ProductModal';
import { NewsletterModal } from './components/features/NewsletterModal';
import { BackToTop } from './components/features/BackToTop';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const location = useLocation();

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
            <AnnouncementBar />
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

            <footer className="bg-[#1a1a1a] dark:bg-[#0a0a0a] text-white py-16 px-6 md:px-12 border-t border-gray-800">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light tracking-wide">
                <div className="flex flex-col space-y-6">
                  <span className="text-2xl font-serif font-bold tracking-widest">L U X E</span>
                  <p className="text-gray-400 max-w-xs">Defining modern luxury through minimalist design and exceptional craftsmanship.</p>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-widest mb-6">Shop</h3>
                  <ul className="space-y-4 text-gray-400">
                    <li><Link to="/shop" className="hover:text-white transition-colors">Catalog</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Atelier</Link></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-widest mb-6">Support</h3>
                  <ul className="space-y-4 text-gray-400">
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-widest mb-6">Newsletter</h3>
                  <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                  <div className="flex border-b border-gray-600 pb-2">
                    <input type="email" placeholder="Enter your email" className="bg-transparent w-full outline-none placeholder-gray-500" />
                    <button className="uppercase text-xs font-semibold hover:text-gray-300">Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-wider">
                &copy; 2026 LUXE Fashion. All rights reserved.
              </div>
            </footer>

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
