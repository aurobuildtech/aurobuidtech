export default function ProjectFilters({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="projectFilters mb-5">
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filterBtn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}