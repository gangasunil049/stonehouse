import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 group h-full flex flex-col"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Visual indicator for lightbox */}
                <div className="absolute inset-0 bg-earth/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full text-primary scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={24} />
                    </div>
                </div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest text-primary">
                        {product.tags?.[0] || 'Natural Stone'}
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-text-muted text-sm line-clamp-3 leading-relaxed mb-6">
                    {product.description}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                    View Details <ArrowRight size={18} />
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
