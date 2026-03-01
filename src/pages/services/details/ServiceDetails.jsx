import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { serviceDetailsData } from "./serviceDetailsData";
import "./serviceDetails.css";

const leftIn = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const rightIn = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const data = serviceDetailsData[serviceId];

  useEffect(() => {
    if (!data) navigate("/services");
  }, [data, navigate]);

  // ✅ smooth scroll to section when /services/:id#ha1 etc (with sticky header offset)
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = 95;
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 200);

    return () => clearTimeout(t);
  }, [location.hash]);

  if (!data) return null;

  return (
    <section className="sdWrap">
      {/* HERO */}
      <div className="sdHero" style={{ "--sd-bg": `url(${data.heroImage})` }}>
        <div className="container sdHeroInner">
          <div className="sdTop">
            <button className="sdBack" onClick={() => navigate("/services")}>
              ← Back
            </button>
            <div className="sdEyebrow">{data.eyebrow}</div>
          </div>

          <h1 className="sdTitle">{data.title}</h1>

          <div className="sdDesc">
            <p>{data.heroDesc}</p>
          </div>

          <ul className="sdPoints">
            {data.heroPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* DETAILS */}
      <div className="container sdBody">
        {data.detailsSections.map((sec, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={sec.id}
              id={sec.id}
              className={`sdRow ${!isEven ? "reverse" : ""}`}
              style={{ scrollMarginTop: "95px" }}
            >
              <motion.div
                className="sdTextCard"
                variants={isEven ? leftIn : rightIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="sdH2">{sec.title}</h2>

                {sec.p1 && <p className="sdP">{sec.p1}</p>}
                {sec.p2 && <p className="sdP">{sec.p2}</p>}

                {/* ✅ bullets title */}
                {sec.bulletsTitle && (
                  <div className="sdMiniTitle">{sec.bulletsTitle}</div>
                )}

                {sec.bullets && (
                  <ul className="sdList">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {/* ✅ closing paragraph (for ha1) */}
                {sec.closing && <p className="sdP sdClosing">{sec.closing}</p>}

                {/* ✅ footer (for ha2) */}
                {sec.footer && <p className="sdP sdClosing">{sec.footer}</p>}
              </motion.div>

              <motion.div
                className="sdImgCard"
                variants={isEven ? rightIn : leftIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <img src={sec.image} alt={sec.title} loading="lazy" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}