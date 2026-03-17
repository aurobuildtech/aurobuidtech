import { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import ServiceModal from "../../components/modals/ServiceModal";
import ClientsStrip from "../Home/ClientsStrip/ClientsStrip";
import ServiceSingle from "./ServiceSingle";

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
        <title>Our Services | Auro BuildTech</title>

        <meta
          name="description"
          content="Explore all Auro BuildTech services including layout development, sale of properties, constructions, interior solutions, and smart home automation."
        />

        <meta
          name="keywords"
          content="Auro BuildTech services, layout development, sale of properties, constructions, interior solutions, home automation"
        />

        <meta name="author" content="Auro BuildTech" />

        <meta property="og:title" content="Our Services | Auro BuildTech" />
        <meta
          property="og:description"
          content="Discover premium construction, interior, and smart home automation services by Auro BuildTech."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.aurobuildtech.com/services" />

        <link rel="canonical" href="https://www.aurobuildtech.com/services" />
      </Helmet>

      <section className="container py-5">
        <ServiceModal />

        <Reveal y={18}>
          <h1 className="fw-bold text-center mt-5">Our Services</h1>
        </Reveal>

        {/* ✅ this will render all services because /services has no serviceId */}
        <ServiceSingle />

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