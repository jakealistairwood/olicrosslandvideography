import React from "react"
import { fetchPageSEOdata } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const seoData = await fetchPageSEOdata("/about")
  
    return {
        title: seoData?.seoTitle,
        description: seoData?.seoDescription,
        keywords: seoData?.seoKeywords,
    }
}

export default async function AboutLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}