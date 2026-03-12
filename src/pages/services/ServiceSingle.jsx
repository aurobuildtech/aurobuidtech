import { Navigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import { servicesData } from "./servicesMap";
import "./serviceSingle.css";

/* ✅ Import individual pages */
import LayoutDevelopment from "./pages/LayoutDevelopment";
import SaleOfProperties from "./pages/SaleOfProperties";
import Constructions from "./pages/Constructions";
import InteriorSolutions from "./pages/InteriorSolutions";
import HomeAutomation from "./pages/HomeAutomation";

export default function ServiceSingle() {
  const { serviceId } = useParams();
  const [imgLoaded, setImgLoaded] = useState(false);

  const service = servicesData.find((s) => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;

  const bannerImg = Array.isArray(service.img) ? service.img[0] : service.img;

  useEffect(() => {
    setImgLoaded(false);

    if (!bannerImg) return;

    const img = new Image();
    img.src = bannerImg;

    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgLoaded(true);
  }, [bannerImg]);

  // ✅ Breadcrumb services click should open dropdown
  const openServicesMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(new Event("open-services-dropdown"));
  };

  // ✅ Component map
  const servicePageMap = {
    "layout-development": LayoutDevelopment,
    "sale-of-properties": SaleOfProperties,
    constructions: Constructions,
    "interior-solutions": InteriorSolutions,
    "home-automation": HomeAutomation,
  };

  const PageComponent = servicePageMap[serviceId];

  return (
    <PageTransitionE>
      {/* ✅ Banner */}
      <section
        className={`svcHero ${imgLoaded ? "is-loaded" : "is-loading"}`}
        style={imgLoaded ? { "--svcHeroImg": `url(${bannerImg})` } : {}}
      >
        <div className="svcHeroShimmer" />
        <div className="svcHeroOverlay" />

        <div className="container svcHeroInner">
          <Reveal y={14}>
            <p className="svcCrumb">
              <Link to="/" className="svcCrumbLink">
                Home
              </Link>
              <span className="svcCrumbSep">»</span>

              <button
                type="button"
                className="svcCrumbBtn"
                onClick={openServicesMenu}
              >
                Services
              </button>

              <span className="svcCrumbSep">»</span>
              <span className="svcCrumbCurrent">{service.title}</span>
            </p>

            <h1 className="svcHeroTitle">{service.title}</h1>

            <p className="svcHeroSub">
              Build smarter, faster, and premium — with Auro BuildTech
            </p>

            <p className="svcHeroDesc">
              {service.desc1}
              {service.desc2 ? ` ${service.desc2}` : ""}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ✅ Individual page if exists, else fallback overview */}
      {PageComponent ? (
        <PageComponent />
      ) : (
        <section className="container py-5">
          <Reveal y={16}>
            <div className="svcContentCard">
              <h2 className="svcContentTitle">Overview</h2>
              {service.desc1 && <p className="svcContentText">{service.desc1}</p>}
              {service.desc2 && <p className="svcContentText">{service.desc2}</p>}
              {service.desc3 && <p className="svcContentText">{service.desc3}</p>}
            </div>
          </Reveal>
        </section>
      )}
    </PageTransitionE>
  );
}