import { Heart, Leaf, Lock, MapPin, Users, Wind } from "lucide-react";
import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   DIFFERENTIALS
═══════════════════════════════════════════════════════════════ */
const DIFFS = [
  { icon: <Lock size={22} />,  eyebrow: "Exclusividade", title: "Uso exclusivo garantido",       desc: "Um grupo por vez. O espaço inteiro fica para vocês — sem compartilhamento, sem vizinhos de corredor, sem surpresas." },
  { icon: <Users size={22} />, eyebrow: "Capacidade",    title: "Casa completa para grupos",     desc: "Cozinha equipada, roupas de cama, toalhas, Wi-Fi — tudo o que vocês precisam já está lá. Só falta a turma." },
  { icon: <Leaf size={22} />,  eyebrow: "Natureza",      title: "Vista para as montanhas",       desc: "Área verde ampla, silêncio real e ar fresco. Natureza acessível sem abrir mão do conforto." },
  { icon: <Heart size={22} />, eyebrow: "Família",       title: "Espaço para todas as idades",   desc: "Espaço infantil, piscina, jogos e área de convivência — projetado para quem viaja junto de verdade." },
  { icon: <Wind size={22} />,  eyebrow: "Bem-estar",     title: "Terapias sob medida",           desc: "Massagem, reiki e terapias por agendamento. Para quem quer descanso além do lazer." },
  { icon: <MapPin size={22} />,eyebrow: "Localização",   title: "Longe do agito. Perto da estrada.", desc: "Entre Vera Cruz e Santa Cruz do Sul. Fácil de chegar, difícil de querer ir embora." },
];

export function Differentials() {
  const [ref, visible] = useFadeIn();
  return (
    <section style={{ background: C.white, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={ref} style={{ marginBottom: 64 }}>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ marginBottom: 16 }}>Por que o Paaraíso</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`} style={{ maxWidth: 520 }}>
            Além da beleza do lugar,<br />existem razões <em>práticas</em><br />que fazem a diferença.
          </h2>
        </div>
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {DIFFS.map((d, i) => (
            <div
              key={d.title}
              className={`card-lift fi${visible ? " v" : ""} d${(i % 3) + 1}`}
              style={{
                padding: "36px 32px", margin: 1,
                borderTop: `2px solid ${i < 3 ? C.gold : "transparent"}`,
                background: C.cream,
              }}
            >
              <div style={{ color: C.forest, marginBottom: 16 }}>{d.icon}</div>
              <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 500, letterSpacing: ".10em", textTransform: "uppercase", color: C.sage, marginBottom: 8 }}>
                {d.eyebrow}
              </div>
              <div style={{ fontFamily: F.display, fontSize: 22, fontWeight: 500, color: C.dark, marginBottom: 12, lineHeight: 1.2 }}>
                {d.title}
              </div>
              <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 300, color: "#4a6647", lineHeight: 1.7 }}>
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}