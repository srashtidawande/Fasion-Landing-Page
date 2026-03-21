import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
    return (
        <div className="pt-40 pb-24 bg-[var(--bg-primary)] transition-colors duration-500">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center"
                >
                    <span className="overline-text">Concierge</span>
                    <h1 className="heading-luxury">Get In <span className="not-italic font-bold">Touch</span></h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-16">
                        <div className="space-y-10">
                            <span className="overline-text">Our Atelier</span>
                            <div className="space-y-8 text-[var(--text-secondary)] font-light">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                                        <MapPin size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Location</p>
                                        <p className="text-lg">742 Fashion Avenue, New York, NY 10018</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                                        <Phone size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Phone</p>
                                        <p className="text-lg">+1 (212) 555-0198</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                                        <Mail size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Email</p>
                                        <p className="text-lg">atelier@luxe-fashion.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <span className="overline-text">Appointments</span>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[var(--text-secondary)] font-light">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Mon — Fri</p>
                                    <p>10:00 AM — 8:00 PM</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Saturday</p>
                                    <p>11:00 AM — 7:00 PM</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--text-primary)] mb-2">Sunday</p>
                                    <p>12:00 PM — 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <span className="overline-text">Connect</span>
                            <div className="flex gap-6">
                                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="w-14 h-14 border border-[var(--border-color)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:bg-accent hover:text-white hover:border-accent transition-all duration-500">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-secondary)] p-12 lg:p-16 rounded-[3rem] border border-[var(--border-color)] shadow-2xl shadow-accent/5">
                        <div className="mb-12">
                            <span className="overline-text">Direct Message</span>
                            <h2 className="text-3xl font-serif italic text-[var(--text-primary)]">Send an <span className="not-italic font-bold">Inquiry</span></h2>
                        </div>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-primary)] pl-1">Full Name</label>
                                    <input type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 outline-none focus:border-accent text-[var(--text-primary)] transition-all placeholder:text-[var(--text-secondary)]/30" placeholder="Jane Doe" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-primary)] pl-1">Email Address</label>
                                    <input type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 outline-none focus:border-accent text-[var(--text-primary)] transition-all placeholder:text-[var(--text-secondary)]/30" placeholder="jane@example.com" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-primary)] pl-1">Subject</label>
                                <select className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 outline-none focus:border-accent text-[var(--text-primary)] transition-all appearance-none cursor-pointer">
                                    <option>Customer Support</option>
                                    <option>Press Inquiries</option>
                                    <option>Wholesale</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-primary)] pl-1">Message</label>
                                <textarea className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 outline-none focus:border-accent text-[var(--text-primary)] transition-all min-h-[150px] placeholder:text-[var(--text-secondary)]/30 resize-none" placeholder="How can we assist you?"></textarea>
                            </div>
                            <Button variant="primary" className="w-full py-5 rounded-2xl shadow-xl shadow-accent/20">
                                Send Inquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
