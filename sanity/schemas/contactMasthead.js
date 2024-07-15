export const contactMasthead = {
    name: "contactMasthead",
    title: "Contact Masthead",
    type: "object",
    fields: [
        {
            name: "subheading",
            title: "Subheading",
            type: "string",
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "include_contact_details",
            title: "Include Contact Details",
            type: "boolean",
        },
        {
            name: "contact_form",
            type: "contactForm",
        }
    ]
}