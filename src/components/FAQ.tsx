"use client";
import React from "react";
import { motion } from "framer-motion";
const FAQ: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 text-text-primary">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron text-center mb-16"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold font-Montserrat">
                            How do I create a tournament?
                        </h3>
                        <p className="text-text-secondary text-sm font-Inter">
                            Simply sign up, select Create Tournament, and
                            customize your tournament settings in minutes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-Montserrat">
                            Do I need to pay to use the platform?
                        </h3>
                        <p className="text-text-secondary text-sm font-Inter">
                            You can get started with our free plan. Advanced
                            features are available in our Pro plan.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-Montserrat">
                            Can I host a team tournament?
                        </h3>
                        <p className="text-text-secondary text-sm font-Inter">
                            Yes, you can easily create team-based tournaments
                            with multiple categories and match formats.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
