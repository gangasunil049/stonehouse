import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        document.title = "Project Diary | Stonehouse Landscape";
    }, []);

    useEffect(() => {
        document.title = "Project Diary | Stonehouse Landscape";
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const galleryImages = [
        { src: "/banglore stone.jpeg", title: "Bangalore Stone Pathway", span: "col-span-12 md:col-span-4", size: "600px" },
        { src: "/stone cladding.jpeg", title: "Architectural Cladding", span: "col-span-12 md:col-span-4", size: "400px" },
        { src: "/landscaping 1.jpeg", title: "Modern Estate Design", span: "col-span-12 md:col-span-4", size: "450px" },
        { src: "/gallery1.jpeg", title: "Luxury Estate Finishing", span: "col-span-12 md:col-span-4", size: "550px" },
        { src: "/gallery2.jpeg", title: "Modern Stone Integration", span: "col-span-12 md:col-span-4", size: "450px" },
        { src: "/gallery3.jpeg", title: "Premium Landscape Work", span: "col-span-12 md:col-span-4", size: "500px" },
        { src: "/gallery4.jpeg", title: "Custom Exterior Crafting", span: "col-span-12 md:col-span-4", size: "600px" },
        { src: "/banglore stone 1.jpeg", title: "Contemporary Bangalore Stone", span: "col-span-12 md:col-span-4", size: "500px" },
        { src: "/lime stone 1.jpeg", title: "Textured Lime Stone Wall", span: "col-span-12 md:col-span-4", size: "600px" }
    ];

    const openLightbox = (img) => {
        setSelectedImg(img);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImg(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="gallery" className="section-cream pt-10 pb-0 md:py-40" style={{
            minHeight: isMobile ? 'auto' : '100vh',
            background: '#f9f8f4'
        }}>
            <div className="container">
                {/* REFINED TITLE */}
                <div className="section-title text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-7xl font-light text-primary"
                        style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '-0.02em', color: '#1a3620' }}
                    >
                        Project <span style={{ fontStyle: 'italic' }}>Diary.</span>
                    </motion.h2>
                </div>

                {/* RESPONSIVE GALLERY DISPLAY */}
                <div style={{ padding: isMobile ? '1rem 0 0 0' : '2rem 0', position: 'relative', overflow: 'hidden' }}>
                    {isMobile ? (
                        /* MOBILE MARQUEE */
                        <div style={{
                            display: 'flex',
                            width: 'fit-content',
                            overflow: 'hidden'
                        }}>
                            <style>{`
                                @keyframes slideMarquee {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-2736px); }
                                }
                                .marquee-track {
                                    display: flex;
                                    gap: 1.5rem;
                                    padding-right: 1.5rem;
                                    animation: slideMarquee 30s linear infinite;
                                    will-change: transform;
                                }
                                /* Pause on touch (mobile) and hover (desktop fallback) */
                                .marquee-track:active, .marquee-track:hover {
                                    animation-play-state: paused !important;
                                    -webkit-animation-play-state: paused !important;
                                }
                            `}</style>
                            <div className="marquee-track">
                                {/* Double array for seamless loop */}
                                {[...galleryImages, ...galleryImages].map((img, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer"
                                        onClick={() => openLightbox(img)}
                                        style={{ width: '280px', flexShrink: 0 }}
                                    >
                                        <div style={{
                                            height: '350px',
                                            width: '100%',
                                            overflow: 'hidden',
                                            boxShadow: '0 15px 30px rgba(0,0,0,0.06)',
                                            background: '#fff',
                                            padding: '8px',
                                            borderRadius: '8px'
                                        }}>
                                            <img
                                                src={img.src}
                                                alt={img.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* DESKTOP STAGGERED GRID */
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center'
                        }}>
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.2 }}
                                    whileHover={{ scale: 1.02, y: -10 }}
                                    className="group cursor-pointer flex flex-col"
                                    onClick={() => openLightbox(img)}
                                    style={{ width: '100%', perspective: '1000px' }}
                                >
                                    <div style={{
                                        height: img.size,
                                        width: '100%',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
                                        background: '#fff',
                                        padding: '12px'
                                    }}>
                                        <motion.img
                                            whileHover={{ scale: 1.1, rotate: 1.5 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            src={img.src}
                                            alt={img.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />

                                        {/* MINIMAL OVERLAY */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(26, 54, 32, 0.3)',
                                            opacity: 0,
                                            transition: 'opacity 0.6s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} className="group-hover:opacity-100">
                                            <div style={{
                                                padding: '1rem',
                                                background: '#fff',
                                                borderRadius: '50%',
                                                transform: 'scale(0.8)',
                                                transition: 'transform 0.4s ease'
                                            }} className="group-hover:scale-100">
                                                <Maximize2 size={24} className="text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(255,255,255,0.98)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: '#1a3620',
                                border: 'none',
                                color: 'white',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{ maxWidth: '1200px', width: '90%', maxHeight: '90vh' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
                                }}
                            />
                            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                                <h4 style={{
                                    color: '#1a3620',
                                    fontSize: '2.5rem',
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontStyle: 'italic'
                                }}>
                                    {selectedImg.title}
                                </h4>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
