import { useEffect, useRef, useState } from "react";
import "./Caro.css";

import caroImg1 from "../src/assets/images/carousel/caro1.jpg";
import caroImg3 from "../src/assets/images/carousel/caro3.jpg";
import caroImg4 from "../src/assets/images/carousel/caro4.jpg";
import caroImg5 from "../src/assets/images/carousel/caro5.jpg";

const slides = [
  {
    badge: "Commercial",
    title: "Commercial Builds",
    subtitle:
      "High-performance construction management projects delivered on time, on budget, with uncompromising safety.",
    img: caroImg1,
  },
  {
    badge: "Residential",
    title: "Luxury Residential Construction",
    subtitle:
      "Custom homes built with precision craftsmanship, smart planning, and premium finishes—engineered to last.",
    img: caroImg3,
  },
  {
    badge: "Plots | Properties",
    title: "Layouts & Sale of Properties",
    subtitle:
      "Thoughtfully designed layouts and premium plots in prime locations, offering clear titles and long-term investment value.",
    img: caroImg4,
  },
  {
    badge: "Interiors",
    title: "Luxury Interior Design & Execution",
    subtitle:
      "Elegant interior spaces crafted with premium materials, functional layouts, and refined finishes.",
    img: caroImg5,
  },
];

export default function WorkflowCarousel() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);
  const trackRef = useRef(null);

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* Auto scroll every 4 seconds */
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  /* center active card */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[active];
    const wrap = track.parentElement;

    const left =
      card.offsetLeft - (wrap.clientWidth / 2 - card.clientWidth / 2);

    wrap.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <section
      className="expand-hero"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="slider">
        <div className="track" ref={trackRef}>
          {slides.map((slide, i) => (
            <article
              key={i}
              className={`project-card ${active === i ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <img src={slide.img} className="project-card__bg" alt="" />

              <div className="project-card__content">
                <div>
                  <span className="auro-badge">{slide.badge}</span>

                  <h2 className="project-card__title">{slide.title}</h2>

                  <p className="project-card__desc">{slide.subtitle}</p>

                  <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">
                      Schedule Consultation
                    </a>

                    <a href="#projects" className="btn btn-outline-light">
                      View Projects →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <div className="controls">
        <button className="nav-btn" onClick={prev}>
          ‹
        </button>
        <button className="nav-btn" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}