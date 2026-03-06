import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Embrace Women's Healthcare — Empowering Women Through Compassionate, Personalized Care.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFF5F7 100%)",
          border: "8px solid #D81B60",
          position: "relative",
        }}
      >
        {/* Inner frame / watermark line */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "2px solid rgba(216, 27, 96, 0.25)",
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#D81B60",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {"Embrace Women's Healthcare"}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#374151",
              textAlign: "center",
              lineHeight: 1.35,
              maxWidth: 800,
            }}
          >
            Empowering Women Through Compassionate, Personalized Care.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
