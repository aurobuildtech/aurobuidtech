export default function ProjectTabs({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="projectTabsWrap">
      <div className="projectTabs">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`projectTabBtn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}