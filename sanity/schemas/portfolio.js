export const portfolio = {
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            description: "This is a basically a summary of the project. (2-3 sentences)"
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [
                { type: "projectCategories" }
            ]
        },
        {
            name: "date",
            title: "Date",
            type: "date",
            options: {
                dateFormat: "MMM-YYYY",
            }
        },
        {
            name: "featured_image",
            title: "Featured Image",
            type: "image",
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
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" }
            ],
            description: "More detailed overview of the project, e.g. what it involves, the challenges, techniques used etc"
        },
        {
            name: "video_id",
            title: "Video ID",
            type: "string",
        }
    ]
}