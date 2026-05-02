import './Leistungen.css'

import autohandelImg from '../assets/Autohandel.jpg'
import werkstattImg from '../assets/Werkstatt.jpg'
import diagnoseImg from '../assets/Diagnose.jpg'
import aufbereitungImg from '../assets/aufbereitung.jpg'


const leistungen = [
  {
    img: autohandelImg,
    titel: 'Autohandel',
    beschreibung: 'Große Auswahl an geprüften Gebrauchtwagen zu fairen Preisen.'
  },
  {
    img: werkstattImg,
    titel: 'Werkstatt',
    beschreibung: 'Professionelle Reparaturen und Wartungen für alle Fahrzeugtypen.'
  },
  {
    img: diagnoseImg,
    titel: 'Diagnose',
    beschreibung: 'Moderne Diagnosegeräte für präzise Fehlerdiagnose.'
  },
  {
    img: aufbereitungImg,
    titel: 'Aufbereitung',
    beschreibung: 'Fahrzeugaufbereitung für ein makelloses Ergebnis.'
  },
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
            <div className="leistung-img-wrapper">
              <img src={item.img} alt={item.titel} className="leistung-img" />
            </div>
            <div className="leistung-body">
              <h3>{item.titel}</h3>
              <p>{item.beschreibung}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Leistungen