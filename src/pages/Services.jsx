import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Flower2, Mountain, Layers, Trees, Filter, Waves
} from 'lucide-react';


const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // MOUSE TRACKING FOR 3D TILT
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // SMOOTH SPRING MOUSE VALUES
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // SHINE POSITION (Plain states for radial gradient)
    const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

    // TRANSFORM TILT - ONLY APPLIED WHEN NOT FLIPPED
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current || isFlipped || isMobile) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate relative position (-0.5 to 0.5)
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
        setShinePos({ x: (mouseX / width) * 100, y: (mouseY / height) * 100 });
    };

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
        x.set(0);
        y.set(0);
        setShinePos({ x: 50, y: 50 });
    };

    // Simple card content (shared between mobile and desktop front)
    const CardContent = () => (
        <div
            className="stone-card group"
            style={{
                borderRadius: isMobile ? '16px' : '32px',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                padding: isMobile ? '0.8rem' : '1.5rem',
                textAlign: 'left',
                boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '100%'
            }}
        >
            <div style={{ width: '100%', height: isMobile ? '110px' : '200px', borderRadius: isMobile ? '10px' : '24px', overflow: 'hidden', marginBottom: isMobile ? '0.6rem' : '1.5rem' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="group-hover:scale-110" />
            </div>
            <div style={{ padding: isMobile ? '0' : '0 0.5rem' }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: isMobile ? '0.8rem' : '1.3rem', color: 'var(--primary-deep)', marginBottom: isMobile ? '0' : '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    {service.title}
                </h3>
                {!isMobile && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400, lineHeight: 1.6, fontFamily: "'Outfit', sans-serif" }}>
                        {service.description}
                    </p>
                )}
            </div>
        </div>
    );

    if (isMobile) {
        return <CardContent />;
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flip-card-container cursor-pointer"
            style={{ height: '480px', perspective: '2000px', WebkitFontSmoothing: 'antialiased' }}
        >
            <motion.div
                className="flip-card-inner"
                style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d', rotateX: isFlipped ? 0 : rotateX, rotateY: isFlipped ? 0 : rotateY }}
            >
                <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 1 }}
                    style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
                >
                    {/* FRONT */}
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        <CardContent />
                    </div>

                    {/* BACK */}
                    <div
                        className="flip-card-back"
                        style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: '16px', overflow: 'hidden', border: '3px solid var(--primary)', background: 'white' }}
                    >
                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-8 text-center text-white backdrop-blur-md">
                            <span style={{ fontSize: '0.5rem', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Our Work</span>
                            <h3 className="text-3xl font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{service.title}</h3>
                            <div className="w-12 h-[1px] bg-[#e8d5b5] mb-4"></div>
                            <button style={{ padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'white', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', cursor: 'pointer' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    useEffect(() => {
        document.title = "Our Services | Stonehouse Landscape";
    }, []);

    const services = [
        {
            title: "Soft Landscaping",
            description: "Transforming raw earth into vibrant ecosystems through surgical soil preparation, elite turf installation, and master-level strategic planting.",
            icon: <Flower2 size={40} />,
            image: "/soft landscapping.jpeg"
        },
        {
            title: "Hard Landscaping",
            description: "Sculpting structural permanence using Bangalore Stone, Tandur, and Kadappa. We build pathing, patios, and walls that define architectural boundaries.",
            icon: <Mountain size={40} />,
            image: "/hard landscapping.jpeg"
        },
        {
            title: "Vertical Gardens",
            description: "Gravity-defying living architecture. Our vertical planters create lush sanctuaries in constrained spaces, blending nature with modern geometry.",
            icon: <Layers size={40} />,
            image: "/vertical gardenimg.jpeg"
        },
        {
            title: "Gazebos",
            description: "Bespoke outdoor pavilions crafted for elegance. These structural masterpieces provide cinematic shade and sophisticated focal points for gatherings.",
            icon: <Trees size={40} />,
            image: "/gazebos.jpeg"
        },
        {
            title: "Pebble Gardens",
            description: "The zen of minimalist landscaping. Carefully curated rock and pebble arrangements that require zero maintenance but deliver infinite aesthetic calm.",
            icon: <Filter size={40} />,
            image: "/pebbles gardening.jpeg"
        },
        {
            title: "Water Features",
            description: "The rhythmic soul of the garden. Cascading waterfalls and tranquil ponds designed to bring acoustic and visual serenity through natural stone artistry.",
            icon: <Waves size={40} />,
            image: "/water feature.jpeg"
        }
    ];

    return (
        <div id="services" className="services-page">
            <section className="section-cream pt-10 pb-20 md:pt-20 md:pb-32" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(26, 54, 32, 0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                <div className="container">
                    <div className="section-title text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl font-bold text-primary"
                            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}
                        >
                            Our <span style={{ fontStyle: 'italic' }}>Services.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            viewport={{ once: true }}
                            style={{ height: '2px', background: '#e8d5b5', margin: '2.5rem auto 0' }}
                        />
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Services;
