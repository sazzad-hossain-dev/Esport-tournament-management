"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaUsers } from "react-icons/fa";

const steps = [
    {
        icon: <FaMedal className="text-color-accent w-10 h-10 mb-4" />,
        title: "Create Tournament",
        description:
            "Set up your tournament with custom rules, match types, and more.",
    },
    {
        icon: <FaUsers className="text-color-accent w-10 h-10 mb-4" />,
        title: "Add Players",
        description:
            "Invite players and assign them to teams with just a few clicks.",
    },
    {
        icon: <FaTrophy className="text-color-accent w-10 h-10 mb-4" />,
        title: "Track Results",
        description:
            "Live scoring, automated ranking, and progress tracking built-in.",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-bg py-20 text-text-primary">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron mb-12"
                >
                    How It Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card p-8 rounded-2xl shadow-md border border-border"
                        >
                            <div className="flex justify-center">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold font-Montserrat mt-4 mb-2 text-text-primary">
                                {step.title}
                            </h3>
                            <p className="text-text-secondary font-Inter">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
