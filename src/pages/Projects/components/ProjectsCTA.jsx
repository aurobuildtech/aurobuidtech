import { Link } from "react-router-dom";

export default function ProjectsCTA() {
  return (
    <section className="projectsCTA">
      <div className="container">
        <div className="projectsCtaBox text-center">
          <h2>Have a project in mind?</h2>
          <p>
            Let Auro Buildtech bring your ideas to life with quality
            construction, smart planning, and trusted execution.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}