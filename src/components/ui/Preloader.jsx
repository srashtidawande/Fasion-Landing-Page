import { motion } from 'framer-motion';

export function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }
            }}
            className="fixed inset-0 z-[1000] bg-white dark:bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-serif font-black tracking-[0.4em] dark:text-white"
                >
                    LUXE<span className="text-accent">•</span>
                </motion.div>
                
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="h-px bg-accent mt-8 absolute -bottom-4 left-0"
                />
                
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 text-[10px] uppercase tracking-[0.8em] text-gray-400 font-bold"
                >
                    Redefining Modern Luxury
                </motion.div>
            </div>

            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
            </div>
        </motion.div>
    );
}
