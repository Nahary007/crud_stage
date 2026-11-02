import { Routes, Route, Link } from 'react-router-dom'
import Create from './Pages/Create'
import './App.css'
import Update from './Pages/Update'

function App() {
  return (
    <>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/olona/creer" style={styles.link}>Créer un Olona</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/olona/creer" element={<Create />} />
        <Route path="/olona/modifier" element={<Update />} />
      </Routes>
    </>
  )
}

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Bienvenue sur Vorona Agency</h1>
      <p>Utilisez la navigation pour gérer les olona.</p>
    </div>
  )
}

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '14px 24px',
    backgroundColor: '#4f46e5',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '15px',
  },
}

export default App
