import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function Button({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md',
    pill = false,
    ...props 
}) {
    const variants = {
        primary: 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90',
        secondary: 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]',
        outline: 'border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]',
        ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5',
        accent: 'bg-accent text-white hover:bg-accent-hover',
        glass: 'glass text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] border-[var(--border-color)]',
    };

    const sizes = {
        sm: 'px-5 py-2 text-[10px]',
        md: 'px-8 py-3.5 text-[11px]',
        lg: 'px-12 py-5 text-[12px]',
    };

    return (
        <motion.button
            whileHover={{ 
                y: -2,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                'inline-flex items-center justify-center transition-all duration-500 uppercase tracking-[0.3em] font-bold disabled:opacity-50 disabled:cursor-not-allowed',
                sizes[size],
                variants[variant],
                pill ? 'rounded-full' : 'rounded-none',
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
