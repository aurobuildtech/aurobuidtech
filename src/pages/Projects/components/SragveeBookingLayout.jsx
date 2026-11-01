import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  SRAGVEE_PROJECT_PATH,
  bookingByPlot,
  bookingStats,
  layoutColumns,
  plotSize,
  sragveeBookings,
} from "../data/sragveeBookings";
import "./sragveeBookingLayout.css";

const normalize = (s) => s.toLowerCase().replace(/[.\s]+/g, " ").trim();

const STATUS_LABEL = { booked: "Booked", hold: "On Hold", available: "Available" };

function matchPlots(query) {
  const q = normalize(query);
  if (!q) return [];
  if (/^\d+$/.test(q)) {
    const n = Number(q);
    return n >= 1 && n <= bookingStats.total ? [n] : [];
  }
  return sragveeBookings.filter((b) => normalize(b.name).includes(q)).map((b) => b.plot);
}

function groupByName(plots) {
  const groups = new Map();
  plots.forEach((plot) => {
    const name = bookingByPlot.get(plot)?.name ?? "Available";
    groups.set(name, [...(groups.get(name) ?? []), plot]);
  });
  return [...groups.entries()];
}

function PlotCell({ plot, selected, matched, onSelect }) {
  const booking = bookingByPlot.get(plot);
  const status = booking?.status ?? "available";

  return (
    <button
      type="button"
      className={`sblPlot is-${status}${selected ? " is-selected" : ""}${matched ? " is-matched" : ""}`}
      onClick={() => onSelect(plot)}
      aria-pressed={selected}
      aria-label={`Plot ${plot}, ${STATUS_LABEL[status]}${booking ? `, ${booking.name}` : ""}`}
    >
      <span className="sblPlotNo">{plot}</span>
      <span className="sblPlotName">{booking ? booking.name : "Available"}</span>
    </button>
  );
}

export default function SragveeBookingLayout({ phone }) {
  const [searchParams] = useSearchParams();
  const initialPlot = Number(searchParams.get("plot")) || null;
  const initialQuery = searchParams.get("name") ?? (initialPlot ? String(initialPlot) : "");

  const [query, setQuery] = useState(initialQuery);
  const [selected, setSelected] = useState(
    initialPlot ?? matchPlots(initialQuery)[0] ?? null
  );
  const [shareState, setShareState] = useState("idle");
  const sectionRef = useRef(null);
  const planRef = useRef(null);

  const matched = useMemo(() => new Set(matchPlots(query)), [query]);
  const resultGroups = useMemo(() => groupByName([...matched]), [matched]);

  useEffect(() => {
    const wantsLayout =
      searchParams.has("plot") || searchParams.has("name") || window.location.hash === "#booking-layout";
    if (!wantsLayout) return;
    const t = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
    return () => clearTimeout(t);
    // Only on first mount: deep links land on the layout.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuery = (value) => {
    setQuery(value);
    const first = matchPlots(value)[0];
    if (first) setSelected(first);
  };

  const showOnPlan = (plot) => {
    setSelected(plot);
    planRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const sharePlot = async (plot) => {
    const url = `${window.location.origin}${SRAGVEE_PROJECT_PATH}?plot=${plot}#booking-layout`;
    const booking = bookingByPlot.get(plot);
    const text = booking
      ? `${booking.name} — Plot ${plot} at Sragvee Farmland Plots`
      : `Plot ${plot} at Sragvee Farmland Plots`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Sragvee Farmland Plots", text, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareState("copied");
    } catch (err) {
      if (err?.name === "AbortError") return;
      setShareState("failed");
    }
    setTimeout(() => setShareState("idle"), 2200);
  };

  const soldPct = Math.round(((bookingStats.booked + bookingStats.hold) / bookingStats.total) * 100);
  const sel = selected ? bookingByPlot.get(selected) : null;
  const selStatus = sel?.status ?? "available";

  return (
    <section id="booking-layout" ref={sectionRef} className="sblSection" aria-labelledby="sblTitle">
      <header className="sblHeader">
        <div>
          <span className="sblEyebrow">Live Booking Status</span>
          <h2 id="sblTitle" className="sblTitle">Master Plan &amp; Plot Availability</h2>
          <p className="sblLead">
            Booked a plot with us? Search your name or plot number to see it marked on the layout.
          </p>
        </div>

        <dl className="sblStats">
          <div className="sblStat">
            <dt>Booked</dt>
            <dd>{bookingStats.booked}</dd>
          </div>
          <div className="sblStat">
            <dt>On Hold</dt>
            <dd>{bookingStats.hold}</dd>
          </div>
          <div className="sblStat">
            <dt>Available</dt>
            <dd>{bookingStats.available}</dd>
          </div>
          <div className="sblProgress" aria-label={`${soldPct}% of plots reserved`}>
            <div className="sblProgressBar">
              <span style={{ width: `${soldPct}%` }} />
            </div>
            <small>{soldPct}% of {bookingStats.total} plots reserved</small>
          </div>
        </dl>
      </header>

      <div className="sblBody">
        <div className="sblPlanWrap" ref={planRef}>
          <div className="sblPlan" role="group" aria-label="Sragvee layout plan, 48 plots">
            <div className="sblHighway">Bengaluru – Madanapalle Road</div>
            <div className="sblTopRow">
              <div className="sblPrivate">Private Property</div>
              <div className="sblClub">Gym &amp; Club House</div>
            </div>
            <div className="sblRoadH">20' Wide Road</div>

            <div className="sblGrid">
              {layoutColumns.map((col, ci) => (
                <div key={col.key} className="sblColGroup">
                  {ci > 0 && (
                    <div className="sblRoadV" aria-hidden="true">
                      <span>20' Wide Road</span>
                    </div>
                  )}
                  <div className="sblCol">
                    {col.plots.map((plot) => (
                      <PlotCell
                        key={plot}
                        plot={plot}
                        selected={plot === selected}
                        matched={matched.has(plot)}
                        onSelect={setSelected}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="sblRoadH">20' Wide Road · To Chintamani</div>
          </div>

          <ul className="sblLegend" aria-label="Legend">
            <li><span className="sblSwatch is-available" /> Available</li>
            <li><span className="sblSwatch is-booked" /> Booked</li>
            <li><span className="sblSwatch is-hold" /> On Hold</li>
          </ul>
        </div>

        <aside className="sblSide">
          <label htmlFor="sblSearch" className="sblSearchLabel">Find your plot</label>
          <div className="sblSearch">
            <i className="bi bi-search" aria-hidden="true" />
            <input
              id="sblSearch"
              type="search"
              value={query}
              onChange={(e) => handleQuery(e.target.value)}
              placeholder="Your name or plot number"
              autoComplete="off"
            />
          </div>

          {query && (
            <div className="sblResults" aria-live="polite">
              {resultGroups.length === 0 ? (
                <p className="sblEmpty">No plot found for “{query}”.</p>
              ) : (
                resultGroups.map(([name, plots]) => (
                  <div key={name} className="sblResult">
                    <strong>{name}</strong>
                    <div className="sblResultPlots">
                      {plots.map((p) => (
                        <button
                          key={p}
                          type="button"
                          className={`sblChip${p === selected ? " is-active" : ""}`}
                          onClick={() => setSelected(p)}
                        >
                          Plot {p}
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          <div className="sblDetail" aria-live="polite">
            {selected ? (
              <>
                <div className="sblDetailHead">
                  <span className="sblDetailNo">Plot {selected}</span>
                  <span className={`sblStatus is-${selStatus}`}>{STATUS_LABEL[selStatus]}</span>
                </div>
                <dl className="sblDetailList">
                  <div>
                    <dt>Plot size</dt>
                    <dd>{plotSize(selected)}</dd>
                  </div>
                  <div>
                    <dt>{sel ? (selStatus === "hold" ? "Reserved for" : "Booked by") : "Status"}</dt>
                    <dd>{sel ? sel.name : "Open for booking"}</dd>
                  </div>
                </dl>

                <div className="sblDetailActions">
                  {!sel && phone && (
                    <a href={`tel:${phone}`} className="btn btn-primary sblBtn">
                      Enquire about Plot {selected}
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline-primary sblBtn"
                    onClick={() => sharePlot(selected)}
                  >
                    <i className="bi bi-share me-2" aria-hidden="true" />
                    {shareState === "copied"
                      ? "Link copied"
                      : shareState === "failed"
                        ? "Couldn't copy link"
                        : "Share this plot"}
                  </button>
                </div>
              </>
            ) : (
              <p className="sblEmpty">Select any plot on the layout to see its details.</p>
            )}
          </div>
        </aside>
      </div>

      <div className="sbtWrap">
        <div className="sbtHead">
          <h3 className="sbtTitle">Farmland – Plot Advance</h3>
          <span className="sbtNote">Contact details are partially hidden to protect our customers.</span>
        </div>

        <div className="sbtScroll">
          <table className="sbtTable">
            <thead>
              <tr>
                <th scope="col">Booking Sequence Number</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">PAN / ID Proof No.</th>
                <th scope="col">Site Number</th>
              </tr>
            </thead>
            <tbody>
              {sragveeBookings.map((b) => (
                <tr
                  key={b.seq}
                  className={`${matched.has(b.plot) ? "is-matched" : ""}${b.plot === selected ? " is-selected" : ""}`}
                >
                  <td className="sbtSeq">{b.seq}</td>
                  <td>{b.name}</td>
                  {b.status === "hold" ? (
                    <td className="sbtHold">Hold</td>
                  ) : (
                    <td className="sbtNum">{b.mobile}</td>
                  )}
                  <td className="sbtNum">{b.idProof}</td>
                  <td className="sbtSite">
                    <button
                      type="button"
                      onClick={() => showOnPlan(b.plot)}
                      aria-label={`Show plot ${b.plot} on the layout`}
                    >
                      {b.plot}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
