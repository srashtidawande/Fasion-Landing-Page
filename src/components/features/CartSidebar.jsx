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
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[var(--bg-primary)] z-[60] shadow-2xl flex flex-col transition-colors duration-300"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-[var(--border-color)]">
                            <h2 className="text-xl font-serif italic text-[var(--text-primary)] transition-colors">Shopping Bag ({cart.length})</h2>
                            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300 text-[var(--text-primary)]">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center text-[var(--muted-icon)]"
                                    >
                                        <ShoppingBag size={48} strokeWidth={1} />
                                    </motion.div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--text-primary)]">Your bag is empty.</p>
                                        <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest leading-relaxed">It seems you haven't discovered <br/> our latest pieces yet.</p>
                                    </div>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setIsCartOpen(false)} 
                                        pill
                                        className="dark:border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all hover:tracking-[0.3em]"
                                    >
                                        Discover Collections
                                    </Button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 group">
                                        <div className="w-24 h-32 bg-[var(--bg-secondary)] shrink-0 overflow-hidden relative transition-colors duration-500">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-serif italic text-sm text-[var(--text-primary)] transition-colors tracking-tight">{item.name}</h3>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)]">{item.category}</span>
                                                            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
                                                            <SizeSelector 
                                                                selected={item.selectedSize} 
                                                                options={item.sizes || ['S', 'M', 'L', 'XL']} 
                                                                onChange={(newSize) => updateSize(item.id, item.selectedSize, newSize)} 
                                                            />
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                                                        className="text-[var(--text-secondary)]/40 hover:text-red-500 transition-all p-2 hover:bg-red-500/10 rounded-full"
                                                        title="Remove from bag"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                                                        className="p-2 hover:bg-[var(--bg-primary)] text-[var(--text-primary)] transition-all"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="w-10 text-center text-[11px] font-black text-[var(--text-primary)]">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                                                        className="p-2 hover:bg-[var(--bg-primary)] text-[var(--text-primary)] transition-all"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <span className="font-black text-xs tracking-tighter text-[var(--text-primary)] transition-colors">₹{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-[var(--border-color)] bg-[var(--sidebar-footer-bg)] transition-colors">
                                <div className="flex justify-between mb-4 text-sm uppercase tracking-widest font-semibold text-[var(--text-primary)] transition-colors">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] mb-6 text-center transition-colors">Shipping & taxes calculated at checkout.</p>
                                <Button
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        navigate('/checkout');
                                    }}
                                    className="w-full py-4 transition-colors"
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
