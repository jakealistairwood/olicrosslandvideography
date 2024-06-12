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
                                    { title: "Section Header", value: "sectionHeader" },
                                    { title: "Logo Marquee", value: "logoMarquee" },
                                    { title: "Text Image Marquee", value: "textImageMarquee" },
                                    { title: "Full Width Asset", value: "fullWidthAsset" },
                                    { title: "Selected Works", value: "selectedWorks" },
                                    { title: "Introduction", value: "introduction" },
                                    { title: "Timed Text Image Slider", value: "timedTextImageSlider" },
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
                            name: "sectionHeader",
                            type: "sectionHeader",
                            title: "Section Header",
                            hidden: ({ parent }) => parent.component!== "sectionHeader",
                        },
                        {
                            name: "logoMarquee",
                            type: "logoMarquee",
                            title: "Logo Marquee",
                            hidden: ({ parent }) => parent.component !== "logoMarquee",
                        },
                        {
                            name: "introduction",
                            type: "introduction",
                            title: "Introduction",
                            hidden: ({ parent }) => parent.component!== "introduction",
                        },
                        {
                            name: "textImageMarquee",
                            type: "textImageMarquee",
                            title: "Text Image Marquee",
                            hidden: ({ parent }) => parent.component !== "textImageMarquee",
                        },
                        {
                            name: "fullWidthAsset",
                            type: "fullWidthAsset",
                            title: "Full Width Asset",
                            hidden: ({ parent }) => parent.component!== "fullWidthAsset",
                        },
                        {
                            name: "selectedWorks",
                            type: "selectedWorks",
                            title: "Selected Works",
                            hidden: ({ parent }) => parent.component!== "selectedWorks",
                        },
                        {
                            name: "timedTextImageSlider",
                            type: "timedTextImageSlider",
                            title: "Timed Text Image Slider",
                            hidden: ({ parent }) => parent.component!== "timedTextImageSlider",
                        }
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