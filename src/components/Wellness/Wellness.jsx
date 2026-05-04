import { Heart, Wind, Zap } from "lucide-react";
import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   WELLNESS
═══════════════════════════════════════════════════════════════ */
const WELLNESS_ITEMS = [
  { icon: <Zap size={20} />,  title: "Barras de Access",      desc: "Técnica de liberação de crenças e padrões mentais. Para sair mais leve do que entrou." },
  { icon: <Wind size={20} />, title: "Massagem Relaxante",    desc: "Para soltar o que a semana acumulou. Realizada por profissional, sob agendamento." },
  { icon: <Heart size={20} />,title: "Reiki",                 desc: "Terapia energética para reequilíbrio e bem-estar. Uma hora de silêncio intencional." },
];

export function Wellness() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="bemestar" style={{ background: C.dark, padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Decorative orbs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: C.forest, opacity: .25 }} />
      <div style={{ position: "absolute", bottom: -60, left: -40, width: 200, height: 200, borderRadius: "50%", background: C.sage, opacity: .12 }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div
          className="grid-2col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 64 }}
        >
          <div>
            <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ color: C.sage, marginBottom: 20 }}>Bem-estar</div>
            <h2 className={`sec-title fi${visible ? " v" : ""} d1`} style={{ color: C.white }}>
              Descanso tem<br /><em style={{ color: C.gold }}>versão aprofundada.</em>
            </h2>
          </div>
          <p className={`fi${visible ? " v" : ""} d2`} style={{
            fontFamily: F.body, fontSize: 15, fontWeight: 300,
            color: "rgba(255,255,255,.65)", lineHeight: 1.8,
          }}>
            Para quem quer que a estadia vá além do lazer, o SPAço Paaraíso oferece serviços
            de bem-estar por agendamento. Não é obrigatório — é possível. Você decide o quanto quer desacelerar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 40 }}>
          {WELLNESS_ITEMS.map((w, i) => (
            <div
              key={w.title}
              className={`fi${visible ? " v" : ""} d${i + 1}`}
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 4, padding: "36px 32px",
              }}
            >
              <div style={{ color: C.gold, marginBottom: 20 }}>{w.icon}</div>
              <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 400, color: C.white, marginBottom: 12, lineHeight: 1.2 }}>
                {w.title}
              </div>
              <div style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>
                {w.desc}
              </div>
            </div>
          ))}
        </div>

        <div className={`fi${visible ? " v" : ""} d4`} style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,.35)", letterSpacing: ".06em", textTransform: "uppercase" }}>
            Sob agendamento · Sujeito a disponibilidade
          </span>
          <a href="https://wa.me/555181195230?text=Olá, tudo bem? Acessei o site do SPAço e gostaria de mais informações." target="_blank" className="btn-gold" style={{ fontSize: 12, padding: "11px 22px" }}>
            Agendar ao reservar
          </a>
        </div>
      </div>
    </section>
  );
}