import { ImageResponse } from "next/og";

// Site-wide social share card (applies to every route unless overridden).
export const runtime = "edge";
export const alt = "Lake Sonoma Marina — Boat Rentals, Patios & Storage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b6177 0%, #0d4f60 55%, #0d98ba 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c2e4f1",
            display: "flex",
          }}
        >
          Geyserville · California
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 18,
            display: "flex",
          }}
        >
          Lake Sonoma Marina
        </div>
        <div style={{ fontSize: 40, color: "#eaf6fb", marginTop: 24, display: "flex" }}>
          Boat rentals, lakeside patios &amp; storage
        </div>
        {/* Wave motif */}
        <div style={{ display: "flex", gap: 10, marginTop: 56 }}>
          {[1, 0.7, 0.45].map((o, i) => (
            <div
              key={i}
              style={{ height: 8, flex: 1, borderRadius: 8, background: "#c2e4f1", opacity: o }}
            />
          ))}
        </div>
        <div style={{ fontSize: 28, color: "#c2e4f1", marginTop: 40, display: "flex" }}>
          lakesonoma.com · (707) 433-2200
        </div>
      </div>
    ),
    { ...size },
  );
}
