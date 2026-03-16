import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Newsletter() {
    return (
        <section id="newsletter" className="section-padding bg-white dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary dark:bg-[#121212] p-8 md:p-24 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block"
                        >
                            The LUXE Collective
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif text-white mb-8"
                        >
                            Stay Updated with Fashion Trends
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 font-light tracking-wide mb-12 text-sm md:text-base leading-relaxed"
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
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input 
                                type="email" 
                                placeholder="Address your email here..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white placeholder:text-white/20 outline-none focus:border-accent/50 transition-all font-light tracking-widest text-sm"
                            />
                            <button className="absolute right-2 p-4 bg-accent hover:bg-white text-white hover:text-black rounded-full transition-all duration-500 group">
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.form>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest"
                        >
                            By subscribing, you agree to our Privacy Policy
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
