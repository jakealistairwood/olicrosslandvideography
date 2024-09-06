import React from "react"
import { fetchPageSEOdata } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const seoData = await fetchPageSEOdata("/portfolio")
  
    return {
      title: seoData?.seoTitle,
      description: seoData?.seoDescription,
      keywords: seoData?.seoKeywords,
    }
}

export default async function PortfolioLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}