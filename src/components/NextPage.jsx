import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NextPage = ({ nextPath, nextName }) => {
    return (
        <section className="luxury-nav-section">
            <div className="container">
                <Link to={nextPath} className="luxury-nav-link">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="luxury-shadow-box text-center"
                    >
                        <p className="text-xs uppercase font-medium tracking-[0.5em] text-muted mb-8 opacity-50">
                            The Next Chapter
                        </p>

                        <div className="flex flex-col items-center">
                            <h2 className="serif-heading">
                                {nextName}
                            </h2>

                            <div className="luxury-arrow-container">
                                <MoveRight size={48} strokeWidth={1} className="minimal-thin-arrow" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default NextPage;
