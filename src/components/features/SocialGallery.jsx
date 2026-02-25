import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const socialImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109132332-629ee63989c4?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
];

export function SocialGallery() {
    return (
        <section className="py-24 bg-[#f9f9f9] dark:bg-[#1a1a1a] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight italic dark:text-white">Shop the Gram</h2>
                        <p className="text-muted dark:text-gray-400 tracking-widest uppercase text-xs">Share your look with #LUXESTYLE</p>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-primary dark:border-white pb-2 hover:text-accent dark:text-white dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-all"
                    >
                        <Instagram size={16} /> Follow us @LUXE_OFFICIAL
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {socialImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={img}
                                alt={`Social ${index}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Instagram size={20} className="text-primary dark:text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
