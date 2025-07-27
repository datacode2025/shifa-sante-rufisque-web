import { Activity, Eye, TestTube, X, Heart, Baby, User } from 'lucide-react'

function Services() {
  const services = [
    {
      category: "Examens et diagnostics",
      items: [
        { name: "Observation médicale", icon: Eye, description: "Examen clinique complet et diagnostic" },
        { name: "Échographie", icon: Activity, description: "Imagerie médicale non invasive" },
        { name: "Analyse sanguine", icon: TestTube, description: "Tests biologiques et analyses complètes" },
        { name: "Radiologie", icon: X, description: "Examens radiographiques" },
        { name: "Électrocardiogramme (ECG)", icon: Activity, description: "Surveillance cardiaque" }
      ]
    },
    {
      category: "Consultations spécialisées", 
      items: [
        { name: "Consultations générales", icon: User, description: "Médecine générale pour tous âges" },
        { name: "Consultations gynécologiques", icon: Heart, description: "Santé de la femme" },
        { name: "Consultations obstétricales", icon: Baby, description: "Suivi de grossesse" }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary-700">
        Nos Services Médicaux
      </h1>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Une gamme complète de soins médicaux adaptés à vos besoins
      </p>

      {/* Service spécial - Soins à domicile */}
      <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-8 mb-12 border border-accent-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            🏠 Soins Médicaux à Domicile
          </h2>
          <p className="text-lg text-primary-600 mb-4">
            Service disponible 24h/24 - 7j/7
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nous nous déplaçons chez vous pour tous vos besoins médicaux urgents ou programmés. 
            Idéal pour les personnes âgées, les femmes enceintes, ou en cas d'urgence.
          </p>
        </div>
      </div>

      {/* Services par catégorie */}
      <div className="space-y-12">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-semibold mb-8 text-primary-700 border-b border-primary-200 pb-3">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div 
                    key={index} 
                    className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary-700">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Horaires */}
      <div className="mt-16 bg-primary-600 text-white rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Horaires d'ouverture</h2>
        <div className="text-xl font-semibold">
          Ouvert 24 heures sur 24 - 7 jours sur 7
        </div>
        <p className="mt-4 opacity-90">
          Urgences médicales prises en charge à tout moment
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground mb-6">
          Besoin d'un de nos services ?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/appointment" 
            className="btn-primary inline-flex items-center gap-2 justify-center"
          >
            <Heart size={20} />
            Prendre rendez-vous
          </a>
          <a 
            href="https://wa.me/221772695411" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2 justify-center"
          >
            📱 Urgence WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services