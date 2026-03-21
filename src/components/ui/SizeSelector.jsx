import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function SizeSelector({ selected, options, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-accent hover:text-black dark:hover:text-white transition-colors"
            >
                Size: {selected}
                <ChevronDown size={10} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute left-0 mt-2 p-2 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 rounded-xl shadow-2xl z-[70] min-w-[80px]"
                    >
                        <div className="flex flex-col gap-1">
                            {options.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => {
                                        onChange(size);
                                        setIsOpen(false);
                                    }}
                                    className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                                        selected === size 
                                            ? 'bg-accent text-white' 
                                            : 'hover:bg-gray-50 dark:hover:bg-white/5 text-gray-400 hover:text-black dark:hover:text-white'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
