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
        {
            name: "add_logo_marquee",
            title: "Add Logo Marquee",
            type: "boolean",
        },
        {
            name: "logoMarquee",
            type: "logoMarquee",
            title: "Logo Marquee",
            hidden: ({ parent }) =>!parent?.add_logo_marquee,
        }
    ],
}