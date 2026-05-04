import { C, F, useFadeIn } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   LOCATION
═══════════════════════════════════════════════════════════════ */
export function Location() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="localizacao" style={{ background: C.white, padding: "100px 32px" }}>
      <div
        ref={ref}
        className="grid-2col sec-pad"
        style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        <div>
          <div className={`eyebrow fi${visible ? " v" : ""}`} style={{ marginBottom: 20 }}>Localização</div>
          <h2 className={`sec-title fi${visible ? " v" : ""} d1`} style={{ marginBottom: 24 }}>
            Chegar é fácil.<br /><em>Ir embora é a<br />parte difícil.</em>
          </h2>
          <p className={`fi${visible ? " v" : ""} d2`} style={{
            fontFamily: F.body, fontSize: 15, fontWeight: 300,
            color: "#4a6647", lineHeight: 1.8, marginBottom: 32,
          }}>
            O SPAço Paaraíso fica na região de Vera Cruz, RS — longe o suficiente do barulho
            para sentir que saiu de verdade. Perto o suficiente para não ser uma aventura chegar.
          </p>
          <div className={`fi${visible ? " v" : ""} d3`} style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {[
              ["📍", "Vera Cruz, Rio Grande do Sul"],
              ["🏔️", "Vista para montanhas e área verde ampla"],
              ["💦", "Cascatas e trilhas a curta distância"],
              ["🚗", "Acesso fácil pela estrada, sinalização clara"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: F.body, fontSize: 14, fontWeight: 300, color: "#4a6647" }}>
                <span style={{ fontSize: 18 }}>{icon}</span>{text}
              </div>
            ))}
          </div>
          <div className={`fi${visible ? " v" : ""} d4`}>
            <a href="https://wa.me/555181195230?text=Olá, tudo bem? Eu gostaria de informações sobre a localização do SPAço." target="_blank" className="btn-outline-dark">Pedir instruções de acesso</a>
          </div>
        </div>

        <div className={`fi${visible ? " v" : ""} d2`} style={{ position: "relative", aspectRatio: "1/1" }}>
          <div className="gimg" style={{ width: "100%", height: "100%", borderRadius: 4, boxShadow: "0 24px 56px rgba(28,43,26,.14)" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4346.514651049348!2d-52.508073023536895!3d-29.679781414463765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951cb1baf4f0372f%3A0x4ecf876b41721df1!2zU1BBw6dvIFBhYXJhw61zbw!5e1!3m2!1spt-BR!2sbr!4v1777858967114!5m2!1spt-BR!2sbr" width="100%" height="100%"></iframe>
          </div>
          <div style={{
            position: "absolute", top: 20, right: 20,
            background: "rgba(28,43,26,.88)", backdropFilter: "blur(8px)",
            borderRadius: 4, padding: "14px 18px",
          }}>
            <div style={{ fontFamily: F.body, fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: C.gold, marginBottom: 4 }}>
              Vera Cruz
            </div>
            <div style={{ fontFamily: F.display, fontSize: 18, fontWeight: 400, color: C.white }}>
              Rio Grande do Sul
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}