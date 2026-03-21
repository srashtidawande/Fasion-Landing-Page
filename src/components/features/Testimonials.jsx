import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "The attention to detail and quality of fabric is unlike anything I've seen in modern fashion. LUXE truly lives up to its name.",
        author: "Sarah Jenkins",
        role: "Fashion Director",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        content: "I love the minimalist approach combined with such vibrant, expressive pieces. It's my go-to for both work and evening events.",
        author: "Michael Chen",
        role: "Creative Lead",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        content: "Sustainable fashion that doesn't compromise on style. Finally a brand that aligns with my values without losing the edge.",
        author: "Elena Rodriguez",
        role: "Stylist",
        rating: 4,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-[var(--bg-primary)] overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overline-text"
                    >
                        Voice of our clients
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="heading-luxury-sm"
                     >
                        Stories of <span className="not-italic font-bold">Style</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[var(--bg-secondary)] p-12 rounded-[2.5rem] border border-[var(--border-color)] relative group hover-lift"
                        >
                            <Quote className="text-accent/10 absolute top-10 right-10 group-hover:text-accent/30 group-hover:scale-125 transition-all duration-700 ease-[0.22, 1, 0.36, 1]" size={56} />
                            
                            <div className="flex gap-1.5 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={14} 
                                        className={i < t.rating ? "fill-accent text-accent" : "text-[var(--text-secondary)]/30"} 
                                    />
                                ))}
                            </div>

                            <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-10 italic text-lg border-l-2 border-accent/20 pl-6">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-5">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                                    <img src={t.image} alt={t.author} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-[var(--text-primary)] tracking-widest uppercase">{t.author}</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent mt-1 font-bold">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
