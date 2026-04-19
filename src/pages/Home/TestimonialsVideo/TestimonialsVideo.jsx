import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyMotionSection from "../../../components/lazy/LazyMotionSection";
import "./testimonialsVideo.css";

import siteRitual1 from "../../../assets/home/testimonials/site-ritual-1.png";
import siteRitual2 from "../../../assets/home/testimonials/site-ritual-2.png";
import finishedHome1 from "../../../assets/home/testimonials/finished-home-1.png";
import finishedHome2 from "../../../assets/home/testimonials/finished-home-2.png";
import finishedHome3 from "../../../assets/home/testimonials/finished-home-3.png";

const showcaseImages = [
  {
    id: "build-1",
    title: "Site Visit Feedback",
    phase: "Client Review",
    image: siteRitual1,
    quote:
      "The team stayed committed from day one and explained each step clearly. That gave us a lot of confidence in the entire construction process.",
    name: "Verified Client",
    role: "Home Construction Client",
  },
  {
    id: "build-2",
    title: "On-Site Progress Review",
    phase: "Client Review",
    image: siteRitual2,
    quote:
      "We really appreciated the transparency and regular updates. Every stage was handled professionally and exactly as promised.",
    name: "Satisfied Homeowner",
    role: "Residential Client",
  },
  {
    id: "home-1",
    title: "Completed Home Review",
    phase: "Client Review",
    image: finishedHome1,
    quote:
      "Seeing the final elevation come together was a proud moment for our family. The finish, detailing, and overall delivery were excellent.",
    name: "Verified Client",
    role: "Completed Project Owner",
  },
  {
    id: "home-2",
    title: "Quality Delivery Review",
    phase: "Client Review",
    image: finishedHome2,
    quote:
      "The final result felt premium and thoughtfully executed. We’re happy with the quality, communication, and support throughout the project.",
    name: "Happy Client",
    role: "Residential Owner",
  },
  {
    id: "home-3",
    title: "Dream Home Experience",
    phase: "Client Review",
    image: finishedHome3,
    quote:
      "From planning to handover, the journey was smooth and reassuring. The team delivered a home we genuinely feel proud of.",
    name: "Verified Homeowner",
    role: "Auro BuildTech Client",
  },
];

function TestimonialsVideo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseImages.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const activeImage = showcaseImages[activeIndex];

  return (
    <section className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-5">
          <div className="tsTop">CLIENT REVIEWS</div>
          <h2 className="tsTitle">What Our Clients Say</h2>
          <p className="tsSub">
            Honest words from clients who trusted Auro BuildTech for planning,
            execution, and final project delivery.
          </p>
        </div>

        <LazyMotionSection
          rootMargin="240px"
          delay={0.05}
          placeholderHeight={540}
        >
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <div className="tsGalleryCard">
                <div className="tsGalleryStage">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage.id}
                      className="tsGallerySlide"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <img
                        className="tsGalleryImg"
                        src={activeImage.image}
                        alt={activeImage.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="tsVideoOverlay" />
                      <div className="tsGalleryMeta">
                        <span className="tsTag">{activeImage.phase}</span>
                        <h3>{activeImage.title}</h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="tsThumbRow">
                  {showcaseImages.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`tsThumb ${index === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${item.title}`}
                    >
                      <img src={item.image} alt={item.title} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
                <div className="tsReview">
                  <div className="tsStars" aria-label="5 star quality process">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>

                <p className="tsQuote">
                  &ldquo;{activeImage.quote}&rdquo;
                </p>

                <div className="tsReviewer">
                  <div className="tsAvatar" aria-hidden="true">
                    <i className="bi bi-buildings-fill"></i>
                  </div>

                  <div>
                    <div className="tsName">{activeImage.name}</div>
                    <div className="tsRole">{activeImage.role}</div>
                  </div>
                </div>

                <div className="tsMilestones">
                  <div className="tsMilestone">
                    <strong>01</strong>
                    <span>Clear updates and reliable communication</span>
                  </div>
                  <div className="tsMilestone">
                    <strong>02</strong>
                    <span>Professional handling from start to finish</span>
                  </div>
                  <div className="tsMilestone">
                    <strong>03</strong>
                    <span>Quality outcome clients feel proud to recommend</span>
                  </div>
                </div>

                <hr className="tsHr" />
              </div>
            </div>
          </div>
        </LazyMotionSection>
      </motion.div>
    </section>
  );
}

export default TestimonialsVideo;
