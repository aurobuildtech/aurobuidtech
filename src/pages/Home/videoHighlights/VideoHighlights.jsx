import { motion } from "framer-motion";
import LazyMotionSection from "../../../components/lazy/LazyMotionSection";

import "./VideoHighlights.css"
const highlights = [
  {
    id: "h1",
    badge: "Expert Insight",
    title: "Future of Real Estate & Land Investment",
    description:
      "Grateful for his powerful insights on why Real Estate & Land are future wealth creators in India and why Goa is a golden opportunity. Proud that Yugen Golf City is part of this growth story.",
    type: "iframe",
    videoUrl: "https://www.youtube.com/embed/darxKMwh6LY/",
  },
  {
    id: "h2",
    badge: "Legendary Moment",
    title: "When Legends Make an Entry",
    description:
      "Gary Kirsten’s arrival at Yugen in a Hummer was nothing short of Dhurandhar style — bold, powerful, and unmistakably iconic. A true superhero moment reflecting leadership, legacy, and a larger-than-life vision. At Yugen, we don’t just build spaces — we celebrate moments that define ambition and belief.",
    type: "iframe",
    videoUrl: "https://www.youtube.com/embed/LyKGQxPUH68/",
  },
  {
    id: "h3",
    badge: "Project Spotlight",
    title: "Building Communities, Creating Value",
    description:
      "A closer look at how our projects are shaping vibrant communities while delivering strong appreciation and lasting value for investors.",
    type: "iframe",
    videoUrl: "https://www.youtube.com/embed/xKKWTlsKJD8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function VideoHighlights() {
  return (
    <section
      id="highlights"
      className="container py-5"
  
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-center mb-4"
      >
        <div className="vhTop">HIGHLIGHTS</div>
        <h2 className="vhTitle">Watch Our Latest Videos</h2>
        <p className="vhSub">
          Quick insights, iconic moments, and project highlights — all in one place.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="row g-4">
        {highlights.map((card, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={card.id}>
            {/* ✅ Lazy mount each card */}
            <LazyMotionSection
              rootMargin="260px"
              placeholderHeight={420}
              delay={0}
            >
              {/* ✅ Motion on scroll */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                custom={idx}
              >
                <div className="vhCard">
                  <div className="vhMedia">

                    <iframe
                      src={card.videoUrl}
                      title={card.title}
                      allow="encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"

                    />



                    <div className="vhOverlay" />
                    <div className="vhPlay" aria-hidden="true">
                      {/* <i className="bi bi-play-fill"></i> */}
                    </div>
                  </div>

                  <div className="vhBody">
                    <span className="vhBadge">{card.badge}</span>
                    <h5 className="vhCardTitle">{card.title}</h5>
                    <p className="vhCardDesc">{card.description}</p>

                    <a className="vhBtn" href="#contact">
                      Watch Highlight <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </LazyMotionSection>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="text-center mt-4"
      >
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark rounded-pill px-4"
        >
          Visit Our YouTube Channel
        </a>
      </motion.div>
    </section>
  );
}


// "https://www.youtube.com/embed/darxKMwh6LY/",