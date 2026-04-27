import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Leistungen from './pages/Leistungen'
import Buchen from './pages/Buchen'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/buchen" element={<Buchen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App