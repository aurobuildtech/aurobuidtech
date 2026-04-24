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
    "Construction Company and Real Estate Developers | Auro Buildtech";
  const pageDescription =
    "Auro Buildtech offers professional construction services, property development, layout planning, interior design, and smart home automation solutions for residential and commercial projects.";
  const pageUrl = "https://www.aurobuildtech.com/";
  const pageKeywords =
    "construction company, real estate developers, layout development, property sales, residential construction, interior design solutions, smart home automation, commercial construction, property development";
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
  const homeSeoSections = [
    {
      heading: "Leading Construction and Property Development Company",
      paragraphs: [
        "Auro Buildtech delivers complete real estate and construction solutions for residential and commercial projects. With years of experience in property development, land layouts, building construction, and modern interior design, we create spaces that combine quality, comfort, and long term value.",
        "Our team focuses on high quality construction, clear documentation, and transparent pricing, ensuring every project is completed on time and within budget.",
      ],
      listTitle: "We provide services across:",
      listItems: [
        "Layout development",
        "Sale of residential plots and properties",
        "Residential and commercial construction",
        "Interior design solutions",
        "Smart home automation services",
        "Financial assistance for property buyers",
      ],
    },
    {
      heading: "Layout Development and Sale of Properties",
      paragraphs: [
        "Auro Buildtech specializes in land layout development and property sales designed for long term investment and residential living. Our projects focus on well planned layouts, clear titles, and strong infrastructure.",
        "Whether you are looking for residential plots, investment properties, or premium layouts, our developments provide secure and profitable opportunities for buyers.",
      ],
      listTitle: "Key features include:",
      listItems: [
        "Clear property documentation",
        "Approved land layouts",
        "Premium residential plots",
        "Investment friendly properties",
        "Infrastructure ready developments",
      ],
    },
    {
      heading: "Residential and Commercial Construction Services",
      paragraphs: [
        "We provide complete building construction services for homeowners, investors, and businesses. From planning and design to final construction, Auro Buildtech ensures high quality standards in every stage of the project.",
        "Our goal is to deliver durable, modern, and functional buildings that meet client expectations and industry standards.",
      ],
      listTitle: "Our construction services include:",
      listItems: [
        "Residential house construction",
        "Villa and apartment construction",
        "Commercial building construction",
        "Structural planning and engineering",
        "End to end project management",
      ],
    },
    {
      heading: "Modern Interior Design Services",
      paragraphs: [
        "Auro Buildtech offers customized home interior design solutions that enhance comfort, aesthetics, and functionality. Our designers create modern living spaces tailored to your lifestyle and preferences.",
        "We focus on creating stylish and functional interiors that transform your house into a beautiful home.",
      ],
      listTitle: "Interior services include:",
      listItems: [
        "Modular kitchen design",
        "Living room interior design",
        "Bedroom interior solutions",
        "Office interior design",
        "Space optimization planning",
      ],
    },
    {
      heading: "Smart Home Automation Solutions",
      paragraphs: [
        "Our home automation services help homeowners upgrade their properties with modern smart technology. From lighting control to security systems, we integrate smart solutions that improve convenience and safety.",
        "These solutions make homes more secure, efficient, and technologically advanced.",
      ],
      listTitle: "Automation features include:",
      listItems: [
        "Smart lighting control",
        "Automated security systems",
        "Remote device control",
        "Energy efficient smart homes",
        "Integrated home automation systems",
      ],
    },
    {
      heading: "Why Clients Trust Our Construction and Real Estate Services",
      paragraphs: [
        "Clients choose Auro Buildtech because of our commitment to quality, transparency, and professional service.",
        "Our mission is to deliver reliable construction and real estate solutions that create long term value for clients.",
      ],
      listTitle: "Key benefits:",
      listItems: [
        "Experienced construction professionals",
        "Transparent project management",
        "On time project delivery",
        "High quality building materials",
        "Complete end to end services",
        "Customer focused approach",
      ],
    },
  ];

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

        <Reveal delay={0.08}>
          <section className="py-4">
            <div className="rounded-4 border bg-white bg-opacity-75 p-4 p-lg-5 shadow-sm">
              <h2 className="fw-bold mb-3">
                Real Estate Developers and Construction Company in India
              </h2>
              <p className="mb-3">
                Auro Buildtech is a trusted real estate development and construction company
                offering professional services in layout development, property sales, residential
                construction, interior solutions, and smart home automation. We help clients turn
                their vision into reality through quality craftsmanship, transparent processes, and
                reliable project delivery.
              </p>

              {homeSeoSections.map((section) => (
                <div key={section.heading} className="pt-3 pt-lg-4">
                  <h3 className="fw-bold mb-3">{section.heading}</h3>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-3">
                      {paragraph}
                    </p>
                  ))}

                  <p className="mb-2 fw-semibold">{section.listTitle}</p>
                  <ul className="mb-0 ps-3">
                    {section.listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-4">
                <h3 className="fw-bold mb-3">
                  Start Your Construction or Property Investment Journey Today
                </h3>
                <p className="mb-0">
                  If you are planning to build your dream home, invest in property, or develop
                  land layouts, Auro Buildtech is here to help. Contact our team today to schedule
                  a consultation and explore the best construction and real estate development
                  solutions for your project.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

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
