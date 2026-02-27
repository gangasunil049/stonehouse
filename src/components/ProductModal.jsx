import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-earth/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 bg-earth/10 hover:bg-earth/20 p-2 rounded-full transition-colors"
                        >
                            <X size={24} className="text-earth" />
                        </button>

                        {/* Image Section */}
                        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {product.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-text-muted text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                <h4 className="font-bold uppercase tracking-widest text-sm text-earth">Key Features</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-text-muted">
                                        <Check size={18} className="text-primary" /> Natural Texture & Color
                                    </li>
                                    <li className="flex items-center gap-3 text-text-muted">
                                        <Check size={18} className="text-primary" /> Weather Resistant
                                    </li>
                                    <li className="flex items-center gap-3 text-text-muted">
                                        <Check size={18} className="text-primary" /> Low Maintenance
                                    </li>
                                </ul>
                            </div>

                            <button onClick={onClose} className="btn btn-primary w-full py-4 text-lg">
                                Close Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
