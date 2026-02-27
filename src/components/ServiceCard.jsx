import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
    const Icon = LucideIcons[service.icon];

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-surface p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-all"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-text-muted">
                {service.description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
