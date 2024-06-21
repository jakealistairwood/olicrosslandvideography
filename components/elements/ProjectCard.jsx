import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ slug, featured_image, category, title, index }) => {
    const [hovered, setHovered] = useState(false);
    const projectRef = useRef(null);

    const isInView = useInView(projectRef, {
        amount: 0.2,
        once: false,
    });

    const arrowAnimation = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: {
            scale: [0, 1.2, 1],
            opacity: 1,
        }
    }

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
        <Link 
            className="col-span-1 md:col-span-6" 
            href={`/portfolio/${slug.current}`} 
            ref={projectRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <motion.div variants={fadeInProject} initial="initial" animate={isInView ? "animate" : "initial"} custom={index} className="flex flex-col">
                <div className="aspect-[16/9] relative w-full">
                    <Image className={`${hovered ? "opacity-80" : "opacity-100"} transition-opacity duration-200 ease w-full h-full object-cover`} src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill />
                    <motion.div className="origin-center will-change-transform absolute top-6 right-6 w-[36px] h-[36px] bg-accent text-white flex items-center justify-center rounded-full" variants={arrowAnimation} initial="initial" animate={hovered ? "animate" : "initial"}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5855 9.39779L10.523 14.4603C10.4174 14.5658 10.2743 14.6251 10.125 14.6251C9.97573 14.6251 9.83258 14.5658 9.72703 14.4603C9.62148 14.3547 9.56219 14.2116 9.56219 14.0623C9.56219 13.9131 9.62148 13.7699 9.72703 13.6644L13.8298 9.56232H2.8125C2.66332 9.56232 2.52024 9.50306 2.41475 9.39757C2.30926 9.29208 2.25 9.14901 2.25 8.99982C2.25 8.85064 2.30926 8.70757 2.41475 8.60208C2.52024 8.49659 2.66332 8.43732 2.8125 8.43732H13.8298L9.72703 4.33529C9.62148 4.22975 9.56219 4.08659 9.56219 3.93732C9.56219 3.78806 9.62148 3.6449 9.72703 3.53936C9.83258 3.43381 9.97573 3.37451 10.125 3.37451C10.2743 3.37451 10.4174 3.43381 10.523 3.53936L15.5855 8.60186C15.6378 8.6541 15.6793 8.71613 15.7076 8.78442C15.7359 8.85271 15.7504 8.9259 15.7504 8.99982C15.7504 9.07375 15.7359 9.14694 15.7076 9.21523C15.6793 9.28351 15.6378 9.34555 15.5855 9.39779Z" fill="currentColor"/>
                        </svg>
                    </motion.div>
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