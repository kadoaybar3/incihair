import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappUrl } from '../../config/site'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" id="iletisim">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{site.name}</p>
          <p className="footer__desc">
            Bu sayfa genel bilgilendirme amaçlıdır.
            <br />
            Kişisel değerlendirme hekim muayenesiyle yapılır.
          </p>
        </div>

        <div className="footer__contact">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            WhatsApp
          </a>
          <a href={site.phoneHref}>
            <Phone aria-hidden="true" />
            {site.phone}
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" />
            {site.address}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name}
        </span>
        <span>{site.domain}</span>
      </div>
    </footer>
  )
}
