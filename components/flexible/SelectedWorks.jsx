import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

import ProjectCard from "../elements/ProjectCard";

const SelectedWorks = ({ projects }) => {

    const hasProjects = projects && projects.length > 0;

    return hasProjects && (
        <div className="grid grid-cols-12 gap-x-10 gap-y-20">
            {projects?.map((project, i) => (
                i === 0 ? (
                    <FeaturedProject project={project} />
                ) : (
                    <ProjectCard {...project} />
                )
            ))}
        </div>
    )
}

export default SelectedWorks;

const FeaturedProject = ({ project }) => {
    const { featured_image, category, title, slug, date } = project;
    return (
        <div className="col-span-12 bg-graphite p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-[55%_auto] gap-x-20 group">
            <div className="relative h-full w-full aspect-[16/9] rounded-lg grayscale group-hover:grayscale-0 duration-300 ease transition-all">
                <Image src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill className="object-cover h-full w-full rounded-lg" />
            </div>
            <div className="flex flex-col py-12 h-full">
                <span className="text-accent font-mono text-sm uppercase tracking-[0.24em] font-bold mb-5">{category?.category_name}</span>
                <h3 className="font-heading uppercase font-light text-[2.5rem] text-white-80 tracking-[0.18em] leading-tight">{title}</h3>
                <div className="mt-auto">
                    <Link href={`portfolio/${slug?.current}`} className="flex items-center cursor-pointer gap-4 border border-white/20 rounded-md w-fit py-[14px] px-8 uppercase text-sm tracking-[0.15em]">
                        View case study
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.96191 11L10.4619 6.5L2.96191 2V11Z" fill="white"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// const ProjectCard = ({ project }) => {
//     const { featured_image, category, title, slug } = project;

//     return (
//         <Link className="col-span-6" href={`/portfolio/${slug?.current}` || ""}>
//             <div className="flex flex-col w-full">
//                 <div className="aspect-[16/9] relative w-full h-full rounded-lg grayscale">
//                     <Image src={urlForImage(featured_image?.asset)} alt={featured_image?.alt_text || ""} fill className="object-cover h-full w-full rounded-lg" />
//                 </div>
//                 <div className="flex flex-col mt-6">
//                     <span className="text-accent font-mono text-sm uppercase tracking-[0.24em] font-bold mb-5">{category?.category_name}</span>
//                     <h3 className="font-heading uppercase font-light text-[1.5rem] text-white-80 tracking-[0.18em] leading-tight">{title}</h3>
//                 </div>
//             </div>
//         </Link>
//     )
// }