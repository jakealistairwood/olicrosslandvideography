import { defineType } from "sanity"

export const contactForm = defineType({
    name: "contactForm",
    title: "Contact Form",
    type: "object",
    fields: [
        {
            name: "service_ID",
            title: "Service ID",
            type: "string",
        },
        {
            name: "template_id",
            title: "Template ID",
            type: "string",
        },
        {
            name: "public_key",
            title: "Public Key",
            type: "string",
        },
        {
            name: "confirmation_message",
            title: "Confirmation Message",
            type: "object",
            fields: [
                {
                    name: "heading",
                    type: "string",
                    title: "Heading",
                },
                {
                    name: "description",
                    type: "text",
                    title: "Description",
                }
            ]
        }
    ],
})