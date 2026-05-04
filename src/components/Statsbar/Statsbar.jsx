import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════════ */
export function Stats() {
  const [ref, visible] = useFadeIn();
  const items = [
    ["12", "Hóspedes"],
    ["5", "Quartos completos"],
    ["2", "Banheiros"],
    ["1", "Piscina privativa"],
  ];
  return (
    <section style={{ background: C.dark, padding: "72px 32px" }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {items.map(([num, label], i) => (
          <div
            key={label}
            className={`fi${visible ? " v" : ""} d${i + 1}`}
            style={{
              textAlign: "center",
              padding: "8px 0",
              borderRight:
                i < 3 ? "1px solid rgba(255,255,255,.08)" : undefined,
            }}
          >
            <div
              style={{
                fontFamily: F.display,
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 300,
                color: C.gold,
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontFamily: F.body,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.5)",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
