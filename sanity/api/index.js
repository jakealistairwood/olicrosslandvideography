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
                    ...
                }
            }
        }[0]
    `;
    return await client.fetch(query);
}