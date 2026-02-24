import "./clientsStrip.css";

export default function ClientsStrip() {
  return (
    <section className="clientsStripWrap">
      <div className="clientsStrip">

        <p className="clientsText">
          Join <strong>500+</strong> satisfied clients who trusted “AURO BUILDTECH” with their
          construction projects
        </p>

        <div className="clientsAvatars ">

          {/* Empty avatar placeholders */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="clientAvatar" key={i}>
              <i className="bi bi-person-fill"></i>
            </div>
          ))}

          <span className="clientsMore">+495 more</span>

        </div>
      </div>
    </section>
  );
}
