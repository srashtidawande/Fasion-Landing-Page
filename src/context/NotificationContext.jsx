import { createContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const showNotification = useCallback((message, type = 'info') => {
        const id = Math.random().toString(36).substr(2, 9);
        setNotifications((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 5000);
    }, []);

    const removeNotification = useCallback((id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4 pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {notifications.map((n) => (
                        <motion.div
                            key={n.id}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            layout
                            className="pointer-events-auto"
                        >
                            <div className="glass-dark border border-white/10 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px] backdrop-blur-xl">
                                <div className={`${
                                    n.type === 'success' ? 'text-green-400' : 
                                    n.type === 'error' ? 'text-red-400' : 'text-accent'
                                }`}>
                                    {n.type === 'success' ? <CheckCircle2 size={20} /> : 
                                     n.type === 'error' ? <AlertCircle size={20} /> : <Info size={20} />}
                                </div>
                                <p className="text-white text-xs font-black uppercase tracking-[0.2em] flex-1">
                                    {n.message}
                                </p>
                                <button 
                                    onClick={() => removeNotification(n.id)}
                                    className="text-white/40 hover:text-white transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </NotificationContext.Provider>
    );
}

// Export the context so hooks.js can use it
export { NotificationContext };
