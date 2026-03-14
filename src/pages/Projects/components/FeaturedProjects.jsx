import { Link } from "react-router-dom";

export default function FeaturedProjects({ projects }) {
  return (
    <section className="featuredProjects">
      {projects.map((project, index) => (
        <div className="featuredProjectCard row g-4 align-items-center mb-5" key={project.id}>
          <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-2" : ""}`}>
            <div className="featuredProjectImageWrap">
              <img
                src={project.image}
                alt={project.title}
                className="featuredProjectImage"
              />
            </div>
          </div>

          <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-1" : ""}`}>
            <span className="projectTypeBadge">{project.category}</span>
            <h2 className="featuredProjectTitle">{project.title}</h2>
            <p className="featuredProjectLocation">{project.location}</p>
            <p className="featuredProjectDesc">{project.shortDesc}</p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.features.map((feature, i) => (
                <span key={i} className="featureTag">
                  {feature}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className={`projectStatus ${project.status.toLowerCase()}`}>
                {project.status}
              </span>

              <Link to={`/projects/${project.slug}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}