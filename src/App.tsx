import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex gap-6">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary-600 transition-colors font-medium"
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className="text-foreground hover:text-primary-600 transition-colors font-medium"
          >
            À Propos
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary-700">
              Bienvenue à Notre Clinique
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              Des soins de qualité dans un environnement chaleureux et professionnel
            </p>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App