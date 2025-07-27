import drMarieDubois from '@/assets/dr-marie-dubois.jpg'
import drPierreMartin from '@/assets/dr-pierre-martin.jpg'

function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary-700">
        À Propos de Notre Clinique
      </h1>
      
      {/* Section Propriétaires */}
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border mb-12">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary-600">
          Nos Propriétaires
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Propriétaire 1 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary-100">
              <img 
                src={drMarieDubois}
                alt="Dr. Marie Dubois"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary-700">Dr. Marie Dubois</h3>
            <p className="text-accent-600 font-medium mb-3">Co-Propriétaire & Directrice Médicale</p>
            <p className="text-muted-foreground leading-relaxed">
              Diplômée de l'Université de Médecine de Paris avec plus de 15 ans d'expérience. 
              Spécialisée en médecine générale et en soins préventifs. Passionnée par 
              l'approche holistique des soins de santé.
            </p>
          </div>

          {/* Propriétaire 2 */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary-100">
              <img 
                src={drPierreMartin}
                alt="Dr. Pierre Martin"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary-700">Dr. Pierre Martin</h3>
            <p className="text-accent-600 font-medium mb-3">Co-Propriétaire & Spécialiste</p>
            <p className="text-muted-foreground leading-relaxed">
              Expert en cardiologie avec 20 ans de pratique clinique. Ancien chef de service 
              à l'hôpital Saint-Antoine. Dévoué à offrir des soins personnalisés et 
              de haute qualité à tous ses patients.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-card rounded-lg p-8 shadow-lg border border-border mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary-600">
          Notre Mission
        </h2>
        <p className="text-muted-foreground leading-relaxed text-center text-lg">
          Nous nous engageons à fournir des soins médicaux exceptionnels dans un 
          environnement chaleureux et accueillant. Notre approche centrée sur le patient 
          garantit que chaque personne reçoit l'attention personnalisée qu'elle mérite.
        </p>
      </div>

      {/* Valeurs */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border text-center">
          <h3 className="text-lg font-semibold mb-3 text-primary-600">Excellence</h3>
          <p className="text-muted-foreground">
            Nous maintenons les plus hauts standards de qualité médicale
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border text-center">
          <h3 className="text-lg font-semibold mb-3 text-primary-600">Compassion</h3>
          <p className="text-muted-foreground">
            Chaque patient est traité avec empathie et respect
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg border border-border text-center">
          <h3 className="text-lg font-semibold mb-3 text-primary-600">Innovation</h3>
          <p className="text-muted-foreground">
            Nous utilisons les technologies les plus avancées
          </p>
        </div>
      </div>
    </div>
  )
}

export default About