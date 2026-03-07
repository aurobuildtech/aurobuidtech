import { servicesData } from "../servicesMap";
import ServiceContentLayout from "./ServiceContentLayout";

export default function LayoutDevelopment() {
  const data = servicesData.find((s) => s.id === "layout-development");
  return <ServiceContentLayout data={{ ...data, sideImage: data?.img ,descImg :data.descImg }} />;
}