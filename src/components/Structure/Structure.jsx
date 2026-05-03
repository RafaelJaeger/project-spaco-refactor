import { useState } from "react";
import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   STRUCTURE (tabbed)
═══════════════════════════════════════════════════════════════ */
const STRUCTURE_TABS = {
  externo: {
    label: "Área Externa",
    items: [
      { icon: "🏊", title: "Piscina privativa",      desc: "Exclusiva para o grupo. Sem revezamento — o horário é o que vocês decidirem." },
      { icon: "🔥", title: "Churrasqueira completa", desc: "Espaço amplo com brasa, mesa farta e vista aberta para a natureza." },
      { icon: "🌿", title: "Área verde e redes",     desc: "Para quem precisa de um lugar para não fazer nada — e faz isso muito bem." },
      { icon: "🌄", title: "Vista para montanhas",   desc: "Uma moldura natural que enquadra cada conversa de fim de tarde." },
    ],
  },
  interno: {
    label: "Interior",
    items: [
      { icon: "🛏️", title: "5 quartos",           desc: "Espaço para grupos com camas confortáveis e organização pensada." },
      { icon: "🪵",  title: "Sala com lareira",    desc: "Para os serões longos que pedem um espaço que acolhe todo mundo." },
      { icon: "🍳", title: "Cozinha completa",     desc: "Equipada para quem quer cozinhar junto — as melhores memórias ficam aqui." },
      { icon: "🚿", title: "Banheiro completo",    desc: "Estrutura de casa, não de hostel — conforto em cada detalhe." },
    ],
  },
  lazer: {
    label: "Lazer",
    items: [
      { icon: "🎱", title: "Mesa de bilhar",    desc: "Partidas que viram rivalidades saudáveis e histórias para contar depois." },
      { icon: "🏓", title: "Ping pong",         desc: "Para os que não conseguem ficar parados — e para os que querem ficar olhando." },
      { icon: "🧒", title: "Espaço infantil",   desc: "As crianças têm o espaço delas. Os adultos, o deles. Todos felizes." },
      { icon: "😌", title: "Área de descanso",  desc: "Redes, cadeiras, silêncio — o kit completo de quem veio para descansar." },
    ],
  },
};

export function Structure() {
  const [activeTab, setActiveTab] = useState("externo");
  const [ref, visible] = useFadeIn();
  const tab = STRUCTURE_TABS[activeTab];

  return (
    <section id="estrutura" style={{ background: C.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ marginBottom: 48 }}>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ marginBottom: 16 }}>Estrutura</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`}>
            Pra quem quer aproveitar<br /><em>sem precisar sair.</em>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid rgba(28,43,26,.12)`, marginBottom: 40, display: "flex", gap: 0 }}>
          {Object.entries(STRUCTURE_TABS).map(([key, { label }]) => (
            <button
              key={key}
              className={`tab-btn${activeTab === key ? " active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {tab.items.map((item) => (
            <div
              key={item.title}
              className="card-lift"
              style={{ background: C.white, borderRadius: 4, padding: "28px 24px", boxShadow: "0 2px 12px rgba(28,43,26,.06)" }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
              <div style={{ fontFamily: F.display, fontSize: 20, fontWeight: 500, color: C.dark, marginBottom: 10, lineHeight: 1.2 }}>
                {item.title}
              </div>
              <div style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, color: "#4a6647", lineHeight: 1.65 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}