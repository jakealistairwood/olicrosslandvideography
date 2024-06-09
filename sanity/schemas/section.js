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
                                    { title: "Home Masthead", value: "homeMasthead" },
                                ]
                            }   
                        }
                    ]
                }
            ]
        },
        {
            name: "homeMasthead",
            type: "homeMasthead",
            title: "Home Masthead",
            hidden: ({ parent }) => parent.component !== "homeMasthead",
        },
    ]
}