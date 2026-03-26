import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "The attention to detail and quality of fabric is unlike anything I've seen in modern fashion. LUXE truly lives up to its name.",
        author: "Sarah Jenkins",
        role: "Fashion Director",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&q=100&w=400"
    },
    {
        id: 2,
        content: "I love the minimalist approach combined with such vibrant, expressive pieces. It's my go-to for both work and evening events.",
        author: "Michael Chen",
        role: "Creative Lead",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&q=100&w=400"
    },
    {
        id: 3,
        content: "Sustainable fashion that doesn't compromise on style. Finally a brand that aligns with my values without losing the edge.",
        author: "Elena Rodriguez",
        role: "Stylist",
        rating: 4,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format,compress&fit=crop&q=100&w=400"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-[var(--bg-primary)] overflow-hidden relative">
            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none -z-0 opacity-[0.03]">
                <span className="text-[25rem] font-serif italic whitespace-nowrap leading-none tracking-tighter block text-accent">
                    Voices
                </span>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center mb-32 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-8 h-px bg-accent/40" />
                        <span className="overline-text !mb-0 text-accent">Client Testimonials</span>
                        <span className="w-8 h-px bg-accent/40" />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 1 }}
                        className="heading-luxury !text-6xl md:!text-8xl"
                     >
                        The Collection of <br />
                        <span className="heading-luxury-italic opacity-50">Global Perspectives</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group h-full flex flex-col"
                        >
                            {/* Decorative Quote Icon */}
                            <div className="mb-12 relative">
                                <Quote className="text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all duration-1000" size={64} strokeWidth={1} />
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-all duration-1000" />
                            </div>

                            <motion.div className="flex-grow">
                                <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            size={12} 
                                            className={i < t.rating ? "fill-accent text-accent" : "text-[var(--text-secondary)]/30"} 
                                        />
                                    ))}
                                </div>

                                <p className="text-2xl md:text-3xl font-serif font-light leading-[1.6] mb-12 text-[var(--text-primary)] transition-all duration-700 group-hover:translate-x-2">
                                    "{t.content}"
                                </p>
                            </motion.div>

                            <div className="pt-10 border-t border-[var(--border-color)] group-hover:border-accent/30 transition-all duration-700 flex items-center gap-6">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <div className="absolute inset-0 rounded-full border border-accent/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                                    <img 
                                        src={t.image} 
                                        alt={t.author} 
                                        loading="lazy" 
                                        className="w-full h-full rounded-full object-cover grayscale brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-[var(--ease-premium)]" 
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[11px] font-black text-[var(--text-primary)] tracking-[0.4em] uppercase">{t.author}</h4>
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-accent/60 font-black">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Badge */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-40 flex justify-center"
                >
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex -space-x-4">
                            {testimonials.map(t => (
                                <div key={t.id} className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] overflow-hidden shadow-xl">
                                    <img src={t.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-accent border-2 border-[var(--bg-primary)] flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                                +2k
                            </div>
                        </div>
                        <p className="text-[10px] uppercase font-black tracking-[0.5em] text-[var(--text-secondary)]/40">
                            Trusted by luxury enthusiasts worldwide
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
