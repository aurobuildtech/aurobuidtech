import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import auroicon from "../../assets/images/auro.png";
import "./header.css";
import ThemeToggle from "./ThemeToggle";

const services = [
  { label: "Layout Development", id: "layout-development" },
  { label: "Sale of Properties", id: "sale-of-properties" },
  { label: "Constructions", id: "constructions" },
  { label: "Interior Solutions", id: "interior-solutions" },
  { label: "Home Automations", id: "home-automation" },
  { label: "Financial Services", id: "financial-services", disabled: true },
];

const projects = [
  { label: "Projects In Bangalore", slug: "bangalore" },
  { label: "Projects In Goa", slug: "goa", disabled: true },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setNavOpen(true);
      setServicesOpen(true);
      setProjectsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("open-services-dropdown", handler);
    return () => window.removeEventListener("open-services-dropdown", handler);
  }, []);

  const closeAllMenus = () => {
    setNavOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
  };

  const toggleNav = (e) => {
    e.stopPropagation();
    setNavOpen((prev) => {
      const next = !prev;
      if (!next) {
        setServicesOpen(false);
        setProjectsOpen(false);
      }
      return next;
    });
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen((prev) => {
      const next = !prev;
      if (next) setProjectsOpen(false);
      return next;
    });
  };

  const toggleProjects = (e) => {
    e.stopPropagation();
    setProjectsOpen((prev) => {
      const next = !prev;
      if (next) setServicesOpen(false);
      return next;
    });
  };

  const goService = (service) => {
    if (service.disabled) return;
    closeAllMenus();
    navigate(`/services/${service.id}`);
  };

  const goProject = (project) => {
    if (project.disabled) return;

    closeAllMenus();

    // for now all Bangalore projects go to main projects page
    if (project.slug === "bangalore") {
      navigate("/projects");
    }

    // later when Goa page is ready, you can enable this
    // if (project.slug === "goa") {
    //   navigate("/projects/goa");
    // }
  };

  return (
    <header className="sticky-top auro-sticky">
      <nav className="navbar navbar-expand-lg auro-header">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center auro-brand">
            <img src={auroicon} alt="Auro logo" className="auro-logo" />
            <div className="d-flex flex-column auro-brand-text">
              <span className="auro-title">AURO</span>
              <span className="auro-subtitle">BUILDTECH</span>
              {/* <span className="auro-subtitle text-primary">BluePrint . Build .Fish</span> */}
            </div>
          </Link>

          <button
            className="navbar-toggler auro-toggler"
            type="button"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon auro-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
            id="auroNav"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="navbar-nav mx-auto gap-lg-4 align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/"
                  onClick={closeAllMenus}
                >
                  Home
                </NavLink>
              </li>

              <li className={`nav-item dropdown ${servicesOpen ? "show" : ""}`}>
                <button
                  className="nav-link auro-link dropdown-toggle auro-dropbtn"
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={toggleServices}
                >
                  Services
                </button>

                <ul className={`dropdown-menu auro-dropdown ${servicesOpen ? "show" : ""}`}>
                  {services.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        className={`dropdown-item auro-dd-item ${s.disabled ? "auro-dd-disabled" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          goService(s);
                        }}
                        disabled={!!s.disabled}
                        aria-disabled={!!s.disabled}
                      >
                        {s.label}
                        {s.disabled ? " (Coming Soon)" : ""}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`nav-item dropdown ${projectsOpen ? "show" : ""}`}>
                <button
                  className="nav-link auro-link dropdown-toggle auro-dropbtn"
                  type="button"
                  aria-expanded={projectsOpen}
                  onClick={toggleProjects}
                >
                  Projects
                </button>

                <ul className={`dropdown-menu auro-dropdown ${projectsOpen ? "show" : ""}`}>
                  {projects.map((p) => (
                    <li key={p.slug}>
                      <button
                        type="button"
                        className={`dropdown-item auro-dd-item ${p.disabled ? "auro-dd-disabled" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          goProject(p);
                        }}
                        disabled={!!p.disabled}
                        aria-disabled={!!p.disabled}
                      >
                        {p.label}
                        {p.disabled ? " (Coming Soon)" : ""}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/about"
                  onClick={closeAllMenus}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/contact"
                  onClick={closeAllMenus}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div
              className="d-flex align-items-center gap-2 auro-right"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/contact"
                className="btn btn-consult"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAllMenus();
                }}
              >
                Schedule Consultation
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}