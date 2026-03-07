import Reveal from "../../../components/animations/Reveal";
import "./serviceContentLayout.css";
import { getIconByKey } from "../ServiceIcons";

export default function ServiceContentLayout({ data }) {
  if (!data) return null;

  const {
    aboutTitle,
    aboutParas = [],
    provideTitle,
    provideList = [],
    provideIconKeys = [],
    offerTitle,
    offerList = [],
    offerIconKeys = [],
    processTitle,
    processSteps = [],
    processIconKeys = [],
    highlightsTitle,
    highlights = [],
    ctaTitle,
    ctaText,
    ctaBtnText,
    ctaLink,
    bottomText,
    descImg,
  } = data;

  const sideTitle = provideTitle || offerTitle;
  const sideList = provideList.length ? provideList : offerList;
  const sideIconKeys = provideIconKeys.length ? provideIconKeys : offerIconKeys;

  return (
    <section className="scl-wrap">
      <div className="container">
        {/* TOP GRID */}
        <div className="scl-grid">
          {/* LEFT */}
          <Reveal y={14}>
            <div className="scl-left">
              <h2 className="scl-title">
                {aboutTitle || data.title}
                <span className="scl-underline" />
              </h2>

              <div className="scl-paras">
                {aboutParas.map((p, i) => (
                  <p key={i} className="scl-text">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal y={14}>
            <div className="scl-right">
              {descImg && (
                <div className="scl-imgCard">
                  <img
                    src={descImg}
                    alt={aboutTitle || data.title}
                    className="scl-img"
                  />
                </div>
              )}

              {sideTitle && sideList.length > 0 && (
                <div className="scl-box">
                  <h3 className="scl-subTitle">
                    {sideTitle}
                    <span className="scl-underline sm" />
                  </h3>

                  <ul className="scl-list">
                    {sideList.map((item, i) => {
                      const IconComp = getIconByKey(sideIconKeys[i]);

                      return (
                        <li key={i} className="scl-li">
                          <span className="scl-iconBox">
                            {IconComp ? <IconComp /> : <span className="scl-fallbackDot" />}
                          </span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* PROCESS */}
        {processTitle && processSteps.length > 0 && (
          <Reveal y={16}>
            <div className="scl-section">
              <h3 className="scl-h3">
                {processTitle}
                <span className="scl-underline sm" />
              </h3>

              <div className="scl-steps">
                {processSteps.map((step, i) => {
                  const IconComp = getIconByKey(processIconKeys[i]);

                  return (
                    <div className="scl-step" key={i}>
                      <div className="scl-stepIconBox">
                        {IconComp ? <IconComp /> : <span className="scl-fallbackDot" />}
                      </div>

                      <div>
                        <div className="scl-stepTitle">{step.title}</div>
                        <div className="scl-stepText">{step.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* HIGHLIGHTS */}
        {highlightsTitle && highlights.length > 0 && (
          <Reveal y={16}>
            <div className="scl-section">
              <h3 className="scl-h3">
                {highlightsTitle}
                <span className="scl-underline sm" />
              </h3>

              <div className="scl-cards">
                {highlights.map((item, i) => (
                  <div className="scl-card" key={i}>
                    <div className="scl-cardTop">
                      <span className="scl-cardDot" />
                      <h4 className="scl-cardTitle">{item.title}</h4>
                    </div>
                    <p className="scl-cardText">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* BOTTOM TEXT */}
        {bottomText && (
          <Reveal y={16}>
            <div className="scl-bottomCard">
              <p className="scl-bottomText">{bottomText}</p>
            </div>
          </Reveal>
        )}

        {/* CTA */}
        {ctaTitle && (
          <Reveal y={16}>
            <div className="scl-cta">
              <div>
                <h3 className="scl-ctaTitle">{ctaTitle}</h3>
                <p className="scl-ctaText">{ctaText}</p>
              </div>

              {ctaBtnText && ctaLink && (
                <a className="scl-ctaBtn" href={ctaLink}>
                  {ctaBtnText}
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}