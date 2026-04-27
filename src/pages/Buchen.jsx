import { useState } from 'react'
import { supabase } from '../lib/supabase'
import './Buchen.css'

function Buchen() {
  const [form, setForm] = useState({
    name: '',
    telefon: '',
    fahrzeug: '',
    leistung: '',
    datum: '',
    uhrzeit: '',
    nachricht: '',
  })

  const [gesendet, setGesendet] = useState(false)
  const [laden, setLaden] = useState(false)
  const [fehler, setFehler] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLaden(true)
    setFehler(null)

    const { error } = await supabase
      .from('bookings')
      .insert([form])

    setLaden(false)

    if (error) {
      setFehler('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    } else {
      setGesendet(true)
    }
  }

  if (gesendet) {
    return (
      <main className="buchen">
        <div className="erfolg">
          <span className="erfolg-icon">✅</span>
          <h2>Termin gesendet!</h2>
          <p>Wir melden uns so schnell wie möglich bei Ihnen.</p>
          <button onClick={() => {
            setGesendet(false)
            setForm({ name: '', telefon: '', fahrzeug: '', leistung: '', datum: '', uhrzeit: '', nachricht: '' })
          }}>
            Neuer Termin
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="buchen">
      <div className="page-header">
        <p className="page-tag">Jetzt anfragen</p>
        <h1>Termin buchen</h1>
      </div>

      {fehler && <p style={{ color: '#e94560', marginBottom: '16px' }}>{fehler}</p>}

      <form className="buchen-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Telefon *</label>
            <input
              type="tel"
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              placeholder="Ihre Telefonnummer"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Fahrzeug *</label>
            <input
              type="text"
              name="fahrzeug"
              value={form.fahrzeug}
              onChange={handleChange}
              placeholder="z.B. VW Golf 2019"
              required
            />
          </div>
          <div className="form-group">
            <label>Leistung *</label>
            <select
              name="leistung"
              value={form.leistung}
              onChange={handleChange}
              required
            >
              <option value="">Bitte wählen</option>
              <option value="Reparatur">Reparatur</option>
              <option value="Inspektion">Inspektion</option>
              <option value="Batterie">Batterie</option>
              <option value="Klimaanlage">Klimaanlage</option>
              <option value="Diagnose">Diagnose</option>
              <option value="Reifenwechsel">Reifenwechsel</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Datum *</label>
            <input
              type="date"
              name="datum"
              value={form.datum}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Uhrzeit *</label>
            <select
              name="uhrzeit"
              value={form.uhrzeit}
              onChange={handleChange}
              required
            >
              <option value="">Bitte wählen</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Nachricht</label>
          <textarea
            name="nachricht"
            value={form.nachricht}
            onChange={handleChange}
            placeholder="Weitere Informationen..."
          />
        </div>

        <button type="submit" className="btn-submit" disabled={laden}>
          {laden ? 'Wird gesendet...' : 'Termin anfragen'}
        </button>
      </form>
    </main>
  )
}

export default Buchen