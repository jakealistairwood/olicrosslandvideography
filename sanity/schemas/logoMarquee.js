import { defineType } from "sanity";

export const logoMarquee = defineType({
    name: "logoMarquee",
    type: "object",
    title: "Logo Marquee",
    fields: [
        {
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "logos",
            type: "array",
            title: "Logos",
            of: [
                {
                    name: "logo",
                    type: "object",
                    title: "Logo",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                    description: "Just add the name of the company for this field. It's used for accessibility purposes and helps rank your site better in Google"
                                }
                            ],
                        },
                        {
                            name: "link",
                            type: "string",
                            title: "Link",
                        }
                    ]
                }
            ]
        }
    ]
});