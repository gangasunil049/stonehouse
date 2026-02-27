import React, { useState, useEffect } from 'react';
import { stones } from '../data/stones';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import NextPage from '../components/NextPage';

const Products = () => {
    const [selectedStone, setSelectedStone] = useState(null);

    useEffect(() => {
        document.title = "Our Natural Stones | Stonehouse Landscape";
    }, []);

    const openModal = (stone) => {
        setSelectedStone(stone);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedStone(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="products-page">
            <section className="section-cream pt-40">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="section-title"
                    >
                        <h1 className="text-7xl font-black mb-6">Our <span className="text-primary">Stones.</span></h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Explore our premium collection of natural stones, hand-picked for quality and durability.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                        {stones.map((stone, index) => (
                            <motion.div
                                key={stone.id}
                                onClick={() => openModal(stone)}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                            >
                                <div className="stone-card hover-dark-green cursor-pointer" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'white' }}>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <motion.img
                                            whileHover={{ scale: 1.1, transition: { duration: 0.8, ease: "easeOut" } }}
                                            src={stone.image} alt={stone.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ padding: '3rem', flexGrow: 1 }}>
                                        <h3 className="text-3xl font-black mb-4">{stone.name}</h3>
                                        <p className="text-muted mb-8 line-clamp-3">{stone.description}</p>
                                        <div className="text-primary font-black uppercase text-xs tracking-widest flex items-center gap-2">
                                            View Details <div style={{ width: '20px', height: '2px', background: 'var(--primary)' }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedStone && (
                    <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, position: 'fixed', inset: 0 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="modal-content shadow-2xl"
                            style={{
                                width: '95%',
                                maxWidth: '1200px',
                                maxHeight: '90vh',
                                display: 'flex',
                                flexDirection: 'row',
                                border: 'none'
                            }}
                        >
                            <button
                                onClick={closeModal}
                                style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', zIndex: 10, boxShadow: '0 5px 20px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ width: '55%', height: '700px' }}>
                                <img src={selectedStone.image} alt={selectedStone.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div style={{ width: '45%', padding: '5rem', overflowY: 'auto', background: 'var(--bg-cream)' }}>
                                <span className="text-primary font-black uppercase text-xs tracking-widest mb-4 block">Product Selection</span>
                                <h3 className="text-5xl font-black mb-6 leading-tight">{selectedStone.name}</h3>
                                <p className="text-xl text-black leading-relaxed mb-10">
                                    {selectedStone.details || selectedStone.description}
                                </p>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h4 className="text-xs uppercase font-black tracking-widest mb-6 opacity-40">Key Benefits</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                        {selectedStone.benefits?.map(tag => (
                                            <div key={tag} className="flex items-center gap-2 text-sm font-bold">
                                                <Check size={16} className="text-primary" /> {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={closeModal} className="cta-btn cta-primary" style={{ width: '100%', padding: '1.5rem' }}>
                                    Back to Collection
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Products;
