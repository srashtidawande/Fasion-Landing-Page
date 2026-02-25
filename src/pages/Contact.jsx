import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Contact() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight italic dark:text-white transition-colors">Contact Us</h1>
                    <p className="text-muted dark:text-gray-400 tracking-[0.3em] uppercase text-xs transition-colors">We are here to assist you</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif tracking-tight dark:text-white transition-colors">Visit Our Atelier</h2>
                            <div className="space-y-4 text-muted dark:text-gray-400 font-light transition-colors">
                                <div className="flex items-center gap-4">
                                    <MapPin size={20} className="text-accent" />
                                    <p>742 Fashion Avenue, New York, NY 10018</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone size={20} className="text-accent" />
                                    <p>+1 (212) 555-0198</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail size={20} className="text-accent" />
                                    <p>atelier@luxe-fashion.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif tracking-tight dark:text-white transition-colors">Store Hours</h2>
                            <div className="grid grid-cols-2 gap-4 text-muted dark:text-gray-400 font-light text-sm transition-colors">
                                <p>Monday — Friday</p>
                                <p>10:00 AM — 8:00 PM</p>
                                <p>Saturday</p>
                                <p>11:00 AM — 7:00 PM</p>
                                <p>Sunday</p>
                                <p>12:00 PM — 6:00 PM</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif tracking-tight dark:text-white transition-colors">Social Networks</h2>
                            <div className="flex gap-6">
                                <a href="#" className="p-3 border border-primary/10 dark:border-white/10 rounded-full hover:bg-primary dark:text-white hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-3 border border-primary/10 dark:border-white/10 rounded-full hover:bg-primary dark:text-white hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-3 border border-primary/10 dark:border-white/10 rounded-full hover:bg-primary dark:text-white hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f9f9f9] p-8 md:p-12 space-y-8">
                        <h2 className="text-2xl font-serif tracking-tight">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold dark:text-white">Full Name</label>
                                <input type="text" className="w-full bg-white dark:bg-gray-800 border border-primary/5 dark:border-white/10 px-4 py-3 outline-none focus:border-accent dark:text-white transition-colors" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold dark:text-white">Email Address</label>
                                <input type="email" className="w-full bg-white dark:bg-gray-800 border border-primary/5 dark:border-white/10 px-4 py-3 outline-none focus:border-accent dark:text-white transition-colors" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold dark:text-white">Subject</label>
                                <select className="w-full bg-white dark:bg-gray-800 border border-primary/5 dark:border-white/10 px-4 py-3 outline-none focus:border-accent dark:text-white transition-colors">
                                    <option className="bg-white dark:bg-gray-800">Customer Support</option>
                                    <option className="bg-white dark:bg-gray-800">Press Inquiries</option>
                                    <option className="bg-white dark:bg-gray-800">Wholesale</option>
                                    <option className="bg-white dark:bg-gray-800">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold dark:text-white">Message</label>
                                <textarea className="w-full bg-white dark:bg-gray-800 border border-primary/5 dark:border-white/10 px-4 py-3 outline-none focus:border-accent dark:text-white transition-colors min-h-[150px]" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-primary dark:bg-white text-white dark:text-black py-4 uppercase tracking-[0.2em] font-bold text-xs hover:bg-black dark:hover:bg-gray-200 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
