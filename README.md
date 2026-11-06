# İnci Saç Ekim Merkezi

incihair.com için React + Vite + TypeScript kurumsal web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Diğer komutlar:

```bash
npm run build    # üretim derlemesi
npm run preview  # derlemeyi önizleme
npm run lint     # oxlint
```

## Klasör yapısı

```
public/                  statik dosyalar (favicon)
src/
  components/layout/     Header, Footer, Layout (ortak iskelet)
  config/site.ts         marka, telefon, WhatsApp, e-posta, harita
  pages/                 sayfa bileşenleri (şimdilik HomePage)
  App.tsx                sayfa yerleşimi
  index.css              tasarım değişkenleri, reset, ortak sınıflar
```

Yeni bir bölüm eklerken `src/components/` altında bileşen, sayfa içeriği için
`src/pages/` altında dosya açın. Stiller bileşenin yanında `.css` olarak tutulur.

## Yayın öncesi yapılacaklar

- `src/config/site.ts` içindeki **telefon, WhatsApp numarası ve e-posta**
  bilgileri şu an yer tutucudur; gerçek değerlerle değiştirilmelidir.
- Google Haritalar bağlantısı marka adına göre arama yapar; merkezin kesin
  konumu için paylaşım bağlantısıyla değiştirilmelidir.
- Saç ekimi ve PRP bölümleri kısa tanıtım metinleridir; ayrıntılı hizmet
  sayfaları ve fotoğraflar henüz eklenmedi.
- Site tek sayfadır. Hizmet sayfaları eklendiğinde React Router kurulabilir.

## Tasarım

Kırık beyaz (`#f8f5ef`), kum beji (`#e9e0d2`), koyu yeşil (`#1e3a31`) ve
antrasit (`#232726`) tonları; `src/index.css` içindeki CSS değişkenleriyle
yönetilir. Tipografi sistem fontlarıyla çalışır, harici font isteği yoktur.
