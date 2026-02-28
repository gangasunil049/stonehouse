import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, CheckCircle, Shield } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            title: "Consultation",
            description: "We discuss your vision, space requirements, and ideas to build a clear project scope.",
            icon: <Lightbulb size={24} />
        },
        {
            title: "Design",
            description: "Our experts create 2D/3D models and layout plans tailored to your property.",
            icon: <PenTool size={24} />
        },
        {
            title: "Execution",
            description: "Skilled hardscapers and softscapers bring the design to life with precision.",
            icon: <CheckCircle size={24} />
        },
        {
            title: "Maintenance",
            description: "We ensure your garden stays pristine year-round with our dedicated care plans.",
            icon: <Shield size={24} />
        }
    ];

    return (
        <section id="process" className="section bg-white py-20 md:py-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="section-title text-center mb-16"
                >
                    <h2
                        className="text-5xl md:text-7xl font-light text-primary"
                        style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em' }}
                    >
                        Our <span style={{ fontStyle: 'italic' }}>Process.</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth <= 768 ? -20 : -100, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                            style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-cream)', textAlign: 'center', borderRadius: '12px' }}
                            className="hover-dark-green transition-all duration-500 cursor-pointer"
                        >
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                            <p className="text-muted leading-relaxed text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
