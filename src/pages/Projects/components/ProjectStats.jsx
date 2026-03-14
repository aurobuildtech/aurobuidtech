export default function ProjectStats({ projects }) {
  const completed = projects.filter((p) => p.status === "Completed").length;
  const ongoing = projects.filter((p) => p.status === "Ongoing").length;
  const residential = projects.filter((p) => p.category === "Residential").length;
  const commercial = projects.filter((p) => p.category === "Commercial").length;

  const stats = [
    { label: "Total Projects", value: projects.length },
    { label: "Completed", value: completed },
    { label: "Ongoing", value: ongoing },
    { label: "Residential / Commercial", value: `${residential} / ${commercial}` },
  ];

  return (
    <section className="projectStats">
      <div className="container">
        <div className="row g-3">
          {stats.map((item, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="statCard">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}