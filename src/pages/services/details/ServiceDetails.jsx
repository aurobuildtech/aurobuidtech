import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceDetailsData } from "./serviceDetailsData";
import "./serviceDetails.css";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const data = serviceDetailsData[serviceId];

  // Tooltip text (floating tooltip over icon group)
  const [tipText, setTipText] = useState("Back to services");

  useEffect(() => {
    if (!data) navigate("/services");
  }, [data, navigate]);

  // Build slides from your data (hero + details)
  const slides = useMemo(() => {
    if (!data) return [];

    const heroSlide = {
      type: "hero",
      title: data.title,
      eyebrow: data.eyebrow,
      desc: data.heroDesc,
      points: data.heroPoints || [],
      img: data.heroImage,
    };

    const detailSlides = (data.detailsSections || []).map((sec) => ({
      type: "detail",
      id: sec.id,
      title: sec.title,
      eyebrow: data.eyebrow,
      p1: sec.p1 || "",
      p2: sec.p2 || "",
      bulletsTitle: sec.bulletsTitle || "",
      bullets: sec.bullets || [],
      closing: sec.closing || "",
      footer: sec.footer || "",
      img: sec.image,
    }));

    return [heroSlide, ...detailSlides];
  }, [data]);

  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    setActive(0);
    setPrev(null);
    setTipText("Back to services");
  }, [serviceId]);

  const go = (nextIndex) => {
    if (!slides.length) return;
    if (nextIndex === active) return;

    setPrev(active);
    setDir(nextIndex > active ? 1 : -1);
    setActive(nextIndex);
  };

  const next = () => go((active + 1) % slides.length);
  const prevSlide = () => go((active - 1 + slides.length) % slides.length);

  if (!data) return null;

  return (
    <section className="cs-section">
      <div className="cs-container80">
        <div className="cs-stack">
          {slides.map((s, i) => {
            const isActive = i === active;
            const isPrev = i === prev;

            let cls = "cs-slide";
            if (isActive) cls += " is-active";
            if (isPrev) cls += " is-prev";
            cls += dir === 1 ? " dir-next" : " dir-prev";

            return (
              <div
                className={cls}
                key={s.id || i}
                style={{ zIndex: isActive ? 3 : isPrev ? 2 : 1 }}
              >
                {/* ✅ LEFT CONTENT */}
                <div className="cs-right">
                  <div className="cs-topRow">
                    <div className="cs-brand" style={{fontSize:"larger", fontFamily:" system-ui", fontWeight:'500',}}>
                      {(s.eyebrow || "").toLowerCase()}
                    </div>

                    {/* ✅ icon group with one floating tooltip */}
                    <div
                      className="cs-icons"
                      onMouseLeave={() => setTipText("Back to services")}
                    >
                      <div className="cs-floatingTip">{tipText}</div>

                      <button
                        className="cs-ico"
                        onClick={() => navigate("/services")}
                        onMouseEnter={() => setTipText("Back to services")}
                        type="button"
                        aria-label="Back"
                      >
                        ←
                      </button>

                      <button
                        className="cs-ico"
                        onClick={prevSlide}
                        onMouseEnter={() => setTipText("Previous slide")}
                        type="button"
                        aria-label="Previous"
                      >
                        ↑
                      </button>

                      <button
                        className="cs-ico"
                        onClick={next}
                        onMouseEnter={() => setTipText("Move next slide")}
                        type="button"
                        aria-label="Next"
                      >
                        ↓
                      </button>
                    </div>
                  </div>

                  {/* ✅ SCROLLABLE CONTENT AREA */}
                  <div className="cs-mid">
                    <div className="cs-count">
                      <div className="cs-n">{String(i + 1).padStart(2, "0")}</div>
                      <div className="cs-line" />
                      <div className="cs-total">
                        {String(slides.length).padStart(2, "0")}
                      </div>
                    </div>

                    <h2 className="cs-title" style={{ fontFamily:"system-ui"}}>{s.title}</h2>

                    {/* HERO slide content */}
                    {s.type === "hero" && (
                      <>
                        <p className="cs-desc">{s.desc}</p>

                        {Array.isArray(s.points) && s.points.length > 0 && (
                          <ul className="cs-points" style={{listStyle:'circle'}}>
                            {s.points.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}

                    {/* DETAIL slide content */}
                    {s.type === "detail" && (
                      <>
                        {s.p1 && <p className="cs-desc">{s.p1}</p>}
                        {s.p2 && <p className="cs-desc">{s.p2}</p>}

                        {s.bulletsTitle && (
                          <div className="cs-bulletsTitle">{s.bulletsTitle}</div>
                        )}

                        {Array.isArray(s.bullets) && s.bullets.length > 0 && (
                          <ul className="cs-points">
                            {s.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        )}

                        {/* closing/footer */}
                        {s.closing && <p className="cs-desc cs-note">{s.closing}</p>}
                        {s.footer && <p className="cs-desc cs-note">{s.footer}</p>}
                      </>
                    )}
                  </div>

                  {/* Bottom arrows (optional) */}
                  <div className="cs-arrows">
                    <button
                      onClick={prevSlide}
                      onMouseEnter={() => setTipText("Previous slide")}
                      aria-label="Previous"
                      type="button"
                    >
                      ↑
                    </button>
                    <button
                      onClick={next}
                      onMouseEnter={() => setTipText("Move next slide")}
                      aria-label="Next"
                      type="button"
                    >
                      ↓
                    </button>
                  </div>
                </div>

                {/* ✅ RIGHT IMAGE */}
                <div
                  className="cs-left"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}