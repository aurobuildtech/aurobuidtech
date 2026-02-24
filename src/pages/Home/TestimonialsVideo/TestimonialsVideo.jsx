import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import LazyMotionSection from "../../../components/lazy/LazyMotionSection";
import "./testimonialsVideo.css"

const VideoModal = lazy(() => import("../../../components/modals/VideoModal"));

const testimonials = [
  {
    id: "t1",
    tag: "Custom Luxury Project",
    thumb:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    quote:
      '“AURO BUILDTECH” transformed our vision into reality beyond our wildest dreams. Their attention to detail and transparent communication made the process smooth and exciting.',
    name: "Verified Client",
    role: "Homeowner",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&mute=1",
  }
];

function TestimonialsVideo() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (url) => {
    setActiveVideo(url);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveVideo(""); // stops video
  };

  return (
    <section className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="text-center mb-5">
          <div className="tsTop">CLIENT SUCCESS STORIES</div>
          <h2 className="tsTitle">What Our Clients Say</h2>
          <p className="tsSub">
            Real experiences from real clients who trusted us with their
            construction dreams
          </p>
        </div>

        {/* ✅ Each block lazy-mounted + animated on scroll */}
        {testimonials.map((t, idx) => {
          const reverse = idx % 2 === 1;

          return (
            <LazyMotionSection
              key={t.id}
              rootMargin="240px"
              delay={0.05}
              placeholderHeight={420}
            >
              <div
                className={`row g-4 align-items-center mb-5 ${
                  reverse ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image/Video */}
                <div className="col-12 col-lg-7">
                  <div
                    className="tsVideoCard"
                    role="button"
                    onClick={() => openModal(t.videoUrl)}
                  >
                    <img
                      className="tsVideoImg"
                      src={t.thumb}
                      alt={t.tag}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="tsVideoOverlay" />
                    <div className="tsPlayBtn" aria-label="Play video">
                      <i className="bi bi-play-fill"></i>
                    </div>
                    <div className="tsTag">{t.tag}</div>
                  </div>
                </div>

                {/* Review */}
                <div className="col-12 col-lg-5">
                  <div className="tsReview">
                    <div className="tsStars" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>

                    <p className="tsQuote">{t.quote}</p>

                    <div className="tsReviewer">
                      <div className="tsAvatar" aria-hidden="true">
                        <i className="bi bi-person-fill"></i>
                      </div>

                      <div>
                        <div className="tsName">{t.name}</div>
                        <div className="tsRole">{t.role}</div>
                      </div>
                    </div>

                    <hr className="tsHr" />
                  </div>
                </div>
              </div>
            </LazyMotionSection>
          );
        })}
      </motion.div>

      {/* ✅ Modal is code-split (loads only on click) */}
      <Suspense fallback={null}>
        <VideoModal open={open} onClose={closeModal} videoUrl={activeVideo} />
      </Suspense>
    </section>
  );
}

export default TestimonialsVideo