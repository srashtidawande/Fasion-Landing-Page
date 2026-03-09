import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 20);
            cursorY.set(e.clientY - 20);
        };

        const handleHover = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
            }}
            className={`cursor-follow hidden lg:block ${isHovering ? 'scale-150 bg-accent/10 border-accent/50' : ''}`}
            animate={{
                scale: isHovering ? 1.5 : 1,
            }}
        />
    );
}
