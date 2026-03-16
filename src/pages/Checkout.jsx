import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/hooks';
import { Button } from '../components/ui/Button';
import { ChevronRight, CreditCard, Truck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Checkout() {
    const { cart, cartTotal } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0a0a0a]">
                <h2 className="text-2xl font-serif mb-6 dark:text-white">Your bag is empty</h2>
                <Button onClick={() => navigate('/shop')}>Return to Catalog</Button>
            </div>
        );
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleCheckout = (e) => {
        e.preventDefault();
        setStep(3);
    };

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#fcfcfc] dark:bg-[#0a0a0a] transition-colors duration-500">
            <div className="container mx-auto max-w-7xl">
                <AnimatePresence mode="wait">
                    {step < 3 ? (
                        <motion.div
                            key="checkout-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
                        >
                            {/* Left Side: Form */}
                            <div className="lg:col-span-7 space-y-12">
                                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                                    <span className={step >= 1 ? "text-accent" : ""}>Information</span>
                                    <ChevronRight size={12} />
                                    <span className={step >= 2 ? "text-accent" : ""}>Payment</span>
                                </div>

                                <form onSubmit={step === 1 ? (e) => { e.preventDefault(); nextStep(); } : handleCheckout} className="space-y-10">
                                    {step === 1 ? (
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <h2 className="text-2xl font-serif italic dark:text-white">Contact Information</h2>
                                                <div className="group">
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white font-medium rounded-sm group-hover:border-black/20 dark:group-hover:border-white/20"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-6 pt-4">
                                                <h2 className="text-2xl font-serif italic dark:text-white">Shipping Address</h2>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white rounded-sm hover:border-black/20 dark:hover:border-white/20"
                                                    />
                                                    <input
                                                        required
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white rounded-sm hover:border-black/20 dark:hover:border-white/20"
                                                    />
                                                </div>
                                                <input
                                                    required
                                                    type="text"
                                                    name="address"
                                                    placeholder="Address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white rounded-sm hover:border-black/20 dark:hover:border-white/20"
                                                />
                                                <div className="grid grid-cols-2 gap-6">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="city"
                                                        placeholder="City"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white rounded-sm hover:border-black/20 dark:hover:border-white/20"
                                                    />
                                                    <input
                                                        required
                                                        type="text"
                                                        name="zip"
                                                        placeholder="ZIP Code"
                                                        value={formData.zip}
                                                        onChange={handleInputChange}
                                                        className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white rounded-sm hover:border-black/20 dark:hover:border-white/20"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <h2 className="text-2xl font-serif italic dark:text-white">Payment Method</h2>
                                                    <div className="flex space-x-2 text-gray-400">
                                                        <CreditCard size={20} />
                                                    </div>
                                                </div>
                                                <div className="p-8 border border-black/5 dark:border-white/5 bg-white dark:bg-white/5 rounded-sm space-y-6 shadow-sm">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="cardNumber"
                                                        placeholder="Card Number"
                                                        value={formData.cardNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white font-mono tracking-widest"
                                                    />
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <input
                                                            required
                                                            type="text"
                                                            name="expiry"
                                                            placeholder="MM / YY"
                                                            value={formData.expiry}
                                                            onChange={handleInputChange}
                                                            className="bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white"
                                                        />
                                                        <input
                                                            required
                                                            type="text"
                                                            name="cvv"
                                                            placeholder="CVV"
                                                            value={formData.cvv}
                                                            onChange={handleInputChange}
                                                            className="bg-transparent border-b border-black/10 dark:border-white/10 py-4 outline-none focus:border-accent dark:focus:border-accent transition-all dark:text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-10 border-t border-black/5 dark:border-white/5">
                                        {step === 2 ? (
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-black text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                            >
                                                <ArrowLeft size={14} />
                                                <span>Back to Shipping</span>
                                            </button>
                                        ) : (
                                            <Link to="/shop" className="text-[10px] uppercase tracking-widest font-black text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                                Return to Shop
                                            </Link>
                                        )}
                                        <Button
                                            type="submit"
                                            className="px-12 py-5 bg-black text-white dark:bg-white dark:text-black hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-500 shadow-xl"
                                        >
                                            {step === 1 ? 'Continue to Payment' : 'Complete Purchase'}
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Side: Summary */}
                            <div className="lg:col-span-5">
                                <div className="sticky top-32 glass dark:glass-dark p-10 space-y-10 rounded-sm">
                                    <h2 className="text-xl font-serif italic dark:text-white">Order Summary</h2>

                                    <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        {cart.map((item) => (
                                            <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-6">
                                                <div className="w-16 h-20 bg-gray-100 dark:bg-[#1a1a1a] shrink-0 overflow-hidden">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-center">
                                                    <h4 className="text-[11px] font-black uppercase tracking-widest dark:text-white">{item.name}</h4>
                                                    <div className="flex justify-between items-center mt-1">
                                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Qty: {item.quantity} / Size: {item.selectedSize}</span>
                                                        <span className="text-[11px] font-black dark:text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4 pt-8 border-t border-black/5 dark:border-white/5 font-black uppercase tracking-[0.2em] text-[10px]">
                                        <div className="flex justify-between text-gray-400">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Shipping</span>
                                            <span>Complimentary</span>
                                        </div>
                                        <div className="flex justify-between text-lg tracking-tighter normal-case font-black dark:text-white pt-4">
                                            <span>Total</span>
                                            <span>₹{cartTotal.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 text-[9px] uppercase tracking-[0.3em] font-bold text-accent bg-accent/5 p-4 rounded-sm">
                                        <Truck size={14} />
                                        <span>Estimated Delivery: 3-5 Business Days</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-message"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8"
                        >
                            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <CheckCircle2 size={48} strokeWidth={1} />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-5xl font-serif italic dark:text-white">Ordered Successfully</h1>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-400">Order #LX-2026-9842</p>
                            </div>
                            <p className="max-w-md text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                Thank you for your purchase, {formData.firstName}. We've sent a confirmation email to {formData.email} and will notify you as soon as your collection has been dispatched.
                            </p>
                            <div className="pt-8">
                                <Button onClick={() => navigate('/shop')} variant="primary" className="px-16 py-6 bg-black text-white dark:bg-white dark:text-black">
                                    Return to Catalog
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
