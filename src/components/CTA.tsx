"use client";
import { motion } from "framer-motion";
const CTA = () => {
    return (
        <section className="bg-accent py-24 text-text-primary">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron mb-6"
                >
                    Ready to Host Your Tournament?
                </motion.h2>
                <p className="text-lg text-text-secondary mb-8">
                    Sign up today and start organizing your esports events with
                    ease.
                </p>
                <button className="btn-primary">Get Started</button>
            </div>
        </section>
    );
};

export default CTA;
