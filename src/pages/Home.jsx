import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, ArrowDown, MoveRight, Instagram } from 'lucide-react';

// Sub-components to keep Home.jsx clean
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';

const MagicStar = ({ style, delay }) => (
    <div className="magic-star" style={{ ...style, animationDelay: `${delay}s` }}>
        <svg viewBox="0 0 512 512">
            <path d="M256 0c0 141.385-114.615 256-256 256 141.385 0 256 114.615 256 256 0-141.385 114.615-256 256-256-141.385 0-256-114.615-256-256z" />
        </svg>
    </div>
);

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        document.title = "Stonehouse Landscape | Planting Outdoor for Your Dream";
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const contactMethods = [
        {
            icon: <Phone size={28} />,
            title: "Call Us Now",
            value: "+91 94978 30974",
            link: "tel:+919497830974"
        },
        {
            icon: <MessageCircle size={28} />,
            title: "WhatsApp Chat",
            value: "+91 94978 30974",
            link: "https://wa.me/919497830974",
            color: "#25D366"
        },
        {
            icon: <Instagram size={28} />,
            title: "Instagram",
            value: "@thestonehouselandscaping",
            link: "https://instagram.com/thestonehouselandscaping"
        }
    ];

    return (
        <div className="single-page-layout">
            {/* REDESIGNED HERO SECTION: FULL-WIDTH BACKGROUND */}
            <section id="home" className="hero-full-section">
                <div className="hero-bg-container">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            scale: { duration: 10, ease: "linear" },
                            opacity: { duration: 2, ease: "easeOut" }
                        }}
                        src="/background.jpeg"
                        className="hero-bg-img"
                        alt="Stonehouse Luxury Landscape Background"
                        style={{ transformOrigin: 'center center' }}
                    />
                    <div className="hero-bg-overlay"></div>
                </div>

                <div className="hero-main-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        style={{ textAlign: 'left', zIndex: 10, maxWidth: '800px' }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 0.8 }}
                            style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '0.5rem 1.2rem',
                                borderRadius: '50px',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'white',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '2rem',
                                display: 'inline-block',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            Nature Inspired
                        </motion.span>
                        <h1 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 'clamp(3rem, 10vw, 6rem)',
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-0.02em',
                            overflow: 'visible',
                            paddingRight: '0.3em'
                        }}>
                            <span className="text-sparkle" style={{ paddingRight: '0.1em' }}>Your gateway to</span> <br /> <span className="text-sparkle" style={{ fontWeight: 800, paddingRight: '0.1em' }}>New Gardens</span>
                        </h1>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#ffffff',
                            fontSize: '1.1rem',
                            opacity: 0.8,
                            marginBottom: '1rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            maxWidth: '600px',
                            lineHeight: 1.6
                        }}>
                            Green solutions For your space
                        </p>
                        <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            color: '#a8d5a2',
                            fontSize: '1rem',
                            opacity: 1,
                            marginBottom: '3rem',
                            fontWeight: 500,
                            maxWidth: '500px',
                            lineHeight: 1.6
                        }}>
                            Pave the way to a Beautiful Greener Future..
                        </p>


                    </motion.div>
                </div>

                {/* Scroll to Explore Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 20,
                        cursor: 'pointer'
                    }}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span style={{
                        color: '#ffffff',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '0.8rem',
                        opacity: 0.7,
                        fontWeight: 600,
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                        Scroll to Explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ArrowDown size={18} color="#ffffff" style={{ opacity: 0.7, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTIONS */}
            <About />
            <WhyChooseUs />
            <Services />
            <Process />
            <Gallery />
            <Reviews />

            {/* ULTRA PREMIUM CONTACT SECTION */}
            <section id="contact" style={{
                background: 'white',
                padding: isMobile ? '1rem 0 2rem 0' : '10rem 0',
                color: 'var(--primary)',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, tracking: '0.1em' }}
                            whileInView={{ opacity: 0.6, tracking: '0.4em' }}
                            viewport={{ once: true }}
                            className="font-bold uppercase text-[0.6rem] mb-6 block text-[#e8d5b5]"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl font-bold"
                            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em', color: 'var(--primary)' }}
                        >
                            Let's Build Your <span style={{ fontStyle: 'italic', color: '#5a7a50' }}>Sanctuary.</span>
                        </motion.h2>
                    </div>

                    {/* CONTACT CARDS — PREMIUM MINIMALISM */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: isMobile ? '0.75rem' : '2rem',
                        marginBottom: isMobile ? '3rem' : '8rem'
                    }}>
                        {contactMethods.map((method, i) => (
                            <motion.a
                                key={i}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: isMobile ? '1.5rem 0.5rem' : '4rem 2rem',
                                    background: 'var(--primary)',
                                    border: '1px solid rgba(74,103,65,0.2)',
                                    textDecoration: 'none',
                                    color: 'white',
                                    borderRadius: '12px',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 20px rgba(74,103,65,0.15)'
                                }}
                                whileHover={!isMobile ? {
                                    background: '#2C4C34',
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 12px 40px rgba(74,103,65,0.3)'
                                } : {}}
                            >
                                <div style={{ color: '#e8d5b5', marginBottom: isMobile ? '0.75rem' : '1.5rem', opacity: 0.8 }}>
                                    {React.cloneElement(method.icon, { size: isMobile ? 20 : 28 })}
                                </div>
                                <p style={{ fontSize: isMobile ? '0.5rem' : '0.6rem', fontWeight: 600, letterSpacing: isMobile ? '0.1rem' : '0.3rem', textTransform: 'uppercase', color: '#e8d5b5', margin: '0 0 0.5rem', opacity: 0.6 }}>{isMobile ? method.title.split(' ')[0] : method.title}</p>
                                <p style={{ fontSize: isMobile ? '0.65rem' : '1rem', fontWeight: 300, margin: 0, fontFamily: "'Montserrat', sans-serif" }}>{isMobile && method.value.includes('@') ? '@thestonehouse...' : method.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    {/* FORM + MAP — CONSOLIDATED SPLIT */}
                    {/* FORM + MAP — CONSOLIDATED SPLIT */}
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {/* MAP ONLY */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <div style={{
                                padding: isMobile ? '1rem' : '2rem',
                                background: 'var(--primary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                position: 'relative'
                            }}>
                                <div className="flex items-start gap-4 mb-6">
                                    <MapPin size={24} className="text-[#e8d5b5]" />
                                    <div>
                                        <h4 className="text-xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Stonehouse Landscape</h4>
                                        <p className="text-[0.65rem] text-[#e8d5b5]/60 tracking-widest font-bold max-w-[200px]">Stone house, Manthamaruthi, Ranni, Kerala, 689676</p>
                                    </div>
                                </div>

                                {/* ULTRA COMPACT MAP CONTAINER */}
                                <div className="relative overflow-hidden" style={{ height: isMobile ? '150px' : '300px', borderRadius: '8px', overflow: 'hidden' }}>
                                    <iframe
                                        src="https://www.google.com/maps?q=stone+house+manthamaruthi,ranni,kerala,689676&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
