import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { ThemeContext } from './ThemeContext.js';
import { WishlistContext } from './WishlistContext.js';

import { NotificationContext } from './NotificationContext.jsx';

export const useCart = () => useContext(CartContext);
export const useNotification = () => useContext(NotificationContext);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useWishlist = () => useContext(WishlistContext);
