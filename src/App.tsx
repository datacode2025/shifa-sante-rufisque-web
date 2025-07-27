import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import { Phone, MapPin } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec informations de contact */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>77 269 54 11</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Rufisque 2 - Anoumady</span>
            </div>
          </div>
          <div className="text-accent-100 font-medium">
            Ouvert 24h/24 - 7j/7
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card border-b border-border shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-primary-700">
              Cabinet KHIQMATOU SHIFA S MED
            </div>
            <div className="flex gap-6">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-primary-50"
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-primary-50"
              >
                À Propos
              </Link>
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-primary-50"
              >
                Services
              </Link>
              <Link 
                to="/appointment" 
                className="text-foreground hover:text-primary-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-primary-50"
              >
                Rendez-vous
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-primary-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App