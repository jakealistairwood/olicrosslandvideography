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
        },
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
        {
            name: "seoTitle",
            title: "SEO Title",
            type: "string",
            description: "Vital for SEO - Try and keep below 60 characters",
            group: "seo",
        },
        {
            name: "seoDescription",
            title: "SEO Description",
            type: "text",
            description: "Vital for SEO - Try and keep below 160 characters",
            group: "seo",
        },
        {
            name: "seoKeywords",
            title: "SEO Keywords",
            type: "array",
            of: [{ type: "string" }],
            description:
                "(Optional) List any keywords that are related to the content in this page",
            group: "seo",
        },
    ],
};
