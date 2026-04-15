import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBuilding, FaHouseChimney, FaMapLocationDot } from "react-icons/fa6";
import { quickVideoGroups } from "../../pages/Projects/data/projectsData";
import "./propertyHubFloat.css";

import ploticon from "../../../src/assets/projects/icons/ploticon.jpeg";
import flaticons from "../../../src/assets/projects/icons/flaticons.jpeg";
import villasicon from "../../../src/assets/projects/icons/villasicon.jpeg";

const GROUPS = [
  {
    key: "Plots",
    label: "Plots",
    image: ploticon,
    accentClass: "plots",
    helperText: "Explore all plotted developments",
  },
  {
    key: "Flats",
    label: "Flats",
    image: flaticons,
    accentClass: "flats",
    helperText: "Explore all apartment projects",
  },
  {
    key: "Villas",
    label: "Villas",
    image: villasicon,
    accentClass: "villas",
    helperText: "Explore all villa projects",
  },
];

export default function PropertyHubFloat() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeGroup, setActiveGroup] = useState("Plots");
  const [direction, setDirection] = useState("right");

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

  const currentItems = useMemo(() => {
    return quickVideoGroups[activeGroup] || [];
  }, [activeGroup]);

  if (isProjectsPage) return null;

  const handleNavigateProject = (item) => {
    setOpen(false);
    setShowTooltip(false);
    navigate(`/projects/${item.region}/${item.slug}`);
  };

  const handleGroupOpen = (group) => {
    const currentIndex = GROUPS.findIndex((item) => item.key === activeGroup);
    const nextIndex = GROUPS.findIndex((item) => item.key === group);

    setDirection(nextIndex > currentIndex ? "right" : "left");
    setActiveGroup(group);
    setOpen(true);
    setShowTooltip(false);
  };

  const handleClosePanel = () => {
    setOpen(false);
  };

  const getGroupMeta = (group) => {
    return GROUPS.find((item) => item.key === group) || GROUPS[0];
  };

  const getListIcon = (group) => {
    if (group === "Plots") return FaMapLocationDot;
    if (group === "Flats") return FaBuilding;
    return FaHouseChimney;
  };

  const activeGroupMeta = getGroupMeta(activeGroup);
  const ActiveListIcon = getListIcon(activeGroup);

  return (
    <div className="propertyHub">
      {!open && showTooltip && (
        <div className="hubMessage">
          <span className="hubMessageDot"></span>
          Tap to view properties
        </div>
      )}

      {open && <div className="hubBackdrop" onClick={handleClosePanel}></div>}

      <div className="hubFloatingGroup">
        {GROUPS.map((group) => (
          <button
            key={group.key}
            type="button"
            className={`hubFloatBtn ${group.accentClass} ${
              activeGroup === group.key && open ? "active" : ""
            }`}
            onClick={() => handleGroupOpen(group.key)}
            aria-label={`Open ${group.label}`}
          >
            <span className="hubFloatBtnMedia">
              <img src={group.image} alt={group.label} />
            </span>

            <span className="hubFloatBtnText">
              <strong>{group.label}</strong>
              <small>View options</small>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div className={`hubPanel ${activeGroupMeta.accentClass}`}>
          <div className="hubHeader">
            <div className="hubHeaderTitleWrap">
              <h4>{activeGroup}</h4>
              <p>{activeGroupMeta.helperText}</p>
            </div>

            <button
              type="button"
              className="hubClose"
              onClick={handleClosePanel}
              aria-label="Close property hub"
            >
              x
            </button>
          </div>

          <div className="hubContentViewport">
            <div
              key={activeGroup}
              className={`hubList hubSlideIn ${
                direction === "right" ? "hubSlideFromRight" : "hubSlideFromLeft"
              }`}
            >
              {currentItems.map((item, index) => (
                <button
                  key={`${activeGroup}-${index}`}
                  type="button"
                  className={`hubItem hubItemBtn ${activeGroupMeta.accentClass}`}
                  onClick={() => handleNavigateProject(item)}
                >
                  <span className={`hubItemIcon ${activeGroupMeta.accentClass}`}>
                    <ActiveListIcon className="hubItemGlyph" aria-hidden="true" />
                  </span>

                  <div className="hubItemText">
                    <strong>{item.title}</strong>
                    <small>{activeGroup} collection</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
