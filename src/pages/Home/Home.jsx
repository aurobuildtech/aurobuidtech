import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import FeaturedProjectsIntro from "../../components/featuredProjectsIntro/FeaturedProjectsIntro";
// import FestiveOfferModal from "../../components/offer/FestiveOfferModal";
// import { MyBanner } from "../../MyBanner";

const HeroCarousel = lazy(() => import("../../components/HeroCarousel/HeroCarousel"));
const StatsCounter = lazy(() => import("./StatsCounter/StatsCounter"));
const TestimonialsVideo = lazy(() => import("./TestimonialsVideo/TestimonialsVideo"));
const ClientsStrip = lazy(() => import("./ClientsStrip/ClientsStrip"));
const ProjectCTA = lazy(() => import("./ProjectCTA/ProjectCTA"));
const AutoPopupModal = lazy(() => import("../../components/AutoPopupModal/AutoPopupModal"));
const HeroQuote = lazy(() => import("./HeroQuote/HeroQuote"));
const VideoHighlights = lazy(() => import("./videoHighlights/VideoHighlights"));

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

export default function Home() {
  const [showFeaturedIntro, setShowFeaturedIntro] = useState(false);
  const [allowAutoModal, setAllowAutoModal] = useState(false);
  // const [showOfferModal, setShowOfferModal] = useState(false);
  // const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    setAllowAutoModal(false);

    const introTimer = setTimeout(() => {
      setShowFeaturedIntro(true);
    }, 2000);

    return () => clearTimeout(introTimer);
  }, []);

  const handleFeaturedIntroFinish = () => {
    setShowFeaturedIntro(false);
    setAllowAutoModal(true);
  };

  const pageTitle =
    "Auro BuildTech | Real Estate Consulting, Construction, Interiors & Home Automation";
  const pageDescription =
    "Auro BuildTech delivers real estate consulting, layout development, property sales, construction, interior solutions, and smart home automation services in Bangalore, Goa, Hyderabad, and Visakhapatnam.";
  const pageUrl = "https://www.aurobuildtech.com/";
  const pageKeywords =
    "Auro BuildTech, real estate consulting, construction company in Bangalore, interior solutions, smart home automation, layout development, sale of properties, villas, flats, plots, property investment";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auro BuildTech",
    url: pageUrl,
    logo: `${pageUrl}favicon.ico`,
    description: pageDescription,
    areaServed: ["Bangalore", "Goa", "Hyderabad", "Visakhapatnam"],
    serviceType: [
      "Real Estate Consulting",
      "Layout Development",
      "Sale of Properties",
      "Construction Services",
      "Interior Solutions",
      "Home Automation",
    ],
    sameAs: ["https://www.instagram.com/aurobuildtech"],
  };

  // useEffect(() => {
  //   const offerTimer = setTimeout(() => {
  //     setShowOfferModal(true);
  //   }, 2200);

  //   return () => clearTimeout(offerTimer);
  // }, []);

  // const handleOfferClose = () => {
  //   setShowOfferModal(false);
  // };

  // const handleOfferProceed = () => {
  //   setTimeout(() => {
  //     setShowContactModal(true);
  //   }, 300);
  // };

  return (
    <PageTransitionE>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          name="keywords"
          content={pageKeywords}
        />

        <meta name="author" content="Auro BuildTech" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#22d3ee" />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:alt" content="Auro BuildTech homepage preview" />
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

      {/* <FeaturedProjectsIntro
        open={showFeaturedIntro}
        onFinish={handleFeaturedIntroFinish}
      /> */}

      {/* <FestiveOfferModal
        open={showOfferModal}
        onClose={handleOfferClose}
        onProceed={handleOfferProceed}
      /> */}

      <section className="container py-3 home-block">
        {
        // showContactModal &&

          allowAutoModal && (
            <LazySection placeholderHeight={520}>
              <Suspense fallback={<BlockLoader h={520} />}>
                <Reveal y={20}>
                  <AutoPopupModal delay={2000} />
                </Reveal>
              </Suspense>
            </LazySection>
          )
        }

        <LazySection placeholderHeight={420}>
          <Suspense fallback={<BlockLoader h={420} />}>
            <Reveal y={40}>
              {/* <MyBanner />  */}
              <HeroQuote />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={140}>
          <Suspense fallback={<BlockLoader h={140} />}>
            <Reveal delay={0.1}>
              <StatsCounter />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={40}>
              <HeroCarousel />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={420}>
          <Suspense fallback={<BlockLoader h={420} />}>
            <Reveal delay={0.1}>
              <TestimonialsVideo />
            </Reveal>
          </Suspense>
        </LazySection>

        <Suspense fallback={<BlockLoader h={420} />}>
          <Reveal delay={0.1}>
            <VideoHighlights />
          </Reveal>
        </Suspense>

        <Reveal delay={0.15}>
          <ProjectCTA />
        </Reveal>

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
