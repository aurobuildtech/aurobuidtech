import { useMemo, useState } from "react";
import "./projects.css";
import { projectCategories, projectsData } from "./projectsData";
import ProjectsHero from "./components/ProjectsHero";
import ProjectStats from "./components/ProjectStats";
import ProjectFilters from "./components/ProjectFilters";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsCTA from "./components/ProjectsCTA";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;

    if (activeCategory === "Ongoing" || activeCategory === "Completed") {
      return projectsData.filter((project) => project.status === activeCategory);
    }

    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = projectsData.slice(0, 2);

  return (
    <main className="projectsPage">
      <ProjectsHero />
      <ProjectStats projects={projectsData} />

      <section className="projectsMainSection container py-5">
        <ProjectFilters
          categories={projectCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <FeaturedProjects projects={featuredProjects} />
        <ProjectsGrid projects={filteredProjects} />
      </section>

      <ProjectsCTA />
    </main>
  );
}