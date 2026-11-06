import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../config/site'
import './PrpPage.css'

const assessmentItems = [
  {
    title: 'Dökülme öyküsü',
    text: 'Dökülmenin başlangıcını, seyrini, stres durumunuzu ve önceki tedavileri konuşuyoruz.',
  },
  {
    title: 'Saç ve saçlı deri',
    text: 'Mevcut saçlarınızı ve saçlı derinizi inceliyor; gerekiyorsa ek tetkik istiyoruz.',
  },
  {
    title: 'Sağlık geçmişi',
    text: 'Kan değerlerinizi, hastalıklarınızı, alerjilerinizi, ilaç ve takviyelerinizi gözden geçiriyoruz.',
  },
  {
    title: 'Kişisel plan',
    text: 'Beklenen yararı, sınırları ve seçenekleri açıklıyor; seans takvimini birlikte belirliyoruz.',
  },
]

const expectations = [
  {
    title: 'Dökülmenin azalmasına destek',
    text: 'Saç dökülmesinin azalmasına yardımcı olur, saç köklerini besler.',
  },
  {
    title: 'Saç gelişiminin desteklenmesi',
    text: 'Mevcut saçların kalınlığını ve görünümünü destekler.',
  },
  {
    title: 'Diğer tedavilerle birlikte planlama',
    text: 'Gerektiğinde ilaçlar veya diğer saç uygulamalarıyla aynı tedavi planına dahil edilebilir.',
  },
  {
    title: 'Yanıtın takip edilmesi',
    text: 'Başlangıçtaki durumunuzu ve sonraki değişimi karşılaştırarak tedavinin katkısını izleriz.',
  },
]

const procedureSteps = [
  {
    title: 'Kan örneği',
    text: 'PRP hazırlamak için kolunuzdan kan örneği alırız.',
  },
  {
    title: 'PRP’nin hazırlanması',
    text: 'Kanı, uygun kit ve santrifüj sistemiyle ayrıştırarak trombosit yönünden zengin plazmayı hazırlarız.',
  },
  {
    title: 'Saçlı deriye uygulama',
    text: 'Hazırlanan PRP, belirlenen alanlara ince uçlu enjeksiyonlarla uygulanır.',
  },
  {
    title: 'İşlem sonrası',
    text: 'Bakım önerilerini açıklar, kontrol ve sonraki seans tarihlerini sizinle paylaşırız.',
  },
]

const careItems = [
  {
    title: 'İlk 12 saat',
    text: 'Saçlı deriye dokunmayın; kaşımayın veya ovalamayın. Sprey, jöle ve kuru şampuan kullanmayın.',
  },
  {
    title: 'İlk yıkama',
    text: 'Hekiminiz uygun görürse 12 saat sonra saçlarınızı ılık suyla, nazikçe yıkayabilirsiniz.',
  },
  {
    title: 'Seans planı',
    text: 'Başlangıç seanslarından sonraki yanıtı izleriz. İhtiyaç varsa daha aralıklı destek seansları eklenebilir.',
  },
  {
    title: 'Düzenli takip',
    text: 'Dökülmenin seyrini ve saçların görünümünü aylara yayılan kontrollerde karşılaştırırız.',
  },
]

export default function PrpPage() {
  return (
    <div className="prp-page">
      <section className="prp-hero" aria-labelledby="prp-title">
        <div className="container prp-hero__inner">
          <div className="prp-hero__copy">
            <p className="eyebrow">Saç tedavileri · Bilgilendirme</p>
            <h1 id="prp-title">PRP saç uygulaması</h1>
            <h2>Saç sağlığınız için kişisel değerlendirme.</h2>
            <p>
              PRP, kişinin kendi kanından hazırlanan trombositten zengin plazmanın
              saçlı deriye uygulanmasıdır. Dökülme nedeniniz ve saçlı deriniz
              değerlendirildikten sonra, sizin için uygun olup olmadığı birlikte
              ele alınır.
            </p>
            <div className="prp-hero__actions">
              <a className="btn btn--primary" href={whatsappUrl('Merhaba, PRP uygulaması hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> Bilgi alın
              </a>
              <a className="prp-hero__read-more" href="#prp-assessment">PRP’yi tanıyın <ArrowRight aria-hidden="true" /></a>
            </div>
            <p className="prp-hero__note">Kişisel uygulama planı sağlık uzmanı değerlendirmesiyle belirlenir.</p>
          </div>
          <figure className="prp-hero__photo">
            <img src="/prp-treatment.jpeg" alt="PRP uygulaması sırasında saçlı deriye enjeksiyon" />
          </figure>
        </div>
      </section>

      <section className="prp-process prp-assessment section" id="prp-assessment" aria-labelledby="prp-assessment-title">
        <div className="container prp-process__grid">
          <div className="prp-process__heading">
            <p className="prp-process__eyebrow"><span>01</span> DEĞERLENDİRME VE PLANLAMA</p>
            <h2 id="prp-assessment-title">Önce dökülmenin nedenini anlayalım.</h2>
            <p>Dökülmenizin seyrini dinliyor, saçlı derinizi ve sağlık öykünüzü birlikte inceliyoruz.</p>
          </div>
          <div className="prp-process__cards">
            {assessmentItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prp-process prp-expectations section" aria-labelledby="prp-expectations-title">
        <div className="container prp-process__grid">
          <div className="prp-process__heading">
            <p className="prp-process__eyebrow"><span>02</span> AMAÇ VE BEKLENTİLER</p>
            <h2 id="prp-expectations-title">PRP’den ne bekleyebilirsiniz?</h2>
            <p>Amaç mevcut saçları desteklemektir; alınabilecek yanıt, dökülmenin nedenine ve kişisel özelliklere bağlıdır.</p>
          </div>
          <div className="prp-process__cards">
            {expectations.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
            <p className="prp-process__note">PRP’nin sizin için uygunluğunu, sınırlarını ve takip planını işlem öncesinde konuşuruz.</p>
          </div>
        </div>
      </section>

      <section className="prp-process prp-procedure section" aria-labelledby="prp-procedure-title">
        <div className="container prp-process__grid">
          <div className="prp-process__heading">
            <p className="prp-process__eyebrow"><span>03</span> UYGULAMA SÜRECİ</p>
            <h2 id="prp-procedure-title">PRP uygulaması nasıl yapılır?</h2>
            <p>Kan alımı, hazırlık ve saçlı deriye uygulamayla birlikte PRP işlemi yaklaşık 40 dakika sürer.</p>
          </div>
          <div>
            <ol className="prp-process__steps">
              {procedureSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="prp-process__comfort">
              <h3>İşlem sırasında konforunuz</h3>
              <p>Kan alımı ve enjeksiyonlar sırasında batma veya hassasiyet hissedebilirsiniz. Konfor seçeneklerini önceden konuşuruz. Rahatsızlık hissettiğinizde ekibe söyleyebilir, ihtiyaç duyarsanız kısa bir ara isteyebilirsiniz. Uygulama sırasında başınızı ekibin yönlendirdiği pozisyonda tutmanız önemlidir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prp-process prp-aftercare section" aria-labelledby="prp-aftercare-title">
        <div className="container prp-process__grid">
          <div className="prp-process__heading">
            <p className="prp-process__eyebrow"><span>04</span> BAKIM VE TAKİP</p>
            <h2 id="prp-aftercare-title">Bakımı ve değişimi birlikte takip edelim.</h2>
          </div>
          <div className="prp-process__cards">
            {careItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prp-contact">
        <div className="container prp-contact__inner">
          <div><p className="eyebrow">İnci Saç Ekim Merkezi</p><h2>PRP hakkında sorularınızı iletin.</h2><p>Uygunluk ve uygulama ayrıntıları hakkında bilgi almak için bizimle iletişime geçin.</p></div>
          <a className="btn btn--primary" href={whatsappUrl('Merhaba, PRP uygulaması hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> WhatsApp'tan bilgi alın
          </a>
        </div>
      </section>
    </div>
  )
}
