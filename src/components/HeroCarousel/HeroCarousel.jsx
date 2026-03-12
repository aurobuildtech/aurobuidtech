import { useEffect } from "react";
import "bootstrap/js/dist/carousel"; // ✅ ensures carousel JS is loaded
import "./carousel.css"
import caroImg1 from "../../assets/images/carousel/caro1.jpg";
import caroImg3 from "../../assets/images/carousel/caro3.jpg";
import caroImg4 from "../../assets/images/carousel/caro4.jpg";
import caroImg5 from "../../assets/images/carousel/caro5.jpg";
import Carousel from "bootstrap/js/dist/carousel";
import { Link } from "react-router-dom";
const slides = [
  {
    id: "s1",
    badge: "Commercial",
    title: "Commercial Builds",
    subtitle:
      "High-performance construction management projects delivered on time, on budget, with uncompromising safety.",
    img: caroImg1,
  },
  {
    id: "s3",
    badge: "Residential",
    title: "Luxury Residential\nConstruction",
    subtitle:
      "Custom homes built with precision craftsmanship, smart planning, and premium finishes—engineered to last.",
    img: caroImg3,
  },
  {
    id: "s4",
    badge: "Plots | Properties",
    title: "Layouts & Sale of Properties",
    subtitle:
      "Thoughtfully designed layouts and premsium plots in prime locations, offering clear titles, transparent transactions, and long-term investment value.",
    img: caroImg4,
  },
  {
    id: "s5",
    badge: "Interiors",
    title: "Luxury Interior\nDesign & Execution",
    subtitle:
      "Elegant interior spaces crafted with premium materials, functional layouts, and refined finishes—designed for comfort, beauty, and everyday living.",
    img: caroImg5,
  },
];

export default function HeroCarousel() {
 
  
  useEffect(() => {
  const el = document.getElementById("carouselExampleCaptions");
  if (!el) return;

  const instance = Carousel.getOrCreateInstance(el, {
    interval: 5000,      // ✅ slower (5 seconds)
    ride: "carousel",
    pause: "hover",      // ✅ pause when mouse enters
    touch: true,
    wrap: true,
  });

  instance.cycle(); // ✅ start autoplay

  return () => instance.dispose();
}, []);

  return (
    <section className="py-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide rounded-4 overflow-hidden auro-shadow"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div key={slide.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={slide.img} className="d-block w-100 auro-hero-img" alt={slide.title} />

              <div className="carousel-caption  auro-caption">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="badge p-3 fw-bold rounded-pill auro-badge">{slide.badge}</h3>
                </div>

                <h2 className="fw-bold mt-3 auro-caption-title" style={{ whiteSpace: "pre-line" }}>
                  {slide.title}
                </h2>

                <p className="mt-3 auro-caption-subtitle">{slide.subtitle}</p>

                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <Link to="/contact" className="btn rounded-pill auro-btn-primary">
                    Schedule Consultation
                  </Link>

                  <a href="#projects" className="btn rounded-pill auro-btn-outline auro-btn-center">
                    View All Projects →
                  </a>

             
                </div>
              </div>

              <div className="auro-hero-overlay" />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
