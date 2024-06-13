import { createClient } from "next-sanity";
import groq from "next-sanity"
import { client } from "../lib/client"

export const fetchHomepageData = async () => {
    const query = `
        *[_type == "page" && slug.current == "/"]{
            _id,
            "slug": slug.current,
            sections[]{
                ...,
                components[]{
                    ...,
                    selectedWorks{
                        projects[]->{
                            ...,
                            category->
                        }
                    }
                }
            }
        }[0]
    `;
    return await client.fetch(query);
}

export const fetchPageData = async (slug) => {
    const query = `
        *[_type == "page" && slug.current == $slug]{
            _id,
            "slug": slug.current,
            sections[]{
                ...,
                components[]{
                    ...,
                    selectedWorks{
                        projects[]->{
                            ...,
                            category->
                        }
                    }
                }
            }
        }[0]
    `;

    const params = { slug };

    return await client.fetch(query, params);
}

export const fetchPortfolio = async () => {
    const query = `
        *[_type == "portfolio"]{
            ...,
            category->
        }
    `;

    return await client.fetch(query);
}

export const fetchCategories = async () => {
    const query = `
        *[_type == "projectCategories"]{
            ...
        }
    `

    return await client.fetch(query);
}

export const fetchProjectData = async (slug) => {
    const query = `
        *[_type == "portfolio" && slug.current == $slug]{
            ...,
            "slug": slug.current,
            category->
        }[0]
    `

    const params = { slug };

    return await client.fetch(query, params);
}

export const fetchSiteSettings = async () => {
    const query = `
        *[_type == "siteSettings"]{
            ...,
        }[0]
    `

    return await client.fetch(query);
}