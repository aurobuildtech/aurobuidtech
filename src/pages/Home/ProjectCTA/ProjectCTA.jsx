import Reveal from "../../../components/animations/Reveal";
import "./projectCTA.css";

 function ProjectCTA() {
  const cards = [
    {
      icon: "bi-clock",
      title: "Free Consultation",
      desc: "Get expert guidance with a no-obligation consultation to understand your project scope and possibilities."
    },
    {
      icon: "bi-file-earmark-text",
      title: "Detailed Quote",
      desc: "Receive a clear, itemized cost estimate with complete transparency and no hidden charges."
    },
    {
      icon: "bi-calendar2-check",
      title: "Flexible Scheduling",
      desc: "We adapt to your availability to ensure smooth planning and stress-free project execution."
    },
    {
      icon: "bi-shield-check",
      title: "Quality Guarantee",
      desc: "Every project is delivered with strict quality checks and uncompromising standards."
    },
  
  
  
    {
      icon: "bi-hammer",
      title: "Expert Craftsmanship",
      desc: "Skilled professionals delivering precision work with attention to every detail."
    },
    {
      icon: "bi-building",
      title: "End-to-End Service",
      desc: "From design to handover, we manage every stage of your construction journey."
    },
    {
      icon: "bi-truck",
      title: "On-Time Delivery",
      desc: "Well-planned execution that keeps your project on schedule and on budget."
    },
    {
      icon: "bi-people",
      title: "Trusted Team",
      desc: "A reliable team committed to honesty, communication, and client satisfaction."
    }
  ];

  return (
    <section className="py-5 projectCTABg">
      <div className="container">
        <Reveal y={30}>
          <div className="text-center">
            <h2 className="fw-bold display-6">Ready to Start Your Project?</h2>
            <p className="mt-2 projectCTASub">
              Transform your vision into reality with “AURO BUILDTECH”. Schedule a free consultation today
              and discover how we can bring your construction dreams to life.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <a href="#contact" className="btn rounded-pill px-4 py-2 fw-semibold auro-cta-primary">
                <i className="bi bi-calendar2-plus me-2"></i>
                Schedule Free Consultation
              </a>

              <a href="tel:+915551234567" className="btn rounded-pill px-4 py-2 fw-semibold auro-cta-outline">                <i className="bi bi-telephone me-2"></i>
                Call (+91) 99453 99123
              </a>
            </div>
          </div>
        </Reveal>

        <div className="row g-4 mt-4">
  {cards.map((c, idx) => (
   <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center text-center" key={c.title}>
      {/* force wrapper to stretch */}
      {/* <div className="w-100 d-flex"> */}
        <Reveal delay={0.08 * idx} y={24}>
          <div className="projectCTACard w-100">
            <div className="projectCTAIcon mx-auto">
              <i className={`bi ${c.icon}`}></i>
            </div>

            <h5 className="mt-3 fw-bold projectCTATitle">{c.title}</h5>
            <p className="mb-0 projectCTADesc">{c.desc}</p>
          </div>
        </Reveal>
      </div>
    // </div>
  ))}
</div>
      </div>
    </section>
  );
}
export default ProjectCTA