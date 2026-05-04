import { ArrowRight, Phone } from "lucide-react";
import { C, F } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/spaco-principal.jpeg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />
      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(28,43,26,.9) 0%, rgba(20,36,20,.8) 60%, rgba(0,0,0,.7) 100%)",
      }} />

      {/* Content */}
      <div className="hero-text" style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 32px", width: "100%", paddingTop: 80 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="eyebrow fi v" style={{ color: C.gold, marginBottom: 20 }}>
            Vera Cruz · Rio Grande do Sul
          </div>
          <h1 className="fi v d1" style={{
            fontFamily: F.display,
            fontSize: "clamp(52px, 8vw, 92px)",
            fontWeight: 300, color: C.white,
            lineHeight: 1.04, marginBottom: 24, letterSpacing: "-.01em",
          }}>
            O <em style={{ fontStyle: "italic", color: C.gold }}>Paaraíso</em>
            <br />inteiro é<br />
            <span style={{ fontWeight: 400 }}>só de vocês.</span>
          </h1>
          <p className="fi v d2" style={{
            fontFamily: F.body, fontSize: 17, fontWeight: 300,
            color: "rgba(255,255,255,.75)", lineHeight: 1.72,
            marginBottom: 40, maxWidth: 460,
          }}>
            Um refúgio privado na natureza — onde ninguém divide o espaço com vocês.
          </p>
          <div className="fi v d3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
            <a href="https://www.airbnb.com.br/rooms/984675880762143577?check_in=2023-10-06&check_out=2023-10-08&guests=1&adults=9&s=67&unique_share_id=f5a25a96-da49-4615-aa2e-ac36d3b1367e" target="_blank" className="btn-gold">
              Verificar disponibilidade <ArrowRight size={14} />
            </a>
            <a href="https://wa.me/555181195230?text=Olá, tudo bem? Acessei o site do SPAço e gostaria de mais informações." target="_blank" className="btn-ghost">
              <Phone size={14} /> WhatsApp
            </a>
          </div>
          <div className="fi v d4" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Uso exclusivo garantido", "5 quartos", "Piscina privativa", "Natureza + conforto", "Área KIDS", "Permitido animais", "Cozinha Equipada"].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        color: "rgba(255,255,255,.35)",
        fontFamily: F.body, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase",
      }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,.35), transparent)" }} />
        Scroll
      </div>
    </section>
  );
}