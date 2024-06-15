export const aboutMasthead = {
    name: "aboutMasthead",
    title: "About Masthead",
    type: "object",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "include_contact_details",
            title: "Include Contact Details",
            type: "boolean",
        },
        {
            name: "masthead_image",
            title: "Masthead Image",
            type: "object",
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
                        }
                    ],
                    options: {
                        hotspot: true,
                    }
                },
                {
                    name: "aspect_ratio",
                    type: "string",
                    title: "Aspect Ratio",
                    options: {
                        list: [
                            { title: "16:9", value: "16:9" },
                            { title: "3:1", value: "3:1" },
                            { title: "3:2", value: "3:2" },
                            { title: "4:3", value: "4:3" },
                        ]
                    },
                    initialValue: "16:9",
                },
                {
                    name: "add_grayscale",
                    title: "Add Grayscale",
                    type: "boolean",
                }
            ]
        },
        {
            name: "about_me",
            title: "About Me",
            type: "object",
            fields: [
                {
                    name: "header",
                    title: "Header",
                    type: "string",
                },
                {
                    name: "content",
                    title: "Content",
                    type: "array",
                    of: [
                        {
                            type: "block"
                        }
                    ]
                }
            ]
        }
    ]
}