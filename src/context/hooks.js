import { useContext } from 'react';
import { CartContext } from './contexts/CartContext';
import { ThemeContext } from './contexts/ThemeContext';
import { WishlistContext } from './contexts/WishlistContext';

export const useCart = () => useContext(CartContext);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useWishlist = () => useContext(WishlistContext);
