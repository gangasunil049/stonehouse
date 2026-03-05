import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Send, MessageCircle, Instagram, ExternalLink, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Stonehouse Landscape";
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const contactMethods = [
        {
            icon: <Phone size={20} />,
            title: "Voice Support",
            description: "Dedicated assistance for your inquiries.",
            value: "+91 94978 30974",
            link: "tel:+919497830974",
            accent: "#4A6741"
        },
        {
            icon: <MessageCircle size={20} />,
            title: "WhatsApp Chat",
            description: "Quick responses for your garden needs.",
            value: "+91 94978 30974",
            link: "https://wa.me/919497830974",
            accent: "#128C7E"
        },
        {
            icon: <Instagram size={20} />,
            title: "Instagram",
            description: "Follow our latest landscape stories.",
            value: "@thestonehouselandscaping",
            link: "https://instagram.com/thestonehouselandscaping",
            accent: "#E1306C"
        }
    ];

    return (
        <div id="contact" className="contact-page" style={{ backgroundColor: '#FCFBFA', overflowX: 'hidden' }}>

            {/* ─── PREMIUM HERO ─────────────────────────────────────────────── */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                padding: '6rem 0',
                background: '#1A3620',
                overflow: 'hidden'
            }}>
                {/* Decorative background elements */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(74, 103, 65, 0.2) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ marginBottom: '4rem' }}
                    >
                        <h1 style={{
                            color: 'white',
                            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            margin: 0,
                            textAlign: 'left'
                        }}>
                            LET'S CRAFT YOUR<br />
                            <span style={{ color: '#E8D5B5' }}>LEGACY.</span>
                        </h1>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
                        {/* Image on the left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 50px 100px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <img src="/landscaping 2.jpeg" alt="Nature Inspired" style={{ width: '100%', height: isMobile ? '350px' : '500px', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,54,32,0.6), transparent)' }} />
                            </div>
                        </motion.div>

                        {/* Description on the right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: isMobile ? '1.1rem' : '1.4rem',
                                lineHeight: 1.6,
                                maxWidth: '600px',
                                fontWeight: 500
                            }}>
                                Whether it's a private estate or a commercial landmark, we bring your vision to life with artisanal precision and nature-inspired elegance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CONTACT GRID — FLOATING CARDS ────────────────────── */}
            <section style={{ marginTop: '-5rem', position: 'relative', zIndex: 10, paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '1.5rem 1.25rem',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: '#1A3620',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(26,54,32,0.05)',
                                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                }}
                                whileHover={{ y: -10, boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: method.accent + '15',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: method.accent,
                                    marginBottom: '1rem',
                                    transition: 'transform 0.5s ease'
                                }}>
                                    {method.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.25rem' }}>{method.title}</h3>
                                <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 1.2rem', lineHeight: 1.4 }}>{method.description}</p>

                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>{method.value}</span>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: '#F0F4F0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background 0.3s ease'
                                    }}>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VISIT US SECTION — MAP & OFFICE ────────────────────── */}
            <section style={{ padding: isMobile ? '3rem 0' : '6rem 0', background: '#1A3620' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1.1fr 0.9fr' : '1.3fr 0.7fr',
                        gap: '0',
                        borderRadius: isMobile ? '20px' : '40px',
                        overflow: 'hidden',
                        boxShadow: '0 50px 100px rgba(0,0,0,0.3)'
                    }}>
                        {/* Map side */}
                        <div style={{ position: 'relative', height: isMobile ? '300px' : '500px', background: '#222' }}>
                            <iframe
                                title="Stonehouse Location"
                                src="https://www.google.com/maps?q=stone+house+landscaping,manthamruthi,ranny,pincode+689676&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, opacity: 0.8, filter: 'grayscale(0.3) contrast(1.1)' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>

                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '15px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                maxWidth: '300px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#4A6741', marginBottom: '0.8rem' }}>
                                    <MapPin size={18} />
                                    <span style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase' }}>Showroom</span>
                                </div>
                                <p style={{ fontSize: isMobile ? '0.6rem' : '0.9rem', fontWeight: 700, margin: 0, color: '#1A3620', lineHeight: 1.4 }}>
                                    Stone house landscaping,<br />Manthamruthi, Ranny — 689676
                                </p>
                            </div>
                        </div>

                        {/* Info side */}
                        <div style={{ padding: isMobile ? '1.5rem' : '3rem', background: '#F9FAF9', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 style={{ fontSize: isMobile ? '1rem' : '2rem', fontWeight: 900, marginBottom: isMobile ? '1rem' : '2rem', color: '#1A3620' }}>VISIT OUR <br /><span style={{ color: '#4A6741' }}>LANDSCAPE LAB.</span></h2>

                            <div style={{ display: 'grid', gap: isMobile ? '1rem' : '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: isMobile ? '0.5rem' : '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: isMobile ? '0.4rem' : '0.8rem' }}>Office Hours</h4>
                                    <div style={{ display: 'grid', gap: '0.4rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: isMobile ? '0.6rem' : '0.9rem' }}>
                                            <span>Mon – Sat</span>
                                            <span style={{ color: '#4A6741' }}>{isMobile ? '9AM–6PM' : '9:00 AM – 6:00 PM'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps?q=stone+house+landscaping+manthamruthi+ranny+689676"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginTop: isMobile ? '1.5rem' : '2.5rem',
                                    padding: isMobile ? '0.6rem' : '1rem',
                                    background: '#1A3620',
                                    color: 'white',
                                    borderRadius: '100px',
                                    border: 'none',
                                    fontWeight: 800,
                                    fontSize: isMobile ? '0.55rem' : '0.75rem',
                                    textAlign: 'center',
                                    textShadow: 'none',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                }}
                            >
                                {isMobile ? 'DIRECTIONS' : 'GET DIRECTIONS'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
