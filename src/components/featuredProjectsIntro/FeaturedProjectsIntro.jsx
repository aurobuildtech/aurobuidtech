import "./FeaturedProjectsIntro.css";
import allu from "../../assets/projects/allu1.png";
import yugen from "../../assets/projects/villas/yugen.jpeg";
import citySky from "../../assets/projects/flats/citySky.png";

const introCards = [
  {
    title: "Allure Avani",
    subtitle: "Celebrity villa showcase",
    image: allu,
    orbitClass: "wing-a",
  },
  {
    title: "YUGEN Golf City",
    subtitle: "Luxury lifestyle destination",
    image: yugen,
    orbitClass: "wing-b",
  },
  {
    title: "Bhadra Sky Tower",
    subtitle: "Premium skyline residences",
    image: citySky,
    orbitClass: "wing-c",
  },
];

export default function FeaturedProjectsIntro({ open, onFinish }) {
  if (!open) return null;

  return (
    <div className="featuredIntro" role="dialog" aria-modal="true" aria-label="Featured projects">
      <div className="featuredIntro__backdrop" />

      <div className="featuredIntro__content">
        <div className="featuredIntro__orbit">
          <div className="featuredIntro__ring featuredIntro__ring--outer" />
          <div className="featuredIntro__ring featuredIntro__ring--inner" />
          <div className="featuredIntro__hub" />

          <div className="featuredIntro__orbitTrack">
            {introCards.map((card) => (
              <article
                key={card.title}
                className={`featuredIntro__wing featuredIntro__wing--${card.orbitClass}`}
              >
                <div className="featuredIntro__wingInner">
                  <article className="featuredIntro__card">
                    <div className="featuredIntro__cardFrame">
                      <div
                        className={`featuredIntro__image ${
                          card.title === "Allure Avani" ? "featuredIntro__image--center" : ""
                        }`}
                        role="img"
                        aria-label={card.title}
                        style={{ backgroundImage: `url(${card.image})` }}
                      />
                      <div className="featuredIntro__overlay" />
                    </div>

                    <div className="featuredIntro__text">
                      <h3>{card.title}</h3>
                      <p>{card.subtitle}</p>
                    </div>
                  </article>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="featuredIntro__copy">
          {/* <p className="featuredIntro__note">
            Showcasing Allure Avani, YUGEN Golf City and Bhadra Sky Tower
          </p> */}
          <button type="button" className="featuredIntro__skip" onClick={onFinish}>
            Continue to Home
          </button>
        </div>
      </div>
    </div>
  );
}
