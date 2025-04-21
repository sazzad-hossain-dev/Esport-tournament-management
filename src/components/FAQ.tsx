"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqItems = [
    {
        question: "How do I create a tournament?",
        answer: "Simply sign up, click 'Create Tournament', and customize your settings: rules, format, schedule, and prize pool—all in minutes.",
    },
    {
        question: "Do I need to pay to use the platform?",
        answer: "You can start hosting for free with our Basic plan. Unlock advanced features like verified tournaments and analytics with Pro or Enterprise subscriptions.",
    },
    {
        question: "Can I host a team tournament?",
        answer: "Absolutely! Create team-based tournaments with round-robin or bracket formats, manage rosters, and track scores in real time.",
    },
    {
        question: "How are prizes distributed?",
        answer: "For verified tournaments, prize payouts are handled securely and instantly upon event completion. For casual events, organize payout manually or via platform escrow.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="bg-bg-light py-24 text-text-primary">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold font-Orbitron text-center mb-12"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial="collapsed"
                            animate={openIndex === idx ? "open" : "collapsed"}
                            variants={{
                                open: { height: "auto", opacity: 1 },
                                collapsed: { height: 64, opacity: 1 },
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden bg-card border border-border rounded-lg"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left"
                                onClick={() => toggle(idx)}
                            >
                                <span className="text-lg font-medium font-Montserrat">
                                    {item.question}
                                </span>
                                {openIndex === idx ? (
                                    <FaChevronUp className="text-accent w-5 h-5" />
                                ) : (
                                    <FaChevronDown className="text-accent w-5 h-5" />
                                )}
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-text-secondary text-sm font-Inter"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
