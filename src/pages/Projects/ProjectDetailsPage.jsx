import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projects.css";
import { projectsData } from "./data/projectsData";
import SragveeBookingLayout from "./components/SragveeBookingLayout";

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

        <div className="pdGrid">
          <div className="pdMedia">
            <div className="projectDetailsImageWrap">
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          {project.highlights?.length > 0 && (
            <div className="pdHighlights">
              <h3>Highlights</h3>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pdContent">
            <div className="projectDetailsContent">
              <div className="pdTags">
                <span className="projectCategoryTag details">{project.category}</span>
                {project.status && <span className="pdStatus">{project.status}</span>}
              </div>

              <h1>{project.title}</h1>

              <p className="pdLocation">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                {project.location}
              </p>

              <div className="pdPrice">
                <span>Price</span>
                <strong>{project.price}</strong>
              </div>

              <p className="projectDesc">{project.shortDesc}</p>

              <div className="projectDetailBlock">
                <h3>Project Overview</h3>
                <ul>
                  {project.overview?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailActions">
                <a href={`tel:${project.phone}`} className="dark-btn btn btn-primary">
                  <i className="bi bi-telephone me-2" aria-hidden="true" />
                  {project.ctaLabel || "Call Now"}
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

        {project.hasBookingLayout && <SragveeBookingLayout phone={project.phone} />}
      </div>
    </main>
  );
}