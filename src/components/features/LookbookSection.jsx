import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const lookbookItems = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=75&w=1200&auto=format&fit=crop',
        title: 'The Modern Minimalist',
        subtitle: 'Spring / Summer 2026',
        description: 'Clean lines, curated silhouettes, and a palette of muted neutrals. A masterclass in understated elegance.',
        alignment: 'left'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=75&w=1200&auto=format&fit=crop',
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
                <div className="flex flex-col space-y-48">
                    {lookbookItems.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col ${item.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-32`}
                        >
                            <div className="w-full md:w-3/5 relative group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2rem]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] scale-100 group-hover:scale-110"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 border-2 border-accent/20 rounded-[2rem] translate-x-6 translate-y-6 -z-10 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8"></div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: item.alignment === 'right' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="w-full md:w-2/5 space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className="overline-text text-accent">{item.subtitle}</span>
                                    <h2 className="heading-luxury">{item.title}</h2>
                                </div>
                                <p className="text-[var(--text-secondary)] leading-relaxed font-light text-lg italic border-l-2 border-accent/30 pl-8">
                                    {item.description}
                                </p>
                                <div className="pt-4">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        pill
                                        className="shadow-xl shadow-black/10 dark:shadow-white/5"
                                    >
                                        Discover Collection
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
