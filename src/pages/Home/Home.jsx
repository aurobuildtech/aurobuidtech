import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import { lazy, Suspense } from "react";

import HeroQuote from "./HeroQuote/HeroQuote";
import VideoHighlights from "./videoHighlights/VideoHighlights";
const HeroCarousel = lazy(() => import("../../components/HeroCarousel/HeroCarousel"));
const StatsCounter = lazy(() => import("./StatsCounter/StatsCounter"));
const TestimonialsVideo = lazy(() => import("./TestimonialsVideo/TestimonialsVideo"));
const ClientsStrip = lazy(() => import("./ClientsStrip/ClientsStrip"));
const ProjectCTA = lazy(() => import("./ProjectCTA/ProjectCTA"))
const AutoPopupModal = lazy(() => import("../../components/AutoPopupModal/AutoPopupModal"))

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
  return (

    <PageTransitionE>
      <section className="container py-3 home-block">
        {/* AutoPopupModal */}
        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={20}>
              <AutoPopupModal />
            </Reveal>
          </Suspense>
        </LazySection>

        {/* HeroQuote */}

        <LazySection placeholderHeight={420} >
          <Suspense fallback={<BlockLoader h={420} />}>
            <Reveal y={40}>
              <HeroQuote />
            </Reveal>
          </Suspense>
        </LazySection>


          {/* Stats loads only when near */}
        <LazySection placeholderHeight={140}>
          <Suspense fallback={<BlockLoader h={140} />}>
            <Reveal delay={0.1}>
              <StatsCounter />
            </Reveal>
          </Suspense>
        </LazySection>

        {/* Load Carousel chunk only when near viewport */}
        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={40}>
              <HeroCarousel />
            </Reveal>
          </Suspense>
        </LazySection>

      

        {/*  Video section loads only when near */}
        <LazySection placeholderHeight={420}>
          <Suspense fallback={<BlockLoader h={420} />}>
            <Reveal delay={0.10}>
              <TestimonialsVideo />
            </Reveal>
          </Suspense>
        </LazySection>




        {/* ViedoHighlights */}
        <LazySection placeholderHeight={420}>
          <Suspense fallback={<BlockLoader h={420} />}>
            <Reveal delay={0.10}>
              <VideoHighlights />
            </Reveal>
          </Suspense>
        </LazySection>



        {/* Features are light, can keep normal */}
        <Reveal delay={0.15}>
          <ProjectCTA />
        </Reveal>

        {/*  Clients strip lazy */}
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
