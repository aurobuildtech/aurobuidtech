import { Link } from "react-router-dom";

export default function ProjectCard({ project, currentRegion }) {
  return (
    <article className="projectCard h-100">
      <div className="projectCardMedia">
        <img src={project.image} alt={project.title} width={"100%"} />
        <span className="projectCategoryTag">{project.category}</span>
        <span className="projectStatusTag">{project.status}</span>
      </div>

      <div className="projectCardBody">
        <h3>{project.title}</h3>
        <p className="projectLocation">{project.location}</p>
        <p className="projectPrice">{project.price}</p>
        <p className="projectDesc">{project.shortDesc}</p>

        <ul className="projectHighlightsMini">
          {project.highlights.slice(0, 3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="projectCardActions">
          <Link
            to={`/projects/${currentRegion}/${project.slug}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

          <button type="button" className="btn btn-outline-primary">
            {project.ctaLabel || "Know More"}
          </button>
        </div>
      </div>
    </article>
  );
}