"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
        <nav className="fixed top-0 left-0 w-full right-0 z-[999] h-[40px] py-4">
            <div className="container flex items-center justify-between">
                <div className="flex items-center font-mono font-normal gap-x-12">
                    <div className="relative aspect-[105/18] max-w-[105px] w-full">
                        <Image src="/images/logo.svg" width={105} height={18} objectFit="contain" className="w-full max-w-[108px] mb-1" />
                    </div>
                    <menu className="flex items-center text-white-80 gap-10 uppercase text-sm">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
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
        </nav>
    )
}

export default Navbar;


const NavLink = ({ label, url }) => {
    return (
        <Link href={url || ""} className="block relative group overflow-hidden mt-20 min-h-[1.2rem]">
            <div className="absolute top-0 left-0 group-hover:top-[-100%] transition-all duration-300 ease group-hover:opacity-0">{label}</div>
            <div className="absolute top-[100%] left-0 group-hover:top-0 transition-all duration-300 ease">{label}</div>
        </Link>
    )
}