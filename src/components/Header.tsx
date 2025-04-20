"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";
import CustomBtn from "./ui/CustomBtn";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    name: string;
    path: string;
}

const Header: React.FC = () => {
    const pathname = usePathname();
    const navlinks: NavLink[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Services", path: "/services" },
        { name: "FAQ", path: "/faq" },
    ];

    const navRef = useRef<HTMLDivElement | null>(null);
    const [glowStyle, setGlowStyle] = useState<{ left: number; width: number }>(
        {
            left: 0,
            width: 0,
        }
    );

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const updateGlow = (el: HTMLElement | null) => {
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setGlowStyle({ left: offsetLeft, width: offsetWidth });
        }
    };

    useEffect(() => {
        const activeLink = navRef.current?.querySelector(
            `[data-path="${pathname}"]`
        ) as HTMLElement | null;
        updateGlow(activeLink);
    }, [pathname]);

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="pt-4 z-50 relative">
            <header className="container flex-between px-8 py-5 rounded-[2rem] bg-card border border-border text-text-secondary backdrop-blur-md shadow-[0_0_24px_#1E1E3F]">
                <div className="text-3xl font-Orbitron font-extrabold text-text-primary tracking-wide">
                    ICON
                </div>

                {/* Desktop Nav */}
                <nav
                    ref={navRef}
                    className="relative hidden md:flex justify-center items-center gap-6"
                >
                    <span
                        className="absolute bottom-[-4px] h-[3px] bg-[#A970FF] shadow-[0_0_10px_#A970FF] rounded-full transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                        style={{
                            left: `${glowStyle.left}px`,
                            width: `${glowStyle.width}px`,
                        }}
                    />
                    {navlinks.map(({ name, path }) => (
                        <Link
                            key={path}
                            href={path}
                            data-path={path}
                            onMouseEnter={(e) => updateGlow(e.currentTarget)}
                            onMouseLeave={() => {
                                const active = navRef.current?.querySelector(
                                    `[data-path="${pathname}"]`
                                ) as HTMLElement | null;
                                updateGlow(active);
                            }}
                            className={`relative z-10 text-sm font-Inter hover:text-accent-hover transition-colors duration-300 ${
                                pathname === path ? "text-accent" : ""
                            }`}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex justify-center items-center gap-6">
                    <CustomBtn title="Sign Up" design="btn-primary" />
                    <CustomBtn title="Login" design="btn-primary" />
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="flex md:hidden cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <GiCrossMark color="#8B5CF6" size={30} />
                    ) : (
                        <CgMenuRightAlt color="#8B5CF6" size={30} />
                    )}
                </div>
            </header>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-[120px] left-1/2 w-[90%] -translate-x-1/2 bg-card border border-border px-8 py-6 z-40 backdrop-blur-lg shadow-[0_0_20px_rgba(169,112,255,0.2)]  text-text-secondary rounded-2xl"
                    >
                        <div className="flex flex-col justify-center items-center gap-6">
                            {navlinks.map(({ name, path }) => (
                                <Link
                                    key={path}
                                    href={path}
                                    className={`text-base font-Inter hover:text-accent transition-colors ${
                                        pathname === path ? "text-accent" : ""
                                    }`}
                                >
                                    {name}
                                </Link>
                            ))}
                            <div className="flex w-full flex-col gap-3 mt-4">
                                <CustomBtn
                                    title="Sign Up"
                                    design="btn-primary w-full"
                                />
                                <CustomBtn
                                    title="Login"
                                    design="btn-primary w-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
