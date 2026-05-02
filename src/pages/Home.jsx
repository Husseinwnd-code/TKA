import './Home.css'

import autohandelImg from '../assets/Autohandel.jpg'
import werkstattImg from '../assets/Werkstatt.jpg'
import diagnoseImg from '../assets/Diagnose.jpg'
import aufbereitungImg from '../assets/aufbereitung.jpg'
import logoImg from '../assets/logo.png'

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Ihr Partner für<br />
            <span>Autohandel & Service</span>
          </h1>

          <p>
            Qualität, auf die Sie sich verlassen können. Wir bieten Ihnen hochwertige Fahrzeuge 
            und professionellen Service – alles aus einer Hand.
          </p>

          <div className="hero-btns">
            <a href="/fahrzeuge" className="btn-dark">Fahrzeuge ansehen →</a>
            <a href="/leistungen" className="btn-outline">Unsere Leistungen →</a>
          </div>
        </div>
        <div className="hero-right">
  <img src={logoImg} alt="Logo" />
</div>


      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="stat-item">
          <span>🛡️</span>
          <div>
            <h4>Qualität</h4>
            <p>Geprüfte Fahrzeuge und höchste Servicequalität.</p>
          </div>
        </div>

        <div className="stat-item">
          <span>👨‍🔧</span>
          <div>
            <h4>Erfahrung</h4>
            <p>Jahrelange Erfahrung im Autohaus & Service.</p>
          </div>
        </div>

        <div className="stat-item">
          <span>🔧</span>
          <div>
            <h4>Service</h4>
            <p>Umfassender Service für Ihr Fahrzeug.</p>
          </div>
        </div>

        <div className="stat-item">
          <span>👍</span>
          <div>
            <h4>Zufriedenheit</h4>
            <p>Ihre Zufriedenheit ist unser Ziel.</p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="home-leistungen">
        <h2>Unsere Leistungen</h2>

        <div className="home-leistungen-grid">
        
        <div className="hl-card">
  <div className="hl-img">
    <img src={autohandelImg} alt="Autohandel" />
    <div className="hl-icon">🚗</div>
  </div>
  <h3>Autohandel</h3>
  <p>Große Auswahl an geprüften Gebrauchtwagen.</p>
</div>

          <div className="hl-card">
            <div className="hl-img">
              <img src={werkstattImg} alt="Werkstatt" />
              <div className="hl-icon">🔧</div>
            </div>
            <h3>Werkstatt</h3>
            <p>Professionelle Reparaturen und Wartungen.</p>
          </div>

          <div className="hl-card">
            <div className="hl-img">
              <img src={diagnoseImg} alt="Diagnose" />
              <div className="hl-icon">🖥️</div>
            </div>
            <h3>Diagnose</h3>
            <p>Moderne Diagnosegeräte für alle Fahrzeugtypen.</p>
          </div>

          <div className="hl-card">
            <div className="hl-img">
              <img src={aufbereitungImg} alt="Aufbereitung" />
              <div className="hl-icon">✨</div>
            </div>
            <h3>Lackierung & Unfallreparatur</h3>
<p>Wir reparieren Unfälle und lackieren alle Fahrzeuge fachgerecht.</p>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Home