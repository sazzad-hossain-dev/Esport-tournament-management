"use client";
import { motion } from "framer-motion";
import React from "react";
import CustomBtn from "./ui/CustomBtn";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen py-20 md:py-32 bg-bg text-text-primary overflow-hidden">
            {/* Custom Spotlight Glow SVG - Smaller Version */}
            <motion.div
                initial={{ opacity: 0, x: -200, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="pointer-events-none absolute -top-2 left-0 z-0 w-[60%] h-[60%] opacity-100"
            >
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3787 2842"
                    fill="none"
                >
                    <g filter="url(#glow)">
                        <ellipse
                            cx="1924.71"
                            cy="273.501"
                            rx="1924.71"
                            ry="273.501"
                            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                            fill="white"
                            fillOpacity="0.21"
                        />
                    </g>
                    <defs>
                        <filter
                            id="glow"
                            x="0.86"
                            y="0.83"
                            width="3785.16"
                            height="2840.26"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="151"
                                result="effect1_foregroundBlur"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>

            {/* Main Hero Content */}
            <div className="container px-6 text-center max-w-5xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-Orbitron tracking-wide"
                >
                    Host & Join Esports Tournaments with Confidence 🏆
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-text-secondary font-Inter max-w-2xl mx-auto mb-8"
                >
                    Whether you&apos;re a player or an organizer, run or join
                    verified tournaments, daily & weekly practice matches, and
                    prize pool events. We ensure fair prize distribution,
                    flexible hosting, and competitive fun — all in one platform.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <CustomBtn
                        title="Start Hosting a Tournament"
                        design="btn-primary px-6 py-3 text-lg"
                    />
                    <CustomBtn
                        title="Join Ongoing Matches"
                        design="btn-primary px-6 py-3 text-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
