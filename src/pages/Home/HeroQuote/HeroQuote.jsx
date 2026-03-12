import "./heroQuote.css";
import heroimg from "../../../assets/images/heroqutoimg/heroquote.jpg";
import heroimg1 from "../../../assets/images/heroqutoimg/heroquote1.jpg";
import heroimg2 from "../../../assets/images/heroqutoimg/heroquote2.jpg";
import { HighlightsBtn } from "../../../components/buttons/highlightsbtn";
import { Link } from "react-router-dom";

export default function HeroQuote() {
  return (
    <section className="heroWrap mt-4 mb-5">
      <div className="container">

        {/* ✅ TOP RIGHT BUTTON ROW (no position) */}
        {/* <div className="heroTopRow"> */}
       
        {/* </div> */}

        {/* ORIGINAL GRID */}
        <div className="heroGrid">
          {/* LEFT */}
          <div className="heroLeft">
               <a href="#highlights">
              < HighlightsBtn/>
              </a>
            <h1 className="heroTitle">
              Build it right.{" "}
              <span className="hero-accent">Finish it  beautifully.</span>
            </h1>

            <p className="heroSub">
              From vision to reality, we deliver clean craftsmanship, clear
              timelines, and honest pricing — so your space feels better than you imagined.
            </p>

            <div className="heroBtns">
              <Link to="/contact" className="btn rounded-pill auro-btn-primary">
                Get a Free Quote
              </Link>
            </div>

            <div className="heroChips">
              <div className="chip">
                <div className="chipTitle">Fast</div>
                <div className="chipSub">Response in 24 hrs</div>
              </div>
              <div className="chip">
                <div className="chipTitle">Clear</div>
                <div className="chipSub">Title Clear Documentation</div>
              </div>
              <div className="chip">
                <div className="chipTitle">Transparent</div>
                <div className="chipSub">No surprise costs</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="heroRight">
            <div className="heroMasonry">
              <div className="heroMain">
                <img src={heroimg} alt="Luxury interior" loading="lazy" decoding="async" />
              </div>

              <div className="heroStack">
                <div className="heroSmall">
                  <img src={heroimg1} alt="Construction site" loading="lazy" decoding="async" />
                </div>
                <div className="heroSmall">
                  <img src={heroimg2} alt="Building work" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}