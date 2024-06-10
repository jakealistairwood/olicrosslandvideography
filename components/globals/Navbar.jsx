"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full right-0 z-[999] h-[40px] py-4">
            <div className="container flex items-center justify-between">
                <div className="flex items-center font-mono font-normal gap-x-12">
                    <div className="relative aspect-[105/18] max-w-[105px] w-full">
                        <Image src="/images/logo.svg" width={105} height={18} objectFit="contain" className="w-full max-w-[108px]" />
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