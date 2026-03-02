import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, CheckCircle, Shield } from 'lucide-react';

const Process = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const steps = [
        {
            title: "Consultation",
            description: "We discuss your vision, space requirements, and ideas to build a clear project scope.",
            icon: <Lightbulb size={isMobile ? 20 : 24} />
        },
        {
            title: "Design",
            description: "Our experts create 2D/3D models and layout plans tailored to your property.",
            icon: <PenTool size={isMobile ? 20 : 24} />
        },
        {
            title: "Execution",
            description: "Skilled hardscapers and softscapers bring the design to life with precision.",
            icon: <CheckCircle size={isMobile ? 20 : 24} />
        },
        {
            title: "Maintenance",
            description: "We ensure your garden stays pristine year-round with our dedicated care plans.",
            icon: <Shield size={isMobile ? 20 : 24} />
        }
    ];

    return (
        <section id="process" className="section bg-white pt-10 pb-10 md:pt-32 md:pb-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="section-title text-center mb-8 md:mb-16"
                >
                    <h2
                        className="text-5xl md:text-7xl font-bold text-primary"
                        style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em', fontSize: isMobile ? '3.5rem' : '' }}
                    >
                        Our <span style={{ fontStyle: 'italic' }}>Process.</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: isMobile ? '1.5rem' : '2.5rem'
                }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isMobile ? -20 : -100, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                            style={{
                                padding: isMobile ? '1.5rem 1rem' : '4rem 2.5rem',
                                backgroundColor: 'var(--bg-cream)',
                                textAlign: 'center',
                                borderRadius: 'var(--radius-md)'
                            }}
                            className="hover-dark-green transition-all duration-500 cursor-pointer"
                        >
                            <div style={{
                                width: isMobile ? '45px' : '70px',
                                height: isMobile ? '45px' : '70px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: isMobile ? '0 auto 1rem' : '0 auto 2rem'
                            }}>
                                {step.icon}
                            </div>
                            <h3 className={isMobile ? "text-lg font-bold mb-2" : "text-3xl font-bold mb-4"} style={{ fontFamily: "'Outfit', sans-serif" }}>{step.title}</h3>
                            <p className="text-muted leading-relaxed" style={{ fontSize: isMobile ? '0.65rem' : '0.9rem' }}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
