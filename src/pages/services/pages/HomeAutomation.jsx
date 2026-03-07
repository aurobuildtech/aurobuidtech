import { servicesData } from "../servicesMap";
import Reveal from "../../../components/animations/Reveal";
import AutomationGrid from "./homeAutomation/AutomationGrid";
import "./homeAutomation/homeAutomation.css";

export default function HomeAutomation() {
  const data = servicesData.find((s) => s.id === "home-automation");
  if (!data) return null;

  const heroPreview = data.descImg

  return (
    <section className="ha-wrap">
      <div className="container">


   
        {/* Intro section below main banner */}
        <Reveal y={18}>
          <div className="ha-intro">
             <div className="ha-sectionHead">
            <h3 className="ha-subTitle">
              Smart Automation Systems
              <span className="ha-underline sm" />
            </h3>
            <p className="ha-subText">
              Tap each system to discover how Auro BuildTech creates stunning,
              intelligent, and connected living spaces.
            </p>
            
          </div>
            
            <div className="ha-introRight">
              <div className="ha-previewCard">
                <img src={heroPreview} className='heroPrev' style={{width:" 100%", height:"100%", objectFit: 'cover', display: 'block'}}  alt="Home automation preview"    />
              </div>
            </div>
          </div>
        </Reveal>

        <AutomationGrid />






{/* {bottomText} */}
       

          <div style={{opacity: "1", transform: "none"}}><div className="scl-bottomCard">
                
          <p className="scl-bottomText">
                From intelligent lighting and climate control to surveillance,
                motorized curtains, entertainment, and energy optimization, our
                systems are designed to combine luxury, convenience, and future-ready innovation.
              </p></div></div>
   
      </div>

       {/* Feature grid */}
    </section>
  );
}