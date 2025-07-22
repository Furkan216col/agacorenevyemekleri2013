
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  const [acceptedCookies, setAcceptedCookies] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const handleCookieToggle = (cookieType: string) => {
    if (cookieType === 'necessary') return; // Necessary cookies cannot be disabled
    
    setAcceptedCookies(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Çerez Politikası
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Web sitemizde kullanılan çerezler hakkında bilgi
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Son güncellenme: 01 Ocak 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Çerez Nedir?</h2>
            <p className="text-gray-600 mb-6">
              Çerezler, web sitelerini ziyaret ettiğinizde cihazınızda (bilgisayar, tablet, telefon) 
              saklanan küçük metin dosyalarıdır. Çerezler, web sitesinin daha iyi çalışmasını sağlamak 
              ve kullanıcı deneyimini geliştirmek için kullanılır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Çerez Türleri</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Zorunlu Çerezler</h3>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={acceptedCookies.necessary}
                      disabled
                      className="mr-2 w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-500">Her zaman aktif</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Bu çerezler web sitesinin temel işlevlerini yerine getirmek için gereklidir. 
                  Güvenlik, form gönderimi ve temel navigasyon gibi işlemler için kullanılır. 
                  Bu çerezler kapatılamaz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Fonksiyonel Çerezler</h3>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={acceptedCookies.functional}
                      onChange={() => handleCookieToggle('functional')}
                      className="mr-2 w-5 h-5 text-orange-600 rounded focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">İsteğe bağlı</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Bu çerezler, kullanıcı tercihlerini hatırlamak ve kişiselleştirilmiş deneyim sunmak 
                  için kullanılır. Dil seçimi, tema tercihleri gibi ayarları saklar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Analitik Çerezler</h3>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={acceptedCookies.analytics}
                      onChange={() => handleCookieToggle('analytics')}
                      className="mr-2 w-5 h-5 text-orange-600 rounded focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">İsteğe bağlı</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Bu çerezler, web sitesi trafiğini analiz etmek ve kullanıcı davranışlarını anlamak 
                  için kullanılır. Google Analytics gibi araçlar bu çerezleri kullanır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Pazarlama Çerezleri</h3>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={acceptedCookies.marketing}
                      onChange={() => handleCookieToggle('marketing')}
                      className="mr-2 w-5 h-5 text-orange-600 rounded focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">İsteğe bağlı</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Bu çerezler, size özel reklamlar göstermek ve pazarlama kampanyalarının 
                  etkinliğini ölçmek için kullanılır. Google AdSense bu çerezleri kullanır.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Kullandığımız Çerezler</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Çerez Adı</th>
                    <th className="border border-gray-300 p-3 text-left">Türü</th>
                    <th className="border border-gray-300 p-3 text-left">Süresi</th>
                    <th className="border border-gray-300 p-3 text-left">Amacı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">session_id</td>
                    <td className="border border-gray-300 p-3">Zorunlu</td>
                    <td className="border border-gray-300 p-3">Oturum</td>
                    <td className="border border-gray-300 p-3">Kullanıcı oturumunu yönetir</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">csrf_token</td>
                    <td className="border border-gray-300 p-3">Zorunlu</td>
                    <td className="border border-gray-300 p-3">Oturum</td>
                    <td className="border border-gray-300 p-3">Güvenlik için kullanılır</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">user_preferences</td>
                    <td className="border border-gray-300 p-3">Fonksiyonel</td>
                    <td className="border border-gray-300 p-3">1 yıl</td>
                    <td className="border border-gray-300 p-3">Kullanıcı tercihlerini saklar</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_ga</td>
                    <td className="border border-gray-300 p-3">Analitik</td>
                    <td className="border border-gray-300 p-3">2 yıl</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_gid</td>
                    <td className="border border-gray-300 p-3">Analitik</td>
                    <td className="border border-gray-300 p-3">24 saat</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_ads_</td>
                    <td className="border border-gray-300 p-3">Pazarlama</td>
                    <td className="border border-gray-300 p-3">30 gün</td>
                    <td className="border border-gray-300 p-3">Google AdSense</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Google AdSense Çerezleri</h2>
            <p className="text-gray-600 mb-6">
              Web sitemizde Google AdSense reklamları bulunmaktadır. Google AdSense, 
              size ilgi alanınıza uygun reklamlar göstermek için çerezleri kullanır. 
              Bu çerezleri yönetmek için Google'ın reklam ayarlarını ziyaret edebilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Çerezleri Nasıl Kontrol Edersiniz?</h2>
            <p className="text-gray-600 mb-4">
              Çerezleri kontrol etmek için aşağıdaki yöntemleri kullanabilirsiniz:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Tarayıcı ayarlarından çerezleri devre dışı bırakabilirsiniz</li>
              <li>Mevcut çerezleri silebilirsiniz</li>
              <li>Çerez bildirimleri alabilirsiniz</li>
              <li>Yukarıdaki çerez tercihlerini güncelleyebilirsiniz</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Tarayıcı Ayarları</h2>
            <p className="text-gray-600 mb-4">
              Popüler tarayıcılarda çerez ayarlarına erişim:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
              <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
              <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
              <li><strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Çerez Güncellemeleri</h2>
            <p className="text-gray-600 mb-6">
              Bu çerez politikasını zaman zaman güncelleyebiliriz. 
              Değişiklikler bu sayfada yayınlanacaktır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. İletişim</h2>
            <p className="text-gray-600 mb-4">
              Çerez politikamız hakkında sorularınız için:
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">Ağaçören Ev Yemekleri</p>
              <p className="text-gray-600">Adres: Öveçler Mahallesi, Kabil Caddesi No: 35/D, Çankaya / Ankara</p>
              <p className="text-gray-600">Telefon: 0545 282 97 34</p>
              <p className="text-gray-600">E-posta: info@agacorenevyemekleri.com</p>
            </div>

            <div className="mt-12 bg-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Çerez Tercihlerinizi Kaydedin</h3>
              <p className="text-gray-600 mb-4">
                Yukarıda yaptığınız çerez tercihleriniz kaydedilmiştir. 
                Bu tercihleri istediğiniz zaman değiştirebilirsiniz.
              </p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                Tercihleri Kaydet
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
