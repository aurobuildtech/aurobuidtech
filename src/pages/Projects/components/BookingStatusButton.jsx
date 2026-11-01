import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./bookingStatus.css";

export function BookingStatusModal({ image, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="bsOverlay" onClick={onClose}>
      <div
        className="bsDialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} booking status`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bsHead">
          <div>
            <span className="bsKicker">Live Booking Status</span>
            <h3>{title}</h3>
          </div>
          <button
            type="button"
            className="bsClose"
            onClick={onClose}
            aria-label="Close booking status"
            autoFocus
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        <div className="bsImageWrap">
          <img src={image} alt={`${title} layout with booked plots marked`} />
        </div>

        <p className="bsNote">
          Plots marked <strong>Booked</strong> are no longer available. Call us to reserve one of
          the remaining plots.
        </p>
      </div>
    </div>,
    document.body
  );
}

export default function BookingStatusButton({ image, title }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="btn bsBtn" onClick={() => setOpen(true)}>
        <i className="bi bi-grid-3x3-gap-fill me-2" aria-hidden="true" />
        Booking Status
      </button>

      {open && <BookingStatusModal image={image} title={title} onClose={() => setOpen(false)} />}
    </>
  );
}
