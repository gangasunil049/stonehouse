import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink, ArrowDown, MoveRight, Instagram } from 'lucide-react';

// Sub-components to keep Home.jsx clean
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';

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
            value: "+91 9497 830 974",
            link: "tel:+919497830974"
        },
        {
            icon: <MessageCircle size={28} />,
            title: "WhatsApp Chat",
            value: "+91 9778 081 656",
            link: "https://wa.me/919778081656",
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        style={{ textAlign: 'center', zIndex: 10, width: '100%', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            {/* Original Stars */}
                            <MagicStar style={{ top: '-15px', left: '-25px', width: '24px', height: '24px' }} delay={0} />
                            <MagicStar style={{ top: '25%', right: '-35px', width: '18px', height: '18px' }} delay={1.2} />
                            <MagicStar style={{ bottom: '5px', left: '35%', width: '14px', height: '14px' }} delay={0.6} />
                            <MagicStar style={{ top: '5px', left: '15%', width: '12px', height: '12px' }} delay={2} />
                            <MagicStar style={{ bottom: '-20px', right: '15%', width: '26px', height: '26px' }} delay={1.8} />

                            {/* New Additional Stars */}
                            <MagicStar style={{ top: '-30px', left: '40%', width: '16px', height: '16px' }} delay={0.3} />
                            <MagicStar style={{ bottom: '25px', left: '-40px', width: '20px', height: '20px' }} delay={1.5} />
                            <MagicStar style={{ top: '15px', right: '20%', width: '10px', height: '10px' }} delay={2.5} />
                            <MagicStar style={{ bottom: '-10px', right: '-10px', width: '18px', height: '18px' }} delay={0.9} />
                            <MagicStar style={{ top: '60%', left: '-15px', width: '12px', height: '12px' }} delay={2.2} />
                            <MagicStar style={{ top: '-10px', right: '5%', width: '14px', height: '14px' }} delay={1.1} />
                            <MagicStar style={{ bottom: '40%', left: '50%', width: '8px', height: '8px' }} delay={2.8} />

                            <h1 className="text-sparkle" style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                                lineHeight: 1.1,
                                marginBottom: '1rem',
                                fontWeight: 700
                            }}>
                                Your gateway to <br /> <span style={{ fontStyle: 'italic', fontWeight: 600 }}>New Gardens</span>
                            </h1>
                        </div>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#ffffff',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                            fontSize: '1.1rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            opacity: 0.95,
                            marginBottom: '0.5rem',
                            fontWeight: 600
                        }}>
                            Green solutions For your space
                        </p>
                        <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#b08d55',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            opacity: 0.8,
                            fontWeight: 600
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

            {/* ULTRA PREMIUM CONTACT SECTION */}
            <section id="contact" style={{
                background: 'linear-gradient(180deg, #1a3620 0%, #0d1a10 100%)',
                padding: isMobile ? '1rem 0 2rem 0' : '10rem 0',
                color: 'white',
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
                            className="text-5xl md:text-7xl font-light"
                            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em', color: '#e8d5b5' }}
                        >
                            Let's Build Your <span style={{ fontStyle: 'italic', color: 'white' }}>Sanctuary.</span>
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
                                    background: 'rgba(255,255,255,0.01)',
                                    border: '1px solid rgba(232, 213, 181, 0.1)',
                                    textDecoration: 'none',
                                    color: 'white',
                                    borderRadius: '8px',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'center'
                                }}
                                whileHover={!isMobile ? {
                                    background: 'rgba(232, 213, 181, 0.03)',
                                    borderColor: 'rgba(232, 213, 181, 0.3)',
                                    transform: 'translateY(-5px)'
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
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(232, 213, 181, 0.1)',
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
                                <div className="relative group overflow-hidden" style={{ height: isMobile ? '150px' : '300px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <iframe
                                        src="https://www.google.com/maps?q=stone+house+manthamaruthi,ranni,kerala,689676&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) opacity(0.6)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                    <a
                                        href="https://www.google.com/maps?q=stone+house+manthamaruthi,ranni,kerala,689676"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 bg-transparent flex items-center justify-center group-hover:bg-primary/20 transition-all"
                                    >
                                        <div className="bg-white text-primary px-4 py-2 text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            Open Map
                                        </div>
                                    </a>
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
