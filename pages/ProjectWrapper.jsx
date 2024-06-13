"use client";

import React from "react";
import ProjectMasthead from "@/components/mastheads/ProjectMasthead";

const ProjectWrapper = ({ project }) => {

    return (
        <div className="container">
            <ProjectMasthead {...project} />
        </div>
    )
}

export default ProjectWrapper;