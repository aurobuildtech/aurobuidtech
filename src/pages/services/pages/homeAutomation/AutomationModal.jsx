import { useEffect } from "react";

export default function AutomationModal({ system, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="ha-modalOverlay" onClick={onClose}>
      <div className="ha-modalCard ha-modalWide" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="ha-closeBtn" onClick={onClose}>
          ×
        </button>

        <div className="ha-modalBodySingle">
          <div className="ha-modalHeaderBlock">
            <h2 className="ha-modalTitle ha-modalTitleLight">{system.title}</h2>

           

            {system.intro && (
              <p className="ha-modalDescription ha-introText">{system.intro}</p>
            )}

            {system.description && (
              <p className="ha-modalDescription">{system.description}</p>
            )}
          </div>

            <div className="ha-modalImageWrap ha-modalImageFull">
              <img
                src={system.modelImg || system.image}
                alt={system.title}
                className="ha-modalImg"
                width={'100%'}
             
              />
            </div>

          {system.pointsTitle && (
            <h3 className="ha-modalSubTitle">{system.pointsTitle}</h3>
          )}

          <div className="ha-modalContentGrid">
            <div className="ha-modalListWrap">
              <ul className="ha-featureList">
                {system.points.map((point, index) => (
                  <li key={index} className="ha-featureItem" >
                    <span className="ha-featureDot"  />
                    <span style={{color: 'aliceblue'}}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>

          <div className="ha-benefitCard">
            <h4 className="ha-benefitTitle">Why it impresses clients</h4>
            <p className="ha-benefitText">{system.benefit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}