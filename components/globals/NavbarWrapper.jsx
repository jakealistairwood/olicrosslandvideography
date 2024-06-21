"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenuButton from "../elements/MobileMenuButton";

const NavbarWrapper = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [mobileMenuOpen]);

    const mobileMenuAnimation = {
        initial: {
            opacity: 0,
            scale: 0,
            visibility: "hidden",
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
        },
        animate: {
            opacity: 1,
            scale: 1,
            visibility: "visible",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(12px)",
        }
    }

    const mobileLinksAnimation = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
            }
        })
    }

    return (
        <>
            <DesktopNav scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <motion.nav variants={mobileMenuAnimation} initial="initial" animate={mobileMenuOpen ? "animate" : "initial"} className="flex flex-col fixed rounded-xl top-0 right-0 left-0 w-full origin-top-right will-change-transform pt-[74px] pb-10 z-[998]">
                <menu className="container">
                    <motion.li variants={mobileLinksAnimation} initial="initial" animate={mobileMenuOpen ? "animate" : "initial"} custom={0}>
                        <Link href="/" className="font-mono uppercase tracking-[0.04em] duration-300 ease text-4xl transition-colors text-white-80 hover:text-white py-6 block border-b border-white/20" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    </motion.li>
                    <motion.li variants={mobileLinksAnimation} initial="initial" animate={mobileMenuOpen ? "animate" : "initial"} custom={1}>
                        <Link href="/about" className="font-mono uppercase tracking-[0.04em] duration-300 ease text-4xl transition-colors text-white-80 hover:text-white py-6 block border-b border-white/20" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    </motion.li>
                    <motion.li variants={mobileLinksAnimation} initial="initial" animate={mobileMenuOpen ? "animate" : "initial"} custom={2}>
                        <Link href="/portfolio" className="font-mono uppercase tracking-[0.04em] duration-300 ease text-4xl transition-colors text-white-80 hover:text-white py-6 block border-b border-white/20" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                    </motion.li>
                </menu>
            </motion.nav>
        </>
    )
}

export default NavbarWrapper;


const NavLink = ({ label, url }) => {
    const [hovered, setHovered] = useState(false);

    const topLineAnimation = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "-100%",
        }
    }

    const bottomLineAnimation = {
        initial: {
            y: "100%",
        },
        animate: {
            y: "0%",
        }
    }

    return (
        <Link 
            href={url || ""} 
            className="relative flex flex-col overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <span className="inline-block relative left-0 opacity-0">{label}</span>
            <motion.span variants={topLineAnimation} initial="initial" animate={hovered ? "animate" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
            <motion.span variants={bottomLineAnimation} initial="initial" animate={hovered ? "animate" : "initial"} className="inline-block absolute left-0">{label}</motion.span>
        </Link>
    )
}

const DesktopNav = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {

    const navbarAnimation = {
        initial: {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
        },
        animate: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(12px)",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            }
        }
    }

    return (
        <motion.header variants={navbarAnimation} initial="initial" animate={scrolled && !mobileMenuOpen ? "animate" : "initial"} className="fixed top-0 left-0 w-full right-0 z-[999] py-4">
                <div className="container flex items-center justify-between">
                    <nav className="flex items-center font-mono font-normal gap-x-12">
                        <div className="relative aspect-[105/18] max-w-[105px] w-full">
                            <Image src="/images/logo.svg" width={105} height={18} objectFit="contain" className="w-full max-w-[108px] mb-1" />
                        </div>
                        <menu className="hidden lg:flex items-center text-white-80 gap-10 uppercase text-sm">
                            <li>
                                <NavLink label="Home" url="/" />
                            </li>
                            <li>
                                <NavLink label="About" url="/about" />
                            </li>
                            <li>
                                <NavLink label="Portfolio" url="/portfolio" />
                            </li>
                        </menu>
                    </nav>
                    <nav className="hidden lg:flex items-center">
                        <div className="flex items-center gap-x-4 font-mono uppercase text-sm text-white-80">
                            <motion.div 
                                className="w-[10px] h-[10px] rounded-full bg-accent" 
                                animate={{ opacity: [1, 0, 1] }} // Flashes by changing opacity
                                transition={{ duration: 0.8, repeat: Infinity }} // Infinite loop with 1 second duration
                            />
                            <span>Available For Projects</span>
                        </div>
                    </nav>
                    <MobileMenuButton menuOpen={mobileMenuOpen} setMenuOpen={setMobileMenuOpen} />
                </div>
            </motion.header>
    )
}