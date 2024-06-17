import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ slug, featured_image, category, title, index }) => {
    const projectRef = useRef(null);

    const isInView = useInView(projectRef, {
        amount: 0.2,
        once: false,
    });

    const fadeInProject = {
        initial: {
            opacity: 0,
            y: 20,
            filter: "blur(20px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: (index) => ({
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
            }),
        }
    }

    return (
        <Link className="col-span-1 md:col-span-6" href={`/portfolio/${slug.current}`} ref={projectRef}>
            <motion.div variants={fadeInProject} initial="initial" animate={isInView ? "animate" : "initial"} custom={index} className="flex flex-col">
                <div className="aspect-[16/9] relative w-full">
                    <Image src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col mt-5 gap-y-1">
                    <span className="font-heading uppercase tracking-[0.24em] text-accent text-xs">{category?.category_name}</span>
                    <h3 className="font-heading uppercase tracking-[0.18em] text-white-80 font-light text-xl">{title}</h3>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProjectCard;