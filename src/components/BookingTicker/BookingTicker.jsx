import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SRAGVEE_PROJECT_PATH,
  bookingStats,
  sragveeBookings,
} from "../../pages/Projects/data/sragveeBookings";
import { projectsData } from "../../pages/Projects/data/projectsData";
import { BookingStatusModal } from "../../pages/Projects/components/BookingStatusButton";
import "./bookingTicker.css";

const DISMISS_KEY = "bookingTickerDismissed";
const statusProject = projectsData.find((p) => p.bookingStatusImage);
const bookings = [...sragveeBookings].sort((a, b) => b.seq - a.seq);
// Alternate the "Booking Status" card with the latest bookings.
const messages = statusProject
  ? bookings.flatMap((b) => [{ type: "status" }, b])
  : bookings;
const reserved = bookingStats.booked + bookingStats.hold;
const reservedPct = Math.round((reserved / bookingStats.total) * 100);

function readDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function BookingTicker({ gap = 3000, visibleFor = 5000 }) {
  const [dismissed, setDismissed] = useState(readDismissed);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (dismissed || statusOpen) return;
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
  }, [dismissed, statusOpen, visible, hovered, gap, visibleFor]);

  const closeStatus = useCallback(() => setStatusOpen(false), []);

  if (dismissed) return null;

  const item = messages[Math.max(index, 0)];
  const isStatus = item.type === "status";

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage unavailable: dismiss for this page view only */
    }
  };

  const meter = (
    <span className="btkMeter">
      <span className="btkBar">
        <span style={{ width: `${reservedPct}%` }} />
      </span>
      <span className="btkCount">
        {reserved}/{bookingStats.total} plots gone
      </span>
    </span>
  );

  return (
    <>
      <aside
        className={`btkToast${visible ? " is-visible" : ""}${isStatus ? " is-status" : ""}`}
        aria-live="polite"
        aria-hidden={!visible}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {isStatus ? (
          <button
            type="button"
            className="btkLink"
            tabIndex={visible ? 0 : -1}
            onClick={() => {
              setVisible(false);
              setStatusOpen(true);
            }}
          >
            <span className="btkThumb" aria-hidden="true">
              <img src={statusProject.bookingStatusImage} alt="" />
            </span>

            <span className="btkBody">
              <span className="btkKicker">
                <span className="btkDot" aria-hidden="true" />
                Live Booking Status
              </span>
              <span className="btkText">
                <strong>Tap to see booked plots</strong>
              </span>
              {meter}
            </span>
          </button>
        ) : (
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
                <strong>{item.name}</strong> {item.status === "hold" ? "reserved" : "booked"} Plot{" "}
                {item.plot}
              </span>
              {meter}
            </span>
          </Link>
        )}

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

      {statusOpen && (
        <BookingStatusModal
          image={statusProject.bookingStatusImage}
          title={statusProject.title}
          onClose={closeStatus}
        />
      )}
    </>
  );
}
