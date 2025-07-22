
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Ağaçören Ev Yemekleri
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Hakkımızda
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Menü
              </Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                İletişim
              </Link>
            </nav>
            <button className="md:hidden">
              <i className="ri-menu-line text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://readdy.ai/api/search-image?query=Traditional%20Turkish%20home%20kitchen%20with%20wooden%20table%2C%20fresh%20vegetables%2C%20homemade%20dishes%2C%20warm%20orange%20lighting%2C%20cozy%20atmosphere%2C%20authentic%20Turkish%20cuisine%20preparation%2C%20traditional%20copper%20pots%2C%20bread%20and%20herbs%2C%20rustic%20kitchen%20interior%20design%2C%20inviting%20family%20cooking%20space&width=1920&height=1080&seq=hero-kitchen&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ev Yapımı Tatlar
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Sevgiyle hazırlanmış, doğal ve katkısız ev yemekleri Ankara Çankaya'dan sofralarınıza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                  Menüyü İncele
                </button>
              </Link>
              <Link href="/iletisim">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap">
                  Sipariş Ver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hizmetlerimiz
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Geleneksel tariflerle hazırladığımız ev yemekleri ile size hizmet veriyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="ri-restaurant-line text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Günlük Menü</h3>
              <p className="text-gray-600 text-center">Taze malzemelerle hazırlanan günlük ev yemeği menülerimiz</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="ri-truck-line text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Ücretsiz Teslimat</h3>
              <p className="text-gray-600 text-center">Çankaya bölgesine hızlı ve güvenli teslimat</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <i className="ri-phone-line text-orange-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kolay Sipariş</h3>
              <p className="text-gray-600 text-center">Telefon ile pratik sipariş imkanı</p>
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Çalışma Saatleri</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pazartesi - Cumartesi</span>
                  <span className="font-semibold text-gray-800">11:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pazar</span>
                  <span className="font-semibold text-gray-800">Kapalı</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Sipariş alım saatleri: 11:00 - 18:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Bizim Hikayemiz
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Ağaçören Ev Yemekleri, doğal, katkısız ve geleneksel tariflerle ev yemeklerini 
                Ankara Çankaya'daki mutfağımızdan sizlere ulaştırıyor.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Lezzetin, emeğin ve paylaşmanın en güzel hali Ağaçören'den geliyor. 
                Her yemeğimiz özenle seçilmiş doğal malzemeler ile hazırlanır.
              </p>
              <Link href="/hakkimizda">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                  Daha Fazla Bilgi
                </button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Turkish%20family%20cooking%20together%20in%20traditional%20kitchen%2C%20three%20women%20preparing%20homemade%20food%2C%20warm%20lighting%2C%20authentic%20Turkish%20cuisine%2C%20traditional%20cooking%20methods%2C%20happy%20family%20atmosphere%2C%20wooden%20kitchen%20utensils%2C%20fresh%20ingredients%2C%20cultural%20cooking%20experience&width=600&height=400&seq=about-cooking&orientation=landscape"
                alt="Ağaçören Ev Yemekleri Ekibi"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              İletişim
            </h3>
            <p className="text-lg text-gray-600">
              Sipariş vermek veya bilgi almak için bizimle iletişime geçin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-orange-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adres</h4>
              <p className="text-gray-600">
                Öveçler Mahallesi, Kabil Caddesi No: 35/D<br />
                Çankaya / Ankara
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-orange-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Telefon</h4>
              <p className="text-gray-600">
                <a href="tel:+905452829734" className="text-orange-600 hover:text-orange-700">
                  0545 282 97 34
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-orange-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">E-posta</h4>
              <p className="text-gray-600">
                <a href="mailto:info@agacorenevyemekleri.com" className="text-orange-600 hover:text-orange-700">
                  info@agacorenevyemekleri.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Ağaçören Ev Yemekleri
              </h4>
              <p className="text-gray-400 mb-4">
                Ev yapımı tatlar, sevgiyle hazırlanmış tarifler
              </p>
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
              2024 Ağaçören Ev Yemekleri. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
