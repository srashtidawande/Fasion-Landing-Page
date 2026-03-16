import { motion } from 'framer-motion';

const lookbookItems = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
        title: 'The Modern Minimalist',
        subtitle: 'Spring / Summer 2026',
        description: 'Clean lines, curated silhouettes, and a palette of muted neutrals. A masterclass in understated elegance.',
        alignment: 'left'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop',
        title: 'Editorial Edge',
        subtitle: 'Urban Collective',
        description: 'Bold textures meet structured tailoring. Designed for the individual who makes the city their runway.',
        alignment: 'right'
    }
];

export function Lookbook() {
    return (
        <section className="py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col space-y-32">
                    {lookbookItems.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col ${item.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                        >
                            <div className="w-full md:w-3/5 relative group">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="aspect-[4/5] md:aspect-[16/10] overflow-hidden"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 border border-primary/10 dark:border-white/10 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: item.alignment === 'right' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="w-full md:w-2/5 space-y-6"
                            >
                                <div className="space-y-2">
                                    <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">{item.subtitle}</p>
                                    <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight">{item.title}</h2>
                                </div>
                                <p className="text-muted leading-relaxed font-light text-lg">
                                    {item.description}
                                </p>
                                <button className="group relative py-5 px-12 overflow-hidden bg-primary text-white text-[10px] uppercase tracking-[0.3em] font-black shadow-2xl transition-all hover:tracking-[0.4em]">
                                    <span className="relative z-10">Discover Collection</span>
                                    <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:translate-y-0"></div>
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
