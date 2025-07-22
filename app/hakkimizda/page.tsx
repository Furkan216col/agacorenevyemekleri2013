
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ağaçören'in geleneksel lezzetlerini modern hayata taşıyan hikayemiz
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Bizim Hikayemiz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ağaçören Ev Yemekleri, 2020 yılında Ankara Çankaya'da kurulmuştur. 
                Amacımız, Ağaçören'in geleneksel lezzetlerini ve ev yapımı yemeklerin 
                sıcaklığını modern şehir hayatına taşımaktır.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Doğal, katkısız ve geleneksel tariflerle hazırladığımız ev yemeklerini 
                Ankara Çankaya'daki mutfağımızdan sizlere ulaştırıyoruz. Her yemeğimiz 
                özenle seçilmiş malzemeler ve sevgiyle hazırlanır.
              </p>
              <p className="text-lg text-gray-600">
                Lezzetin, emeğin ve paylaşmanın en güzel hali Ağaçören'den geliyor. 
                Geleneksel Türk mutfağının zengin lezzetlerini modern hayatın 
                koşuşturmacası içinde size sunuyoruz.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20Turkish%20kitchen%20with%20wooden%20countertops%2C%20copper%20pots%2C%20fresh%20vegetables%2C%20herbs%2C%20homemade%20bread%2C%20warm%20natural%20lighting%2C%20authentic%20cooking%20atmosphere%2C%20rustic%20kitchen%20interior%2C%20traditional%20cooking%20utensils%2C%20cozy%20family%20kitchen%20environment&width=600&height=500&seq=story-kitchen&orientation=landscape"
                alt="Geleneksel Türk Mutfağı"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <i className="ri-restaurant-line text-orange-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Günlük Ev Yemeği</h3>
            <p className="text-gray-600">Taze malzemelerle hazırlanan günlük menülerimiz</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <i className="ri-truck-line text-orange-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Ücretsiz Teslimat</h3>
            <p className="text-gray-600">Çankaya bölgesine ücretsiz teslimat</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <i className="ri-phone-line text-orange-600 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Kolay Sipariş</h3>
            <p className="text-gray-600">Telefon ve online sipariş imkanı</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ekibimiz
            </h2>
            <p className="text-lg text-gray-600">
              Lezzetli yemeklerinizi hazırlayan deneyimli ekibimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Turkish%20woman%20chef%20in%20traditional%20kitchen%2C%20smiling%2C%20wearing%20apron%2C%20middle-aged%2C%20warm%20lighting%2C%20authentic%20cooking%20environment%2C%20traditional%20Turkish%20cuisine%20preparation%2C%20professional%20portrait%20style&width=300&height=300&seq=chef-zeynep&orientation=squarish"
                alt="Zeynep Doğan Güzel"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Zeynep Doğan Güzel</h3>
              <p className="text-orange-600 font-medium mb-4">Kurucu Ortağı & Baş Aşçı</p>
              <p className="text-gray-600">
                20 yıllık mutfak deneyimi ile geleneksel Türk mutfağının 
                ustası. Ağaçören'in yöresel lezzetlerinin en iyi yorumcusu.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Turkish%20man%20chef%20in%20kitchen%2C%20smiling%2C%20wearing%20chef%20hat%2C%20middle-aged%2C%20warm%20lighting%2C%20authentic%20cooking%20environment%2C%20traditional%20Turkish%20cuisine%20preparation%2C%20professional%20portrait%20style&width=300&height=300&seq=chef-cagri&orientation=squarish"
                alt="Çağrı Doğan Güzel"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Çağrı Doğan Güzel</h3>
              <p className="text-orange-600 font-medium mb-4">Kurucu Ortağı & Yönetici</p>
              <p className="text-gray-600">
                İşletme yönetimi ve müşteri memnuniyetinden sorumlu. 
                Siparişlerinizin en kaliteli şekilde hazırlanmasını sağlar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Turkish%20woman%20chef%20in%20kitchen%2C%20smiling%2C%20wearing%20chef%20apron%2C%20young%2C%20warm%20lighting%2C%20authentic%20cooking%20environment%2C%20traditional%20Turkish%20cuisine%20preparation%2C%20professional%20portrait%20style&width=300&height=300&seq=chef-tugba&orientation=squarish"
                alt="Tuğba Erdem"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tuğba Erdem</h3>
              <p className="text-orange-600 font-medium mb-4">Kurucu Ortağı & Tatlı Uzmanı</p>
              <p className="text-gray-600">
                Geleneksel Türk tatlıları ve çorbaların hazırlanmasında 
                uzman. Ev yapımı tatlılarımızın yaratıcısı.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Çalışma Saatleri</h2>
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Bizi farklı kılan değerler ve ilkelerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sevgi</h3>
              <p className="text-gray-600">
                Her yemeğimiz sevgiyle hazırlanır ve size ulaşır
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Doğallık</h3>
              <p className="text-gray-600">
                Sadece doğal ve katkısız malzemeler kullanırız
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kalite</h3>
              <p className="text-gray-600">
                En yüksek kalite standartlarını koruruz
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Geleneksel</h3>
              <p className="text-gray-600">
                Geçmişten gelen geleneksel tarifleri koruruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ağaçören'in geleneksel lezzetlerini modern hayata taşımak ve 
                ev yapımı yemeklerin sıcaklığını herkese ulaştırmak temel misyonumuz.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Doğal malzemeler kullanarak, geleneksel yöntemlerle hazırladığımız 
                yemeklerle sizlere sağlıklı ve lezzetli alternatifler sunuyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Müşteri memnuniyeti odaklı hizmet anlayışımızla, her siparişte 
                aynı kalitede ve lezzette yemekler hazırlamayı amaçlıyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Vizyonumuz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ankara'nın en güvenilir ve tercih edilen ev yemekleri markası 
                olmak vizyonumuzdur.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Geleneksel Türk mutfağının zengin lezzetlerini gelecek nesillere 
                aktarmak ve ev yapımı yemeklerin kültürünü yaşatmak istiyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Sürdürülebilir ve çevre dostu üretim yöntemleriyle, 
                toplumsal sorumluluğumuzu yerine getiren bir marka olmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lezzetli Yemeklerimizi Deneyin
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ağaçören'in geleneksel lezzetlerini deneyimlemek için hemen sipariş verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Menüyü İncele
              </button>
            </Link>
            <Link href="/iletisim">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap">
                İletişime Geç
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
