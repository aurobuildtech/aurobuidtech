import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, currentRegion }) {
  if (!projects.length) {
    return (
      <section className="projectsGridSection" id="projects-list">
        <div className="projectsEmptyState">
          <h3>No projects found</h3>
          <p>
            No {currentRegion} projects are available in this category right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="projectsGridSection" id="projects-list">
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-xl-4" key={project.id}>
            <ProjectCard project={project} currentRegion={currentRegion} />
          </div>
        ))}
      </div>
    </section>
  );
}