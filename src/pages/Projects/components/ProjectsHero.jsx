import { Link } from "react-router-dom";

export default function ProjectsHero() {
  return (
    <section className="projectsHero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="projectsBadge">Our Projects</span>
            <h1 className="projectsHeroTitle">
              Built with vision, executed with precision
            </h1>
            <p className="projectsHeroText">
              Explore our residential, commercial, and interior projects across
              Bangalore. Every project reflects our focus on quality,
              professionalism, and long-term client trust.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects-grid" className="btn btn-primary">
                Explore Projects
              </a>
              <Link to="/contact" className="btn btn-outline-primary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="projectsHeroVisual">
              <div className="heroPlaceholderBox">
                <span>Projects Banner Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}