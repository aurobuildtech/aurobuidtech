import { Link, useParams } from "react-router-dom";
import "./projects.css";
import { projectsData } from "./data/projectsData";

export default function ProjectDetailsPage() {
  const { location, projectSlug } = useParams();

  const project = projectsData.find(
    (item) => item.region === location && item.slug === projectSlug
  );

  if (!project) {
    return (
      <section className="section-space">
        <div className="container text-center">
          <h2>Project not found</h2>
          <Link to={`/projects/${location || "bangalore"}`} className="btn btn-primary mt-3">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="projectDetailsPage section-space">
      <div className="container">
        <div className="projectDetailsTop">
          <Link to={`/projects/${location}`} className="btn btn-outline-primary">
            ← Back to Projects
          </Link>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <div className="projectDetailsImageWrap">
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="projectDetailsContent">
              <span className="projectCategoryTag details">{project.category}</span>
              <h1>{project.title}</h1>
              <p className="projectLocation">{project.location}</p>
              <p className="projectPrice">{project.price}</p>
              <p className="projectDesc">{project.shortDesc}</p>

              <div className="projectDetailBlock">
                <h3>Project Overview</h3>
                <ul>
                  {project.overview?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailBlock">
                <h3>Highlights</h3>
                <ul>
                  {project.highlights?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailActions">
                <a href={`tel:${project.phone}`} className="btn btn-primary">
                  Call Now
                </a>

                {project.mapUrl ? (
                  <a
                    href={project.mapUrl}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Location
                  </a>
                ) : null}

                {project.videoUrl && project.videoUrl !== "#" ? (
                  <a
                    href={project.videoUrl}
                    className="btn btn-outline-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Video
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}