import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="projectCard h-100">
      <div className="projectCardImgWrap">
        <img src={project.image} alt={project.title} className="projectCardImg" />

        <div className="projectCardOverlay">
          <Link to={`/projects/${project.slug}`} className="projectOverlayBtn">
            View Details
          </Link>
        </div>
      </div>

      <div className="projectCardBody">
        <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap mb-2">
          <span className="projectTypeBadge">{project.category}</span>
          <span className={`projectStatus ${project.status.toLowerCase()}`}>
            {project.status}
          </span>
        </div>

        <h3 className="projectCardTitle">{project.title}</h3>
        <p className="projectCardLocation">{project.location}</p>
        <p className="projectCardDesc">{project.shortDesc}</p>
      </div>
    </article>
  );
}