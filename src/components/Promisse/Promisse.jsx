import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   PROMISE / ABOUT
═══════════════════════════════════════════════════════════════ */
export function Promise() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="espaco" style={{ background: C.white, padding: "100px 32px" }}>
      <div
        ref={ref}
        className="grid-2col sec-pad"
        style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        <div>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ marginBottom: 20 }}>O Espaço</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`} style={{ marginBottom: 28 }}>
            Não é hotel.<br />Não é aluguel qualquer.<br />
            <em>É a casa inteira<br />— só de vocês.</em>
          </h2>
          <p className={`fi${visible ? " v" : ""} d2`} style={{
            fontFamily: F.body, fontSize: 15, fontWeight: 300,
            color: "#4a6647", lineHeight: 1.8, marginBottom: 20,
          }}>
            Aqui não tem lobby compartilhado, horário fixo de piscina nem estranho no corredor.
            Quando vocês reservam o <strong style={{ fontWeight: 500 }}>SPAço Paaraíso</strong>, o espaço inteiro fica para o grupo.
          </p>
          <p className={`fi${visible ? " v" : ""} d3`} style={{
            fontFamily: F.body, fontSize: 15, fontWeight: 300,
            color: "#4a6647", lineHeight: 1.8, marginBottom: 36,
          }}>
            Cinco quartos, área verde, piscina, lareira e silêncio — tudo só de vocês.
            É o que transforma uma viagem comum em memória que dura.
          </p>
          <div className={`fi${visible ? " v" : ""} d4`}>
            <a href="#estrutura" className="btn-outline-dark">Ver a estrutura completa</a>
          </div>
        </div>

        <div className={`fi${visible ? " v" : ""} d2`} style={{ position: "relative" }}>
          <div className="gimg" style={{ borderRadius: 4, aspectRatio: "4/5", boxShadow: "0 32px 64px rgba(28,43,26,.18)" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
              alt="Piscina privativa ao entardecer"
            />
          </div>
          <div style={{
            position: "absolute", bottom: -24, left: -24,
            background: C.cream, padding: "20px 24px",
            borderRadius: 4, boxShadow: "0 16px 40px rgba(28,43,26,.12)",
          }}>
            <div style={{ fontFamily: F.display, fontSize: 36, fontWeight: 300, color: C.forest, lineHeight: 1 }}>100%</div>
            <div style={{ fontFamily: F.body, fontSize: 12, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase", color: C.sage, marginTop: 4 }}>
              Uso exclusivo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}