import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { PortableText } from "next-sanity";

const JobExperiences = ({ experiences = [] }) => {
    return (
        <div className="job-experiences" id="job-experiences">
            {experiences?.map((experience, i) => (
                <JobExperience key={`${experience?._key}`} {...experience} />
            ))}
        </div>
    )
}

export default JobExperiences;

const JobExperience = ({ company = {}, date = "", responsibilities = [], role = "" }) => {
    const { name } = company;

    const [openExperience, setOpenExperience] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const hasResponsiblities = responsibilities && responsibilities.length > 0;

    const accordionAnimation = {
        closed: {
            height: "0px",
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
        },
        open: {
            height: "auto",
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            }
        }
    }

    const animateLine = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: 0.3,
            }
        }
    }
    

    return (
        <div className="overflow-hidden font-mono group job-experience">
            {hasResponsiblities ? (
                <button 
                    className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 py-[30px] w-full text-left" 
                    type="button" 
                    onClick={() => setOpenExperience(!openExperience)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setIsHovered(true)}
                    onBlur={() => setIsHovered(false)}
                >
                    <div className="col-span-1 sm:col-span-3">
                        {date && date.length > 0 && <p className="text-xs md:text-sm uppercase tracking-[0.07em] font-normal text-white/60">{date}</p>}
                    </div>
                    <div className="col-span-1 sm:col-span-6">
                        {role && role.length > 0 && <h3 className="text-xs md:text-sm uppercase tracking-[0.07em] font-normal">{role}</h3>}
                    </div>
                    <div className="col-span-1 sm:col-span-3">
                        {company?.name && company?.name.length > 0 && (
                            <div className="text-xs md:text-sm uppercase text-white/60 tracking-[0.07em] font-normal text-left sm:text-right">{company?.name}</div>
                        )}
                    </div>
                </button>
            ) : (
                <div 
                    className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 py-[30px] w-full text-left"
                >
                    <div className="col-span-1 sm:col-span-3">
                        {date && date.length > 0 && <p className="text-xs md:text-sm uppercase tracking-[0.07em] font-normal text-white/60">{date}</p>}
                    </div>
                    <div className="col-span-1 sm:col-span-6">
                        {role && role.length > 0 && <h3 className="text-xs md:text-sm uppercase tracking-[0.07em] font-normal">{role}</h3>}
                    </div>
                    <div className="col-span-1 sm:col-span-3">
                        {company?.name && company?.name.length > 0 && (
                            <div className="text-xs md:text-sm uppercase text-white/60 tracking-[0.07em] font-normal text-left sm:text-right">{company?.name}</div>
                        )}
                    </div>
                </div>
            )}
            {hasResponsiblities && (
                <motion.div variants={accordionAnimation} initial="closed" animate={openExperience ? "open" : "closed"} className="flex flex-col">
                    <div className="grid grid-cols-12 w-full">
                        <div className="col-span-1 sm:col-span-3" />
                        <div className="col-span-1 sm:col-span-6 job-experience__responsibilities">
                            <PortableText value={responsibilities} />
                        </div>
                    </div>
                    <div className="min-h-[30px]" />
                </motion.div>
            )}
            <div className="relative min-h-[1px] w-full bg-white/20 overflow-hidden">
                {hasResponsiblities && <motion.div variants={animateLine} initial="initial" animate={isHovered ? "animate" : "initial"} className="origin-left w-full absolute left-0 right-0 top-0 h-full bg-accent z-[2]" />}
            </div>
        </div>
    )
}