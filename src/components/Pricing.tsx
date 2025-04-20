"use client";
import { motion } from "framer-motion";
const Pricing = () => {
    return (
        <>
            <section className="bg-bg-light py-24 text-text-primary">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold font-Orbitron text-center mb-16"
                    >
                        Pricing Plans
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-2xl border border-border shadow-md"
                        >
                            <h3 className="text-xl font-semibold font-Montserrat mb-4 text-center">
                                Free Plan
                            </h3>
                            <p className="text-center text-sm text-text-secondary mb-6">
                                Start hosting tournaments with limited features.
                            </p>
                            <p className="text-xl font-semibold text-center mb-6">
                                $0/month
                            </p>
                            <button className="btn-primary w-full">
                                Get Started
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-2xl border border-border shadow-md"
                        >
                            <h3 className="text-xl font-semibold font-Montserrat mb-4 text-center">
                                Pro Plan
                            </h3>
                            <p className="text-center text-sm text-text-secondary mb-6">
                                Unlock premium features and advanced management
                                tools.
                            </p>
                            <p className="text-xl font-semibold text-center mb-6">
                                $29/month
                            </p>
                            <button className="btn-primary w-full">
                                Get Started
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-2xl border border-border shadow-md"
                        >
                            <h3 className="text-xl font-semibold font-Montserrat mb-4 text-center">
                                Enterprise Plan
                            </h3>
                            <p className="text-center text-sm text-text-secondary mb-6">
                                Custom solutions for large-scale tournaments and
                                teams.
                            </p>
                            <p className="text-xl font-semibold text-center mb-6">
                                Contact Us
                            </p>
                            <button className="btn-primary w-full">
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
