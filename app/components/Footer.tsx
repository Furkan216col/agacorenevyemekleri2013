
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Ağaçören Ev Yemekleri
            </h4>
            <p className="text-gray-400 mb-4">
              Ev yapımı tatlar, sevgiyle hazırlanmış tarifeler
            </p>
            <div className="flex space-x-4">
              <a href="tel:+905452829734" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-phone-line text-xl"></i>
              </a>
              <a href="mailto:info@agacorenevyemekleri.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Hakkımızda</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Menü</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors cursor-pointer">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Hizmetlerimiz</h5>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Günlük Ev Yemeği</span></li>
              <li><span className="text-gray-400">Yöresel Tarifler</span></li>
              <li><span className="text-gray-400">Organizasyon Hizmeti</span></li>
              <li><span className="text-gray-400">Telefonla Sipariş</span></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Yasal</h5>
            <ul className="space-y-2">
              <li><Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Kullanım Koşulları</Link></li>
              <li><Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ağaçören Ev Yemekleri. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
