import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "./projects.css";
import { projectCategories, projectsData } from "./data/projectsData";
import ProjectsHeroCarousel from "./components/ProjectCarousel";
import ProjectTabs from "./components/ProjectsTabs";
import ProjectsGrid from "./components/ProjectsGrid";

export default function ProjectsPage() {
  const { location } = useParams();
  const [activeCategory, setActiveCategory] = useState("All");

  const currentRegion = location || "bangalore";

  useEffect(() => {
    setActiveCategory("All");
  }, [currentRegion]);

  const filteredProjects = useMemo(() => {
    let list = projectsData.filter(
      (project) => project.region === currentRegion
    );

    if (activeCategory !== "All") {
      list = list.filter((project) => project.category === activeCategory);
    }

    return list;
  }, [currentRegion, activeCategory]);

  const pageTitle =
    currentRegion === "goa"
      ? "Explore premium plots and villas in Goa"
      : "Explore premium plots, flats and villas in Bangalore";

  const pageDesc =
    currentRegion === "goa"
      ? "Discover curated Goa opportunities with premium plotted developments and luxury villa communities."
      : "Discover curated Bangalore opportunities across plots, flats and villas with strong location advantages.";

  return (
    <main className="projectsPage">
      <ProjectsHeroCarousel currentRegion={currentRegion} />

      <section className="projectsIntro section-space">
        <div className="container">
          <div className="projectsIntroBox">
            <span className="projectsMiniBadge">
              {currentRegion === "goa"
                ? "Auro Buildtech Goa Projects"
                : "Auro Buildtech Bangalore Projects"}
            </span>

            <h2>{pageTitle}</h2>
            <p>{pageDesc}</p>
          </div>
        </div>
      </section>

      <section className="projectsCatalog section-space pt-0">
        <div className="container">
          <ProjectTabs
            categories={projectCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <ProjectsGrid
            projects={filteredProjects}
            currentRegion={currentRegion}
          />
        </div>
      </section>
    </main>
  );
}