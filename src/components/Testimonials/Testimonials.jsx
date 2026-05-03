import { useState } from "react";
import { C, F, useFadeIn } from "../../utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    quote: "A gente fez o aniversário de casamento lá e foi perfeito. Tivemos a casa toda pra nós dois — sem pressa, sem ruído, sem ninguém interrompendo. A vista de manhã valia a viagem.",
    name: "Ana e Marcos L.",
    context: "Casal · Celebração de aniversário",
    stars: 5,
  },
  {
    quote: "Levei a família toda — avós, filhos, netos. Todo mundo achou o que queria: os mais novos na piscina e no ping pong, os mais velhos na rede. Ninguém quis ir embora no domingo.",
    name: "Família Rodrigues",
    context: "Família · Reunião familiar",
    stars: 5,
  },
  {
    quote: "Viemos em grupo de dez amigos. A estrutura deu conta de todo mundo — churrasqueira, bilhar, piscina e ainda tinha espaço sobrando. Já estamos marcando o retorno para o ano que vem.",
    name: "Turma do Roberto",
    context: "Grupo de amigos · Confraternização",
    stars: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useFadeIn();
  const go = (dir) => setActive(c => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section style={{ background: C.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ justifyContent: "center", marginBottom: 16 }}>Depoimentos</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`}>
            Quem veio uma vez,<br /><em>já sabe o que é.</em>
          </h2>
        </div>

        <div className={`fi${visible ? " v" : ""} d2`} style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            background: C.white, borderRadius: 4, padding: "48px 56px",
            boxShadow: "0 16px 48px rgba(28,43,26,.10)",
            textAlign: "center", minHeight: 260,
          }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
              {Array(t.stars).fill(0).map((_, i) => (
                <Star key={i} size={16} fill={C.gold} color={C.gold} />
              ))}
            </div>
            <blockquote style={{
              fontFamily: F.display, fontSize: 22, fontWeight: 300, fontStyle: "italic",
              color: C.dark, lineHeight: 1.65, marginBottom: 32,
            }}>
              "{t.quote}"
            </blockquote>
            <div style={{ fontFamily: F.body, fontSize: 13, fontWeight: 600, color: C.forest, marginBottom: 4 }}>
              {t.name}
            </div>
            <div style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, color: C.sage, letterSpacing: ".04em" }}>
              {t.context}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 32 }}>
            <button
              onClick={() => go(-1)}
              style={{
                background: "none", border: "1px solid rgba(28,43,26,.2)", borderRadius: 2,
                width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: C.dark, transition: "all .2s",
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <div style={{ display: "flex", gap: 6 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`t-dot${i === active ? " active" : ""}`} onClick={() => setActive(i)} />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              style={{
                background: "none", border: "1px solid rgba(28,43,26,.2)", borderRadius: 2,
                width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: C.dark, transition: "all .2s",
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}