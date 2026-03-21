import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/hooks';
import { Button } from '../ui/Button';
import { SizeSelector } from '../ui/SizeSelector';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function CartSidebar() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, updateSize, cartTotal } = useCart();
    const sidebarRef = useRef(null);
    const navigate = useNavigate();

    // Close formatting on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCartOpen, setIsCartOpen]);


    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white dark:bg-[#0f0f0f] z-[60] shadow-2xl flex flex-col transition-colors duration-300"
                    >
                        <div className="p-6 flex items-center justify-between border-b dark:border-white/10">
                            <h2 className="text-xl font-serif italic dark:text-white transition-colors">Shopping Bag ({cart.length})</h2>
                            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300 dark:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-gray-50 dark:bg-white/[0.02] rounded-full flex items-center justify-center text-gray-200 dark:text-white/5"
                                    >
                                        <ShoppingBag size={48} strokeWidth={1} />
                                    </motion.div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-black uppercase tracking-[0.3em] dark:text-white">Your bag is empty.</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">It seems you haven't discovered <br/> our latest pieces yet.</p>
                                    </div>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setIsCartOpen(false)} 
                                        pill
                                        className="dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:tracking-[0.3em]"
                                    >
                                        Discover Collections
                                    </Button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 group">
                                        <div className="w-24 h-32 bg-[#f4f4f4] dark:bg-[#1a1a1a] shrink-0 overflow-hidden relative transition-colors duration-500">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-serif italic text-sm text-primary dark:text-white transition-colors tracking-tight">{item.name}</h3>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">{item.category}</span>
                                                            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-white/10" />
                                                            <SizeSelector 
                                                                selected={item.selectedSize} 
                                                                options={item.sizes || ['S', 'M', 'L', 'XL']} 
                                                                onChange={(newSize) => updateSize(item.id, item.selectedSize, newSize)} 
                                                            />
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                        className="text-gray-200 dark:text-white/10 hover:text-red-500 dark:hover:text-red-400 transition-all p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full"
                                                        title="Remove from bag"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                                                        className="p-2 hover:bg-white dark:hover:bg-white/5 dark:text-white transition-all"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-10 text-center text-[11px] font-black dark:text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                                                        className="p-2 hover:bg-white dark:hover:bg-white/5 dark:text-white transition-all"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <span className="font-black text-xs tracking-tighter dark:text-white transition-colors">₹{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t dark:border-white/10 bg-gray-50 dark:bg-black/40 transition-colors">
                                <div className="flex justify-between mb-4 text-sm uppercase tracking-widest font-semibold dark:text-white transition-colors">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-muted dark:text-gray-400 mb-6 text-center transition-colors">Shipping & taxes calculated at checkout.</p>
                                <Button
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        navigate('/checkout');
                                    }}
                                    className="w-full py-4 dark:bg-white dark:text-black transition-colors"
                                >
                                    Checkout
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
