import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import './Dashboard.css'

function Dashboard() {
  const [termine, setTermine] = useState([])
  const [laden, setLaden] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('dashboard_auth') !== 'true') {
      window.location.href = '/login'
    }
  }, [])

  useEffect(() => {
    fetchTermine()
  }, [])

  async function fetchTermine() {
    setLaden(true)
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setTermine(data)
    setLaden(false)
  }

  async function statusAendern(id, neuerStatus) {
    const { error } = await supabase
      .from('bookings')
      .update({ status: neuerStatus })
      .eq('id', id)

    if (!error) fetchTermine()
  }

  async function loeschen(id) {
    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', id)

    if (!error) fetchTermine()
  }

  return (
    <main className="dashboard">
      <div className="page-header">
        <p className="page-tag">Übersicht</p>
        <h1>Dashboard</h1>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>{termine.length}</h3>
          <p>Termine gesamt</p>
        </div>
        <div className="stat-card">
          <h3>{termine.filter(t => t.status === 'Neu').length}</h3>
          <p>Neue Termine</p>
        </div>
        <div className="stat-card">
          <h3>{termine.filter(t => t.status === 'Bestatigt').length}</h3>
          <p>Bestätigt</p>
        </div>
      </div>

      <div className="termine-liste">
        {laden ? (
          <p className="leer">Lädt...</p>
        ) : termine.length === 0 ? (
          <p className="leer">Keine Termine vorhanden</p>
        ) : (
          termine.map(termin => (
            <div className={`termin-card ${termin.status.toLowerCase()}`} key={termin.id}>
              <div className="termin-info">
                <h3>{termin.name}</h3>
                <p>🚗 {termin.fahrzeug}</p>
                <p>🔧 {termin.leistung}</p>
                <p>📅 {termin.datum} um {termin.uhrzeit}</p>
                {termin.nachricht && <p>💬 {termin.nachricht}</p>}
              </div>
              <div className="termin-aktionen">
                <span className={`status-badge ${termin.status.toLowerCase()}`}>
                  {termin.status}
                </span>
                <select
                  value={termin.status}
                  onChange={e => statusAendern(termin.id, e.target.value)}
                >
                  <option value="Neu">Neu</option>
                  <option value="Bestatigt">Bestätigt</option>
                  <option value="Erledigt">Erledigt</option>
                </select>
                <button
                  className="btn-loeschen"
                  onClick={() => loeschen(termin.id)}
                >
                  🗑️ Löschen
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default Dashboard