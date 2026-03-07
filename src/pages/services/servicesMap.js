import layoutdev from "../../assets/images/servicesBannerImgs/layoutdev.jpeg";
import sop from "../../assets/images/servicesBannerImgs/sop.jpeg";
import interior from "../../assets/images/servicesBannerImgs/interior.jpeg";
import interior1 from "../../assets/images/servicesBannerImgs/interior1.jpeg";
import interior2 from "../../assets/images/servicesBannerImgs/interior2.jpeg";
import constructions from "../../assets/images/servicesBannerImgs/constructions.jpeg";
import homeauto from "../../assets/homeauto/BannerBackImg.png";
import deschomeauto from "../../assets/homeauto/deschomeauto.png"
import roadwithtreesaround from "../../assets/homeauto/roadwithtreesaround.jpg"
import saleOfpropvilla from"../../assets/homeauto/saleOfpropvilla.jpg"
import constructionadd from "../../assets/homeauto/construction.jpg"
import interiorimg from "../../assets/homeauto/interiorimg.jpg"


 

export const servicesData = [
  // ✅ 1) Layout Development (FULL DATA)
  {
    id: "layout-development",
    pageKey: "layout",
    eyebrow: "Premium Construction Services",
    title: "Layout Development",
    img: roadwithtreesaround,
    descImg : layoutdev,

     desc1:
      "We are committed to transforming open land into well-planned, legally compliant, and future-ready investment destinations for modern living and business growth.",
    desc2:
      "Each venture is meticulously planned with clearly demarcated plots, wide internal roads, drainage systems, green landscapes, and essential utilities to ensure a secure and comfortable environment for homeowners and investors alike.",

    aboutTitle: "About Layout Development",
    aboutParas: [
      "Auro BuildTech is a forward-thinking real estate development company specializing in premium residential and commercial plotted developments. We are committed to transforming open land into well-planned, legally compliant, and future-ready investment destinations for modern living and business growth.",
      "Our projects are strategically located in rapidly developing zones with excellent connectivity to highways, urban infrastructure, educational institutions, and commercial hubs.",
      "Each venture is meticulously planned with clearly demarcated plots, wide internal roads, drainage systems, green landscapes, and essential utilities to ensure a secure and comfortable environment for homeowners and investors alike.",
    ],

    provideTitle: "We provide:",
    provideList: [
      "DTCP / RERA compliant plotted developments",
      "Residential villa plots for dream home construction",
      "Commercial plots for retail and business establishments",
      "Clear title properties with complete legal transparency",
      "Infrastructure-ready layouts with modern amenities",
      "High appreciation potential for long-term investment",
    ],
    provideIconKeys: ["dtcp", "villaPlot", "commercialPlot", "legal", "infra", "growth"],

    processTitle: "Our development process",
    processSteps: [
      {
        title: "Land Identification & Feasibility",
        text: "We evaluate location potential, connectivity, soil quality, and legal status before acquisition.",
      },
      {
        title: "Planning & Design",
        text: "Plot demarcation, road widths, drainage, parks, and zoning are designed for long-term growth.",
      },
      {
        title: "Approvals & Compliance",
        text: "DTCP/RERA documentation and regulatory approvals are handled with complete transparency.",
      },
      {
        title: "Infrastructure Execution",
        text: "Internal roads, drainage, street lights, water lines, and green landscaping are developed.",
      },
      {
        title: "Handover & Support",
        text: "We ensure clear documentation, site readiness, and continuous customer support.",
      },
    ],
    processIconKeys: ["land", "plan", "approve", "execute", "support"],

    highlightsTitle: "Why investors choose Auro",
    highlights: [
      {
        title: "Prime Locations",
        text: "Carefully selected growth corridors with future expansion potential.",
      },
      {
        title: "Transparent Documentation",
        text: "Clear title properties with legally verified paperwork and customer-first process.",
      },
      {
        title: "Premium Infrastructure",
        text: "Modern amenities, strong planning standards, and clean execution for lasting value.",
      },
      {
        title: "High ROI Potential",
        text: "Projects designed to deliver long-term appreciation and safe investment.",
      },
    ],

    ctaTitle: "Need a site visit or brochure?",
    ctaText: "Talk to our team and get layout details, approvals, and pricing in one call.",
    ctaBtnText: "Schedule Consultation",
    ctaLink: "/contact",
  },

  // ✅ 2) Sale of Properties (FULL DATA)
  {
    id: "sale-of-properties",
    pageKey: "sale",
    eyebrow: "Real Estate & Sales",
    title: "Sale of Properties",
    img: saleOfpropvilla,
    descImg : sop,
     desc1:
    "Auro BuildTech is a reliable real estate company specializing in the development and sale of Plots, premium flats and luxury villas designed for modern lifestyles.",
  desc2:
    "We focus on delivering high-quality residential spaces that combine smart design, advanced construction technology, and sustainable living standards.",

    aboutTitle: "About Sale of Properties",
    aboutParas: [
      "Auro BuildTech is a reliable real estate company specializing in the development and sale of premium apartments and luxury villas designed for modern lifestyles.",
      "We focus on delivering high-quality residential spaces that combine smart design, advanced construction technology, and sustainable living standards. Our residential projects are strategically located in fast-growing areas with excellent connectivity to schools, hospitals, business centers, and transport facilities.",
      "Each apartment and villa is thoughtfully planned with contemporary architecture, functional layouts, and essential amenities to ensure comfort, safety, and long-term value for homeowners.",
    ],

    offerTitle: "We offer:",
    offerList: [
      "Premium apartments with modern amenities",
      "Independent villas with spacious layouts",
      "Gated community developments",
      "Legally verified properties with clear titles",
      "Quality construction and timely delivery",
      "Investment-friendly residential properties",
    ],
    offerIconKeys: ["apartment", "villa", "gated", "legal", "infra", "growth"],

    bottomText:
      "At Auro BuildTech, we are committed to building homes that reflect trust, innovation, and superior living standards—helping families find their dream homes and investors secure valuable real estate assets.",
  },

  // keep others as-is for now
  {
    id: "constructions",
    pageKey: "construction",
    eyebrow: "PREMIUM CONSTRUCTION",
    title: "Constructions",
    desc1:
      "We are dedicated to delivering structurally strong, aesthetically appealing, and functionally efficient living spaces that meet the evolving needs of modern families.",
    desc2:
      "Our construction services are driven by advanced engineering practices, quality materials, and innovative building technologies to ensure durability, safety, and long-term value.",
    desc3:
      "From architectural planning and design to project execution and final handover, we manage every stage of the construction process with precision and professionalism.",
    img: constructions,
    descImg : constructionadd,

      aboutTitle: "About Construction Services",

  aboutParas: [
    "Auro BuildTech is a trusted construction company specializing in the development of high-quality residential villas and apartment complexes. We are dedicated to delivering structurally strong, aesthetically appealing, and functionally efficient living spaces that meet the evolving needs of modern families.",

    "Our construction services are driven by advanced engineering practices, premium quality materials, and innovative building technologies to ensure durability, safety, and long-term value.",

    "From architectural planning and design to project execution and final handover, our team manages every stage of the construction process with precision, professionalism, and strict quality standards."
  ],

  offerTitle: "We offer:",

  offerList: [
    "Construction of independent villas",
    "Apartment building development",
    "Turnkey residential construction services",
    "Customized home construction solutions",
    "Modern architectural design support",
    "Quality assurance and timely project delivery",
    "Sustainable and cost-effective building practices"
  ],

offerIconKeys: [
  "villaConstruction",
  "apartmentConstruction",
  "execute",
  "plan",
  "design",
  "approve",
  "growth"
],

  bottomText:
    "At Auro BuildTech Projects, we focus on building homes that combine comfort, style, and reliability—ensuring every project reflects superior craftsmanship, durable construction, and long-term customer satisfaction."

  },

  {
    id: "interior-solutions",
    pageKey: "interior",
    eyebrow: "MODERN INTERIORS",
    title: "Interior Solutions",
    desc1:
      "We offer innovative and customized interior design solutions for residential and commercial spaces.",
    desc2:
      "Our interior design services focus on smart space planning, premium materials, contemporary finishes, and seamless execution to create elegant and comfortable interiors.",
    desc3:
      "From concept development to final installation, we ensure attention to detail, quality craftsmanship, and timely project completion.",
    img: interior,
    descImg : interiorimg,


  aboutTitle: "About Interior Solutions",

  aboutParas: [
    "Our interior design services focus on smart space planning, premium materials, contemporary finishes, and seamless execution to create elegant and comfortable interiors.",
    "From concept development to final installation, we ensure attention to detail, quality craftsmanship, and timely project completion."
  ],

  provideTitle: "We provide:",

  provideList: [
    "Complete home interior design for apartments & villas",
    "Modular kitchen and wardrobe solutions",
    "Living room & bedroom interior concepts",
    "Office and commercial space interiors",
    "False ceiling, lighting & décor solutions",
    "Customized furniture & space optimization",
    "Turnkey interior execution services"
  ],

  provideIconKeys: [
    "interiorHome",
    "modular",
    "livingBed",
    "office",
    "lighting",
    "furniture",
    "turnkey"
  ],

  bottomText:
    "With a perfect blend of creativity, technology, and functionality, Auro BuildTech delivers interior spaces that enhance comfort, style, and value—turning every house into a dream home and every workspace into an inspiring environment.",

  },

  {
    id: "home-automation",
    pageKey: "homeauto",
    eyebrow: "Smart Living",
    title: "Home Automation",
    desc1:
      "Auro BuildTech offers advanced home automation solutions that transform modern homes into smart, secure, and energy-efficient living spaces.",
    desc2:
      "Our intelligent automation systems are designed to provide seamless control over lighting, security, climate, entertainment, and other essential home functions-all from a single interface.",
    img:homeauto ,
    descImg:deschomeauto,
  },

  
];