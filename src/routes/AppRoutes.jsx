import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import WhatsAppFloat from "../components/buttons/WhatsAppFloat";
import PropertyHubFloat from "../components/floating/PropertyHubFloat";
import ScrollToTop from "../components/ScrollToTop";

const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/services/Services"));
const ServiceSingle = lazy(() => import("../pages/services/ServiceSingle"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const Projects = lazy(() => import("../pages/Projects/ProjectsPage"));
const ProjectDetailsPage = lazy(() =>
  import("../pages/Projects/ProjectDetailsPage")
);

export default function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SplashScreen />}>

        {/* GLOBAL FLOAT BUTTONS */}
        
        <PropertyHubFloat />
        <WhatsAppFloat />
<ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceSingle />} />

          {/* PROJECT ROUTES */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:location" element={<Projects />} />
          <Route
            path="/projects/:location/:projectSlug"
            element={<ProjectDetailsPage />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Suspense>
    </AnimatePresence>
  );
}