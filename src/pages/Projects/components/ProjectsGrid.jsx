import ProjectCard from "./ProjectCard";

// Widen the cards on an incomplete last row so the grid never leaves empty slots.
function colClasses(i, n) {
  const md = n % 2 === 1 && i === n - 1 ? "col-md-12" : "col-md-6";
  const r3 = n % 3;
  let xl = "col-xl-4";
  if (r3 === 1 && i === n - 1) xl = "col-xl-12";
  if (r3 === 2 && i >= n - 2) xl = "col-xl-6";
  return `${md} ${xl}`;
}

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
        {projects.map((project, i) => (
          <div className={`projectCol ${colClasses(i, projects.length)}`} key={project.id}>
            <ProjectCard project={project} currentRegion={currentRegion} />
          </div>
        ))}
      </div>
    </section>
  );
}