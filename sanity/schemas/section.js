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
                            validation: (Rule) =>
                                Rule.required()
                                    .min(1)
                                    .max(200)
                                    .error("Pick a component or remove"),
                            options: {
                                list: [
                                    { title: "Choose a component", value: "" },
                                    {
                                        title: "Home Masthead",
                                        value: "homeMasthead",
                                    },
                                    {
                                        title: "About Masthead",
                                        value: "aboutMasthead",
                                    },
                                    {
                                        title: "Contact Masthead",
                                        value: "contactMasthead",
                                    },
                                    {
                                        title: "Section Header",
                                        value: "sectionHeader",
                                    },
                                    {
                                        title: "Custom Link",
                                        value: "customLink",
                                    },
                                    {
                                        title: "Logo Marquee",
                                        value: "logoMarquee",
                                    },
                                    {
                                        title: "Text Image Marquee",
                                        value: "textImageMarquee",
                                    },
                                    {
                                        title: "Full Width Asset",
                                        value: "fullWidthAsset",
                                    },
                                    {
                                        title: "Selected Works",
                                        value: "selectedWorks",
                                    },
                                    {
                                        title: "Introduction",
                                        value: "introduction",
                                    },
                                    {
                                        title: "Timed Text Image Slider",
                                        value: "timedTextImageSlider",
                                    },
                                    {
                                        title: "Job Experiences",
                                        value: "jobExperiences",
                                    },
                                    {
                                        title: "Three Col Grid",
                                        value: "threeColGrid",
                                    },
                                    {
                                        title: "Scrollable Text",
                                        value: "scrollableText",
                                    },
                                    {
                                        title: "Links Wrapper",
                                        value: "linksWrapper",
                                    },
                                    {
                                        title: "Three Col Gallery",
                                        value: "threeColGallery",
                                    },
                                    {
                                        title: "Contact Form",
                                        value: "contactForm",
                                    },
                                ],
                            },
                            initialValue: "",
                        },
                        {
                            name: "homeMasthead",
                            type: "homeMasthead",
                            title: "Home Masthead",
                            hidden: ({ parent }) =>
                                parent.component !== "homeMasthead",
                        },
                        {
                            name: "aboutMasthead",
                            type: "aboutMasthead",
                            title: "About Masthead",
                            hidden: ({ parent }) =>
                                parent.component !== "aboutMasthead",
                        },
                        {
                            name: "contactMasthead",
                            type: "contactMasthead",
                            title: "Contact Masthead",
                            hidden: ({ parent }) =>
                                parent.component !== "contactMasthead",
                        },
                        {
                            name: "sectionHeader",
                            type: "sectionHeader",
                            title: "Section Header",
                            hidden: ({ parent }) =>
                                parent.component !== "sectionHeader",
                        },
                        {
                            name: "customLink",
                            type: "customLink",
                            title: "Custom Link",
                            hidden: ({ parent }) =>
                                parent.component !== "customLink",
                        },
                        {
                            name: "logoMarquee",
                            type: "logoMarquee",
                            title: "Logo Marquee",
                            hidden: ({ parent }) =>
                                parent.component !== "logoMarquee",
                        },
                        {
                            name: "introduction",
                            type: "introduction",
                            title: "Introduction",
                            hidden: ({ parent }) =>
                                parent.component !== "introduction",
                        },
                        {
                            name: "textImageMarquee",
                            type: "textImageMarquee",
                            title: "Text Image Marquee",
                            hidden: ({ parent }) =>
                                parent.component !== "textImageMarquee",
                        },
                        {
                            name: "fullWidthAsset",
                            type: "fullWidthAsset",
                            title: "Full Width Asset",
                            hidden: ({ parent }) =>
                                parent.component !== "fullWidthAsset",
                        },
                        {
                            name: "selectedWorks",
                            type: "selectedWorks",
                            title: "Selected Works",
                            hidden: ({ parent }) =>
                                parent.component !== "selectedWorks",
                        },
                        {
                            name: "timedTextImageSlider",
                            type: "timedTextImageSlider",
                            title: "Timed Text Image Slider",
                            hidden: ({ parent }) =>
                                parent.component !== "timedTextImageSlider",
                        },
                        {
                            name: "jobExperiences",
                            type: "jobExperiences",
                            title: "Job Experiences",
                            hidden: ({ parent }) =>
                                parent.component !== "jobExperiences",
                        },
                        {
                            name: "threeColGrid",
                            type: "threeColGrid",
                            title: "Three Column Grid",
                            hidden: ({ parent }) =>
                                parent.component !== "threeColGrid",
                        },
                        {
                            name: "scrollableText",
                            type: "scrollableText",
                            title: "Scrollable Text",
                            hidden: ({ parent }) =>
                                parent.component !== "scrollableText",
                        },
                        {
                            name: "linksWrapper",
                            type: "linksWrapper",
                            title: "Links Wrapper",
                            hidden: ({ parent }) =>
                                parent.component !== "linksWrapper",
                        },
                        {
                            name: "threeColGallery",
                            type: "threeColGallery",
                            title: "Three Column Gallery",
                            hidden: ({ parent }) =>
                                parent.component !== "threeColGallery",
                        },
                        {
                            name: "contactForm",
                            type: "contactForm",
                            title: "Contact Form",
                            hidden: ({ parent }) =>
                                parent.component !== "contactForm",
                        },
                    ],
                },
            ],
        },
        {
            name: "sectionOptions",
            type: "sectionOptions",
            title: "Section Options",
            group: "settings",
        },
    ],
};
