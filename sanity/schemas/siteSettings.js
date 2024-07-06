export const siteSettings = {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "navbarOptions",
            title: "Navbar Options",
            type: "object",
            fields: [
                {
                    name: "availableForProjects",
                    type: "boolean",
                    title: "Available for Projects",
                    initialValue: false,
                },
                {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                        {
                            name: "url",
                            type: "string",
                            title: "URL",
                        },
                        {
                            name: "label",
                            type: "string",
                            title: "Label",
                        }
                    ]
                }
            ]
        },
        {
            name: "footerOptions",
            title: "Footer Options",
            type: "object",
            fields: [
                {
                    name: "cta",
                    type: "object",
                    title: "CTA",
                    fields: [
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                        },
                        {
                            name: "button",
                            type: "object",
                            title: "Button",
                            fields: [
                                {
                                    name: "link",
                                    type: "string",
                                    title: "Link",
                                },
                                {
                                    name: "label",
                                    type: "string",
                                    title: "Label",
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "contactDetails",
            type: "contactDetails",
            title: "Contact Details",
        }
    ],
    __experimental_actions: ['update', 'publish'], // Disallow creation and deletion
}