import skyline from "../../../assets/projects/bangcaro/skylinebang.png"
import Utsav from "../../../assets/projects/bangcaro/Utsav.png" 
import aurocoll from  "../../../assets/projects/bangcaro/aurocoll.png"
import sragveeCover from "../../../assets/projects/sragvee/sragvee-cover.jpg"


export const projectCategories = ["All", "Plots"];

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
      title: "SkyZen Aurobuildtech Bangalore Showcase",
      subtitle:
        "Clean, modern and premium Bangalore property opportunities with strong location advantages.",
      image: aurocoll,
      badge: "SkyZen Aurobuildtech",
      cta: "Discover Bangalore Projects",
    },
  ],
};

export const quickVideoGroups = {
  Plots: [
    {
      title: "Sragvee Builders Layout",
      region: "bangalore",
      slug: "sragvee-builders-layout",
    },
  ],
};

export const projectsData = [
  {
    id: 13,
    slug: "sragvee-builders-layout",
    region: "bangalore",
    category: "Plots",
    title: "Sragvee Builders - Farmland Plots",
    location: "Chintamani, Bengaluru - Madanapalle Road",
    price: "Price on Request",
    status: "New Launch",
    image: sragveeCover,
    shortDesc:
      "Thoughtfully master-planned farmland plotted layout near Chintamani with wide roads, full amenities, and strong connectivity along the Bengaluru - Madanapalle corridor.",
    overview: [
      "9 Acres 17.5 Guntas master-planned layout",
      "Farmland plot sizes from 6 Guntas to 8 Guntas",
      "9 km from Chintamani, 30 km from H Cross",
      "Located on the Bengaluru to Madanapalle Road",
    ],
    highlights: [
      "Clubhouse & Swimming Pool",
      "Kids Playground",
      "Indoor & Outdoor Games",
      "24/7 CCTV Security",
      "Gravel Roads & Water Pipeline",
      "Compound Wall",
    ],
    ctaLabel: "Enquire Now",
    phone: "9945399123",
    videoUrl: "#",
    hasBookingLayout: true,
  },
];