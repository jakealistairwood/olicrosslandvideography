export const section = {
    name: "section",
    title: "Section",
    type: "object",
    groups: [
        { name: "content", title: "Content" },
        { name: "settings", title: "Settings" },
    ],
    fields: [
        {
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            group: "content",
        },
        {
            name: "components",
            title: "Components",
            type: "array",
            group: "content",
            of: [
                {
                    type: "object",
                    title: "Component",
                    fields: [
                        {
                            name: "component",
                            title: "Component",
                            type: "string",
                            validation: (Rule) => Rule.required().min(1).max(200).error("Pick a component or remove"),
                            options: {
                                list: [
                                    { title: "Choose a component", value: "" },
                                    { title: "Home Masthead", value: "homeMasthead" },
                                    { title: "Logo Marquee", value: "logoMarquee" },
                                    { title: "Text Image Marquee", value: "textImageMarquee" },
                                ]
                            },
                            initialValue: "",
                        },
                        {
                            name: "homeMasthead",
                            type: "homeMasthead",
                            title: "Home Masthead",
                            hidden: ({ parent }) => parent.component !== "homeMasthead",
                        },
                        {
                            name: "logoMarquee",
                            type: "logoMarquee",
                            title: "Logo Marquee",
                            hidden: ({ parent }) => parent.component !== "logoMarquee",
                        },
                        {
                            name: "textImageMarquee",
                            type: "textImageMarquee",
                            title: "Text Image Marquee",
                            hidden: ({ parent }) => parent.component !== "textImageMarquee",
                        },
                    ]
                },
            ]
        },
        {
            name: "sectionOptions",
            type: "sectionOptions",
            title: "Section Options",
            group: "settings",
        }
    ]
}