import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Heart } from 'lucide-react';
import { useWishlist, useCart } from '../../context/hooks';
import { Button } from '../ui/Button';
import { useEffect, useRef } from 'react';

export function WishlistSidebar({ isOpen, setIsOpen }) {
    const { wishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50" />
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[var(--bg-primary)] z-[60] shadow-2xl flex flex-col transition-colors duration-300"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-[var(--border-color)]">
                            <h2 className="text-xl font-serif italic text-[var(--text-primary)] transition-colors">My Wishlist ({wishlist.length})</h2>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300 text-[var(--text-primary)]"><X size={24} /></button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {wishlist.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[var(--text-secondary)] transition-colors">
                                    <Heart size={48} className="text-[var(--muted-icon)]" />
                                    <p>Your wishlist is empty.</p>
                                </div>
                            ) : (
                                wishlist.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-20 h-24 bg-[var(--bg-secondary)] shrink-0 transition-colors">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="font-medium text-xs text-[var(--text-primary)] uppercase tracking-wide transition-colors">{item.name}</h3>
                                                    <button onClick={() => toggleWishlist(item)} className="text-[var(--text-secondary)] hover:text-red-500 transition-colors"><X size={14} /></button>
                                                </div>
                                                <p className="text-[10px] text-[var(--text-secondary)] uppercase mt-1 tracking-widest transition-colors font-medium">₹{item.price.toLocaleString()}</p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:text-accent transition-colors transition-all"
                                            >
                                                <ShoppingBag size={12} /> Add to Bag
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-6 border-t border-[var(--border-color)] transition-colors">
                            <Button onClick={() => setIsOpen(false)} variant="outline" className="w-full text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors">Close</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
