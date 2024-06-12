import { defineType } from "sanity"

export const assetOptions = defineType({
    name: "assetOptions",
    type: "object",
    title: "Asset Options",
    fields: [
        {
            name: "assetType",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Image", value: "image" },
                    { title: "Video", value: "video" },
                ]
            },
            initialValue: "image"
        },
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
            hidden: ({ parent }) => parent?.assetType !== "image",
        },
        {
            name: "video",
            type: "object",
            title: "Video",
            fields: [
                {
                    name: "video_id",
                    title: "Video ID",
                    type: "string",
                },
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                    description: "Just add a brief description of the video. It makes the site more accessible and can boost SEO ranking slightly."
                },
                {
                    name: "add_thumbnail",
                    title: "Add Thumbnail",
                    type: "boolean",
                },
                {
                    name: "thumbnail",
                    title: "Thumbnail",
                    type: "image",
                    hidden: ({ parent }) => !parent?.add_thumbnail
                }
            ],
            hidden: ({ parent }) => parent?.assetType !== "video",
        },
    ]
})