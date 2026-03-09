import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const offers = [
    { id: 1, text: "Free Domestic Shipping on all orders over ₹4999", highlight: "FREE SHIPPING" },
    { id: 2, text: "End of Season Sale: Up to 50% Off on Selected Items", highlight: "50% OFF" },
    { id: 3, text: "Join LUXE Insider for exclusive early access & rewards", highlight: "JOIN NOW" },
];

export function AnnouncementBar() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % offers.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % offers.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);

    return (
        <div className="bg-[#f0f0f0] dark:bg-[#151515] text-primary dark:text-white py-8 px-4 relative h-20 md:h-[120px] flex items-center justify-center overflow-hidden border-b border-black/5 dark:border-white/5 group transition-colors duration-500">
            <button
                onClick={handlePrev}
                className="absolute left-10 z-10 opacity-30 hover:opacity-100 transition-opacity"
                aria-label="Previous offer"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="w-full max-w-4xl text-center relative h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center gap-3 md:gap-6"
                    >
                        <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] bg-primary dark:bg-white text-white dark:text-black px-5 py-2 rounded-full shrink-0 shadow-lg">
                            {offers[currentIndex].highlight}
                        </span>
                        <p className="text-[16px] md:text-[22px] lg:text-[26px] font-light tracking-[0.3em] uppercase max-w-[320px] md:max-w-none leading-tight opacity-90">
                            {offers[currentIndex].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                onClick={handleNext}
                className="absolute right-10 z-10 opacity-30 hover:opacity-100 transition-opacity"
                aria-label="Next offer"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pagination Dots (Mobile) */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 md:hidden">
                {offers.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
}
