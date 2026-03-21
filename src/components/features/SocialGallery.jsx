import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const socialImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=75&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109132332-629ee63989c4?q=75&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=75&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=75&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=75&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=75&w=600&auto=format&fit=crop',
];

export function SocialGallery() {
    return (
        <section id="social-gallery" className="section-padding bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="overline-text">Community Style</span>
                        <h2 className="heading-luxury-sm">Shop the <span className="not-italic font-bold">Gram</span></h2>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-accent pb-3 text-[var(--text-primary)] hover:text-accent hover:border-accent transition-all duration-500"
                    >
                        <Instagram size={16} /> Follow us @LUXE_OFFICIAL
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {socialImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden group cursor-pointer rounded-2xl shadow-sm border border-[var(--border-color)]"
                        >
                            <img
                                src={img}
                                alt={`Social ${index}`}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] scale-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md p-4 rounded-full translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
                                    <Instagram size={20} className="text-black dark:text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
