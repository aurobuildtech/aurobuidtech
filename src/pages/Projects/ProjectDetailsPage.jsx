import { useParams, Link } from "react-router-dom";
import { projectsData } from "./projectsData";
import "./projects.css";

export default function ProjectDetailsPage() {
  const { projectSlug } = useParams();

  const project = projectsData.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <section className="container py-5 text-center">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary mt-3">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <main className="projectDetailsPage py-5">
      <div className="container">
        <div className="mb-4">
          <Link to="/projects" className="btn btn-outline-primary">
            ← Back to Projects
          </Link>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <div className="projectDetailsMainImageWrap">
              <img
                src={project.image}
                alt={project.title}
                className="projectDetailsMainImage"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <span className="projectTypeBadge">{project.category}</span>
            <h1 className="projectDetailsTitle mt-3">{project.title}</h1>
            <p className="projectDetailsLocation">{project.location}</p>
            <p className="projectDetailsDesc">{project.fullDesc}</p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.features.map((feature, index) => (
                <span className="featureTag" key={index}>
                  {feature}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <span className={`projectStatus ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
              <span className="projectYearBadge">{project.year}</span>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {project.gallery.map((img, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="projectGalleryItem">
                <img src={img} alt={`${project.title} ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}