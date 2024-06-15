export const jobExperiences = {
    name: "jobExperiences",
    title: "Job Experiences",
    type: "object",
    fields: [
        {
            name: "experiences",
            type: "array",
            title: "Experiences",
            of: [
                {
                    name: "experience",
                    type: "object",
                    title: "Experience",
                    fields: [
                        {
                            name: "company",
                            title: "company",
                            type: "object",
                            fields: [
                                {
                                    name: "name",
                                    title: "Name",
                                    type: "string",
                                },
                                {
                                    name: "website",
                                    title: "Website",
                                    type: "string",
                                }
                            ]
                        },
                        {
                            name: "role",
                            title: "Role",
                            type: "string",
                        },
                        {
                            name: "date",
                            title: "Date",
                            type: "object",
                            fields: [
                                {
                                    name: "start_date",
                                    title: "Start Date",
                                    type: "date",
                                },
                                {
                                    name: "to_present",
                                    title: "To Present",
                                    type: "boolean",
                                },
                                {
                                    name: "end_date",
                                    title: "End Date",
                                    type: "date",
                                    hidden: ({ parent }) => parent?.to_present,
                                }
                            ]
                        },
                        {
                            name: "responsibilities",
                            title: "Responsibilities",
                            type: "array",
                            of: [
                                {
                                    type: "block"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}