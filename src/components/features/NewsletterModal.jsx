import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ArrowRight } from 'lucide-react';

export function NewsletterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const shown = localStorage.getItem('newsletter_shown');
            if (!shown) {
                setIsOpen(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('newsletter_shown', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 3000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        className="bg-white max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 p-2 text-white md:text-primary hover:text-accent transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="hidden md:block relative h-full min-h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
                                alt="Newsletter"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-12 md:p-16 flex flex-col justify-center space-y-8 bg-white">
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Join the Club</h3>
                                <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight leading-tight">Elevate Your Wardrobe</h2>
                                <p className="text-muted leading-relaxed font-light">
                                    Subscribe to receive editorial updates, exclusive access to new drops, and 15% off your first order.
                                </p>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative group">
                                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary" size={18} />
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full pl-8 py-4 border-b border-gray-200 outline-none focus:border-primary transition-colors text-sm"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-5 px-8 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-between group hover:bg-black transition-all"
                                    >
                                        Join Now
                                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 text-green-800 p-6 text-center space-y-2"
                                >
                                    <p className="font-bold uppercase tracking-widest text-xs">Thank You!</p>
                                    <p className="text-sm">Check your inbox for your 15% discount code.</p>
                                </motion.div>
                            )}

                            <p className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
                                NO SPAM. JUST STYLE. UNSUBSCRIBE ANYTIME.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
