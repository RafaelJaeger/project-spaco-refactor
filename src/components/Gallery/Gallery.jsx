import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════════════════════════ */
const GALLERY_ITEMS = [
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", cap: "A piscina espera vocês — sem revezamento, sem briga por espreguiçadeira.", main: true },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80", cap: "Acordar assim faz parte da estadia." },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80", cap: "Para as noites que pedem lareira, conversa e nada mais." },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80", cap: "O cheiro de churrasco no ar, montanhas ao fundo." },
  { src: "https://images.unsplash.com/photo-1520364726783-f549aa88a320?w=700&q=80", cap: "Para quem precisa de um lugar para não fazer nada — e faz isso muito bem." },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80", cap: "Vista natural que enquadra cada momento." },
];

export function Gallery() {
  const [ref, visible] = useFadeIn();
  return (
    <section style={{ background: C.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ justifyContent: "center", marginBottom: 16 }}>Galeria</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`}>
            O lugar que vocês vão querer<br /><em>mostrar pra todo mundo.</em>
          </h2>
        </div>

        <div
          className={`fi${visible ? " v" : ""} d2`}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="gimg"
              style={{
                borderRadius: 4,
                gridColumn: i === 0 ? "span 2" : undefined,
                gridRow:    i === 0 ? "span 2" : undefined,
                height:     i === 0 ? 420 : 200,
              }}
            >
              <img src={item.src} alt={item.cap} loading="lazy" />
              <div className="gcap">
                <span style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,.9)", lineHeight: 1.4 }}>
                  {item.cap}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}