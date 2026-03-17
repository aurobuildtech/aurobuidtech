import { Suspense, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./contact.css";
import LazyMotionSection from "../../components/lazy/LazyMotionSection";
import Reveal from "../../components/animations/Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const cities = useMemo(
    () => [
      { name: "BANGALORE", note: "Primary Service Area", dist: "" },
      { name: "GOA", note: "", dist: "" },
      { name: "HYDERABAD", note: "", dist: "" },
      { name: "VISHAKHAPATNAM", note: "", dist: "" },
    ],
    []
  );

  const projectTypes = [
    "Residential Construction",
    "Commercial Construction",
    "Interior Design",
    "Renovation / Remodeling",
    "Layout Development",
    "Home Automation",
    "Other",
  ];

  const budgets = [
    "Below ₹10 Lakhs",
    "₹10–₹25 Lakhs",
    "₹25–₹50 Lakhs",
    "₹50 Lakhs–₹1 Cr",
    "₹1 Cr+",
  ];

  const timelines = [
    "Immediately",
    "Within 2 weeks",
    "Within 1 month",
    "1–3 months",
    "3–6 months",
    "Flexible",
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form:", form);
    alert("Thanks! We received your inquiry. We’ll contact you within 24 hours.");
  };

  function BlockLoader({ h = 260 }) {
    return (
      <div
        style={{
          height: h,
          borderRadius: 16,
          background: "rgba(0,0,0,0.05)",
        }}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Auro BuildTech</title>

        <meta
          name="description"
          content="Contact Auro BuildTech for residential construction, commercial projects, interior solutions, layout development, and smart home automation services."
        />

        <meta
          name="keywords"
          content="contact Auro BuildTech, construction inquiry, interior design contact, home automation contact, project consultation"
        />

        <meta name="author" content="Auro BuildTech" />

        <meta property="og:title" content="Contact Us | Auro BuildTech" />
        <meta
          property="og:description"
          content="Get in touch with Auro BuildTech for construction, interiors, layout development, and smart home automation projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.aurobuildtech.com/contact" />

        <link rel="canonical" href="https://www.aurobuildtech.com/contact" />
      </Helmet>

      <section className="ctWrap">
        <LazyMotionSection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={20}>
              <div className="container ctContainer">
                {/* TOP HERO */}
                <div className="ctHero">
                  <div className="ctIcon" aria-hidden="true">
                    <i className="bi bi-chat-dots" />
                  </div>

                  <h1 className="ctTitle">
                    Let&apos;s Build Something <b className="text-u">Amazing Together</b>
                  </h1>

                  <p className="ctSub">
                    Whether you&apos;re planning a dream home, commercial project, or need emergency
                    repairs, our expert team is ready to bring your vision to life. Multiple ways to
                    connect—choose what works best for you.
                  </p>
                </div>

                {/* GRID */}
                <div className="ctGrid my-5">
                  {/* LEFT: FORM CARD */}
                  <div className="ctCard">
                    <h2 className="ctCardTitle">Start Your Project</h2>
                    <p className="ctCardSub">
                      Fill out the form below and our team will get back to you within 24 hours.
                      For urgent matters, please call our emergency hotline.
                    </p>

                    <form className="ctForm" onSubmit={onSubmit}>
                      <div className="ctRow2">
                        <div className="ctField">
                          <label className="ctLabel">Full Name *</label>
                          <input
                            className="ctInput"
                            name="fullName"
                            value={form.fullName}
                            onChange={onChange}
                            placeholder="John Smith"
                            required
                          />
                        </div>

                        <div className="ctField">
                          <label className="ctLabel">Email Address *</label>
                          <input
                            className="ctInput"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            placeholder="john.smith@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="ctRow2">
                        <div className="ctField">
                          <label className="ctLabel">Phone Number *</label>
                          <input
                            className="ctInput"
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            placeholder="(91+) 123-456789"
                            required
                          />
                        </div>

                        <div className="ctField">
                          <label className="ctLabel">Project Type *</label>
                          <select
                            className="ctSelect"
                            name="projectType"
                            value={form.projectType}
                            onChange={onChange}
                            required
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="ctRow2">
                        <div className="ctField">
                          <label className="ctLabel">Estimated Budget</label>
                          <select
                            className="ctSelect"
                            name="budget"
                            value={form.budget}
                            onChange={onChange}
                          >
                            <option value="">Select budget range</option>
                            {budgets.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                          <div className="ctHint">
                            Optional - helps us provide accurate estimates
                          </div>
                        </div>

                        <div className="ctField">
                          <label className="ctLabel">Project Timeline</label>
                          <select
                            className="ctSelect"
                            name="timeline"
                            value={form.timeline}
                            onChange={onChange}
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          <div className="ctHint">
                            Optional - when you&apos;d like to start
                          </div>
                        </div>
                      </div>

                      <div className="ctField">
                        <label className="ctLabel">Project Details *</label>
                        <textarea
                          className="ctTextarea"
                          name="details"
                          value={form.details}
                          onChange={onChange}
                          placeholder="Tell us about your project... Include details like location, size, specific requirements, and any challenges you're facing."
                          required
                        />
                      </div>

                      <div className="ctField">
                        <label className="ctLabel">Upload Project Photos</label>

                        <label className="ctDrop">
                          <input className="ctFile" type="file" multiple />
                          <div className="ctDropInner">
                            <div className="ctUploadIcon" aria-hidden="true">
                              <i className="bi bi-upload" />
                            </div>
                            <div className="ctDropTitle">Click to upload or drag and drop</div>
                            <div className="ctDropSub">PNG, JPG, PDF up to 10MB each</div>
                          </div>
                        </label>
                      </div>

                      <button type="submit" className="ctBtn">
                        Submit Project Inquiry <span aria-hidden="true">✈️</span>
                      </button>
                    </form>
                  </div>

                  {/* RIGHT: SERVICE AREA */}
                  <div className="ctCard">
                    <h2 className="ctCardTitle">Our Service Area</h2>
                    <p className="ctCardSub">
                      We proudly serve Bangalore and surrounding communities within a 50-mile radius.
                    </p>

                    <div className="ctMapWrap">
                      <iframe
                        title="Service Area Map"
                        className="ctMap"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=bangalore&output=embed"
                      />
                    </div>

                    <h3 className="ctMiniTitle">Cities We Serve</h3>

                    <div className="ctCities">
                      {cities.map((c) => (
                        <div className="ctCity" key={c.name}>
                          <div className="ctPin" aria-hidden="true">
                            <i className="bi bi-geo-alt-fill" />
                          </div>

                          <div className="ctCityText">
                            <div className="ctCityName">{c.name}</div>
                            <div className="ctCityNote">{c.note || " "}</div>
                          </div>

                          <div className="ctCityDist">{c.dist}</div>
                        </div>
                      ))}
                    </div>

                    <div className="ctInfo">
                      <div className="ctInfoIcon" aria-hidden="true">
                        <i className="bi bi-info-lg" />
                      </div>
                      <div className="ctInfoText">
                        Projects outside our standard service area may be considered on a case-by-case
                        basis. Contact us to discuss your location.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Suspense>
        </LazyMotionSection>
      </section>
    </>
  );
}