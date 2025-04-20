"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-bg-dark text-text-secondary py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Logo + Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-text-primary font-Orbitron mb-3">
                        Tournament Platform
                    </h2>
                    <p className="text-sm">
                        Empowering your cricket events with smart tools.
                    </p>
                    <p className="text-xs mt-3 text-text-tertiary">
                        © 2025 Tournament Platform. All rights reserved.
                    </p>
                </motion.div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="#home"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#features"
                                className="hover:text-white transition-colors"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#pricing"
                                className="hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Follow Us
                    </h4>
                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
