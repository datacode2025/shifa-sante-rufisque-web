import { Link } from 'react-router-dom'
import { Heart, Clock, MapPin, Phone, MessageCircle, Stethoscope, Home as HomeIcon, Users } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-800">
            Bienvenue au Cabinet KHIQMATOU SHIFA S MED
          </h1>
          <p className="text-xl text-primary-600 mb-4 max-w-3xl mx-auto">
            Votre partenaire santé de confiance à Rufisque 2 - Anoumady
          </p>
          <div className="bg-accent-600 text-white px-6 py-3 rounded-full inline-block mb-8 font-semibold">
            🏠 Soins à domicile disponibles 24h/24 - 7j/7
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/appointment" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Heart size={20} />
              Prendre rendez-vous
            </Link>
            <a 
              href="https://wa.me/221772695411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Valeurs du cabinet */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Professionnalisme</h3>
              <p className="text-muted-foreground">
                Équipe médicale qualifiée et équipements modernes pour des soins de qualité
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Bienveillance</h3>
              <p className="text-muted-foreground">
                Accueil chaleureux et écoute attentive pour votre bien-être et confort
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Accessibilité</h3>
              <p className="text-muted-foreground">
                Soins médicaux accessibles 24h/24, à domicile ou au cabinet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services rapides */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">
            Nos Services Principaux
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Consultations générales", icon: "🩺" },
              { name: "Échographie", icon: "📺" },
              { name: "Analyses sanguines", icon: "🧪" },
              { name: "Électrocardiogramme", icon: "📈" }
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-primary-700">{service.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Contactez-nous maintenant</h2>
            <p className="text-xl mb-8 opacity-90">Urgence médicale ? Besoin d'un rendez-vous ?</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+221772695411" 
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                77 269 54 11
              </a>
              <a 
                href="tel:+221776359352" 
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                77 635 93 52
              </a>
              <a 
                href="tel:+221777398326" 
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                77 739 83 26
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home