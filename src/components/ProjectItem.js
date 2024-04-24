import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
  console.log(about)
  console.log(technologies)
  const techLists = technologies.map((techList, index) => {
  return <span key={index} >{techList}</span>
  });

  /* const techString = techList.join(", ") */
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
       {techLists}
      </div>
    </div>
  );
}

export default ProjectItem;
