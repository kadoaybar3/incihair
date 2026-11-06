import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PrpPage from './pages/PrpPage'

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const isPrpPage = currentPath === '/prp'
    document.title = isPrpPage
      ? 'PRP Hakkında Bilgi | İnci Saç Ekim Merkezi'
      : 'İnci Saç Ekim Merkezi | Saç Ekimi ve PRP'
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content = isPrpPage
        ? 'PRP nedir, nasıl uygulanır ve karar öncesinde nelere dikkat edilmelidir? İnci Saç Ekim Merkezi bilgilendirme sayfası.'
        : 'İnci Saç Ekim Merkezi: saç ekimi ve PRP hakkında bilgi alın, merkezimizi tanıyın. WhatsApp iletişim ve yol tarifi.'
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1))
    if (!targetId) return

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    })
  }, [currentPath])

  return (
    <Layout>
      {currentPath === '/prp' ? <PrpPage /> : <HomePage />}
    </Layout>
  )
}
