export const threeColGallery = {
    name: "threeColGallery",
    title: "Three Column Gallery",
    type: "object",
    fields: [
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "alt_text",
                            title: "Alt Text",
                            type: "string",
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
                                    { title: "1:2", value: "1:2" },
                                    { title: "1:1", value: "1:1" },
                                ]
                            },
                            initialValue: "16:9",
                        },
                    ]
                }
            ],
            validation: Rule => Rule.max(3).error("Only allows up to three images")
        }
    ]
}