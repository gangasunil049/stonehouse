import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronDown } from 'lucide-react';

const reviews = [
    {
        name: "Akhil Vijayan",
        rating: 5,
        date: "11 months ago",
        text: "I recently hired this company for a landscaping project, and I couldn't be happier with the results. From the very beginning, their team was professional, responsive, and attentive to my ideas. They listened carefully to my vision and delivered on time and within budget.",
        initials: "AV",
        color: "#4a6741"
    },
    {
        name: "Muralee Mohanan J",
        rating: 5,
        date: "a year ago",
        text: "Fantastic experience working with Stone House. Their team transformed our outdoor space into a stunning, functional landscape that exceeded our expectations. Professional, attentive to detail, and great communication throughout the project. Highly recommend for anyone looking to bring their outdoor vision to life!",
        initials: "MM",
        color: "#2C4C34"
    },
    {
        name: "Nithish S",
        rating: 5,
        date: "a year ago",
        text: "Customer satisfaction is the prior importance for Stone House. Service is very very good. You will surely get the service for more than that you paid. Whole heartedly I can recommend this for all of you.",
        initials: "NS",
        color: "#5a7a50"
    },
    {
        name: "Karthika Lekshmi A",
        rating: 5,
        date: "4 months ago",
        text: "Excellent work and great customer service. Thank you team for providing such a fabulous experience. Keep going!",
        initials: "KL",
        color: "#3d6b35"
    },
    {
        name: "Jerin Jose",
        rating: 5,
        date: "a year ago",
        text: "Ideal place for best and vast collections for stones. Excellent work, good team work, very punctual. Provided us with right choices.",
        initials: "JJ",
        color: "#4a6741"
    },
    {
        name: "DMirsha Works",
        rating: 5,
        date: "a year ago",
        text: "Top-tier landscaping solutions! Stone House's artificial grass and natural pebbles exceeded expectations. Quality materials and a wide range — they make every project a success.",
        initials: "DW",
        color: "#2C4C34"
    },
    {
        name: "Ajith Thomas",
        rating: 5,
        date: "a year ago",
        text: "Stone House has really fulfilled my expectations. Creation and perfection on their work is really commendable.",
        initials: "AT",
        color: "#5a7a50"
    },
    {
        name: "Eldho Ealias",
        rating: 5,
        date: "a year ago",
        text: "Quality of work is superb. Highly recommended.",
        initials: "EE",
        color: "#3d6b35"
    },
];

const StarRating = ({ count, small }) => (
    <div style={{ display: 'flex', gap: '2px', marginBottom: small ? '0.4rem' : '0.8rem' }}>
        {Array.from({ length: count }).map((_, i) => (
            <Star key={i} size={small ? 12 : 16} fill="#f4b942" color="#f4b942" />
        ))}
    </div>
);

const ReviewCard = ({ review, index, isMobile }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: 'white',
                borderRadius: isMobile ? '14px' : '20px',
                padding: isMobile ? '1.1rem' : '2rem',
                boxShadow: hovered ? '0 20px 60px rgba(44,76,52,0.15)' : '0 4px 24px rgba(0,0,0,0.07)',
                border: `1px solid ${hovered ? '#4a6741' : 'rgba(0,0,0,0.06)'}`,
                transition: 'all 0.3s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                position: 'relative',
                breakInside: 'avoid',
                marginBottom: isMobile ? '0' : '1.5rem',
                display: 'inline-block',
                width: '100%'
            }}
        >
            {/* Big quote mark */}
            <Quote
                size={isMobile ? 20 : 36}
                style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    color: '#4a6741',
                    opacity: 0.12
                }}
            />

            {/* Stars */}
            <StarRating count={review.rating} small={isMobile} />

            {/* Review text */}
            <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: isMobile ? '0.72rem' : '0.95rem',
                color: '#444',
                lineHeight: isMobile ? 1.5 : 1.75,
                marginBottom: isMobile ? '0.8rem' : '1.5rem',
                fontStyle: 'italic'
            }}>
                "{isMobile && review.text.length > 80
                    ? review.text.slice(0, 80) + '…'
                    : review.text}"
            </p>

            {/* Reviewer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.4rem' : '0.8rem' }}>
                <div style={{
                    width: isMobile ? '28px' : '42px',
                    height: isMobile ? '28px' : '42px',
                    borderRadius: '50%',
                    backgroundColor: review.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: isMobile ? '0.6rem' : '0.85rem',
                    fontFamily: "'Outfit', sans-serif",
                    flexShrink: 0
                }}>
                    {review.initials}
                </div>
                <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: isMobile ? '0.68rem' : '0.92rem', color: '#1A1A1A', margin: 0 }}>
                        {review.name}
                    </p>
                    {!isMobile && (
                        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: '#888', margin: 0 }}>
                            Google Review · {review.date}
                        </p>
                    )}
                </div>
                {!isMobile && (
                    <div style={{ marginLeft: 'auto' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Reviews = () => {
    const totalRating = 5.0;
    const totalReviews = reviews.length;
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const displayedReviews = isMobile && !showAll ? reviews.slice(0, 4) : reviews;

    return (
        <section id="reviews" style={{ backgroundColor: 'var(--primary)', padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ display: 'block', fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#e8d5b5', marginBottom: '1rem', opacity: 0.9 }}
                    >
                        What Our Clients Say
                    </motion.span>
                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: 900,
                        color: 'white',
                        lineHeight: 1.1,
                        marginBottom: '1rem'
                    }}>
                        Trusted by Homeowners<br />
                        <span style={{ fontFamily: "'Sacramento', cursive", fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3rem)', opacity: 0.8, color: '#e8d5b5' }}>
                            across Kerala
                        </span>
                    </h2>

                    {/* Overall rating bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={22} fill="#f4b942" color="#f4b942" />)}
                        </div>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                            {totalRating.toFixed(1)}
                        </span>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                            · {totalReviews} Google Reviews
                        </span>
                    </div>
                </motion.div>

                {/* Card grid */}
                {isMobile ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem',
                    }}>
                        {displayedReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} index={index} isMobile={isMobile} />
                        ))}
                    </div>
                ) : (
                    <div style={{
                        columns: 'auto 320px',
                        columnGap: '1.5rem',
                    }}>
                        {displayedReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} index={index} isMobile={isMobile} />
                        ))}
                    </div>
                )}

                {/* Show More button — mobile only */}
                {isMobile && !showAll && reviews.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', marginTop: '1.5rem' }}
                    >
                        <button
                            onClick={() => setShowAll(true)}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1.75rem',
                                backgroundColor: 'white',
                                color: 'var(--primary)',
                                border: '2px solid white',
                                borderRadius: '100px',
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                            }}
                        >
                            Show More Reviews
                            <ChevronDown size={16} />
                        </button>
                    </motion.div>
                )}

                {/* CTA to Google */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <a
                        href="https://share.google/8rtzU7zLZpQuYaHBR"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.9rem 2rem',
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            borderRadius: '100px',
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 8px 30px rgba(74,103,65,0.3)'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(74,103,65,0.4)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(74,103,65,0.3)'; }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="rgba(255,255,255,0.8)" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="rgba(255,255,255,0.7)" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="rgba(255,255,255,0.9)" />
                        </svg>
                        View All Reviews on Google
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Reviews;
