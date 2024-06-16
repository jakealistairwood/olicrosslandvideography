import React, { useState } from "react";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";

const JobExperiences = ({ experiences = [] }) => {
    return (
        <div className="">
            {experiences?.map((experience, i) => (
                <JobExperience key={`${experience?._key}`} {...experience} />
            ))}
        </div>
    )
}

export default JobExperiences;

const JobExperience = ({ company = {}, date = {}, responsibilities = [], role = "" }) => {
    const { name } = company;

    const [openExperience, setOpenExperience] = useState(false);

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
    

    return (
        <div className="border-b border-white/20 hover:bg-white/10 overflow-hidden">
            <button className="grid grid-cols-12 py-[30px] w-full text-left" type="button" onClick={() => setOpenExperience(!openExperience)}>
                <div className="col-span-3">
                    {name && name.length > 0 && <h3 className="text-lg font-heading uppercase tracking-[0.18em] font-normal text-white/50">{name}</h3>}
                </div>
                <div className="col-span-6">
                    {role && role.length > 0 && <h3 className="text-lg font-heading uppercase tracking-[0.18em] font-normal">{role}</h3>}
                </div>
                <div className="col-span-3">
                    {responsibilities && responsibilities.length > 0 && (
                        <div className="text-lg uppercase font-heading text-accent tracking-[0.18em] font-medium text-right">Learn More</div>
                    )}
                </div>
            </button>
            {responsibilities && responsibilities.length > 0 && (
                <motion.div variants={accordionAnimation} initial="closed" animate={openExperience ? "open" : "closed"} className="flex flex-col">
                    <div className="grid grid-cols-12 w-full">
                        <div className="col-span-3" />
                        <div className="col-span-6">
                            <PortableText value={responsibilities} />
                        </div>
                    </div>
                    <div className="min-h-[30px]" />
                </motion.div>
            )}
        </div>
    )
}