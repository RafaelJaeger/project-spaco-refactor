import { useEffect, useState } from "react";
import { C, F } from "../../utils";
import { Menu, X } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════════ */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["O Espaço",   "#espaco"],
    ["Estrutura",  "#estrutura"],
    ["Bem-estar",  "#bemestar"],
    ["Localização","#localizacao"],
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? `${C.dark}f2` : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all .4s ease",
      borderBottom: scrolled ? "1px solid rgba(200,169,126,.15)" : "none",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 32px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ fontFamily: F.display, fontSize: 22, fontWeight: 400, color: C.white, letterSpacing: ".01em" }}>
          <span style={{ fontWeight: 600, color: C.gold }}>SPA</span>
          <span style={{ fontWeight: 300 }}>ço </span>
          <span style={{ fontWeight: 600}}>Paa</span>
          <span style={{ fontWeight: 300 }}>raíso</span>
        </div>

        {/* Desktop links */}
        <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
          <a href="https://wa.me/5551999999999" className="btn-gold" style={{ padding: "10px 20px", fontSize: 11 }}>
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="show-mob"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: C.white, cursor: "pointer", alignItems: "center" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ background: C.dark, borderTop: "1px solid rgba(255,255,255,.08)" }}>
          {links.map(([label, href]) => (
            <a
              key={label} href={href} className="nav-link"
              style={{ display: "block", padding: "15px 32px", borderBottom: "1px solid rgba(255,255,255,.07)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div style={{ padding: "20px 32px" }}>
            <a href="https://wa.me/5551999999999" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}