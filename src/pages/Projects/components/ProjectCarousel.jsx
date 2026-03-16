import { useEffect, useMemo, useState } from "react";
import { heroSlidesByRegion } from "../data/projectsData";

export default function ProjectsHeroCarousel({ currentRegion = "bangalore" }) {
  const slides = useMemo(() => {
    return heroSlidesByRegion[currentRegion] || heroSlidesByRegion.bangalore;
  }, [currentRegion]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [currentRegion]);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return null;

  const current = slides[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="projectsHero">
      <div className="projectsHeroBg">
        <img src={current.image} alt={current.title} style={{objectFit:'cover'}} />
      </div>

      <div className="projectsHeroOverlay"></div>

      <div className="container projectsHeroContent">
        <div className="projectsHeroInner">
          <span className="heroBadge">{current.badge}</span>
          <h1>{current.title}</h1>
          <p>{current.subtitle}</p>

          <div className="heroActions">
            <a href="#projects-list" className="btn btn-primary">
              {current.cta}
            </a>

            <a href="/contact" className="btn btn-outline-light">
              Contact Team
            </a>
          </div>

          <div className="heroDots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`heroDot ${activeIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}