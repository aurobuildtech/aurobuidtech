import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  RiHomeSmile2Line,
  RiBuilding2Line,
  RiHome5Line,
} from "react-icons/ri";
import { GiVillage } from "react-icons/gi";
import { quickVideoGroups } from "../../pages/Projects/data/projectsData";
import "./propertyHubFloat.css";

export default function PropertyHubFloat() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeGroup, setActiveGroup] = useState("Plots");

  const location = useLocation();
  const navigate = useNavigate();

  const isProjectsPage = location.pathname.startsWith("/projects");

  useEffect(() => {
    const visited = localStorage.getItem("visitedProjects");

    if (!visited && !isProjectsPage) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [isProjectsPage]);

  useEffect(() => {
    if (isProjectsPage) {
      localStorage.setItem("visitedProjects", "true");
      setShowTooltip(false);
      setOpen(false);
    }
  }, [isProjectsPage]);

  useEffect(() => {
    if (!showTooltip) return;

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  if (isProjectsPage) return null;

  const togglePanel = () => {
    setOpen((prev) => !prev);
    setShowTooltip(false);
  };

  const handleNavigateProjects = () => {
    setOpen(false);
    setShowTooltip(false);
    navigate("/projects/bangalore");
  };

  const renderGroupIcon = (group) => {
    switch (group) {
      case "Plots":
        return <GiVillage size={18} />;
      case "Flats":
        return <RiBuilding2Line size={18} />;
      case "Villas":
        return <RiHome5Line size={18} />;
      default:
        return <RiHomeSmile2Line size={18} />;
    }
  };

  return (
    <div className="propertyHub">
      {!open && showTooltip && (
        <div className="hubMessage">
          <span className="hubMessageDot"></span>
          Tap to view projects
        </div>
      )}

      {open && <div className="hubBackdrop" onClick={() => setOpen(false)}></div>}

      {open && (
        <div className="hubPanel">
          <div className="hubHeader">
            <div className="hubHeaderTitleWrap">
              <span className="hubHeaderIcon">
                <RiHomeSmile2Line size={18} />
              </span>
              <h4>Explore Projects</h4>
            </div>

            <button
              type="button"
              className="hubClose"
              onClick={() => setOpen(false)}
              aria-label="Close property hub"
            >
              ✕
            </button>
          </div>

          <div className="hubCategories">
            {Object.keys(quickVideoGroups).map((group) => (
              <button
                key={group}
                type="button"
                className={`hubCategoryBtn ${activeGroup === group ? "active" : ""}`}
                onClick={() => setActiveGroup(group)}
              >
                <span className="hubCategoryIcon">{renderGroupIcon(group)}</span>
                <span>{group}</span>
              </button>
            ))}
          </div>

          <div className="hubList">
            {quickVideoGroups[activeGroup].map((item, index) => (
              <button
                key={`${activeGroup}-${index}`}
                type="button"
                className="hubItem hubItemBtn"
                onClick={handleNavigateProjects}
              >
                <span className="hubItemIcon">{renderGroupIcon(activeGroup)}</span>

                <div className="hubItemText">
                  <strong>{item.title}</strong>
                  <small>Open projects page</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className={`hubTrigger ${open ? "active" : ""}`}
        onClick={togglePanel}
        aria-label="Open property hub"
      >
        <span className="hubTriggerInner">
          <RiHomeSmile2Line size={26} />
        </span>
      </button>
    </div>
  );
}