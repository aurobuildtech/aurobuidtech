import { Link } from "react-router-dom";
import auroicon from "../../assets/images/auro.png"
import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* Footer */}

      <footer className="text-center text-lg-start auro-footer text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 align-items-center border-bottom border-light">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span className="fw-bold">Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div className="d-flex gap-3 mt-3">
            <a className="soc yt" href="#"  ><i className="bi bi-youtube"></i>  </a>
            <a className="soc fb" href="#"><i className="bi bi-facebook"></i></a>
            <a className="soc tw" href="#"><i className="bi bi-twitter-x"></i></a>
            <a className="soc ig" href="#"><i className="bi bi-instagram"></i></a>
            <a className="soc ln" href="#"><i className="bi bi-linkedin"></i></a>


          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <Link to="/" className="navbar-brand d-flex align-items-center auro-brand">
                  <img
                    src={auroicon}
                    alt="Auro logo"
                    className="auro-logo"
                  />

                  <div className="d-flex flex-column lh-1">
                    <span className="auro-title">AURO</span>
                    <span className="auro-subtitle">BUILDTECH</span>
                  </div>
                </Link>
                <p className="text-muted text-start">
                  Building excellence through precision craftsmanship and innovative
                  construction solutions. Transforming visions into lasting
                  structures .
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="fw-bold">Services</h6>
                <ul className="list-unstyled footer-links mt-3">
                  <li>Layout Development</li>
                  <li>Sale of Properties</li>
                  <li>Constructions</li>
                  <li>Interior Solutions</li>
                  <li>Home Automations</li>
                  <li>Financial Services</li>
                  <li>Renovations & Remodeling</li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="fw-bold">Company</h6>
                <ul className="list-unstyled footer-links mt-3">
                  <li>About Us</li>
                  <li>Our Projects</li>
                  <li>Contact</li>
                  <li>Trust & Safety</li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="fw-bold">Contact Info</h6>

                <ul className="list-unstyled footer-links mt-3">
                  <li><i className="bi bi-geo-alt"></i>Auro BuildTech, Kadagrahara Rd, <br /> Bengaluru, Karnataka-560049 </li>
                  <li><i className="bi bi-telephone"></i> (+91)99453 99123</li>
                  <li><i className="bi bi-clock"></i> Mon–Fri: 8AM–6PM</li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4 auro-copyright">
          © 2026 <a className="fw-bold" href="#">AURO BUILDTECH</a> — All rights reserved.
        </div>

        {/* <!-- Copyright --> */}
      </footer>

      {/* <!-- Footer --> */}





    </>





  );
}
