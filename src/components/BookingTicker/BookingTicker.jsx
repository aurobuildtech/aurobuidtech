import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SRAGVEE_PROJECT_PATH,
  bookingStats,
  sragveeBookings,
} from "../../pages/Projects/data/sragveeBookings";
import "./bookingTicker.css";

const DISMISS_KEY = "bookingTickerDismissed";
const messages = [...sragveeBookings].sort((a, b) => b.seq - a.seq);
const reserved = bookingStats.booked + bookingStats.hold;
const reservedPct = Math.round((reserved / bookingStats.total) * 100);

function readDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function BookingTicker({ gap = 2000, visibleFor = 5000 }) {
  const [dismissed, setDismissed] = useState(readDismissed);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (dismissed) return;
    if (!visible) {
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, gap);
      return () => clearTimeout(t);
    }
    if (hovered) return;
    const t = setTimeout(() => setVisible(false), visibleFor);
    return () => clearTimeout(t);
  }, [dismissed, visible, hovered, gap, visibleFor]);

  if (dismissed) return null;

  const item = messages[Math.max(index, 0)];
  const verb = item.status === "hold" ? "reserved" : "booked";

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage unavailable: dismiss for this page view only */
    }
  };

  return (
    <aside
      className={`btkToast${visible ? " is-visible" : ""}`}
      aria-live="polite"
      aria-hidden={!visible}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Link
        to={`${SRAGVEE_PROJECT_PATH}?plot=${item.plot}#booking-layout`}
        className="btkLink"
        tabIndex={visible ? 0 : -1}
        onClick={() => setVisible(false)}
      >
        <span className="btkPlot" aria-hidden="true">
          <small>Plot</small>
          {item.plot}
        </span>

        <span className="btkBody">
          <span className="btkKicker">
            <span className="btkDot" aria-hidden="true" />
            Sragvee Farmland · Chintamani
          </span>
          <span className="btkText">
            <strong>{item.name}</strong> {verb} Plot {item.plot}
          </span>
          <span className="btkMeter">
            <span className="btkBar">
              <span style={{ width: `${reservedPct}%` }} />
            </span>
            <span className="btkCount">
              {reserved}/{bookingStats.total} plots gone
            </span>
          </span>
        </span>
      </Link>

      <button
        type="button"
        className="btkClose"
        onClick={dismiss}
        aria-label="Hide booking updates"
        tabIndex={visible ? 0 : -1}
      >
        <i className="bi bi-x-lg" aria-hidden="true" />
      </button>
    </aside>
  );
}
