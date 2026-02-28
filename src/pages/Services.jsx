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

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flip-card-container cursor-pointer"
            style={{
                height: isMobile ? '280px' : '420px',
                perspective: isMobile ? 'none' : '2000px',
                WebkitFontSmoothing: 'antialiased'
            }}
        >
            <motion.div
                className="flip-card-inner"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    rotateX: (isMobile || isFlipped) ? 0 : rotateX,
                    rotateY: (isMobile || isFlipped) ? 0 : rotateY // Tilt rotateY
                }}
            >
                {/* FLIP WRAPPER - This handles the 180deg flip separately to avoid conflicts */}
                <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        mass: 1
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        transformStyle: 'preserve-3d',
                        position: 'relative'
                    }}
                >
                    {/* FRONT SIDE */}
                    <div
                        className="flip-card-front stone-card relative overflow-hidden"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            borderRadius: '16px',
                            border: '1px solid rgba(232, 213, 181, 0.2)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f4f7f2 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: isMobile ? '1.5rem 1rem' : '3rem 2rem',
                            textAlign: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                            zIndex: 1
                        }}
                    >
                        {/* DYNAMIC GOLD SHIMMER */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                pointerEvents: 'none',
                                background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(232, 213, 181, 0.2) 0%, transparent 60%)`,
                                zIndex: 2,
                                opacity: (isMobile || isFlipped) ? 0 : 1,
                                transition: 'opacity 0.3s'
                            }}
                        />

                        {/* SUBTLE GRAIN TEXTURE */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0.03,
                            pointerEvents: 'none',
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
                            zIndex: 1
                        }} />

                        {/* WATERMARK ICON */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            right: '-10px',
                            opacity: 0.04,
                            transform: isMobile ? 'scale(2.5) rotate(-15deg)' : 'scale(5) rotate(-15deg)',
                            color: 'var(--primary)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}>
                            {service.icon}
                        </div>

                        {/* INDEX NUMBER */}
                        <span style={{
                            position: 'absolute',
                            top: isMobile ? '1rem' : '2.5rem',
                            right: isMobile ? '1.2rem' : '2.5rem',
                            fontSize: '0.7rem',
                            fontWeight: 300,
                            fontFamily: "'Cormorant Garamond', serif",
                            fontStyle: 'italic',
                            color: '#D4AF37',
                            letterSpacing: '0.2em',
                            opacity: 0.6,
                            zIndex: 3
                        }}>
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>

                        <div style={{ position: 'relative', zIndex: 3 }}>
                            <h3
                                className={isMobile ? "text-sm mb-4 text-black uppercase" : "text-xl mb-6 text-black uppercase"}
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 800,
                                    letterSpacing: isMobile ? '0.1em' : '0.3em',
                                    lineHeight: 1.2
                                }}
                            >
                                {service.title}
                            </h3>

                            <div style={{
                                width: isMobile ? '30px' : '50px',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #e8d5b5, transparent)',
                                margin: '0 auto 1.5rem',
                                opacity: 0.8
                            }}></div>

                            <p
                                className="leading-relaxed"
                                style={{
                                    fontSize: isMobile ? '0.6rem' : '0.8rem',
                                    padding: isMobile ? '0 0.5rem' : '0 1.5rem',
                                    color: '#555',
                                    fontWeight: 500,
                                    letterSpacing: '0.03em',
                                    fontFamily: "'Montserrat', sans-serif"
                                }}
                            >
                                {isMobile && service.description.length > 80
                                    ? service.description.substring(0, 77) + "..."
                                    : service.description}
                            </p>
                        </div>

                        {!isMobile && (
                            <div style={{
                                position: 'absolute',
                                bottom: '2rem',
                                fontSize: '0.6rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.3em',
                                color: 'var(--primary)',
                                opacity: 0.3,
                                zIndex: 3
                            }}>
                                Touch to Explore
                            </div>
                        )}
                    </div>

                    {/* BACK SIDE */}
                    <div
                        className="flip-card-back"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '3px solid var(--primary)',
                            background: 'white'
                        }}
                    >
                        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-4 md:p-8 text-center text-white backdrop-blur-md">
                            <span style={{ fontSize: '0.5rem', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Our Work</span>
                            <h3 className={isMobile ? "text-xl font-light mb-4" : "text-3xl font-light mb-6"} style={{ fontFamily: "'Cormorant Garamond', serif" }}>{service.title}</h3>
                            <div className="w-12 h-[1px] bg-[#e8d5b5] mb-4"></div>
                            <button
                                style={{
                                    padding: isMobile ? '0.5rem 1rem' : '1rem 2rem',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    background: 'transparent',
                                    color: 'white',
                                    fontSize: isMobile ? '0.5rem' : '0.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    cursor: 'pointer'
                                }}
                            >
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
                            className="text-5xl md:text-7xl font-light text-primary"
                            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em' }}
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
