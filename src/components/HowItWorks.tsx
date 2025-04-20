"use client";
import { motion } from "framer-motion";
import React from "react";
import {
    FaMoneyBillAlt,
    FaPlus,
    FaTrophy,
    FaUsers,
    FaUserTie,
} from "react-icons/fa";

const managerSteps = [
    {
        icon: <FaUsers className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Manage Multiple Teams",
        description:
            "Create and manage as many teams as needed for different events and organizations.",
    },
    {
        icon: <FaTrophy className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Join Tournaments",
        description:
            "Easily enroll any of your teams into ongoing tournaments.",
    },
    {
        icon: <FaUserTie className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Work with Multiple Organizations",
        description:
            "Act as a manager in different tournaments organized by various organizations.",
    },
];

const organizationSteps = [
    {
        icon: <FaPlus className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Create Organization",
        description:
            "Managers can also create organizations to host tournaments.",
    },
    {
        icon: <FaTrophy className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Organize Tournaments",
        description: "Host paid or free tournaments with custom rules.",
    },
    {
        icon: <FaMoneyBillAlt className="text-purple-500 w-10 h-10 mb-4" />,
        title: "Manage Payments",
        description:
            "For paid tournaments, easily handle registrations and payments.",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="bg-bg py-20 text-text-primary">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron mb-16"
                >
                    How It Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Manager Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold font-Orbitron mb-6">
                            For Managers
                        </h3>
                        <div className="space-y-6">
                            {managerSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-card p-6 rounded-xl shadow-lg border border-border text-left transition-transform transform hover:border-glow-blue"
                                >
                                    <div className="flex items-center gap-4">
                                        {step.icon}
                                        <div>
                                            <h4 className="text-lg font-semibold font-Montserrat mb-1">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-text-secondary font-Inter">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Organization Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold font-Orbitron mb-6">
                            For Organizations
                        </h3>
                        <div className="space-y-6">
                            {organizationSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-card p-6 rounded-xl shadow-lg border border-border text-left transition-transform transform hover:border-glow-blue"
                                >
                                    <div className="flex items-center gap-4">
                                        {step.icon}
                                        <div>
                                            <h4 className="text-lg font-semibold font-Montserrat mb-1">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-text-secondary font-Inter">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
