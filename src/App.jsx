import { GlobalStyles } from './utils'
import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { Stats } from './components/Statsbar/Statsbar'
import { Gallery } from './components/Gallery/Gallery'
import { Differentials } from './components/Differentials/Differentials'
import { Structure } from './components/Structure/Structure'
import { Wellness } from './components/Wellness/Wellness'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Location } from './components/Location/Location'
import { Closing } from './components/Closing/Closing'
import { Footer } from './components/Footer/Footer'
import { Phone } from 'lucide-react'
import { Promise } from './components/Promisse/Promisse'

/* ═══════════════════════════════════════════════════════════════
   APP EXPORT
═══════════════════════════════════════════════════════════════ */

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Promise />
      <Stats />
      <Gallery />
      <Differentials />
      <Structure />
      <Wellness />
      <Testimonials />
      <Location />
      <Closing />
      <Footer />

      {/* WhatsApp float button */}
      <button
        className="wa-float"
        onClick={() => window.open("https://wa.me/555181195230?text=Olá, tudo bem? Acessei o site do SPAço e gostaria de mais informações.", "_blank")}
      >
        <Phone size={17} />
        Falar pelo WhatsApp
      </button>
    </>
  );
}

export default App