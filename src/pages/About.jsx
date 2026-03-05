import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Counter = ({ end, suffix = "", duration = 2.5 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const totalFrames = duration * 60;
            const increment = end / totalFrames;
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
    useEffect(() => {
        document.title = "About Us | Stonehouse Landscape";
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
    const imgControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isInView) return;
        const runSequence = async () => {
            // Phase 1: appear small
            await imgControls.start({
                opacity: 1,
                scale: isMobile ? 0.4 : 0.18,
                x: isMobile ? 0 : '-120vw',
                rotate: 0,
                borderRadius: '50%',
                transition: { duration: 0.5, ease: 'easeOut' }
            });
            // Phase 2: spin and fly to the right
            await imgControls.start({
                scale: isMobile ? 0.4 : 0.22,
                x: 0,
                rotate: 360,
                borderRadius: '50%',
                transition: { duration: isMobile ? 1.2 : 3.2, ease: [0.4, 0, 0.2, 1] }
            });
            // Phase 3: bloom to full size
            await imgControls.start({
                scale: 1,
                borderRadius: '32px',
                transition: { duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }
            });
            // Phase 4: text appears
            textControls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1 }
            });
        };
        runSequence();
    }, [isInView, isMobile]);

    return (
        <div id="about" className="about-page" style={{ backgroundColor: 'var(--bg-white)', width: '100%', overflowX: 'hidden' }}>

            {/* CINEMATIC HERO — Sequential Animation */}
            <section style={{
                position: 'relative',
                marginTop: '4rem',
                padding: isMobile ? '4rem 0 2rem 0' : '6rem 0 4rem 0',
                backgroundColor: 'var(--bg-cream)',
                overflow: 'hidden',
                minHeight: isMobile ? 'auto' : '90vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(74,103,65,0.05) 0%, transparent 60%)', zIndex: 0 }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
                    <div ref={sectionRef} style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '2.5rem' : '4rem',
                        alignItems: 'center',
                    }}>
                        {/* LEFT — Text */}
                        <motion.div
                            animate={textControls}
                            initial={{ opacity: 0, x: -80 }}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 16 }}
                                animate={textControls}
                                style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.5rem', opacity: 0 }}
                            >
                                Discover Our Roots
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={textControls}
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: isMobile ? 'clamp(3rem, 15vw, 5rem)' : 'clamp(5rem, 12vw, 9rem)',
                                    fontWeight: 900,
                                    lineHeight: 0.9,
                                    letterSpacing: '-0.03em',
                                    color: 'var(--primary)',
                                    marginBottom: '3rem',
                                    textTransform: 'uppercase',
                                    opacity: 0
                                }}
                            >
                                ABOUT US.
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={textControls}
                                style={{
                                    fontFamily: "'Sacramento', cursive",
                                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                                    color: 'var(--primary)',
                                    marginBottom: '0.8rem',
                                    marginTop: '0',
                                    fontWeight: 400,
                                    opacity: 0
                                }}
                            >
                                "Crafting Legacy Through Landscaping"
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={textControls}
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.8,
                                    fontWeight: 400,
                                    maxWidth: '480px',
                                    opacity: 0
                                }}
                            >
                                Stonehouse offers expert landscaping and stone paving for residential and commercial properties. Our experienced landscapers set the bar high each day in landscape designing and paving. We strive to revolutionize the art of landscaping and exceed the expectations of our customers.
                            </motion.p>
                        </motion.div>

                        {/* RIGHT — Image */}
                        <motion.div
                            animate={imgControls}
                            initial={{
                                opacity: 0,
                                scale: 0.12,
                                x: isMobile ? 0 : '-120vw',
                                rotate: 0,
                                borderRadius: '50%'
                            }}
                            style={{
                                position: 'relative',
                                height: isMobile ? '320px' : '70vh',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.18)',
                                willChange: 'transform, opacity'
                            }}
                        >
                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', borderRadius: 'inherit' }}>
                                <img
                                    src="/about.jpeg"
                                    alt="About Stonehouse"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'kenBurns 14s ease-in-out infinite alternate' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,76,52,0.3) 0%, transparent 60%)' }} />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section >


            {/* STATS COUNTERS */}
            < section style={{ backgroundColor: 'var(--bg-white)', padding: isMobile ? '2rem 0 1rem 0' : '4rem 0 2rem 0', borderTop: '1px solid rgba(26,54,32,0.05)', borderBottom: '1px solid rgba(26,54,32,0.05)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: isMobile ? '1rem' : '4rem',
                        textAlign: 'center'
                    }}>
                        {[
                            { label: isMobile ? "Exp" : "Years of Experience", value: 15, suffix: "+" },
                            { label: isMobile ? "Projects" : "Projects Completed", value: 350, suffix: "+" },
                            { label: isMobile ? "Clients" : "Happy Clients", value: 300, suffix: "+" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                                whileHover={!isMobile ? { scale: 1.05, y: -5, transition: { duration: 0.3 } } : {}}
                                style={{
                                    padding: isMobile ? '1rem 0.5rem' : '2rem',
                                    borderRadius: '8px',
                                    cursor: 'default',
                                    backgroundColor: 'rgba(26,54,32,0.02)',
                                    border: '1px solid rgba(26,54,32,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: (i * 0.15) + 0.2 }}
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: isMobile ? '2.2rem' : 'clamp(3.5rem, 7vw, 5.5rem)',
                                        color: 'var(--primary)',
                                        fontWeight: 700,
                                        marginBottom: '0.2rem',
                                        lineHeight: 1,
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: (i * 0.15) + 0.4 }}
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: isMobile ? '0.6rem' : '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: isMobile ? '0.15em' : '0.25em',
                                        color: 'var(--text-muted)',
                                        fontWeight: 700,
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* MISSION STATEMENT */}
            < section style={{ backgroundColor: 'var(--bg-white)', padding: isMobile ? '2rem 0' : '4rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 }}
                        style={{
                            backgroundColor: 'var(--primary)',
                            padding: isMobile ? '3rem 1.5rem' : '5rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                            position: 'relative'
                        }}
                    >
                        {/* Decorative Quote Mark / Leaf abstract */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                            style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#e8d5b5', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid var(--bg-white)' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e8d5b5', fontWeight: 600, marginBottom: '2rem' }}
                        >
                            Our Philosophy
                        </motion.span>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', fontStyle: 'italic', color: 'white', lineHeight: 1.4, fontWeight: 400, marginBottom: '2rem', letterSpacing: '0.01em' }}
                        >
                            {isMobile
                                ? '"Our mission is to blend architectural elegance with nature, constructing spaces that inspire peace."'
                                : '"Our mission is to seamlessly blend architectural elegance with the raw beauty of nature, constructing spaces that inspire peace and endure through time."'}
                        </motion.h3>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1 }}
                            style={{ width: '40px', height: '2px', backgroundColor: '#e8d5b5', margin: '0 auto', transformOrigin: 'center' }}
                        ></motion.div>
                    </motion.div>
                </div>
            </section >
        </div >
    );
};

export default About;
