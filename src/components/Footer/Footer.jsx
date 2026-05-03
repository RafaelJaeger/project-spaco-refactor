import { C, F } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer style={{ background: "#0F1A0E", padding: "56px 32px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: F.display, fontSize: 24, fontWeight: 400, color: C.white, marginBottom: 12 }}>
              <span style={{ fontWeight: 600, color: C.gold }}>SPA</span>ço{" "}
              <span style={{ fontWeight: 600 }}>Paa</span>raíso
            </div>
            <div style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,.4)", lineHeight: 1.7, maxWidth: 240 }}>
              Um refúgio privado na natureza.<br />Vera Cruz, Rio Grande do Sul.
            </div>
          </div>

          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            {[
              ["O Espaço",  ["O que é", "Estrutura", "Galeria"]],
              ["Serviços",  ["Bem-estar", "Massagem", "Reiki"]],
              ["Contato",   ["WhatsApp", "Airbnb", "Localização"]],
            ].map(([title, links]) => (
              <div key={title}>
                <div style={{ fontFamily: F.body, fontSize: 11, fontWeight: 500, letterSpacing: ".10em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: 16 }}>
                  {title}
                </div>
                {links.map(link => (
                  <div key={link} style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,.55)", marginBottom: 10, cursor: "pointer" }}>
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,.25)" }}>
            © {new Date().getFullYear()} SPAço Paaraíso · Todos os direitos reservados
          </div>
          <div style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,.25)" }}>
            Vera Cruz, RS · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}