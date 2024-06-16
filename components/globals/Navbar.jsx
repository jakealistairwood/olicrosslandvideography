"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        console.log("use effect ran");

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [window.scrollY]);

    return (
        <motion.nav variants={navbarAnimation} initial="initial" animate={scrolled ? "animate" : "initial"} className="fixed top-0 left-0 w-full right-0 z-[999] py-4">
            <div className="container flex items-center justify-between">
                <div className="flex items-center font-mono font-normal gap-x-12">
                    <div className="relative aspect-[105/18] max-w-[105px] w-full">
                        <Image src="/images/logo.svg" width={105} height={18} objectFit="contain" className="w-full max-w-[108px] mb-1" />
                    </div>
                    <menu className="flex items-center text-white-80 gap-10 uppercase text-sm">
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
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-x-4 font-mono uppercase text-sm text-white-80">
                        <motion.div 
                            className="w-[10px] h-[10px] rounded-full bg-accent" 
                            animate={{ opacity: [1, 0, 1] }} // Flashes by changing opacity
                            transition={{ duration: 0.8, repeat: Infinity }} // Infinite loop with 1 second duration
                        />
                        <span>Available For Projects</span>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar;


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