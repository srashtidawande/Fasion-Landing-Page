import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ children, className, variant = 'primary', ...props }) {
    const variants = {
        primary: 'bg-primary text-white hover:bg-black',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-primary hover:bg-gray-100',
        accent: 'bg-accent text-white hover:bg-[#b08d28]',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                'px-8 py-3 transition-colors duration-300 uppercase tracking-widest text-xs font-semibold disabled:opacity-50',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
