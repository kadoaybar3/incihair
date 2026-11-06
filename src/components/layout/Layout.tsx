import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
