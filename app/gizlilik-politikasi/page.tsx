
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için önemlidir
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Son güncellenme: 01 Ocak 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Giriş</h2>
            <p className="text-gray-600 mb-6">
              Ağaçören Ev Yemekleri olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için son derece önemlidir. 
              Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda 
              kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Toplanan Bilgiler</h2>
            <p className="text-gray-600 mb-4">
              Sizden aşağıdaki bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Ad, soyad ve iletişim bilgileriniz</li>
              <li>E-posta adresi ve telefon numaranız</li>
              <li>Teslimat adresi bilgileriniz</li>
              <li>Sipariş geçmişiniz ve tercihleriniz</li>
              <li>Web sitesi kullanım bilgileriniz</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Bilgilerin Kullanımı</h2>
            <p className="text-gray-600 mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Siparişlerinizi işleme almak ve teslim etmek</li>
              <li>Müşteri hizmetleri sağlamak</li>
              <li>Hesabınızı yönetmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Hizmetlerimizi geliştirmek</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Çerezler (Cookies)</h2>
            <p className="text-gray-600 mb-4">
              Web sitemizde çerezler kullanmaktayız. Çerezler, web sitemizin daha iyi çalışmasını sağlamak 
              ve kullanıcı deneyimini geliştirmek için kullanılan küçük dosyalardır.
            </p>
            <p className="text-gray-600 mb-6">
              Çerez türleri:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Zorunlu çerezler:</strong> Web sitesinin temel işlevlerini sağlar</li>
              <li><strong>Analitik çerezler:</strong> Web sitesi trafiğini analiz eder</li>
              <li><strong>Fonksiyonel çerezler:</strong> Kullanıcı tercihlerini hatırlar</li>
              <li><strong>Pazarlama çerezler:</strong> Kişiselleştirilmiş reklamlar gösterir</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Bilgi Paylaşımı</h2>
            <p className="text-gray-600 mb-4">
              Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız. Ancak aşağıdaki durumlarda 
              bilgileriniz paylaşılabilir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Yasal zorunluluklar</li>
              <li>Mahkeme kararları</li>
              <li>Güvenlik amacıyla</li>
              <li>Hizmet sağlayıcılarımız ile (teslimat, ödeme vs.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Veri Güvenliği</h2>
            <p className="text-gray-600 mb-6">
              Kişisel verilerinizi korumak için teknik ve idari güvenlik önlemleri almaktayız. 
              Verileriniz SSL şifreleme teknolojisi ile korunmakta ve güvenli sunucularda saklanmaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Haklarınız</h2>
            <p className="text-gray-600 mb-4">
              KVKK kapsamında aşağıdaki haklarınız bulunmaktadır:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini isteme</li>
              <li>İşleme faaliyetlerine itiraz etme</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Google AdSense</h2>
            <p className="text-gray-600 mb-6">
              Web sitemizde Google AdSense reklamları bulunmaktadır. Google AdSense, 
              size ilgi alanınıza uygun reklamlar göstermek için çerezleri kullanır. 
              Bu reklamları kişiselleştirmek istemiyorsanız, Google'ın reklam ayarlarından 
              bu özelliği kapatabilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Üçüncü Taraf Bağlantılar</h2>
            <p className="text-gray-600 mb-6">
              Web sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. 
              Bu web sitelerinin gizlilik politikalarından sorumlu değiliz. 
              Bu siteleri ziyaret etmeden önce gizlilik politikalarını incelemenizi öneriyoruz.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Çocukların Gizliliği</h2>
            <p className="text-gray-600 mb-6">
              Hizmetlerimiz 13 yaşından küçük çocuklara yönelik değildir. 
              13 yaşından küçük çocuklardan bilerek kişisel bilgi toplamayız.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Değişiklikler</h2>
            <p className="text-gray-600 mb-6">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. 
              Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. İletişim</h2>
            <p className="text-gray-600 mb-4">
              Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">Ağaçören Ev Yemekleri</p>
              <p className="text-gray-600">Adres: Öveçler Mahallesi, Kabil Caddesi No: 35/D, Çankaya / Ankara</p>
              <p className="text-gray-600">Telefon: 0545 282 97 34</p>
              <p className="text-gray-600">E-posta: info@agacorenevyemekleri.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
