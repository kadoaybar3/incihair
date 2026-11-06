import { ArrowDown, ArrowRight, ClipboardCheck, Crosshair, MapPin, MessageCircle, Phone, ScanSearch, Scissors, ShieldCheck } from 'lucide-react'
import { site, whatsappUrl } from '../config/site'
import './HomePage.css'

const photos = {
  hero: '/homepage-hair-reference.jpeg',
  consultation: '/intro-hair-consultation.jpeg',
}

const planningItems = [
  {
    title: 'Donör ve kıl uyumu',
    text: 'Donör kapasitesini, kılın kalınlığını, rengini ve kıvrımını inceleriz. Kök alım bölgesini koruyarak ekim alanına uygun kılları seçeriz.',
    Icon: ScanSearch,
  },
  {
    title: 'Ekim alanı ve ihtiyaç',
    text: 'Seyrekliğin nedenini, mevcut kılları ve cilt yapısını inceleriz. Çizgiyi, yönü ve dağılımı ekim bölgesine göre belirleriz.',
    Icon: Crosshair,
  },
  {
    title: 'Tıraş planı ve hazırlık',
    text: 'Donör ve ekim alanında kısaltma ihtiyacını ayrı ele alırız. İşlemin özelliklerini ve günlük kullanımınızı birlikte hesaba katarız.',
    Icon: Scissors,
  },
  {
    title: 'Sağlık, beklenti ve takip',
    text: 'Sağlık öykünüzü ve önceki işlemleri konuşuruz. Beklenen görünümü, olası sınırları ve takip kapsamını sizinle netleştiririz.',
    Icon: ClipboardCheck,
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" style={{ backgroundImage: `url("${photos.hero}")` }} />
        <div className="hero__shade" />
        <div className="container hero__content">
          <p className="hero__eyebrow">Afyonkarahisar · İnci Saç Ekim Merkezi</p>
          <h1 id="hero-title">Doğal, Kalıcı saç çözümleri</h1>
          <p className="hero__text">
            Safir FUE, DHI ve destekleyici tedavilerle yüzünüze yakışan doğal saç
            çizgisi. 5–7 günde konforlu iyileşme.
          </p>
          <p className="hero__disclaimer">İyileşme süreci kişiye ve uygulamaya göre değişebilir.</p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#ekim-plani">Süreci keşfedin <ArrowDown aria-hidden="true" /></a>
            <a className="hero__whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> WhatsApp'tan bilgi alın
            </a>
          </div>
        </div>
      </section>

      <section className="hair-planning section" id="ekim-plani" aria-labelledby="planning-title">
        <div className="container">
          <div className="hair-planning__heading">
            <p className="hair-planning__eyebrow">DEĞERLENDİRME VE PLANLAMA</p>
            <h2 id="planning-title">İhtiyacınıza uygun ekim planı</h2>
            <p>Hekiminiz ekim alanını, sağlık öykünüzü ve donör özelliklerinizi inceler; beklentilerinizi sizinle konuşur.</p>
          </div>
          <div className="hair-planning__grid">
            {planningItems.map(({ title, text, Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <div className="container intro__grid">
          <div className="intro__copy">
            <p className="eyebrow">İnci'yi tanıyın</p>
            <h2 id="intro-title">Her karar, sizi dinlemekle başlar.</h2>
            <p>
              Saç dökülmesi ve saç sağlığı hakkında aklınızdaki soruları
              konuşabileceğiniz, bilgiye dayalı bir başlangıç sunuyoruz. İlk
              görüşmede beklentilerinizi ve seçenekleri birlikte ele alıyoruz.
            </p>
            <a className="text-link" href={whatsappUrl('Merhaba, ön görüşme hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer">
              Ön görüşme hakkında bilgi alın <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <figure className="intro__figure">
            <img src={photos.consultation} alt="Saç ekimi uygulamasını temsil eden fotoğraf" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="hair-care section" aria-labelledby="hair-care-title">
        <div className="container">
          <div className="hair-care__heading">
            <p className="hair-planning__eyebrow">BAKIM VE TAKİP</p>
            <h2 id="hair-care-title">Bakımı ve değişimi birlikte takip edelim.</h2>
            <p>Ekim sonrasındaki bakım adımlarını ve kontrolleri, uygulamanıza ve kişisel iyileşme sürecinize göre birlikte planlıyoruz.</p>
          </div>
          <div className="hair-care__grid">
            <article><h3>İlk günler</h3><p>Ekim alanını koruma, uyku pozisyonu ve günlük hareketlerle ilgili önerileri işlem sonrasında sizinle paylaşırız.</p></article>
            <article><h3>İlk yıkama</h3><p>İlk yıkamanın zamanını ve nasıl yapılacağını anlatırız. Ekim alanına nazikçe yaklaşmanız ve verilen talimatları izlemeniz önemlidir.</p></article>
            <article><h3>Günlük yaşama dönüş</h3><p>Saç ürünleri, egzersiz ve günlük rutininize dönüş zamanını iyileşme durumunuza göre konuşuruz.</p></article>
            <article><h3>Düzenli takip</h3><p>Kontrollerde iyileşme sürecini ve saçların gelişimini değerlendirir, ihtiyaç duyduğunuz konuları birlikte ele alırız.</p></article>
          </div>
          <p className="hair-care__note">Bakım önerileri kişiye ve uygulamaya göre değişebilir. İşlem sonrasında size iletilen plana uyun.</p>
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-title">
        <div className="container faq__grid">
          <div><p className="hair-planning__eyebrow">SIK SORULAN SORULAR</p><h2 id="faq-title">Saç ekimi hakkında merak edilenler</h2><p className="faq__note">Bu yanıtlar genel bilgilendirme amaçlıdır. Size özel plan hekim muayenesiyle belirlenir.</p></div>
          <div className="faq__list">
            <details><summary>Saç dökülmesinin nedeni nasıl değerlendirilir?</summary><p>Dökülmenin ne zaman başladığını ve nasıl ilerlediğini, sağlık öykünüzü, kullandığınız ilaçları ve önceki uygulamaları konuşuruz. Saçlı deriyi ve mevcut saçları inceler, ihtiyaç varsa ek tetkikleri değerlendiririz.</p></details>
            <details><summary>Saç ekimi kimler için uygun olabilir?</summary><p>Uygunluk; sağlık durumunuz, saç dökülmesinin özellikleri, ekim alanı ve donör kapasitesi birlikte değerlendirilerek belirlenir. Kişisel muayene olmadan uygunluk kararı verilemez.</p></details>
            <details><summary>Saç ekimi mi, PRP mi benim için uygun?</summary><p>Saç ekimi, donör bölgeden alınan köklerin ihtiyaç duyulan alana taşınmasını; PRP ise kişinin kendi kanından hazırlanan plazmanın saçlı deriye uygulanmasını içerir. Amaçları ve uygulamaları farklıdır. Size uygun seçenek değerlendirme sonrasında konuşulur.</p></details>
            <details><summary>FUE ve DHI yöntemleri arasındaki seçim nasıl yapılır?</summary><p>Yöntem seçimi saç yapınız, donör alanınız, ekim yapılacak bölge ve kişisel ihtiyaçlarınız değerlendirilerek planlanır. Görüşmede yöntemlerin sizin için nasıl ele alınabileceğini ve sınırlarını konuşuruz.</p></details>
            <details><summary>Donör alan ve ekim çizgisi nasıl belirlenir?</summary><p>Donör alanın kapasitesi ve saç özellikleri incelenir. Ekim alanı, mevcut saçlar ve beklentileriniz doğrultusunda saç çizgisi ile dağılım planı birlikte değerlendirilir.</p></details>
            <details><summary>Saç ekimi öncesinde hangi bilgileri paylaşmalıyım?</summary><p>Hastalıklarınızı, alerjilerinizi, kullandığınız ilaç ve takviyeleri, önceki operasyonları ve varsa güncel tetkiklerinizi paylaşın. İlaçlarınızı hekiminize danışmadan bırakmayın.</p></details>
            <details><summary>İşlem sırasında ağrı veya rahatsızlık hissedilir mi?</summary><p>Hissedilebilecek durumlar ve konfor seçenekleri kişiye ve işlem planına göre değişir. Hazırlık ve uygulama öncesinde süreç hakkında bilgi verilir; rahatsızlık hissederseniz ekibe bildirebilirsiniz.</p></details>
            <details><summary>Saç ekimi sonrası saçımı ne zaman yıkayabilirim?</summary><p>İlk yıkamanın zamanı ve yöntemi size verilen işlem sonrası bakım planına göre belirlenir. Ekim alanını korumak için ekibimizin paylaştığı talimatları izleyin.</p></details>
            <details><summary>Günlük yaşama ve egzersize ne zaman dönebilirim?</summary><p>Günlük rutinlere, egzersize ve saç ürünlerine dönüş zamanı iyileşme sürecinize ve uygulama planınıza göre değişir. Size özel zamanlamayı işlem sonrasında paylaşırız.</p></details>
            <details><summary>Saç ekiminin sonuçları ne zaman görülür?</summary><p>Saçların gelişimi zaman içinde takip edilir; süreç kişiden kişiye değişebilir. Kontrollerde gelişimi değerlendirir ve takip planınızı ihtiyaçlarınıza göre sürdürürüz.</p></details>
            <details><summary>Saç ekimi sonrasında hangi durumlarda kliniğe ulaşmalıyım?</summary><p>İşlem sonrasında beklenmeyen veya sizi endişelendiren bir belirti olursa kliniğimizle iletişime geçin. Size verilen kontrol tarihini beklemeniz gerekip gerekmediği konusunda ekibimiz yönlendirme yapar.</p></details>
            <details><summary>Saç ekimi ücreti ve takip kapsamı nasıl belirlenir?</summary><p>Plan ve ücret bilgisi kişisel değerlendirme sonrasında, uygulanacak yönteme ve ihtiyaçlarınıza göre paylaşılır. İşlem öncesinde kapsam ve takip hakkında bilgi alabilirsiniz.</p></details>
          </div>
        </div>
      </section>

      <section className="fee-transparency" aria-labelledby="fee-title">
        <div className="container fee-transparency__inner">
          <ShieldCheck aria-hidden="true" />
          <div>
            <h2 id="fee-title">Ücretlendirmede şeffaflık.</h2>
            <p>Uygulama ve takip kapsamı kişisel değerlendirme sonrasında belirlenir. Plan ve ücret bilgilerini işlem öncesinde bizimle görüşebilirsiniz.</p>
          </div>
          <a className="btn" href={whatsappUrl('Merhaba, saç ekimi ve uygulama planı hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> Plan hakkında bilgi alın
          </a>
        </div>
      </section>

      <section className="visit" aria-labelledby="visit-title">
        <div className="container visit__inner">
          <div><p className="eyebrow">Bizi ziyaret edin</p><h2 id="visit-title">Sorularınızı bize iletin.</h2><p>{site.address}</p><a className="visit__phone" href={site.phoneHref}><Phone aria-hidden="true" /> {site.phone}</a></div>
          <div className="visit__actions">
            <a className="btn btn--primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp'tan yazın</a>
            <a className="btn btn--outline" href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /> Yol tarifi</a>
          </div>
        </div>
      </section>
    </>
  )
}
