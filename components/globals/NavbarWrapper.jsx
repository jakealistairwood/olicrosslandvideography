"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenuButton from "../elements/MobileMenuButton";

const NavbarWrapper = ({ settings }) => {
    const { navbarOptions } = settings;

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
            <DesktopNav scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} options={navbarOptions} />
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
                    <motion.li variants={mobileLinksAnimation} initial="initial" animate={mobileMenuOpen ? "animate" : "initial"} custom={2}>
                        <Link href="/contact" className="font-mono uppercase tracking-[0.04em] duration-300 ease text-4xl transition-colors text-white-80 hover:text-white py-6 block border-b border-white/20" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
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

const DesktopNav = ({ scrolled, mobileMenuOpen, setMobileMenuOpen, options }) => {
    const { availableForProjects, link } = options;

    const [hideOnScroll, setHideOnScroll] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 200) {
            setHideOnScroll(true);
        } else {
            setHideOnScroll(false);
        }
    })

    const hasLink = link?.url && link?.url.length > 0;

    const hideOnScrollAnimation = {
        initial: {
            y: "0",
        },
        hidden: {
            y: "-100%",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            }
        }
    }

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
        <motion.header variants={hideOnScrollAnimation} initial="initial" animate={hideOnScroll ? "hidden" : "initial"} className="fixed top-0 left-0 w-full right-0 z-[999]">
            <motion.div className="py-4" variants={navbarAnimation} initial="initial" animate={scrolled && !mobileMenuOpen ? "animate" : "initial"}>
                <div className="container flex items-center justify-between">
                    <nav className="flex items-center font-mono font-normal gap-x-12">
                        <Link href="/" className="relative aspect-[105/18] w-full">
                            {/* <Image src="/images/logo.svg" width={105} height={18} objectFit="contain" className="w-full max-w-[108px] mb-1" /> */}
                            <span className="uppercase font-mono font-normal text-sm tracking-[0.1em]">Oli Crossland</span>
                        </Link>
                        <menu className="hidden lg:flex items-center text-white-80 gap-10 uppercase text-xs tracking-[0.1em]">
                            <li>
                                <NavLink label="Home" url="/" />
                            </li>
                            <li>
                                <NavLink label="About" url="/about" />
                            </li>
                            <li>
                                <NavLink label="Portfolio" url="/portfolio" />
                            </li>
                            <li>
                                <NavLink label="Contact" url="/contact" />
                            </li>
                        </menu>
                    </nav>
                    <nav className="hidden lg:flex items-center gap-10">
                        {availableForProjects && (
                            <div id="available-for-projects" className="lg:flex items-center gap-x-4 font-mono uppercase text-xs tracking-[0.1em] text-white-80">
                                <motion.div 
                                    className="w-[10px] h-[10px] rounded-full bg-accent" 
                                    animate={{ opacity: [1, 0, 1] }} // Flashes by changing opacity
                                    transition={{ duration: 0.8, repeat: Infinity }} // Infinite loop with 1 second duration
                                />
                                <span>Available For Projects</span>
                            </div>
                        )}
                        {hasLink && <NavCTABtn {...link} />}
                    </nav>
                    <MobileMenuButton menuOpen={mobileMenuOpen} setMenuOpen={setMobileMenuOpen} />
                </div>

            </motion.div>
            </motion.header>
    )
}


const NavCTABtn = ({ label, url }) => {
    const [hovered, setHovered] = useState(false);
    const [initialRender, setInitialRender] = useState(true);

    const ctaMaskAnimation = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.86, 0, 0.07, 0.995]
            }
        }
    }

    const ctaLabelAnimation = {
        initial: {
            color: "#FFFFFF",
        },
        animate: {
            color: "#000000",
            transition: {
                duration: 0.3,
                ease: [0.86, 0, 0.07, 0.995]
            }
        }
    }

    useEffect(() => {
        setInitialRender(false);
    }, []);

    return (
        <Link 
            className="flex items-center gap-2" 
            href={url}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <div className="flex items-center justify-center text-center rounded border border-[#4D4D4D] uppercase font-mono text-xs py-3 px-6 tracking-[0.10em] relative overflow-hidden">
                <motion.span 
                    className="relative z-[2]" 
                    variants={ctaLabelAnimation} 
                    // initial="initial" 
                    initial={initialRender ? false : "initial"}
                    animate={hovered ? "animate" : "initial"}
                >
                    {label || "Get in touch"}
                </motion.span>
                <motion.div 
                    className="absolute inset-0 w-full h-full bg-white rounded origin-bottom" 
                    variants={ctaMaskAnimation}
                    // iniital="initial" 
                    initial={initialRender ? false : "initial"}
                    animate={hovered ? "animate" : "initial"} 
                />
            </div>
            <div className="flex items-center justify-center rounded border border-[#4D4D4D] min-h-[42px] py-3 px-6 relative overflow-hidden">
                <motion.div 
                    className="relative z-[2]" 
                    variants={ctaLabelAnimation} 
                    // initial="initial" 
                    initial={initialRender ? false : "initial"}
                    animate={hovered ? "animate" : "initial"} 
                >
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0386 5.8891L8.08892 10.8388C7.98572 10.942 7.84576 11 7.69982 11C7.55387 11 7.41391 10.942 7.31071 10.8388C7.20752 10.7356 7.14954 10.5957 7.14954 10.4497C7.14954 10.3038 7.20752 10.1638 7.31071 10.0606L11.3221 6.04997H0.550214C0.404353 6.04997 0.264466 5.99203 0.161327 5.88889C0.0581873 5.78575 0.000244141 5.64586 0.000244141 5.5C0.000244141 5.35414 0.0581873 5.21425 0.161327 5.11111C0.264466 5.00797 0.404353 4.95003 0.550214 4.95003H11.3221L7.31071 0.939378C7.20752 0.836182 7.14954 0.696217 7.14954 0.550275C7.14954 0.404333 7.20752 0.264368 7.31071 0.161172C7.41391 0.0579752 7.55387 0 7.69982 0C7.84576 0 7.98572 0.0579752 8.08892 0.161172L13.0386 5.1109C13.0898 5.16197 13.1303 5.22263 13.158 5.28939C13.1857 5.35616 13.1999 5.42772 13.1999 5.5C13.1999 5.57227 13.1857 5.64384 13.158 5.71061C13.1303 5.77737 13.0898 5.83803 13.0386 5.8891Z" fill="currentColor"/>
                    </svg>
                </motion.div>
                <motion.div 
                    className="absolute inset-0 w-full h-full bg-white rounded origin-bottom" 
                    variants={ctaMaskAnimation} 
                    // iniital="initial" 
                    initial={initialRender ? false : "initial"}
                    animate={hovered ? "animate" : "initial"} 
                />
            </div>
        </Link>
    )
}