import { Navigate, Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
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

  /* ✅ CASE 2: /services/:serviceId → single service page */
  const service = servicesData.find((s) => s.id === serviceId);

  const bannerImg = service
    ? Array.isArray(service.img)
      ? service.img[0]
      : service.img
    : null;

  useEffect(() => {
    setImgLoaded(false);

    if (!bannerImg) return;

    const img = new Image();
    img.src = bannerImg;

    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgLoaded(true);
  }, [bannerImg]);

  const openServicesMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(new Event("open-services-dropdown"));
  };

  const servicePageMap = {
    "layout-development": LayoutDevelopment,
    "sale-of-properties": SaleOfProperties,
    constructions: Constructions,
    "interior-solutions": InteriorSolutions,
    "home-automation": HomeAutomation,
  };

  const PageComponent = servicePageMap[serviceId];

  const serviceMetaMap = useMemo(
    () => ({
      "layout-development": {
        title: "Layout Development | SkyZen Aurobuildtech",
        description:
          "Explore premium layout development services by SkyZen Aurobuildtech with planned infrastructure, legal compliance, and future-ready investment destinations.",
      },
      "sale-of-properties": {
        title: "Sale of Properties | SkyZen Aurobuildtech",
        description:
          "Discover premium plots, flats, and villas by SkyZen Aurobuildtech designed for modern lifestyles and smart real estate investment.",
      },
      constructions: {
        title: "Constructions | SkyZen Aurobuildtech",
        description:
          "SkyZen Aurobuildtech offers premium residential and commercial construction services with quality materials, modern engineering, and timely delivery.",
      },
      "interior-solutions": {
        title: "Interior Solutions | SkyZen Aurobuildtech",
        description:
          "Transform your spaces with modern interior solutions by SkyZen Aurobuildtech using smart planning, premium materials, and elegant finishes.",
      },
      "home-automation": {
        title: "Home Automation | SkyZen Aurobuildtech",
        description:
          "Experience smart living with SkyZen Aurobuildtech home automation solutions for lighting, security, climate, and seamless control.",
      },
    }),
    []
  );

  if (!service) return <Navigate to="/services" replace />;

  const meta = serviceMetaMap[serviceId] || {
    title: `${service.title} | SkyZen Aurobuildtech`,
    description: `${service.desc1} ${service.desc2 || ""}`.trim(),
  };

  const pageUrl = `https://www.aurobuildtech.com/services/${serviceId}`;

  return (
    <PageTransitionE>
      <Helmet>
        <title>{meta.title}</title>

        <meta name="description" content={meta.description} />

        <meta
          name="keywords"
          content={`${service.title}, SkyZen Aurobuildtech, construction services, interior services, smart home solutions`}
        />

        <meta name="author" content="SkyZen Aurobuildtech" />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content={pageUrl} />

        <link rel="canonical" href={pageUrl} />
      </Helmet>

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
              Build smarter, faster, and premium — with SkyZen Aurobuildtech
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












// import { Navigate, Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import PageTransitionE from "../../components/animations/PageTransition";
// import Reveal from "../../components/animations/Reveal";
// import { servicesData } from "./servicesMap";
// import "./serviceSingle.css";

// /* ✅ Import individual pages */
// import LayoutDevelopment from "./pages/LayoutDevelopment";
// import SaleOfProperties from "./pages/SaleOfProperties";
// import Constructions from "./pages/Constructions";
// import InteriorSolutions from "./pages/InteriorSolutions";
// import HomeAutomation from "./pages/HomeAutomation";

// export default function ServiceSingle() {
//   const { serviceId } = useParams();
//   const [imgLoaded, setImgLoaded] = useState(false);

//   const service = servicesData.find((s) => s.id === serviceId);
//   if (!service) return <Navigate to="/services" replace />;

//   const bannerImg = Array.isArray(service.img) ? service.img[0] : service.img;

//   useEffect(() => {
//     setImgLoaded(false);

//     if (!bannerImg) return;

//     const img = new Image();
//     img.src = bannerImg;

//     img.onload = () => setImgLoaded(true);
//     img.onerror = () => setImgLoaded(true);
//   }, [bannerImg]);

//   // ✅ Breadcrumb services click should open dropdown
//   const openServicesMenu = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     window.dispatchEvent(new Event("open-services-dropdown"));
//   };

//   // ✅ Component map
//   const servicePageMap = {
//     "layout-development": LayoutDevelopment,
//     "sale-of-properties": SaleOfProperties,
//     "constructions": Constructions,
//     "interior-solutions": InteriorSolutions,
//     "home-automation": HomeAutomation,
//   };

//   const PageComponent = servicePageMap[serviceId];

//   return (
//     <PageTransitionE>
//       {/* ✅ Banner */}
//       <section
//         className={`svcHero ${imgLoaded ? "is-loaded" : "is-loading"}`}
//         style={imgLoaded ? { "--svcHeroImg": `url(${bannerImg})` } : {}}
//       >
//         <div className="svcHeroShimmer" />
//         <div className="svcHeroOverlay" />

//         <div className="container svcHeroInner">
//           <Reveal y={14}>
//             <p className="svcCrumb">
//               <Link to="/" className="svcCrumbLink">
//                 Home
//               </Link>
//               <span className="svcCrumbSep">»</span>

//               <button
//                 type="button"
//                 className="svcCrumbBtn"
//                 onClick={openServicesMenu}
//               >
//                 Services
//               </button>

//               <span className="svcCrumbSep">»</span>
//               <span className="svcCrumbCurrent">{service.title}</span>
//             </p>

//             <h1 className="svcHeroTitle">{service.title}</h1>

//             <p className="svcHeroSub">
//               Build smarter, faster, and premium — with SkyZen Aurobuildtech
//             </p>

//             <p className="svcHeroDesc">
//               {service.desc1}
//               {service.desc2 ? ` ${service.desc2}` : ""}
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* ✅ Individual page if exists, else fallback overview */}
//       {PageComponent ? (
//         <PageComponent />
//       ) : (
//         <section className="container py-5">
//           <Reveal y={16}>
//             <div className="svcContentCard">
//               <h2 className="svcContentTitle">Overview</h2>
//               {service.desc1 && <p className="svcContentText">{service.desc1}</p>}
//               {service.desc2 && <p className="svcContentText">{service.desc2}</p>}
//               {service.desc3 && <p className="svcContentText">{service.desc3}</p>}
//             </div>
//           </Reveal>
//         </section>
//       )}
//     </PageTransitionE>
//   );
// }