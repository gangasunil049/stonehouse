import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { stones } from '../data/stones';

const ProductDetail = () => {
    const { id } = useParams();
    const product = stones.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="pt-32 pb-20 container text-center">
                <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="product-detail pt-24">
            {/* Hero Section */}
            <section className="bg-background py-16">
                <div className="container">
                    <Link to="/#products" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
                        <ArrowLeft size={20} /> Back to Products
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-2xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
                            <p className="text-xl text-text-muted mb-8">
                                {product.description}
                            </p>

                            <div className="mb-10">
                                <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-earth">Key Benefits</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-primary" />
                                            <span className="font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-earth">Best For</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, index) => (
                                        <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-sm ring-1 ring-gray-100">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#quote" className="btn btn-primary lg:px-10">
                                    Request Quote
                                </a>
                                <a href="tel:+919876543210" className="btn btn-secondary lg:px-10">
                                    <Phone size={18} /> Call Specialist
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Description */}
            <section className="bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8">Deep Dive into {product.name}</h2>
                    <div className="prose prose-lg text-text-muted">
                        <p className="mb-6">{product.details}</p>
                        <p className="mb-6">
                            Our {product.name} is carefully selected from the finest quarries, ensuring that every slab meets our rigorous quality standards. Its natural varying patterns mean your project will have a truly unique aesthetic that generic materials simply cannot replicate.
                        </p>
                        <h3 className="text-2xl font-bold text-earth mb-4">Maintenance & Care</h3>
                        <p className="mb-6">
                            To keep your {product.name} looking its best, we recommend regular cleaning with warm water and a stone-safe pH-neutral cleaner. Avoid using acidic substances which may etch the surface over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="quote" className="bg-background py-0">
                <div className="container">
                    <div className="bg-earth rounded-3xl p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 text-white">Start Your Project with <br /> {product.name} Today</h2>
                                <p className="text-gray-300 text-lg mb-8">
                                    Get a personalized consultation and a free quote for your landscaping needs.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 rounded-full border-2 border-earth" alt="Team" />
                                        <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 rounded-full border-2 border-earth" alt="Team" />
                                        <img src="https://i.pravatar.cc/150?u=3" className="w-10 h-10 rounded-full border-2 border-earth" alt="Team" />
                                    </div>
                                    <span className="text-sm font-medium">Join 500+ happy clients</span>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl text-earth">
                                <form className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-4 bg-background rounded-xl border-none outline-none focus:ring-2 focus:ring-primary" />
                                    <input type="email" placeholder="Email Address" className="w-full p-4 bg-background rounded-xl border-none outline-none focus:ring-2 focus:ring-primary" />
                                    <button type="button" className="btn btn-primary w-full justify-center py-4">
                                        Get Free Quote
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
