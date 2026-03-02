import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const reasons = [
        {
            title: "Trust",
            description: "Built on transparency, we deliver exactly what we promise, on time and within budget.",
            icon: <ShieldCheck size={isMobile ? 24 : 32} />
        },
        {
            title: "Care",
            description: "We treat every garden as if it were our own, with meticulous attention to detail.",
            icon: <HeartPulse size={isMobile ? 24 : 32} />
        },
        {
            title: "Quality",
            description: "Sourcing only the finest natural stones and resilient plants for lasting beauty.",
            icon: <Award size={isMobile ? 24 : 32} />
        },
        {
            title: "Experience",
            description: "Years of setting the bar high in landscape designing and paving across Kerala.",
            icon: <Clock size={isMobile ? 24 : 32} />
        }
    ];

    return (
        <section id="why-choose-us" className="section-cream pt-10 pb-10 md:pt-16">
            <div className="container">
                <div className="why-choose-grid">
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? -20 : -80, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <h2 className="mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'var(--text-black)', letterSpacing: '-0.02em' }}>
                            Why <span className="text-primary" style={{ fontStyle: 'italic' }}>Choose Us.</span>
                        </h2>
                        <p className="text-lg text-muted leading-relaxed mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.05em' }}>
                            We don't just build gardens; we curate outdoor experiences. Combining our deep expertise in hardscaping with a passion for natural beauty, we elevate the standard of living spaces.
                        </p>
                    </motion.div>

                    <div className="why-choose-cards-grid">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isMobile ? 20 : 80, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.3 }}
                                className="hover-dark-green cursor-pointer"
                                style={{ background: 'white', padding: isMobile ? '1.5rem 1rem' : '2.5rem 2rem', borderRadius: 'var(--radius-md)' }}
                            >
                                <div className="text-primary mb-4">{reason.icon}</div>
                                <h3 className={isMobile ? "text-lg font-bold mb-2" : "text-xl font-bold mb-3"} style={{ fontFamily: "'Outfit', sans-serif" }}>{reason.title}</h3>
                                <p className="text-muted leading-relaxed" style={{ fontSize: isMobile ? '0.7rem' : '0.875rem' }}>{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
