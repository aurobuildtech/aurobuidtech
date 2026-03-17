import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
          <Link to={`/projects/${location || "bangalore"}`} className="btn btn-primary mt-3 dark-btn">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const pageUrl = `https://www.aurobuildtech.com/projects/${location}/${projectSlug}`;

  return (
    <main className="projectDetailsPage section-space">

      {/* ✅ HELMET */}
      <Helmet>
        <title>{project.title} | Auro BuildTech</title>

        <meta
          name="description"
          content={project.shortDesc || "Explore premium real estate projects by Auro BuildTech."}
        />

        <meta
          name="keywords"
          content={`${project.title}, ${project.location}, Auro BuildTech, real estate`}
        />

        <meta property="og:title" content={project.title} />
        <meta
          property="og:description"
          content={project.shortDesc}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={pageUrl} />

        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="container">
        <div className="projectDetailsTop">
          <Link to={`/projects/${location}`} className="btn btn-outline-primary dark-btn">
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
              <span className="projectCategoryTag details">
                {project.category}
              </span>

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
                <a href={`tel:${project.phone}`} className="dark-btn  btn btn-primary">
                  Call Now
                </a>

                {project.mapUrl && (
                  <a
                    href={project.mapUrl}
                    className="btn btn-outline-primary dark-btn "
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Location
                  </a>
                )}

                {project.videoUrl && project.videoUrl !== "#" && (
                  <Link
                    to={project.videoUrl}
                    className="btn btn-outline-dark  dark-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Video
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}