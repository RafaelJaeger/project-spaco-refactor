import { useState } from "react";
import { C, F, useFadeIn } from "../../utils";
import { Lightbox } from "./Lightbox";

/* ═══════════════════════════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════════════════════════ */
const GALLERY_ITEMS = [
  { src: "images/SPAçoIMG_000022.jpeg", cap: "A piscina espera vocês — sem revezamento, sem briga por espreguiçadeira.", main: true },
  { src: "images/SPAço_000016.jpeg", cap: "Acordar assim faz parte da estadia." },
  { src: "images/SPAço_000018.jpeg", cap: "Para as noites que pedem um bom descanço." },
  { src: "images/piscina-churrasqueira.jpeg", cap: "O cheiro de churrasco no ar, montanhas ao fundo." },
  { src: "images/SPAço_000056.jpeg", cap: "Para quem precisa de um lugar para não fazer nada — e faz isso muito bem." },
  { src: "images/SPAço_000020.jpeg", cap: "Vista natural que enquadra cada momento." },
];

export function Gallery() {
  const [ref, visible] = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);
  const prevImage = () => setLightboxIndex((current) => (current - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const nextImage = () => setLightboxIndex((current) => (current + 1) % GALLERY_ITEMS.length);

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
                cursor:     "pointer",
              }}
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(i)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") openLightbox(i);
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

      {lightboxIndex >= 0 && (
        <Lightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}