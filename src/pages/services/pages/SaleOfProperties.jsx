import { servicesData } from "../servicesMap";
import ServiceContentLayout from "./ServiceContentLayout";

export default function SaleOfProperties() {
  const data = servicesData.find((s) => s.id === "sale-of-properties");
 return <ServiceContentLayout data={{ ...data, descImg: data.descImg }} />;
}