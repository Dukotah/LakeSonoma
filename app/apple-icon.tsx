import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — brand roundel + lake waves on teal (matches icon.svg).
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b6177",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            border: "8px solid #ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {[1, 0.65, 0.4].map((o, i) => (
            <div
              key={i}
              style={{ width: 64, height: 8, borderRadius: 8, background: "#ffffff", opacity: o }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
