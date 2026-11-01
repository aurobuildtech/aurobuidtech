export const SRAGVEE_PROJECT_PATH = "/projects/bangalore/sragvee-builders-layout";
export const SRAGVEE_TOTAL_PLOTS = 48;

// This file ships in the public JS bundle: store phone/ID numbers ONLY in masked form.
export const sragveeBookings = [
  { seq: 1, name: "T. SAANVI", plot: 48, status: "booked", mobile: "+91 96•••••181", idProof: "••••••••1330" },
  { seq: 2, name: "Siva K", plot: 47, status: "booked", mobile: "+91 63•••••915", idProof: "••••••••3385" },
  { seq: 3, name: "P. Jeevarathnam", plot: 17, status: "booked", mobile: "+91 94•••••068", idProof: "••••••••6997" },
  { seq: 4, name: "Shalom Raj", plot: 18, status: "booked", mobile: "+91 99•••••500", idProof: "" },
  { seq: 5, name: "T. Ramesh", plot: 32, status: "booked", mobile: "+91 98•••••115", idProof: "" },
  { seq: 6, name: "Yugandhar Reddy", plot: 31, status: "booked", mobile: "+91 80•••••040", idProof: "" },
  { seq: 7, name: "K Nirmala", plot: 15, status: "booked", mobile: "+91 91•••••819", idProof: "" },
  { seq: 8, name: "K Saraswathi", plot: 14, status: "booked", mobile: "+91 95•••••080", idProof: "" },
  { seq: 9, name: "Poorna Chandra", plot: 29, status: "hold", mobile: "", idProof: "" },
  { seq: 10, name: "Poorna Chandra", plot: 30, status: "hold", mobile: "", idProof: "" },
  { seq: 11, name: "Ramachandra", plot: 33, status: "booked", mobile: "+91 89•••••822", idProof: "" },
  { seq: 12, name: "Ramachandra", plot: 34, status: "booked", mobile: "+91 89•••••822", idProof: "" },
  { seq: 13, name: "Ramachandra", plot: 1, status: "booked", mobile: "+91 89•••••822", idProof: "" },
  { seq: 14, name: "Ramachandra", plot: 5, status: "booked", mobile: "+91 89•••••822", idProof: "" },
  { seq: 15, name: "Ramachandra", plot: 6, status: "booked", mobile: "+91 89•••••822", idProof: "" },
  { seq: 16, name: "Ramachandra", plot: 7, status: "booked", mobile: "+91 89•••••822", idProof: "" },
];

export const bookingByPlot = new Map(sragveeBookings.map((b) => [b.plot, b]));

export const bookingStats = {
  total: SRAGVEE_TOTAL_PLOTS,
  booked: sragveeBookings.filter((b) => b.status === "booked").length,
  hold: sragveeBookings.filter((b) => b.status === "hold").length,
  get available() {
    return this.total - this.booked - this.hold;
  },
};

// Three plot columns as drawn on the master plan, listed top row first.
export const layoutColumns = [
  { key: "west", size: "100' × 60'", plots: Array.from({ length: 16 }, (_, i) => 16 - i) },
  { key: "central", size: "100' × 60'", plots: Array.from({ length: 16 }, (_, i) => 17 + i) },
  { key: "east", size: "8.1 Guntas", plots: Array.from({ length: 16 }, (_, i) => 48 - i) },
];

export const plotSize = (plot) =>
  layoutColumns.find((col) => col.plots.includes(plot))?.size ?? "";
