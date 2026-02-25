import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) => item.id === product.id && item.selectedSize === product.selectedSize
            );
            if (existing) {
                return prev.map((item) =>
                    (item.id === product.id && item.selectedSize === product.selectedSize)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, selectedSize) => {
        setCart((prev) => prev.filter(
            (item) => !(item.id === productId && item.selectedSize === selectedSize)
        ));
    };

    const updateQuantity = (productId, selectedSize, delta) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === productId && item.selectedSize === selectedSize) {
                    const newQuantity = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item.quantity > 0)
        );
    };

    const updateSize = (productId, oldSize, newSize) => {
        if (oldSize === newSize) return;

        setCart((prev) => {
            const itemToUpdate = prev.find(item => item.id === productId && item.selectedSize === oldSize);
            if (!itemToUpdate) return prev;

            const existingItemWithNewSize = prev.find(item => item.id === productId && item.selectedSize === newSize);

            if (existingItemWithNewSize) {
                // Merge quantities
                return prev.map(item => {
                    if (item.id === productId && item.selectedSize === newSize) {
                        return { ...item, quantity: item.quantity + itemToUpdate.quantity };
                    }
                    return item;
                }).filter(item => !(item.id === productId && item.selectedSize === oldSize));
            } else {
                // Just update the size
                return prev.map(item => {
                    if (item.id === productId && item.selectedSize === oldSize) {
                        return { ...item, selectedSize: newSize };
                    }
                    return item;
                });
            }
        });
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            isCartOpen,
            setIsCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateSize,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
