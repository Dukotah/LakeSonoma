import { ImageResponse } from "next/og";
import { getProduct, fromPrice, CATEGORY_LABELS } from "@/data/marina";

// Per-product dynamic OG card (1200x630). Runs on the default (Node) runtime so
// it can pre-render statically for every slug via generateStaticParams — Next 15
// forbids combining `runtime = "edge"` with generateStaticParams.
export const alt = "Lake Sonoma Marina — Product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Ensures Next.js pre-generates the image for every known slug at build time.
export { generateStaticParams } from "./page";

export default async function ProductOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  // Fallback card when slug is unknown (shouldn't happen in production).
  const name = product?.name ?? "Boat Rental";
  const category = product ? CATEGORY_LABELS[product.category] : "Rentals";
  const from = product ? fromPrice(product) : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0b6177 0%, #0d4f60 55%, #0d98ba 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Category eyebrow */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c2e4f1",
            display: "flex",
          }}
        >
          {category} · Lake Sonoma Marina
        </div>

        {/* Product name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.08,
            marginTop: 16,
            display: "flex",
          }}
        >
          {name}
        </div>

        {/* From price */}
        {from !== undefined && (
          <div
            style={{
              fontSize: 38,
              color: "#eaf6fb",
              marginTop: 20,
              display: "flex",
            }}
          >
            From ${from} · Book online at lakesonoma.com
          </div>
        )}

        {/* Wave motif */}
        <div style={{ display: "flex", gap: 10, marginTop: 48 }}>
          {[1, 0.7, 0.45].map((o, i) => (
            <div
              key={i}
              style={{
                height: 8,
                flex: 1,
                borderRadius: 8,
                background: "#c2e4f1",
                opacity: o,
              }}
            />
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            fontSize: 26,
            color: "#c2e4f1",
            marginTop: 36,
            display: "flex",
          }}
        >
          (707) 433-2200 · Geyserville, CA
        </div>
      </div>
    ),
    { ...size },
  );
}
