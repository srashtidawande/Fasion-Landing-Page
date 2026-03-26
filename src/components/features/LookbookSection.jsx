import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const lookbookItems = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=100&w=1600&auto=format,compress&fit=crop',
        title: 'The Modern Minimalist',
        subtitle: 'Spring / Summer 2026',
        description: 'Clean lines, curated silhouettes, and a palette of muted neutrals. A masterclass in understated elegance.',
        alignment: 'left'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=100&w=1600&auto=format,compress&fit=crop',
        title: 'Editorial Edge',
        subtitle: 'Urban Collective',
        description: 'Bold textures meet structured tailoring. Designed for the individual who makes the city their runway.',
        alignment: 'right'
    }
];

export function LookbookSection() {
    return (
        <section id="lookbook" className="section-padding bg-[var(--bg-primary)] overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col space-y-48 lg:space-y-64">
                    {lookbookItems.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col ${item.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-3/5 h-full relative group perspective-[2000px]">
                                <motion.div
                                    initial={{ opacity: 0, x: item.alignment === 'right' ? 80 : -80, rotateY: item.alignment === 'right' ? -15 : 15 }}
                                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.8 } }}
                                    className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl relative z-10"
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        initial={{ scale: 1.2 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    
                                    {/* Inner Light Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </motion.div>

                                {/* Background Decorative Frame */}
                                <motion.div 
                                    initial={{ opacity: 0, x: item.alignment === 'right' ? -40 : 40, y: 40 }}
                                    whileInView={{ opacity: 1, x: item.alignment === 'right' ? -30 : 30, y: 30 }}
                                    transition={{ duration: 1.2, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="absolute inset-0 border-[3px] border-accent/20 rounded-[2.5rem] -z-10 transition-all duration-1000 group-hover:border-accent/40 group-hover:translate-x-12 group-hover:translate-y-12" 
                                />
                            </div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="w-full md:w-2/5 space-y-10"
                            >
                                <div className="space-y-6">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "3rem" }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="h-px bg-accent/60"
                                    />
                                    <span className="overline-text text-accent tracking-[0.6em]">{item.subtitle}</span>
                                    <h2 className="heading-luxury-sm">
                                        {item.title.split(' ').map((word, i) => (
                                            <span key={i} className={i % 2 !== 0 ? 'heading-luxury-italic opacity-60' : ''}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h2>
                                </div>
                                <p className="text-body-luxury italic border-l-2 border-accent/20 pl-10 max-w-xl transition-all duration-500 hover:border-accent/60 hover:text-[var(--text-primary)]">
                                    {item.description}
                                </p>
                                <div className="pt-8">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        pill
                                        className="group/btn relative overflow-hidden px-10 py-5 bg-black text-white dark:bg-white dark:text-black hover:bg-accent dark:hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl hover:shadow-accent/40"
                                    >
                                        <span className="relative z-10 flex items-center gap-3">
                                            Discover Collection
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                →
                                            </motion.span>
                                        </span>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
