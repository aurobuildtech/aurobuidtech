import homeauto from "../../../assets/images/servicesBannerImgs/sbanner2.jpeg";
import homeauto1 from "../../../assets/images/ServiceDetailsImgs/detailshomeauto1.png";
import homeauto2 from "../../../assets/images/ServiceDetailsImgs/detailshomeauto2.png";

export const serviceDetailsData = {
  "home-automation": {
    title: "Home Automation",
    eyebrow: "SMART HOME AUTOMATION",
    heroDesc:
      "We integrate cutting-edge technology with user-friendly systems to enhance convenience, safety, and energy management in apartments, villas, and gated communities. Our solutions are customized to suit individual lifestyle needs, ensuring comfort, efficiency, and future-ready living environments.",

    heroPoints: [
      "Smart lighting automation",
      "Intelligent security & surveillance systems",
      "Climate control (AC & ventilation automation)",
      "Smart door locks & video door phones",
      "Motorized curtain & appliance automation",
      "Energy usage monitoring & optimization",
      "Home theatre & entertainment automation",
    ],

    heroImage: homeauto,

    detailsSections: [
      {
        id: "ha1",
        title: "Smart lighting automation",
        p1: "Auro BuildTech Projects delivers advanced smart lighting automation solutions that enhance comfort, energy efficiency, and modern living experiences. Our intelligent lighting systems allow homeowners to control, schedule, and customize lighting through mobile apps, voice commands, or centralized control panels.",
        p2: "By integrating motion sensors, dimming controls, scene settings, and daylight sensors, we create adaptive lighting environments that automatically adjust based on occupancy, time of day, and natural light levels.",

        bulletsTitle: "Our smart lighting solutions include:",

        bullets: [
          "App & Voice-Controlled Lighting",
          "Motion Sensor-Based Automatic Switching",
          "Dimming & Mood Lighting Control",
          "Scene-Based Lighting (Home, Party, Night Mode, etc.)",
          "Daylight Harvesting Systems",
          "Scheduled On/Off Automation",
          "Energy Monitoring & Optimization",
          "Integration with Security & Climate Systems",
        ],

        closing:
          "With smart lighting automation from Auro BuildTech Projects, homeowners enjoy enhanced ambiance, reduced energy consumption, improved security, and seamless control — all designed for modern, tech-enabled living.",

        image: homeauto1,
      },
      {
        id: "ha2",
        title: "Intelligent security & surveillance systems",
        p1: "Auro BuildTech Projects offers smart home automation solutions integrated with advanced CCTV surveillance systems to enhance safety, control, and convenience for modern homes and commercial spaces.",
        p2: "Our solutions enable real-time monitoring, remote access, and intelligent threat detection through:",

        bullets: [
          "Smart CCTV with Mobile Monitoring",
          "Motion & Intrusion Detection Sensors",
          "Video Door Phone Systems",
          "Biometric / RFID Access Control",
        ],

        footer:
          "With our centralized and user-friendly platforms, clients can monitor and manage their property security anytime, from anywhere — ensuring peace of mind and future-ready protection.",

        image: homeauto2,
      },
    ],
  },
};