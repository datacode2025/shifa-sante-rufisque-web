import { useState } from 'react'
import { Calendar, Clock, User, Phone, MessageSquare, Send, MessageCircle } from 'lucide-react'

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Créer le message WhatsApp
    const message = `Bonjour, je souhaite prendre rendez-vous :
    
👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
🏥 Motif : ${formData.reason}
📅 Date souhaitée : ${formData.date}
⏰ Heure souhaitée : ${formData.time}

Merci de confirmer la disponibilité.`
    
    const whatsappUrl = `https://wa.me/221772695411?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary-700">
        Prendre Rendez-vous
      </h1>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Remplissez le formulaire pour demander un rendez-vous
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-semibold mb-6 text-primary-700">
            Informations du rendez-vous
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                <User className="inline w-4 h-4 mr-2" />
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                <Phone className="inline w-4 h-4 mr-2" />
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="77 XXX XX XX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Motif de la consultation *
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un motif</option>
                <option value="Consultation générale">Consultation générale</option>
                <option value="Consultation gynécologique">Consultation gynécologique</option>
                <option value="Consultation obstétricale">Consultation obstétricale</option>
                <option value="Échographie">Échographie</option>
                <option value="Analyse sanguine">Analyse sanguine</option>
                <option value="ECG">Électrocardiogramme</option>
                <option value="Radiologie">Radiologie</option>
                <option value="Urgence">Urgence médicale</option>
                <option value="Autre">Autre (préciser dans les commentaires)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                <Calendar className="inline w-4 h-4 mr-2" />
                Date souhaitée *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                <Clock className="inline w-4 h-4 mr-2" />
                Heure souhaitée *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Sélectionnez une heure</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="Urgence">Urgence (dès que possible)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <Send size={20} />
              Envoyer la demande via WhatsApp
            </button>
          </form>
        </div>

        {/* Informations complémentaires */}
        <div className="space-y-8">
          {/* Contact direct */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
            <h3 className="text-xl font-semibold mb-4 text-green-800">
              Contact direct WhatsApp
            </h3>
            <p className="text-green-700 mb-6">
              Pour une réponse plus rapide, contactez-nous directement via WhatsApp
            </p>
            <a 
              href="https://wa.me/221772695411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Ouvrir WhatsApp
            </a>
          </div>

          {/* Numéros d'urgence */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">
              Numéros d'urgence
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+221772695411" 
                className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <Phone className="text-primary-600" size={20} />
                <span className="font-medium">77 269 54 11</span>
              </a>
              <a 
                href="tel:+221776359352" 
                className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <Phone className="text-primary-600" size={20} />
                <span className="font-medium">77 635 93 52</span>
              </a>
              <a 
                href="tel:+221777398326" 
                className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
              >
                <Phone className="text-primary-600" size={20} />
                <span className="font-medium">77 739 83 26</span>
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-accent-600 text-white rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">Horaires</h3>
            <div className="text-lg font-medium">
              Ouvert 24h/24 - 7j/7
            </div>
            <p className="mt-2 opacity-90">
              Urgences prises en charge à tout moment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment