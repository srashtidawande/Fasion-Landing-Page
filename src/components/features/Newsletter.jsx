import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNotification } from '../../context/hooks';
import { useState } from 'react';

export function Newsletter() {
    const { showNotification } = useNotification();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setIsSubscribed(true);
        showNotification('Thank you for joining the LUXE Collective!', 'success');
    };

    return (
        <section id="newsletter" className="section-padding bg-[var(--bg-primary)] overflow-hidden">
            <div className="container-custom">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[4rem] overflow-hidden bg-[var(--bg-secondary)] p-12 md:p-32 text-center border border-[var(--border-color)] shadow-inner"
                >
                    {/* Decorative Animated Blobs */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            x: [-20, 20, -20],
                            y: [-20, 20, -20]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, 0],
                            x: [20, -20, 20],
                            y: [20, -20, 20]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" 
                    />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <AnimatePresence mode="wait">
                            {!isSubscribed ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.div 
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-center gap-4 mb-8"
                                    >
                                        <span className="w-8 h-px bg-accent/40" />
                                        <span className="overline-text !mb-0 text-accent">The LUXE Collective</span>
                                        <span className="w-8 h-px bg-accent/40" />
                                    </motion.div>

                                    <motion.h2 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="heading-luxury mb-10"
                                    >
                                        Luxury in your <br />
                                        <span className="heading-luxury-italic opacity-60">Inbox Collective</span>
                                    </motion.h2>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="text-body-luxury mb-16 max-w-xl mx-auto uppercase"
                                    >
                                        Join our exclusive circle for early access to curated collections and private events.
                                    </motion.p>

                                    <motion.form 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className={`relative flex items-center max-w-lg mx-auto transition-all duration-700 ${isFocused ? 'scale-[1.02]' : ''}`}
                                        onSubmit={handleSubmit}
                                    >
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Address your email here..."
                                            className={`w-full bg-[var(--bg-primary)] border rounded-full py-6 px-10 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/30 outline-none transition-all duration-700 font-light tracking-[0.2em] text-sm shadow-2xl ${
                                                isFocused 
                                                ? 'border-accent shadow-accent/10 pr-24 scale-105' 
                                                : 'border-[var(--border-color)] pr-20'
                                            }`}
                                        />
                                        <div className="absolute right-3">
                                            <Button 
                                                variant="accent" 
                                                size="sm" 
                                                pill 
                                                type="submit"
                                                className={`p-4 rounded-full min-w-0 shadow-lg transition-transform duration-500 hover:rotate-12 ${isFocused ? 'scale-110' : ''}`}
                                            >
                                                <Send size={20} className={isFocused ? 'animate-pulse' : ''} />
                                            </Button>
                                        </div>
                                    </motion.form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", damping: 12 }}
                                    className="py-12 flex flex-col items-center"
                                >
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mb-10 shadow-2xl shadow-accent/40"
                                    >
                                        <CheckCircle2 size={48} />
                                    </motion.div>
                                    <h2 className="heading-luxury-sm">Welcome to <span className="heading-luxury-italic opacity-60">the inner circle</span></h2>
                                    <p className="text-[var(--text-secondary)] font-bold tracking-[0.5em] text-xs uppercase opacity-60">An invitation will arrive shortly.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 text-[10px] text-[var(--text-secondary)]/40 uppercase tracking-[0.5em] font-black"
                        >
                            Exclusive Access • Privacy Guaranteed • LUXE Standard
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
