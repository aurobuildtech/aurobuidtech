import { servicesData } from "../servicesMap";
import { Helmet } from "react-helmet-async";
import Reveal from "../../../components/animations/Reveal";
import AutomationGrid from "./homeAutomation/AutomationGrid";
import "./homeAutomation/homeAutomation.css";

export default function HomeAutomation() {
  const data = servicesData.find((s) => s.id === "home-automation");
  if (!data) return null;

  const heroPreview = data.descImg;
  const pageTitle =
    "Home Automation Solutions | Smart Lighting, Security & Energy Control | Auro BuildTech";
  const pageDescription =
    "Explore Auro BuildTech home automation solutions for smart lighting, intelligent security, climate control, motorized curtains, entertainment automation, and energy optimization for modern homes.";
  const pageUrl = "https://www.aurobuildtech.com/services/home-automation";
  const pageKeywords =
    "home automation, smart home automation, smart lighting, intelligent security systems, climate control automation, motorized curtains, home theatre automation, energy monitoring, Auro BuildTech";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Automation Solutions",
    provider: {
      "@type": "Organization",
      name: "Auro BuildTech",
      url: "https://www.aurobuildtech.com/",
    },
    url: pageUrl,
    description: pageDescription,
    areaServed: ["Bangalore", "Goa", "Hyderabad", "Visakhapatnam"],
    serviceType: [
      "Smart Lighting Automation",
      "Intelligent Security Systems",
      "Climate Control Automation",
      "Energy Usage Monitoring",
      "Motorized Curtain Automation",
      "Home Theatre Automation",
    ],
  };

  return (
    <section className="ha-wrap">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:alt" content="Auro BuildTech home automation solutions" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Auro BuildTech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/og-image.jpg" />

        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container">
        {/* Intro section below main banner */}
        <Reveal y={18}>
          <div className="ha-intro">
            <div className="ha-sectionHead">
              <h2 className="ha-subTitle">
                Smart Home Automation Systems
                <span className="ha-underline sm" />
              </h2>
              <p className="ha-subText">
                Discover how Auro BuildTech designs intelligent, secure, and connected living
                environments through integrated lighting, surveillance, climate, entertainment,
                and energy automation solutions.
              </p>
            </div>

            <div className="ha-introRight">
              <div className="ha-previewCard">
                <img
                  src={heroPreview}
                  className="heroPrev"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  alt="Smart home automation preview by Auro BuildTech"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <AutomationGrid />

        <Reveal y={16}>
          <div style={{ opacity: "1", transform: "none" }}>
            <div className="scl-bottomCard">
              <h3 className="ha-subTitle">Integrated Smart Living Experience</h3>
              <p className="scl-bottomText">
                From intelligent lighting and climate control to surveillance, motorized curtains,
                entertainment automation, and energy optimization, our systems are built to combine
                luxury, daily convenience, security, and future-ready performance in one connected
                experience.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
