import { ArrowRight, Phone } from "lucide-react";
import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   CLOSING CTA
═══════════════════════════════════════════════════════════════ */
export function Closing() {
  const [ref, visible] = useFadeIn();
  return (
    <section style={{ background: C.dark, padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https:/images/.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=60')",
        backgroundSize: "cover", backgroundPosition: "center", opacity: .1,
      }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${C.dark} 0%, rgba(28,43,26,.92) 100%)` }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ color: C.sage, justifyContent: "center", marginBottom: 24 }}>
          Reserva · SPAço Paaraíso
        </div>
        <h2 className={`fi${visible ? " v" : ""} d1`} style={{
          fontFamily: F.display,
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 300, color: C.white,
          lineHeight: 1.1, marginBottom: 16, letterSpacing: "-.01em",
        }}>
          Qual vai ser o próximo<br /><em style={{ color: C.gold }}>encontro de vocês?</em>
        </h2>
        <p className={`fi${visible ? " v" : ""} d2`} style={{
          fontFamily: F.body, fontSize: 16, fontWeight: 300,
          color: "rgba(255,255,255,.6)", lineHeight: 1.75,
          marginBottom: 48, maxWidth: 500, margin: "0 auto 48px",
        }}>
          A gente cuida do espaço. Vocês cuidam dos momentos. Consulte disponibilidade — antes que alguém do grupo resolva isso sem te avisar.
        </p>
        <div className={`fi${visible ? " v" : ""} d3`} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://www.airbnb.com.br/rooms/984675880762143577?check_in=2023-10-06&check_out=2023-10-08&guests=1&adults=9&s=67&unique_share_id=f5a25a96-da49-4615-aa2e-ac36d3b1367e" target="_blank" className="btn-gold" style={{ fontSize: 13, padding: "15px 32px" }}>
            Verificar disponibilidade <ArrowRight size={14} />
          </a>
          <a href="https://wa.me/555181195230?text=Olá, tudo bem? Acessei o site do SPAço e gostaria de mais informações." target="_blank" className="btn-ghost" style={{ fontSize: 13, padding: "15px 32px" }}>
            <Phone size={14} /> Falar pelo WhatsApp
          </a>
        </div>
        <div className={`fi${visible ? " v" : ""} d4`} style={{
          marginTop: 24, fontFamily: F.body, fontSize: 12,
          color: "rgba(255,255,255,.25)", letterSpacing: ".06em",
        }}>
          Reserva confirmada · Uso exclusivo garantido · Resposta rápida
        </div>
      </div>
    </section>
  );
}