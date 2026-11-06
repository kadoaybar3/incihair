import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { site, whatsappUrl } from '../../config/site'
import './Header.css'

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/prp', label: 'PRP' },
  { href: '/#iletisim', label: 'İletişim' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const isPrpPage = window.location.pathname.replace(/\/+$/, '') === '/prp'
  const contactMessage = isPrpPage
    ? 'Merhaba, PRP uygulaması hakkında bilgi almak istiyorum.'
    : 'Merhaba, saç ekimi hakkında bilgi almak istiyorum.'

  return (
    <header className="header">
      <div className="header__menu container">
        <a className="brand" href="/" aria-label={`${site.name} ana sayfa`}>
          <img className="brand__logo" src="/inci-logo.png" alt={site.name} />
        </a>
          <nav className="header__nav" id="primary-nav" data-open={open} aria-label="Ana menü">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header__nav-cta" href={whatsappUrl(contactMessage)} target="_blank" rel="noopener noreferrer">
            WhatsApp'tan bilgi alın <MessageCircle aria-hidden="true" />
          </a>

          <button
            className="header__toggle"
            type="button"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
      </div>
    </header>
  )
}
