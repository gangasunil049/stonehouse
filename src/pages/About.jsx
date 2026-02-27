import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

    return (
        <div id="about" className="about-page" style={{ backgroundColor: 'var(--bg-white)', width: '100%', overflow: 'hidden' }}>

            {/* UNIFIED HERO AND CONTENT SECTION WITH BACKGROUND */}
            <section style={{ position: 'relative', marginTop: '6rem', padding: '12rem 0 8rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', overflow: 'hidden' }}>

                {/* PUZZLE ANIMATION BACKGROUND - CONSTRAINED RECTANGLE */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridTemplateRows: 'repeat(5, 1fr)',
                        width: '90%',
                        maxWidth: '1200px',
                        aspectRatio: '16/9',
                        backgroundColor: 'var(--bg-white)',
                        overflow: 'hidden',
                        borderRadius: '24px',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
                    }}>
                        {Array.from({ length: 25 }).map((_, i) => {
                            const col = i % 5;
                            const row = Math.floor(i / 5);
                            const delay = (col * 0.04) + (row * 0.04) + (Math.random() * 0.05);

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8, rotate: (Math.random() * 10 - 5), filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.9, delay: delay, ease: [0.33, 1, 0.68, 1] }}
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        border: '1px solid rgba(255,255,255,0.02)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src="/about.jpeg"
                                        alt="About Us Grid Segment"
                                        style={{
                                            position: 'absolute',
                                            top: `${row * -100}%`,
                                            left: `${col * -100}%`,
                                            width: '500%',
                                            height: '500%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(233, 239, 230, 0.40)', zIndex: 1, borderRadius: 'inherit' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -15, filter: 'blur(20px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.4, staggerChildren: 0.15 }}
                        style={{ color: 'var(--primary)', marginBottom: '6rem', perspective: '1000px' }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.8 }}
                        >
                            Discover Our Roots
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 500, marginTop: '1rem', lineHeight: 1 }}
                        >
                            About <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Us.</span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.98, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.7, staggerChildren: 0.15 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, color: 'var(--primary)', marginBottom: '3rem', fontWeight: 500 }}
                        >
                            Crafting Legacy <br /> <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Through Stone.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', color: 'var(--text-black)', marginBottom: '2rem', lineHeight: 1.8, fontWeight: 500 }}
                        >
                            <strong>STONEHOUSE</strong> offers expert landscaping and stone paving for residential and commercial properties. Our experienced landscapers set the bar high each day in landscape designing and paving.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem', color: 'var(--text-black)', lineHeight: 1.8, fontWeight: 500, opacity: 0.8 }}
                        >
                            We strive to revolutionize the art of landscaping and exceed the expectations of our customers. Come, join us and enjoy being a part of building your dream space.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* STATS COUNTERS */}
            <section style={{ backgroundColor: 'var(--bg-white)', padding: '6rem 0', borderTop: '1px solid rgba(26,54,32,0.05)', borderBottom: '1px solid rgba(26,54,32,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', textAlign: 'center' }}>
                        {[
                            { label: "Years of Experience", value: 15, suffix: "+" },
                            { label: "Projects Completed", value: 350, suffix: "+" },
                            { label: "Happy Clients", value: 300, suffix: "+" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                                style={{
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    cursor: 'default',
                                    backgroundColor: 'rgba(26,54,32,0.02)',
                                    border: '1px solid rgba(26,54,32,0.05)'
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: (i * 0.15) + 0.2 }}
                                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1 }}
                                >
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.5, delay: (i * 0.15) + 0.4 }}
                                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION STATEMENT */}
            <section style={{ backgroundColor: 'var(--bg-white)', padding: '8rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 }}
                        style={{
                            backgroundColor: 'white',
                            padding: '5rem',
                            border: '1px solid rgba(26,54,32,0.1)',
                            borderRadius: '4px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.03)',
                            position: 'relative'
                        }}
                    >
                        {/* Decorative Quote Mark / Leaf abstract */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                            style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid var(--bg-white)' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem' }}
                        >
                            Our Philosophy
                        </motion.span>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic', color: 'var(--text-black)', lineHeight: 1.4, fontWeight: 400, marginBottom: '2rem' }}
                        >
                            "Our mission is to seamlessly blend architectural elegance with the raw beauty of nature, constructing spaces that inspire peace and endure through time."
                        </motion.h3>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1 }}
                            style={{ width: '40px', height: '2px', backgroundColor: 'var(--primary)', margin: '0 auto', transformOrigin: 'center' }}
                        ></motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
