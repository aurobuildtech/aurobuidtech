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

  const pageTitle =
    currentRegion === "goa"
      ? "Projects in Goa | Villas, Plots & Investment Properties | Auro BuildTech"
      : "Projects in Bangalore | Plots, Flats & Villas | Auro BuildTech";

  const pageDesc =
    currentRegion === "goa"
      ? "Explore Auro BuildTech projects in Goa including premium villa plots, luxury villas, lifestyle communities, and curated real estate investment opportunities near key Goa destinations."
      : "Explore Auro BuildTech projects in Bangalore including premium plots, flats, villas, and curated real estate opportunities across key growth corridors and prime residential locations.";

  const pageUrl = `https://www.aurobuildtech.com/projects/${currentRegion}`;
  const pageKeywords =
    currentRegion === "goa"
      ? "projects in Goa, Goa villa projects, Goa plots, Goa real estate investment, luxury villas in Goa, Auro BuildTech Goa projects"
      : "projects in Bangalore, Bangalore plots, Bangalore flats, Bangalore villas, Bangalore real estate projects, Auro BuildTech Bangalore projects";
  const regionName = currentRegion === "goa" ? "Goa" : "Bangalore";
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
      name: "Auro BuildTech",
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
        <meta property="og:image:alt" content={`${regionName} projects by Auro BuildTech`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Auro BuildTech" />

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
              {currentRegion === "goa"
                ? "Auro Buildtech Goa Projects"
                : "Auro Buildtech Bangalore Projects"}
            </span>

            <h2>
              {currentRegion === "goa"
                ? "Explore premium Goa projects, villa plots, and luxury communities"
                : "Explore premium Bangalore plots, flats, and villas"}
            </h2>

            <p>
              {currentRegion === "goa"
                ? "Discover curated Goa opportunities across luxury villas, premium plotted developments, and investment-focused communities selected for lifestyle value, connectivity, and long-term growth potential."
                : "Discover curated Bangalore opportunities across plots, flats, and villas in fast-growing corridors with strong connectivity, livability, and long-term real estate investment potential."}
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
