import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <section id="projects-grid" className="projectsGrid">
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-xl-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}