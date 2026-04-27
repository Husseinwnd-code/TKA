import './Leistungen.css'

const leistungen = [
  { icon: '🔧', titel: 'Reparatur', beschreibung: 'Motor, Getriebe, Bremsen und alle mechanischen Teile' },
  { icon: '🛠️', titel: 'Inspektion', beschreibung: 'Kompletter Check Ihres Fahrzeugs nach Herstellervorgaben' },
  { icon: '🔋', titel: 'Batterie', beschreibung: 'Batterietest, Wechsel und Ladesystemprüfung' },
  { icon: '🌡️', titel: 'Klimaanlage', beschreibung: 'Wartung, Befüllung und Dichtigkeitsprüfung' },
  { icon: '🔍', titel: 'Diagnose', beschreibung: 'Fehlerdiagnose mit modernster Computertechnik' },
  { icon: '🚗', titel: 'Reifenwechsel', beschreibung: 'Sommer- und Winterreifen, Auswuchten inklusive' },
]

function Leistungen() {
  return (
    <main className="leistungen">
      <div className="page-header">
        <p className="page-tag">Was wir anbieten</p>
        <h1>Unsere Leistungen</h1>
      </div>

      <div className="leistungen-grid">
        {leistungen.map((item, index) => (
          <div className="leistung-card" key={index}>
            <span className="leistung-icon">{item.icon}</span>
            <h3>{item.titel}</h3>
            <p>{item.beschreibung}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Leistungen