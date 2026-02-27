import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer-light bg-[#f9f8f4]" style={{ padding: '8rem 0 4rem', color: '#1a1a1a' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '6rem', marginBottom: '6rem' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="circular-logo-container mb-8" style={{ width: '80px', height: '80px', background: 'white', border: '1px solid rgba(0,0,0,0.1)' }}>
                            <img src="/logo.jpeg" alt="Stonehouse Footer Logo" className="circular-logo-img" />
                        </div>
                        <h3 className="text-2xl font-black mb-6 text-black">STONEHOUSE LANDSCAPE</h3>
                        <p className="leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
                            Planting outdoor dreams and crafting natural stone legacies that last for generations.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Facebook size={20} className="text-primary cursor-pointer hover:text-black transition-colors" />
                            <Instagram size={20} className="text-primary cursor-pointer hover:text-black transition-colors" />
                            <Twitter size={20} className="text-primary cursor-pointer hover:text-black transition-colors" />
                        </div>
                    </motion.div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
                    className="pt-8 text-center"
                >
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                        &copy; {new Date().getFullYear()} Stonehouse Landscape. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
