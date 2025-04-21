"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark text-text-secondary pt-12 pb-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Branding & Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold text-text-primary font-Orbitron">
                        Tournament Platform
                    </h2>
                    <p className="text-sm">
                        Empowering your esports events with smart, seamless
                        tools.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-primary transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-primary transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-primary transition-colors"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-text-primary transition-colors"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Quick Links */}
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
                                className="hover:text-text-primary transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#features"
                                className="hover:text-text-primary transition-colors"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#pricing"
                                className="hover:text-text-primary transition-colors"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="hover:text-text-primary transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Resources
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-text-primary transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="hover:text-text-primary transition-colors"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-text-primary transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/privacy"
                                className="hover:text-text-primary transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Newsletter
                    </h4>
                    <p className="text-sm mb-4">
                        Subscribe for tournament updates and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-grow p-3 rounded-lg bg-card border border-border text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <button
                            type="submit"
                            className="p-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="border-t border-border mt-10 pt-6 text-center text-xs text-text-tertiary">
                <p>© 2025 Tournament Platform. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
