import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, MessageCircle, Instagram, ExternalLink, Clock } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Stonehouse Landscape";
    }, []);

    const contactMethods = [
        {
            icon: <Phone size={28} />,
            title: "Call Us",
            value: "+91 98765 43210",
            link: "tel:+919876543210",
            label: "Voice Support",
            bg: "#f5f5f0"
        },
        {
            icon: <MessageCircle size={28} />,
            title: "WhatsApp",
            value: "+91 98765 43210",
            link: "https://wa.me/919876543210",
            label: "Quick Chat",
            bg: "#f0faf4"
        },
        {
            icon: <Instagram size={28} />,
            title: "Instagram",
            value: "thestonehouselandscaping",
            link: "https://instagram.com/thestonehouselandscaping",
            label: "Our Portfolio",
            bg: "#fdf5f0"
        }
    ];

    return (
        <div className="contact-page">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section style={{ position: 'relative', height: '55vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <img src="/landscaping 2.jpeg" alt="Contact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.2))' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.span
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--primary)', fontWeight: 900, letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                        style={{ color: 'white', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, margin: 0 }}
                    >
                        Let's Build Your<br />
                        <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Signature</span> Space.
                    </motion.h1>
                </div>
            </section>

            {/* ─── CONTACT METHODS — FULL-WIDTH VERTICAL STACK ────── */}
            <section style={{ background: 'var(--cream)', paddingTop: '5rem', paddingBottom: '3rem' }}>
                <div className="container">

                    <div style={{ maxWidth: '780px', marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.8rem' }}>Reach Us Directly</p>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, margin: 0 }}>Choose how you'd like to <span style={{ color: 'var(--primary)' }}>connect.</span></h2>
                    </div>

                    {/* THREE CARDS — ONE BELOW ANOTHER */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '3rem' }}>
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '2.5rem',
                                    padding: '2.5rem 3rem',
                                    background: 'white',
                                    border: '2px solid var(--primary)',
                                    textDecoration: 'none',
                                    color: 'black',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    boxShadow: '0 2px 20px rgba(0,0,0,0.04)'
                                }}
                                whileHover={{ scale: 1.012, boxShadow: '0 8px 40px rgba(0,0,0,0.1)' }}
                            >
                                {/* Icon bubble */}
                                <div style={{
                                    width: '72px', height: '72px', borderRadius: '50%',
                                    background: method.bg, flexShrink: 0,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--primary)', border: '1.5px solid var(--primary)'
                                }}>
                                    {method.icon}
                                </div>

                                {/* Text */}
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.4, margin: '0 0 0.4rem' }}>{method.label}</p>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '0 0 0.4rem' }}>{method.title}</h3>
                                    <p style={{ fontSize: '1rem', fontWeight: 700, opacity: 0.6, margin: 0 }}>{method.value}</p>
                                </div>

                                {/* Arrow */}
                                <ExternalLink size={20} style={{ color: 'var(--primary)', opacity: 0.5, flexShrink: 0 }} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INQUIRY FORM ─────────────────────────────────────── */}
            <section style={{ background: 'white', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'start' }}>

                        {/* FORM */}
                        <div>
                            <p style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.8rem' }}>Inquiry Form</p>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '0.8rem' }}>Send a <span style={{ color: 'var(--primary)' }}>Message.</span></h2>
                            <p style={{ opacity: 0.5, marginBottom: '3rem', fontWeight: 600 }}>Our team will respond within 24 hours.</p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>Your Name</label>
                                        <input type="text" placeholder="e.g. Ravi Kumar" style={{ padding: '1.2rem', background: '#f5f5f0', border: 'none', fontWeight: 700, outline: 'none', width: '100%' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>Phone Number</label>
                                        <input type="tel" placeholder="+91..." style={{ padding: '1.2rem', background: '#f5f5f0', border: 'none', fontWeight: 700, outline: 'none', width: '100%' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>Project Location</label>
                                    <input type="text" placeholder="e.g. Ranni, Pathanamthitta" style={{ padding: '1.2rem', background: '#f5f5f0', border: 'none', fontWeight: 700, outline: 'none', width: '100%' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>Project Details</label>
                                    <textarea rows="5" placeholder="Describe your landscape vision..." style={{ padding: '1.2rem', background: '#f5f5f0', border: 'none', fontWeight: 700, outline: 'none', resize: 'none', width: '100%' }}></textarea>
                                </div>
                                <button className="cta-btn cta-primary" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.2em' }}>
                                    SEND INQUIRY <Send size={16} />
                                </button>
                            </form>
                        </div>

                        {/* OFFICE INFO + MAP */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Hours */}
                            <div style={{ background: '#f5f5f0', padding: '2.5rem', border: '2px solid var(--primary)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Clock size={20} style={{ color: 'var(--primary)' }} />
                                    <h4 style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Office Hours</h4>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, opacity: 0.6, marginBottom: '0.6rem' }}>
                                    <span>Mon – Sat</span><span>9:00 AM – 6:00 PM</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, opacity: 0.6 }}>
                                    <span>Sunday</span><span>Closed</span>
                                </div>
                            </div>

                            {/* Map */}
                            <a
                                href="https://www.google.com/maps?q=9.42219,76.79711"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ background: 'black', color: 'white', padding: '2.5rem', textDecoration: 'none', display: 'block' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Main Showroom</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.8rem', color: 'white' }}>Visit Our <span style={{ color: 'var(--primary)' }}>Location.</span></h3>
                                <p style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.6, margin: 0 }}>
                                    Manthamaruthy, Ranni,<br />Kerala — 689673
                                </p>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
