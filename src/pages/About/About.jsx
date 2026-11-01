import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import "./about.css";
import ClientsStrip from "../Home/ClientsStrip/ClientsStrip";
import StatsCounter from "../Home/StatsCounter/StatsCounter";
import OurProcess from "./OurProcess/OurProcess";

const AboutHero = lazy(() => import("./sections/AboutHero"));
const SafetyFirst = lazy(() => import("./sections/SafetyFirst"));
const SafetyProtocols = lazy(() => import("./sections/SafetyProtocols"));

function BlockLoader({ h = 320 }) {
  return (
    <div
      style={{
        height: h,
        borderRadius: 18,
        border: "1px solid var(--border)",
        background: "rgba(0,0,0,0.04)",
      }}
    />
  );
}

function About() {
  return (
    <PageTransitionE>

      {/* ✅ HELMET */}
      <Helmet>
        <title>About Us | SkyZen Aurobuildtech</title>

        <meta
          name="description"
          content="Learn about SkyZen Aurobuildtech, a trusted construction company offering modern building solutions, premium interiors, and smart home automation services."
        />

        <meta
          name="keywords"
          content="about SkyZen Aurobuildtech, construction company, interior solutions, home automation company, building experts"
        />

        <meta name="author" content="SkyZen Aurobuildtech" />

        <meta property="og:title" content="About Us | SkyZen Aurobuildtech" />
        <meta
          property="og:description"
          content="Discover our journey, expertise, and commitment to quality construction and smart living solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.aurobuildtech.com/about" />

        <link rel="canonical" href="https://www.aurobuildtech.com/about" />
      </Helmet>

      <section className="container py-4 aboutWrap">

        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={26}>
              <AboutHero />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={26}>
              <StatsCounter />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={30}>
              <OurProcess />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={560}>
          <Suspense fallback={<BlockLoader h={560} />}>
            <Reveal y={26}>
              <SafetyFirst />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={640}>
          <Suspense fallback={<BlockLoader h={640} />}>
            <Reveal y={26}>
              <SafetyProtocols />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={640}>
          <Suspense fallback={<BlockLoader h={640} />}>
            <Reveal y={26}>
              <ClientsStrip />
            </Reveal>
          </Suspense>
        </LazySection>

      </section>
    </PageTransitionE>
  );
}

export default About;