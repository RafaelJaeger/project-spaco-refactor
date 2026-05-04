import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════════════════════════ */
const GALLERY_ITEMS = [
  { src: "/public/images/SPAçoIMG_000022.jpeg", cap: "A piscina espera vocês — sem revezamento, sem briga por espreguiçadeira.", main: true },
  { src: "/public/images/SPAço_000016.jpeg", cap: "Acordar assim faz parte da estadia." },
  { src: "/public/images/SPAço_000018.jpeg", cap: "Para as noites que pedem um bom descanço." },
  { src: "/public/images/piscina-churrasqueira.jpeg", cap: "O cheiro de churrasco no ar, montanhas ao fundo." },
  { src: "/public/images/SPAço_000056.jpeg", cap: "Para quem precisa de um lugar para não fazer nada — e faz isso muito bem." },
  { src: "/public/images/SPAço_000020.jpeg", cap: "Vista natural que enquadra cada momento." },
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