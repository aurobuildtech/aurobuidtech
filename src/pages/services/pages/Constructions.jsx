import { servicesData } from "../servicesMap";
import ServiceContentLayout from "./ServiceContentLayout";

export default function Constructions() {

  const data = servicesData.find(
    (s) => s.id === "constructions"
  );
 
   return <ServiceContentLayout data={{ ...data, descImg: data.descImg }} />;
 
}