import { C, F } from "../../utils";

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
export function Footer() {
  return (
    <footer style={{ background: "#0F1A0E", padding: "56px 32px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: F.display,
                fontSize: 24,
                fontWeight: 400,
                color: C.white,
                marginBottom: 12,
              }}
            >
              <span style={{ fontWeight: 600, color: C.gold }}>SPA</span>ço{" "}
              <span style={{ fontWeight: 600 }}>Paa</span>raíso
            </div>
            <div
              style={{
                fontFamily: F.body,
                fontSize: 13,
                fontWeight: 300,
                color: "rgba(255,255,255,.4)",
                lineHeight: 1.7,
                maxWidth: 240,
              }}
            >
              Um refúgio privado na natureza.
              <br />
              Vera Cruz, Rio Grande do Sul.
            </div>
          </div>

          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            {[
              [
                "O Espaço",
                [
                  { label: "O que é", href: "#espaco" },
                  { label: "Estrutura", href: "#estrutura" },
                ],
              ],
              [
                "Serviços",
                [
                  { label: "Bem-estar", href: "#bemestar" },
                ],
              ],
              [
                "Contato",
                [
                  { label: "WhatsApp", href: "https://wa.me/555181195230?text=Olá, tudo bem? Acessei o site do SPAço e gostaria de mais informações." },
                  { label: "Airbnb", href: "https://www.airbnb.com.br/rooms/984675880762143577?check_in=2023-10-06&check_out=2023-10-08&guests=1&adults=9&s=67&unique_share_id=7d386b1d-2267-442c-a77b-8f9d3b884cd2" },
                  { label: "Localização", href: "#localizacao" },
                ],
              ],
            ].map(([title, links]) => (
              <div key={title}>
                <div
                  style={{
                    fontFamily: F.body,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: ".10em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.3)",
                    marginBottom: 16,
                  }}
                >
                  {title}
                </div>

                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "block",
                      fontFamily: F.body,
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(255,255,255,.75)",
                      marginBottom: 10,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: F.body,
              fontSize: 12,
              color: "rgba(255,255,255,.25)",
            }}
          >
            © {new Date().getFullYear()} Desenvolvido por Rafael Jaeger ·{" "}
            <a
              href="https://www.instagram.com/rafael.jaeger21/"
              target="_blank"
              style={{
                fontFamily: F.body,
                fontSize: 12,
                color: "rgba(255,255,255,.6)",
                textDecoration: "underline",
              }}
            >
              Instagram: @rafael.jaeger21
            </a>
          </div>
          <div
            style={{
              fontFamily: F.body,
              fontSize: 12,
              color: "rgba(255,255,255,.25)",
            }}
          >
            Vera Cruz, RS · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}
