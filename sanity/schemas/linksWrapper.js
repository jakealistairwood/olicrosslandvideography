export const linksWrapper = {
    name: "linksWrapper",
    title: "Links Wrapper",
    type: "object",
    fields: [
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "customLink"
                }
            ],
            validation: Rule => Rule.max(2).error("You can only add up to two links here")
        }
    ]
}