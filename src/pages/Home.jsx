import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-tag">Ihre Werkstatt in der Stadt</p>
        <h1>Wir reparieren.<br /><span>Sie fahren.</span></h1>
        <p>Professionelle Kfz-Reparatur und Wartung — schnell, zuverlässig und zu fairen Preisen.</p>
        <div className="hero-btns">
          <a href="/buchen" className="btn-primary">Termin buchen</a>
          <a href="/leistungen" className="btn-secondary">Leistungen</a>
        </div>
        <div className="hero-number">TKA</div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🔧</span>
          <h3>Reparaturen</h3>
          <p>Motor, Getriebe, Bremsen — wir kümmern uns um alles</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🛠️</span>
          <h3>Service & Wartung</h3>
          <p>Regelmäßige Inspektionen für maximale Sicherheit</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>Diagnose</h3>
          <p>Modernste Technik für präzise Fehlerdiagnose</p>
        </div>
      </section>
    </main>
  )
}

export default Home