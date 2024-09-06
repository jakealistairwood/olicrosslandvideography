import React from "react";
import { fetchProjectData } from "@/sanity/api";
import ProjectWrapper from "@/pages/ProjectWrapper";

export default async function Project({ params }) {
    const { project } = params;

    const data = await fetchProjectData(project);

    return (
        <main>
            <ProjectWrapper project={data} />
        </main>
    );
}
