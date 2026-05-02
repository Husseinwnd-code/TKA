import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="TKA Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Startseite</Link></li>
        <li><Link to="/leistungen">Leistungen</Link></li>
        <li><Link to="/buchen">Termin buchen</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      <Link to="/buchen" className="navbar-btn">Termin vereinbaren</Link>
    </nav>
  )
}

export default Navbar