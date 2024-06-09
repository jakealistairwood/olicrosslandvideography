import { defineType } from "sanity";

export const homeMasthead = {
    name: "homeMasthead",
    title: "Home Masthead",
    type: "object",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
    ],
}