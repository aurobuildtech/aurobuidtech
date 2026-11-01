import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import ServiceModal from "../../components/modals/ServiceModal";
import ClientsStrip from "../Home/ClientsStrip/ClientsStrip";
import { servicesData } from "./servicesMap";
import "./services.css";

function BlockLoader({ h = 260 }) {
  return (
    <div
      style={{
        height: h,
        borderRadius: 16,
        background: "rgba(0,0,0,0.05)",
      }}
    />
  );
}

export default function Services() {
  return (
    <PageTransitionE>
      <Helmet>
        <title>Our Services | SkyZen Aurobuildtech</title>

        <meta
          name="description"
          content="Explore all SkyZen Aurobuildtech services including layout development, sale of properties, constructions, interior solutions, and smart home automation."
        />

        <meta
          name="keywords"
          content="SkyZen Aurobuildtech services, layout development, sale of properties, constructions, interior solutions, home automation"
        />

        <meta name="author" content="SkyZen Aurobuildtech" />

        <meta property="og:title" content="Our Services | SkyZen Aurobuildtech" />
        <meta
          property="og:description"
          content="Discover premium construction, interior, and smart home automation services by SkyZen Aurobuildtech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.aurobuildtech.com/services" />

        <link rel="canonical" href="https://www.aurobuildtech.com/services" />
      </Helmet>

      <section className="container py-5">
        <ServiceModal />

        <Reveal y={18}>
          <header className="svcIndexHead">
            <span className="svcIndexEyebrow">What we do</span>
            <h1>Our Services</h1>
            <p>
              From land to living — layout development, property sales, construction, interiors and
              smart home automation, delivered by one accountable team.
            </p>
          </header>
        </Reveal>

        <div className="svcIndexGrid">
          {servicesData.map((service, i) => (
            <Link key={service.id} to={`/services/${service.id}`} className="svcIndexCard">
              <div className="svcIndexMedia">
                <img
                  src={Array.isArray(service.img) ? service.img[0] : service.img}
                  alt={service.title}
                  loading="lazy"
                />
                <span className="svcIndexNo">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="svcIndexBody">
                <span className="svcIndexTag">{service.eyebrow}</span>
                <h2>{service.title}</h2>
                <p>{service.desc1}</p>
                <span className="svcIndexMore">
                  Explore service <i className="bi bi-arrow-right" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <LazySection placeholderHeight={110}>
          <Suspense fallback={<BlockLoader h={110} />}>
            <Reveal delay={0.2}>
              <ClientsStrip />
            </Reveal>
          </Suspense>
        </LazySection>
      </section>
    </PageTransitionE>
  );
}