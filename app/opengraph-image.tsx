import { ImageResponse } from "next/og";

export const alt = "Vin Rouge · Tradición vinícola";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#fffbf4", color: "#482817", padding: 90, borderBottom: "18px solid #8b5000" }}>
      <div style={{ fontSize: 24, letterSpacing: 6, color: "#8b5000", marginBottom: 32 }}>TRADICIÓN VINÍCOLA</div>
      <div style={{ fontSize: 94, fontWeight: 700, marginBottom: 32 }}>Vin Rouge</div>
      <div style={{ fontSize: 32 }}>Vinos, tradición y experiencias de viñedo</div>
    </div>, size,
  );
}