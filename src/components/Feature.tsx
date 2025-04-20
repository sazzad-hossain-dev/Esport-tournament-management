"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaShieldAlt,
    FaMoneyCheckAlt,
    FaCalendarCheck,
    FaUserCheck,
    FaTrophy,
    FaUsersCog,
    FaClipboardCheck,
    FaClock,
} from "react-icons/fa";
import clsx from "clsx";

const playerFeatures = [
    {
        icon: <FaShieldAlt />,
        title: "Verified & Unverified Tournaments",
        description: "Play casual or official matches with trust and security.",
    },
    {
        icon: <FaMoneyCheckAlt />,
        title: "Secure Prize Payouts",
        description: "Instant and fair cash prize distribution for winners.",
    },
    {
        icon: <FaCalendarCheck />,
        title: "Daily & Weekly Matches",
        description: "Join consistent scrims and grow your presence.",
    },
    {
        icon: <FaUserCheck />,
        title: "Simple Access",
        description: "All match info, schedules & credentials in one place.",
    },
];

const organizerFeatures = [
    {
        icon: <FaTrophy />,
        title: "Host Any Tournament",
        description: "Custom paid, free, practice, or verified events.",
    },
    {
        icon: <FaUsersCog />,
        title: "Automated Management",
        description: "Handle entries, results, teams, and more — easily.",
    },
    {
        icon: <FaClipboardCheck />,
        title: "No Upfront Cost",
        description: "Start for free, scale as needed.",
    },
    {
        icon: <FaClock />,
        title: "Real-Time Tools",
        description: "Manage live matches without chaos.",
    },
];

const Features = () => {
    const [tab, setTab] = useState<"players" | "organizers">("players");
    const features = tab === "players" ? playerFeatures : organizerFeatures;

    return (
        <section className="bg-bg py-24 text-text-primary relative z-10">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold font-Orbitron text-center mb-12"
                >
                    Unlock Power Features
                </motion.h2>

                {/* Tabs */}
                <div className="flex justify-center mb-16 gap-4">
                    <button
                        onClick={() => setTab("players")}
                        className={clsx(
                            "px-6 py-2 font-semibold rounded-full transition-all",
                            tab === "players"
                                ? "bg-accent text-white shadow"
                                : "bg-muted border border-border hover:bg-accent/20"
                        )}
                    >
                        For Players & Teams
                    </button>
                    <button
                        onClick={() => setTab("organizers")}
                        className={clsx(
                            "px-6 py-2 font-semibold rounded-full transition-all",
                            tab === "organizers"
                                ? "bg-accent text-white shadow"
                                : "bg-muted border border-border hover:bg-accent/20"
                        )}
                    >
                        For Organizers
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gradient-to-br from-[#1A1A2E] to-[#1F1F3A]/80 backdrop-blur-md p-6 rounded-2xl border border-border shadow-md hover:shadow-xl transition-all hover:border-glow-blue"
                        >
                            {/* Glowing dot behind icon */}
                            <div className="flex justify-center mb-4 relative">
                                <div className="absolute w-10 h-10 rounded-full bg-glow-blue blur-xl opacity-30 group-hover:scale-125 transition-transform" />
                                <div className="relative text-3xl text-accent group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold font-Montserrat text-center mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-text-secondary text-center font-Inter">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
