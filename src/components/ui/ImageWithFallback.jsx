import { motion } from 'framer-motion';

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop";

export function ImageWithFallback({ src, alt, className, fallback = DEFAULT_FALLBACK, isMotion = false, ...props }) {
    const handleError = (e) => {
        if (e.target.src !== fallback) {
            e.target.src = fallback;
        }
    };

    if (isMotion) {
        return (
            <motion.img
                src={src || fallback}
                alt={alt}
                className={className}
                onError={handleError}
                {...props}
            />
        );
    }

    return (
        <img
            src={src || fallback}
            alt={alt}
            className={className}
            onError={handleError}
            {...props}
        />
    );
}
