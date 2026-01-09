import ProjectBrief from "../components/projects/layouts/ProjectBrief";
import Project from "../components/projects/layouts/Project";
import { projects } from "../data/projects";

export function Projects () {
  return (
    <section id="projects" className="section projects">
        <h2 className="h4 text-hl2 text-shadow">Projects</h2>
        
        <div className="full-projects">
          {projects.map((project) => (
            project.type == "full" && <Project key={project.title} {...project} />
          ))}
        </div>
        <div className="full-w row center">
          {projects.map((project) => (
            project.type == "brief" && <ProjectBrief key={project.title} {...project} />
          ))}

        </div>
    </section>
  );
};
export default Projects;
