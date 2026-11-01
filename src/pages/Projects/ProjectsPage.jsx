import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  const pageTitle = "Projects in Bangalore | Farmland Plots | SkyZen Aurobuildtech";

  const pageDesc =
    "Explore SkyZen Aurobuildtech projects in Bangalore, including master-planned farmland plots with clear titles, full amenities, and strong connectivity.";

  const pageUrl = `https://www.aurobuildtech.com/projects/${currentRegion}`;
  const pageKeywords =
    "projects in Bangalore, Bangalore plots, farmland plots, Chintamani plots, Sragvee Builders layout, SkyZen Aurobuildtech Bangalore projects";
  const regionName = "Bangalore";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDesc,
    about: {
      "@type": "Thing",
      name: `${regionName} Real Estate Projects`,
    },
    provider: {
      "@type": "Organization",
      name: "SkyZen Aurobuildtech",
      url: "https://www.aurobuildtech.com/",
    },
  };

  return (
    <main className="projectsPage">

      {/* ✅ HELMET */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow" />

        <meta
          name="keywords"
          content={pageKeywords}
        />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:alt" content={`${regionName} projects by SkyZen Aurobuildtech`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="SkyZen Aurobuildtech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="/og-image.jpg" />

        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <ProjectsHeroCarousel currentRegion={currentRegion} />

      <section className="projectsIntro section-space">
        <div className="container">
          <div className="projectsIntroBox">
            <span className="projectsMiniBadge">
              SkyZen Aurobuildtech Bangalore Projects
            </span>

            <h2>Explore premium farmland plots near Bangalore</h2>

            <p>
              Discover master-planned plotted layouts in fast-growing corridors with strong
              connectivity, full amenities, and long-term real estate investment potential.
            </p>
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
