import { MapPin, Phone, Clock, MessageCircle, Mail, HelpCircle } from 'lucide-react'

function Contact() {
  const faqs = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous via notre formulaire en ligne, par WhatsApp ou en nous appelant directement."
    },
    {
      question: "Acceptez-vous les urgences ?",
      answer: "Oui, nous acceptons les urgences 24h/24 et 7j/7. Contactez-nous immédiatement pour une prise en charge rapide."
    },
    {
      question: "Proposez-vous des consultations à domicile ?",
      answer: "Oui, nous offrons des soins médicaux à domicile pour votre confort et celui de votre famille."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Nous sommes situés à Rufisque 2 - Anoumady, facilement accessible depuis tout Rufisque."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary-700">
        Contactez-nous
      </h1>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Nous sommes là pour répondre à tous vos besoins médicaux
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          {/* Localisation */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-semibold mb-6 text-primary-700 flex items-center gap-3">
              <MapPin className="text-primary-600" size={28} />
              Notre localisation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-primary-600">Adresse</h3>
                <p className="text-muted-foreground">
                  Rufisque 2 - Anoumady<br />
                  Sénégal
                </p>
              </div>
              
              {/* Carte Google Maps */}
              <div className="bg-muted rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Carte interactive Google Maps
                </p>
                <div className="bg-primary-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary-600 mx-auto mb-2" size={48} />
                    <p className="text-primary-700 font-medium">
                      Rufisque 2 - Anoumady
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Intégration Google Maps à venir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-gradient-to-br from-accent-600 to-primary-600 text-white rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Clock size={28} />
              Horaires d'ouverture
            </h2>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24h/24 - 7j/7</div>
              <p className="opacity-90">
                Nous sommes toujours disponibles pour vos urgences médicales
              </p>
            </div>
          </div>
        </div>

        {/* Contact et FAQ */}
        <div className="space-y-8">
          {/* Numéros de téléphone */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-semibold mb-6 text-primary-700 flex items-center gap-3">
              <Phone className="text-primary-600" size={28} />
              Nos numéros
            </h2>
            <div className="space-y-4">
              <a 
                href="tel:+221772695411" 
                className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-700">Ligne principale</div>
                  <div className="text-lg font-bold text-primary-600">77 269 54 11</div>
                </div>
              </a>
              
              <a 
                href="tel:+221776359352" 
                className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-700">Ligne secondaire</div>
                  <div className="text-lg font-bold text-primary-600">77 635 93 52</div>
                </div>
              </a>
              
              <a 
                href="tel:+221777398326" 
                className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-700">Urgences</div>
                  <div className="text-lg font-bold text-primary-600">77 739 83 26</div>
                </div>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <MessageCircle size={28} />
              WhatsApp
            </h2>
            <p className="mb-6 opacity-90">
              Contactez-nous rapidement via WhatsApp pour vos questions ou rendez-vous
            </p>
            <a 
              href="https://wa.me/221772695411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-700 flex items-center justify-center gap-3">
          <HelpCircle className="text-primary-600" size={32} />
          Questions fréquentes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <h3 className="font-semibold text-lg mb-3 text-primary-700">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Une question ? Un besoin urgent ?</h2>
          <p className="text-xl mb-8 opacity-90">N'hésitez pas à nous contacter immédiatement</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+221772695411" 
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <Phone size={20} />
              Appeler maintenant
            </a>
            <a 
              href="https://wa.me/221772695411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact