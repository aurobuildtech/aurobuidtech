import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./latestCollectionPopup.css";

import coverImg from "../../assets/projects/sragvee/sragvee-cover.jpg";
import amenitiesImg from "../../assets/projects/sragvee/sragvee-amenities.jpg";
import layoutImg from "../../assets/projects/sragvee/sragvee-layout.jpg";
import locationImg from "../../assets/projects/sragvee/sragvee-location.jpg";

const slides = [
  {
    image: coverImg,
    eyebrow: "Latest Collection",
    title: "Sragvee Builders — Farmland Plots",
    text: "Where dreams find roots and futures flourish, near Chintamani.",
  },
  {
    image: layoutImg,
    eyebrow: "Master Planned Layout",
    title: "9 Acres 17.5 Guntas",
    text: "Thoughtfully planned farmland plots from 6 Guntas to 8 Guntas, on the Bengaluru – Madanapalle Road.",
  },
  {
    image: amenitiesImg,
    eyebrow: "World-Class Amenities",
    title: "Built for Everyday Living",
    text: "Clubhouse, swimming pool, kids' play area, indoor & outdoor games, and 24/7 security.",
  },
  {
    image: locationImg,
    eyebrow: "Well Connected",
    title: "Close to Everything That Matters",
    text: "Just 9 km from Chintamani, with strong connectivity across the region.",
  },
];

export default function LatestCollectionPopup({ delay = 1200, autoAdvance = 4500 }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setOpen(false);
  };

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, autoAdvance);

    return () => clearInterval(timer);
  }, [open, paused, autoAdvance]);

  if (!open) return null;

  const current = slides[index];

  return (
    <div
      className="lcpBackdrop"
      onClick={handleClose}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="lcpCard"
        role="dialog"
        aria-modal="true"
        aria-label="Latest collection: Sragvee Builders"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          ref={closeBtnRef}
          className="lcpClose"
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="lcpMedia">
          {slides.map((slide, i) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`lcpSlideImg ${i === index ? "is-active" : ""}`}
            />
          ))}

          <div className="lcpMediaOverlay" />

          <button
            type="button"
            className="lcpArrow lcpArrowPrev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="lcpArrow lcpArrowNext"
            onClick={goNext}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="lcpDots">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                className={`lcpDot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="lcpContent">
          <span className="lcpEyebrow">{current.eyebrow}</span>
          <h3 className="lcpTitle">{current.title}</h3>
          <p className="lcpText">{current.text}</p>

          <div className="lcpActions">
            <Link
              to="/projects/bangalore/sragvee-builders-layout"
              className="btn lcpPrimaryBtn"
              onClick={handleClose}
            >
              View Full Details
            </Link>

            <button type="button" className="btn lcpGhostBtn" onClick={handleClose}>
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
