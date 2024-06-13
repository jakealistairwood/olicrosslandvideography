import { defineType } from "sanity"

export const contactDetails = defineType({
    name: "contactDetails",
    title: "Contact Details",
    type: "object",
    fields: [
        {
            name: "email_address",
            type: "string",
            title: "Email Address",
        },
        {
            name: "mobile_number",
            type: "string",
            title: "Mobile Number",
        },
        {
            name: "location",
            type: "string",
            title: "Location",
        },
        {
            name: "socials",
            type: "array",
            title: "Socials",
            of: [
                {
                    name: "profile",
                    type: "object",
                    title: "Profile",
                    fields: [
                        {
                            name: "name",
                            type: "string",
                            title: "Name",
                        },
                        {
                            name: "url",
                            type: "string",
                            title: "URL",
                        },
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
                        }
                    ]
                }
            ]
        }
    ]
});