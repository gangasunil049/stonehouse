import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Trust",
            description: "Built on transparency, we deliver exactly what we promise, on time and within budget.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "Care",
            description: "We treat every garden as if it were our own, with meticulous attention to detail.",
            icon: <HeartPulse size={32} />
        },
        {
            title: "Quality",
            description: "Sourcing only the finest natural stones and resilient plants for lasting beauty.",
            icon: <Award size={32} />
        },
        {
            title: "Experience",
            description: "Years of setting the bar high in landscape designing and paving across Kerala.",
            icon: <Clock size={32} />
        }
    ];

    return (
        <section id="why-choose-us" className="section-cream py-32">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="md:grid-cols-2 grid-cols-1">
                    <motion.div
                        initial={{ opacity: 0, x: -80, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <h2 className="mb-6 leading-tight" style={{ fontSize: '4.5rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: 'var(--text-black)' }}>
                            Why <span className="text-primary" style={{ fontStyle: 'italic' }}>Choose Us.</span>
                        </h2>
                        <p className="text-lg text-muted leading-relaxed mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.05em' }}>
                            We don't just build gardens; we curate outdoor experiences. Combining our deep expertise in hardscaping with a passion for natural beauty, we elevate the standard of living spaces.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.3 }}
                                className="hover-dark-green cursor-pointer"
                                style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '12px' }}
                            >
                                <div className="text-primary mb-6">{reason.icon}</div>
                                <h3 className="text-xl font-black mb-3">{reason.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
