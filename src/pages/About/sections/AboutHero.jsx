import "./aboutHero.css";

 function AboutHero() {
  return (
    <section className="abHeroWrap container mt-5">
      <div className="abHeroGrid mb-5">
        {/* LEFT */}
        <div className="abHeroLeft">
          <h1 className="abHeroTitle">
            Building Legacies,
            <br />
            <span className="texth-theme">One Project at a</span>
            <br />
            Time.
          </h1>

          <p className="abHeroDesc">
            "AURO BUILDTECH" has been transforming visions into lasting
            structures. We don&apos;t just build—we create spaces where memories
            are made, businesses thrive, and communities grow stronger.
          </p>
        </div>

        {/* RIGHT */}
        <div className="abHeroRight">
          <div className="abHeroImgCard">
            <img
              src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Craftsmanship planning"
            />

            <div className="abHeroOverlay">
              <div className="abHeroOverlayTitle">
                Where Craftsmanship Meets Innovation
              </div>
              <div className="abHeroOverlaySub">
                Building the future with time-tested expertise
              </div>
            </div>
          </div>
        </div>
      </div>

      

     
    </section>
  );
}

export default AboutHero