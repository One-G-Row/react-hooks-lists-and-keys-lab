import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 console.log(projects);
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
     
    <ProjectItem key = {projects.id} name = {projects[0].name} about={projects[0].about} technologies={projects[0].technologies} />
    <ProjectItem key = {projects.id} name = {projects[1].name} about={projects[1].about} technologies={projects[1].technologies} />
    <ProjectItem key = {projects.id} name = {projects[2].name} about={projects[2].about} technologies={projects[2].technologies} />

    </div>
  );
}

export default ProjectList;
