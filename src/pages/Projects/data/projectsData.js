import allure from "../../../assets/projects/villas/allureavani.jpeg";
import allure2 from "../../../assets/projects/villas/allure-avani2.jpeg";
import maharaja from "../../../assets/projects/villas/maharaja.jpeg";
import yugen from "../../../assets/projects/villas/yugen.jpeg";

import skyline from "../../../assets/projects/bangcaro/skylinebang.png"
import Utsav from "../../../assets/projects/bangcaro/Utsav.png" 
import aurocoll from  "../../../assets/projects/bangcaro/aurocoll.png"

import goalux from "../../../assets/projects/goabanner/goalux.png"
import goapv from "../../../assets/projects/goabanner/goapv2.png"
import goainvest from "../../../assets/projects/goabanner/goainvest.png"

import Medawateredge from "../../../assets/projects/flats/Medawateredge.jpeg"
import pavanimirabilia from "../../../assets/projects/flats/pavanimirabilia.jpeg"
import citySky from "../../../assets/projects/flats/citySky.jpeg"



export const projectCategories = ["All", "Plots", "Flats", "Villas"];

/* REGION BASED HERO SLIDES */
export const heroSlidesByRegion = {
  bangalore: [
    
    {
      id: 1,
         title: "Luxury Living Across Bangalore",
    subtitle:
      "Plots, flats and villas carefully curated for end users and investors.",
      image: skyline,
      badge: "Bangalore Collection",
      cta: "View Bangalore Opportunities",
    },
    {
      id: 2,
      title: " Bangalore Home Utsav",
      subtitle:
        "Book 2026 homes at 2025 prices* | Investor benefits up to ₹10 Lacs* | 15+ Grade A Developers",
      image: Utsav,
      badge: "Bangalore Featured",
      cta: "Explore Bangalore Projects",
    },
    {
      id: 3,
      title: "Auro Buildtech Bangalore Showcase",
      subtitle:
        "Clean, modern and premium Bangalore property opportunities with strong location advantages.",
      image: aurocoll,
      badge: "Auro Buildtech",
      cta: "Discover Bangalore Projects",
    },
  ],

  goa: [
    {
      id: 1,
      title: "Luxury Goa Investment Opportunities",
      subtitle:
        "Explore premium villa plots and luxury villa communities near Mopa Airport and prime Goa destinations.",
      image:goalux ,
      badge: "Goa Featured",
      cta: "Explore Goa Projects",
    },
    {
      id: 2,
      title: "Goa Premium Villa & Plot Collection",
      subtitle:
        "Curated Goa opportunities with luxury positioning, lifestyle value and strong appreciation potential.",
      image:goapv,
      badge: "Goa Collection",
      cta: "View Goa Opportunities",
    },
    {
      id: 3,
      title: "Invest in Goa with Auro Buildtech",
      subtitle:
        "Resort-style living, premium communities and handpicked project opportunities in Goa.",
      image: goainvest,
      badge: "Goa Projects",
      cta: "Discover Goa Projects",
    },
  ],
};

export const quickVideoGroups = {
  Plots: [
    { title: "Krishna Greens North Star", url: "#" },
    { title: "Yellow Stone Tattvam (JLL)", url: "#" },
    { title: "Visthara - The Silver Lake", url: "#" },
    { title: "Goa Villa Plots", url: "#" },
  ],
  Flats: [
    {
      title: "Puravankara Codename Flow",
      url: "https://youtube.com/shorts/xKKWTlsKJD8?si=fJdem9UGqHmWVslC",
    },
    { title: "Meda The Water Edge", url: "#" },
    { title: "Pavani Mirabilia", url: "#" },
    {
      title: "BCD City Sky 9",
      url: "https://www.instagram.com/p/DRzDL3sgNC0/?igsh=dXJhdTd2YWZ1Y2U1",
    },
  ],
  Villas: [
    { title: "Yugen Golf City – Garden of Eden", url: "#" },
    { title: "Yugen Golf City – Serenity", url: "#" },
    { title: "ALLURE AVANI", url: "#" },
    { title: "Maharaja Ikon Park", url: "#" },
  ],
};

export const projectsData = [
  {
    id: 1,
    slug: "krishna-greens-north-star",
    region: "bangalore",
    category: "Plots",
    title: "Krishna Greens North Star",
    location: "Devanahalli / North Bangalore",
    price: "₹1499 / sq.ft",
    status: "Available",
    image: "/projects/plots/krishna-greens.jpg",
    shortDesc:
      "Premium plotted development with greenery, gated living, and strong investment potential near North Bangalore growth corridor.",
    overview: [
      "Located at Devanahalli / North Bangalore growth zone",
      "Good investment option with peaceful surroundings",
      "Suitable for buyers seeking plotted development and future appreciation",
    ],
    highlights: [
      "24/7 Water & Power Supply",
      "Children's Play Area",
      "Landscaped Gardens",
      "Gated Community",
      "Jogging Track",
      "Street Lights & Drainage",
    ],
    ctaLabel: "Enquire Now",
    phone: "9945399123",
    videoUrl: "#",
  },
  {
    id: 2,
    slug: "yellow-stone-tattvam",
    region: "bangalore",
    category: "Plots",
    title: "Yellow Stone Tattvam (JLL)",
    location: "Varthur, Whitefield",
    price: "₹8999 onwards",
    status: "New Launch",
    image: "/projects/plots/yellowstone-tattvam.jpg",
    shortDesc:
      "BMRDA-approved plotted development in Varthur with strong Whitefield connectivity and premium community amenities.",
    overview: [
      "15 acres of plotted development",
      "240 units",
      "30x40, 30x50, 40x60 and odd-size plots available",
    ],
    highlights: [
      "Clubhouse",
      "Swimming Pool",
      "Cricket Pitch",
      "Tennis Court",
      "Futsal Court",
      "Open Air Theater",
      "24/7 Security",
    ],
    ctaLabel: "Know More",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 3,
    slug: "visthara-the-silver-lake",
    region: "bangalore",
    category: "Plots",
    title: "Visthara - The Silver Lake",
    location: "Yelahanka / Doddaballapura Road",
    price: "₹51 Lakhs onwards",
    status: "Fast Moving",
    image: "/projects/plots/visthara-silver-lake.jpg",
    shortDesc:
      "Premium gated plotted community close to KWIN City with excellent connectivity and ready-to-construct plots.",
    overview: [
      "100 plots in a 10+ acre layout",
      "1350 – 2400 sq.ft villa plots",
      "Ready-to-construct plots",
    ],
    highlights: [
      "Premium Gated Community",
      "Clubhouse & Amenities",
      "Clear Titles",
      "Advanced Infrastructure",
      "Near STRR, PRR, SH-9 & NH-44",
    ],
    ctaLabel: "Request Callback",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 4,
    slug: "goa-villa-plots",
    region: "goa",
    category: "Plots",
    title: "Goa Villa Plots",
    location: "Near Mopa Airport, Goa",
    price: "₹1.55 Cr onwards",
    status: "Limited Units",
    image: "/projects/plots/goa-villa-plots.jpg",
    shortDesc:
      "Premium resort-style golf community plots in Goa with luxury lifestyle positioning and airport proximity.",
    overview: [
      "RERA Approved",
      "Plot size starts from 350 sq. yd.",
      "Near Goa International Airport (Mopa)",
    ],
    highlights: [
      "Golf Resort Living",
      "Luxury Community",
      "Premium Location",
      "Investment Potential",
    ],
    ctaLabel: "Explore Goa",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 5,
    slug: "puravankara-codename-flow",
    region: "bangalore",
    category: "Flats",
    title: "Puravankara Codename Flow",
    location: "KIADB, Aerospace Park, Bangalore",
    price: "₹1.2 Cr onwards",
    status: "Hot Offer",
    image: "/projects/flats/puravankara-flow.jpg",
    shortDesc:
      "Premium apartment opportunity at Aerospace Park with strong airport connectivity and launch excitement.",
    overview: [
      "2, 3 & 4 BHK",
      "Near airport growth corridor",
      "Popular premium apartment option",
    ],
    highlights: [
      "Good Connectivity",
      "Premium Project Branding",
      "Launch Offers",
    ],
    ctaLabel: "Watch Video",
    phone: "9945399123",
    videoUrl: "https://youtube.com/shorts/xKKWTlsKJD8?si=fJdem9UGqHmWVslC",
  },
  {
    id: 6,
    slug: "meda-the-water-edge",
    region: "bangalore",
    category: "Flats",
    title: "Meda The Water Edge",
    location: "Hadosiddapura, Sarjapur Road, Bangalore",
    price: "₹73 Lakhs – ₹2.31 Cr",
    status: "Available",
    image: Medawateredge,
    shortDesc:
      "Premium apartment project combining modern design, practical location and family-friendly amenities near Sarjapur Road.",
    overview: [
      "2.15 acres",
      "2 towers with 11 floors each",
      "132 apartments",
      "1, 2, 2.5, 3, 3.5 BHK options",
      "RERA: PRM/KA/RERA/1251/446/PR/261224/007322",
    ],
    highlights: [
      "Modern Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Indoor Games",
      "Children's Play Area",
      "Banquet Hall",
      "24x7 Security",
    ],
    ctaLabel: "Get Details",
    phone: "9945399123",
    mapUrl: "https://maps.app.goo.gl/qy6oQP6EaoUxrWZv8",
    videoUrl: "#",
  },
  {
    id: 7,
    slug: "pavani-mirabilia",
    region: "bangalore",
    category: "Flats",
    title: "Pavani Mirabilia",
    location: "Whitefield Main Road, Bangalore",
    price: "₹1.42 Cr – ₹2.72 Cr",
    status: "Premium",
    image: pavanimirabilia,
    shortDesc:
      "Large-scale premium apartment project in Whitefield with high open space, clubhouse and strong metro access.",
    overview: [
      "13.5 acres",
      "10 towers",
      "1685 apartments",
      "2 BHK, 2 BHK + Study, 3 BHK, Premium 3 BHK & 4 BHK",
    ],
    highlights: [
      "65,000 sq.ft Clubhouse",
      "Bang on Whitefield Main Road",
      "70%+ Open Area",
      "Near Whitefield Metro",
      "No Common Walls",
      "Early Possession Options",
    ],
    ctaLabel: "View Project",
    phone: "9945399123",
    videoUrl: "#",
  },
  {
    id: 8,
    slug: "bcd-city-sky-9",
    region: "bangalore",
    category: "Flats",
    title: "BCD City Sky 9",
    location: "Bangalore",
    price: "From ₹37.99 Lakhs*",
    status: "Offer Running",
    image: citySky,
    shortDesc:
      "Apartment project positioned around comfort, convenience and accessible pricing with active campaign support.",
    overview: [
      "1 & 2 Bed apartment positioning",
      "Promotional urban project opportunity",
    ],
    highlights: [
      "Affordable Entry",
      "City Connectivity",
      "Campaign Offer",
    ],
    ctaLabel: "Open Link",
    phone: "9945399123",
    videoUrl: "https://www.instagram.com/p/DRzDL3sgNC0/?igsh=dXJhdTd2YWZ1Y2U1",
  },
  {
    id: 9,
    slug: "yugen-garden-of-eden",
    region: "goa",
    category: "Villas",
    title: "Yugen Golf City – Garden of Eden",
    location: "Next to Mopa Airport, Goa",
    price: "₹1.55 Cr onwards",
    status: "RERA Approved",
    image: yugen,
    shortDesc:
      "Premium resort community plot/villa opportunity in Goa with luxury positioning, scenic surroundings and limited availability.",
    overview: [
      "RERA Approved",
      "Plot size from 350 sq. yd.",
      "Premium golf resort living",
    ],
    highlights: [
      "Luxury Lifestyle",
      "Near Mopa Airport",
      "Golf Community",
      "Limited Units",
    ],
    ctaLabel: "Explore Project",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 10,
    slug: "yugen-serenity",
    region: "goa",
    category: "Villas",
    title: "Yugen Golf City – Serenity",
    location: "Goa",
    price: "₹3.51 Cr onwards",
    status: "Luxury Villas",
    image: yugen,
    shortDesc:
      "Acqua Front Villas at Yugen Golf City offering luxury resort living with scenic design and premium Goa lifestyle positioning.",
    overview: [
      "Villas, Plots, Farm Houses, Apartments, Senior Living",
      "15 minutes from Mopa Airport",
      "Luxury-led destination development",
    ],
    highlights: [
      "Acqua Front Villas",
      "Luxury Living",
      "Airport Proximity",
      "Resort Community",
    ],
    ctaLabel: "Know More",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 11,
    slug: "allure-avani",
    region: "bangalore",
    category: "Villas",
    title: "ALLURE AVANI",
    location: "Near Airport / OMR / Hennur Side, Bangalore",
    price: "4 BHK Villas | 3550 – 5600 sq.ft",
    status: "Pre-Launch",
    image: allure2,
    shortDesc:
      "Curated luxury villa community inspired by the five elements, combining open space, low density and premium clubhouse experience.",
    overview: [
      "Phase 1: 15.6 acres",
      "138 exclusive 4 BHK villas",
      "Ultra-low density ~7 villas per acre",
      "40,000 sq.ft clubhouse",
      "61% open space | 92% UDS",
    ],
    highlights: [
      "Luxury Villa Community",
      "Low Density Planning",
      "Prime Connectivity",
      "Premium Clubhouse",
      "Strong Leadership Branding",
    ],
    ctaLabel: "Reserve Slot",
    phone: "9739014332",
    videoUrl: "#",
  },
  {
    id: 12,
    slug: "maharaja-ikon-park",
    region: "bangalore",
    category: "Villas",
    title: "Maharaja Ikon Park",
    location: "Devanahalli, Bengaluru",
    price: "₹2.7 Cr – ₹3.5 Cr",
    status: "Pre-Launch Offer",
    image: maharaja,
    shortDesc:
      "English heritage-inspired triplex villa community in Devanahalli with strong airport growth potential and premium living design.",
    overview: [
      "133 4 BHK Triplex Villas",
      "9.16 acres",
      "Adjacent to Brigade Orchards",
      "RERA: PRM/KA/RERA/1250/303/PR/130924/007013",
    ],
    highlights: [
      "Private Lifts",
      "Servant Quarters",
      "Vaastu-compliant Layouts",
      "Airport Growth Corridor",
      "Premium Appreciation Potential",
    ],
    ctaLabel: "Check Availability",
    phone: "9739014332",
    mapUrl: "https://t.ly/rbJri",
    videoUrl: "#",
  },
];