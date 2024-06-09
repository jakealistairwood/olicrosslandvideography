export const page = {
    name: "page",
    title: "Page",
    type: "document",
    groups: [
        {
            name: "settings",
            title: "Settings",
        },
        {
            name: "content",
            title: "Content",
            default: true,
        },
        {
            name: "seo",
            title: "SEO",
        }
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            group: "settings",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
            group: "settings",
        },
        {
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                {
                    name: "section",
                    title: "Section",
                    type: "section",
                },
            ],
        },
    ],
}