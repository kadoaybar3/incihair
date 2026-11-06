import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../../config/site'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const isPrpPage = window.location.pathname.replace(/\/+$/, '') === '/prp'
  const message = isPrpPage
    ? 'Merhaba, PRP uygulaması hakkında bilgi almak istiyorum.'
    : 'Merhaba, saç ekimi hakkında bilgi almak istiyorum.'

  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden bilgi alın"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp'tan yazın</span>
    </a>
  )
}
