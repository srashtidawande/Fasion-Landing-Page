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
        <section id="testimonials" className="section-padding bg-[#fafafa] dark:bg-[#0d0d0d] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block"
                    >
                        Voice of our clients
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif italic dark:text-white"
                     >
                        Stories of Style
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                            className="bg-white dark:bg-[#141414] p-10 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <Quote className="text-accent/20 absolute top-8 right-8 group-hover:text-accent/40 transition-colors" size={40} />
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={14} 
                                        className={i < t.rating ? "fill-accent text-accent" : "text-gray-300 dark:text-gray-700"} 
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.author} loading="lazy" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div>
                                    <h4 className="text-sm font-bold dark:text-white">{t.author}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
