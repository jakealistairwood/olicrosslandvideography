import React from "react"
import { fetchProjectSEOData } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const seoData = await fetchProjectSEOData(params.project);
  
    return {
      title: seoData?.seoTitle || `Oli Crossland | ${seoData.title}`,
      description: seoData?.seoDescription || seoData?.excerpt,
      keywords: seoData?.seoKeywords,
    }
}

export default async function ProjectLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}