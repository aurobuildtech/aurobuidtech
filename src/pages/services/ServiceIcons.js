import {
  MdLocationSearching,
  MdDesignServices,
  MdVerified,
  MdConstruction,
  MdSupportAgent,
  MdGavel,
  MdApartment,
  MdVilla,
  MdOutlineChair,
  MdKitchen,
  MdBed,
  MdBusiness,
  MdLightbulb,
  MdWeekend,
  MdBuild,
  MdOutlineLocationCity,
  MdOutlineTrendingUp,
  MdOutlineHandshake,
  MdOutlineFactCheck,
  MdOutlineAssuredWorkload,
  MdOutlineHomeWork,
  MdTrendingUp
} from "react-icons/md";

export const ICONS = {

  /* Common */
  legal: MdGavel,
  growth: MdTrendingUp,
  infra: MdOutlineAssuredWorkload,
  dtcp: MdOutlineFactCheck,

  /* Layout */
  villaPlot: MdOutlineHomeWork,
  commercialPlot: MdOutlineLocationCity,

  /* Layout Process */
  land: MdLocationSearching,
  plan: MdDesignServices,
  approve: MdVerified,
  execute: MdConstruction,
  support: MdSupportAgent,

  /* Sale of Properties */
  apartment: MdApartment,
  villa: MdVilla,
  gated: MdOutlineHandshake,
  legal: MdGavel,
  infra: MdOutlineAssuredWorkload,
  growth: MdTrendingUp,

  /* Constructions */
  construction: MdConstruction,
  design: MdDesignServices,
  approve: MdVerified,
  execute: MdBuild,
  villaConstruction: MdVilla,
  apartmentConstruction: MdApartment,

  /* Interiors */
  interiorHome: MdOutlineChair,
  modular: MdKitchen,
  livingBed: MdBed,
  office: MdBusiness,
  lighting: MdLightbulb,
  furniture: MdWeekend,
  turnkey: MdBuild,
};

export const getIconByKey = (key) => {
  return ICONS[key] || null;
};