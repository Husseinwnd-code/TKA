import { useState } from 'react'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (password === import.meta.env.VITE_DASHBOARD_PASSWORD) {
      localStorage.setItem('dashboard_auth', 'true')
      window.location.href = '/dashboard'
    } else {
      setError('Falsches Passwort!')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1rem' }}>
      <h1>Dashboard Login</h1>
      <input
        type="password"
        placeholder="Passwort eingeben"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Einloggen</button>
    </div>
  )
}