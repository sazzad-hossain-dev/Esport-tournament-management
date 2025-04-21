"use client";
import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-24 text-text-primary bg-gradient-to-br from-bg-accent-light via-bg-accent to-bg-accent-dark">
            <div className="container text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron mb-6 text-shadow-md"
                >
                    Ready to Host Your Tournament?
                </motion.h2>
                <p className="text-lg text-text-secondary mb-8 text-shadow-sm">
                    Sign up today and start organizing your esports events with
                    ease.
                </p>
                <button className="btn-gradient">Get Started</button>
            </div>
            {/* Subtle background element */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-48 h-48 bg-bg-accent-lighter rounded-full filter blur-xl opacity-30 animate-pulse duration-2000"
                    style={{ transform: "translate(-50%, -50%)" }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary-lighter rounded-full filter blur-lg opacity-40 animate-pulse delay-1000 duration-2500"
                    style={{ transform: "translate(50%, 50%)" }}
                ></div>
            </div>
        </section>
    );
};

export default CTA;
