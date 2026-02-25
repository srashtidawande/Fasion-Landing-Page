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
        <div className="bg-black text-white py-6 px-4 relative h-20 md:h-[100px] flex items-center justify-center overflow-hidden border-b border-white/10 group">
            <button
                onClick={handlePrev}
                className="absolute left-6 z-10 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Previous offer"
            >
                <ChevronLeft size={24} />
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
                        <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] bg-white text-black px-4 py-1.5 rounded-sm shrink-0">
                            {offers[currentIndex].highlight}
                        </span>
                        <p className="text-[14px] md:text-[18px] lg:text-[20px] font-light tracking-[0.2em] uppercase max-w-[300px] md:max-w-none leading-relaxed">
                            {offers[currentIndex].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                onClick={handleNext}
                className="absolute right-6 z-10 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Next offer"
            >
                <ChevronRight size={24} />
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
