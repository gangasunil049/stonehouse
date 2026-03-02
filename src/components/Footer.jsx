import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <footer className="footer-light bg-[#f9f8f4]" style={{ padding: isMobile ? '3rem 0 2rem' : '8rem 0 4rem', color: '#1a1a1a' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: isMobile ? '2rem' : '6rem', marginBottom: isMobile ? '2rem' : '6rem' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginBottom: '2rem'
                        }}>
                            <div className="circular-logo-container" style={{
                                width: isMobile ? '60px' : '80px',
                                height: isMobile ? '60px' : '80px',
                                background: 'white',
                                border: '1px solid rgba(0,0,0,0.1)',
                                marginBottom: '0'
                            }}>
                                <img src="/logo.jpeg" alt="Stonehouse Footer Logo" className="circular-logo-img" />
                            </div>
                            <h3 className={isMobile ? "text-xl font-black mb-0 text-black" : "text-2xl font-black mb-0 text-black"}>STONE HOUSE</h3>
                        </div>
                        <p className="leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(0,0,0,0.7)', fontSize: isMobile ? '0.8rem' : '1rem' }}>
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
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Meet The Developers
                    </p>
                    <a
                        href="https://www.instagram.com/intellex.web?igsh=MXc4Z2Uwd243OHpqdA%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '12px', color: 'rgba(0,0,0,0.6)', textDecoration: 'none', fontWeight: 600, marginBottom: '1rem', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.6)'}
                    >
                        <Instagram size={14} />
                        @intellex.web
                    </a>
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                        &copy; {new Date().getFullYear()} Stone House. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
