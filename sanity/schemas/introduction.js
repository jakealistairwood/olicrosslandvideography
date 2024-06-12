export const introduction = {
    name: "introduction",
    title: "Introduction",
    type: "object",
    fields: [
        {
            name: "subheading",
            title: "Subheading",
            type: "string",
        },
        {
            name: "word_switcher",
            title: "Word Switcher",
            type: "object",
            fields: [
                {
                    name: "words_to_animate",
                    title: "Words To Animate",
                    type: "array",
                    of: [
                        {
                            name: "text_group",
                            title: "Text Group",
                            type: "object",
                            fields: [
                                {
                                    name: "animate_group",
                                    type: "boolean",
                                    title: "Animate Group",
                                },
                                {
                                    name: "text",
                                    type: "string",
                                    title: "Text",
                                    hidden: ({ parent }) => parent?.animate_group
                                },
                                {
                                    name: "animated_text",
                                    type: "array",
                                    title: "Animated Text",
                                    of: [
                                        {
                                            name: "switched_word",
                                            type: "string",
                                            title: "Switched Word",
                                        }
                                    ],
                                    hidden: ({ parent }) => !parent?.animate_group
                                }
                            ]
                        }
                    ]
                    // fields: [
                    //     {
                    //         name: "animation_type",
                    //         type: "string",
                    //         title: "Animation Type",
                    //         options: {
                    //             list: [
                    //                 { title: "Default", value: "default" },
                    //                 { title: "Switched Words", value: "switchedWords" },
                    //             ]
                    //         },
                    //         initialValue: "default",
                    //     },
                    //     {
                    //         name: "text",
                    //         title: "Text",
                    //         type: "string",
                    //         hidden: ({ parent }) => parent?.animation_type !== "default"
                    //     },
                    //     {
                    //         name: "words_to_switch",
                    //         title: "Words to Switch",
                    //         type: "array",
                    //         of: [
                    //             {
                    //                 name: "words",
                    //                 title: "Words",
                    //                 type: "string",
                    //             }
                    //         ],
                    //         hidden: ({ parent }) => parent?.animation_type!== "switchedWords"
                    //     }
                    // ]
                }
            ]
        }
    ]
}