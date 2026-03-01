// AppRoutes.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";

const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/services/Services"));
const ServiceDetails = lazy(() => import("../pages/services/details/ServiceDetails"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));

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
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/services" element={<Services />} />

          {/* ✅ NEW: details page */}
          <Route path="/services/:serviceId" element={<ServiceDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}