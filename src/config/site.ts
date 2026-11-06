export const site = {
  name: 'İnci Saç Ekim Merkezi',
  shortName: 'İNCİ',
  tagline: 'SAÇ EKİM MERKEZİ',
  domain: 'incihair.com',
  phone: '0551 975 98 98',
  phoneHref: 'tel:+905519759898',
  whatsapp: '905519759898',
  address: 'Marulcu, Kurtuluş Cd. No: 45 D: 3, 03200 Afyonkarahisar Merkez/Afyonkarahisar',
  mapsUrl: 'https://maps.app.goo.gl/LRdZt8ZRcTDC5YQk8',
}

export function whatsappUrl(
  message = 'Merhaba, saç ekimi hakkında bilgi almak istiyorum.',
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
