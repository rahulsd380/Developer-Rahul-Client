import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useGetAllProjectsQuery } from "../../../redux/Features/Projects/projectApi";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import Container from "../../Reusable/Container/Container";

const Projects = () => {
  const { data } = useGetAllProjectsQuery({});
  console.log(data);
  const [activeTab, setActiveTab] = useState("Personal Projects");
  const tabButtons = ["Personal Projects", "Company Projects"];

  const personalProjects = data?.data?.filter(
    (project) => project.projectType === "Personal"
  );
  const companyProjects = data?.data?.filter(
    (project) => project.projectType === "Company"
  );

  return (
    <div id="projects" className="mt-28">
      <Container>
      <div>
        <SectionHeading
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          subHeading={"My Work"}
          heading={"Latest Project"}
          tabButtons={tabButtons}
          translateFirstValue={"translate-x-1"}
          translateSecondValue={"translate-x-[97%]"}
        />

        {activeTab === "Personal Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {personalProjects?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}

        {activeTab === "Company Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
            {companyProjects?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
          </div>
        )}
      </div>
      </Container>
    </div>
  );
};

export default Projects;
