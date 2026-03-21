import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNotification } from '../../context/hooks';
import { useState } from 'react';

export function Newsletter() {
    const { showNotification } = useNotification();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setIsSubscribed(true);
        showNotification('Thank you for joining the LUXE Collective!', 'success');
    };

    return (
        <section id="newsletter" className="section-padding bg-[var(--bg-primary)]">
            <div className="container-custom">
                <div className="relative rounded-[3rem] overflow-hidden bg-[var(--bg-secondary)] p-12 md:p-24 text-center border border-[var(--border-color)]">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-80 h-80 bg-accent/15 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 blur-[120px] translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <AnimatePresence mode="wait">
                            {!isSubscribed ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.span 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="overline-text"
                                    >
                                        The LUXE Collective
                                    </motion.span>
                                    <motion.h2 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="heading-luxury-sm text-[var(--text-primary)] mb-8"
                                    >
                                        Stay Updated with <br />
                                        <span className="not-italic font-bold">Fashion Trends</span>
                                    </motion.h2>
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="text-[var(--text-secondary)] font-light tracking-widest mb-12 text-sm leading-relaxed"
                                    >
                                        Join our exclusive mailing list for early access to new collections, 
                                        style inspiration, and private fashion invitations.
                                    </motion.p>

                                    <motion.form 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="relative flex items-center max-w-lg mx-auto"
                                        onSubmit={handleSubmit}
                                    >
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Address your email here..."
                                            className="w-full bg-[var(--bg-primary)]/50 border border-[var(--border-color)] rounded-full py-5 px-8 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/40 outline-none focus:border-accent/50 transition-all font-light tracking-[0.2em] text-sm"
                                        />
                                        <div className="absolute right-2">
                                            <Button 
                                                variant="accent" 
                                                size="sm" 
                                                pill 
                                                type="submit"
                                                className="p-4 rounded-full min-w-0"
                                            >
                                                <Send size={18} />
                                            </Button>
                                        </div>
                                    </motion.form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h2 className="heading-luxury-sm mb-4">You're on <span className="not-italic font-bold">the list</span></h2>
                                    <p className="text-[var(--text-secondary)] font-light tracking-widest text-sm uppercase">Welcome to the elite collective.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-[10px] text-[var(--text-secondary)]/60 uppercase tracking-[0.4em] font-bold"
                        >
                            By subscribing, you agree to our Privacy Policy
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
