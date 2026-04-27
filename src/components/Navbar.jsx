import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TKA</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Startseite</Link></li>
        <li><Link to="/leistungen">Leistungen</Link></li>
        <li><Link to="/buchen">Termin buchen</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar