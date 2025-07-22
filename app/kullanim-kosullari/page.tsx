
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kullanım Koşulları
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Hizmetlerimizi kullanırken uymanız gereken kurallar
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Son güncellenme: 01 Ocak 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Genel Koşullar</h2>
            <p className="text-gray-600 mb-6">
              Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. 
              Bu koşulları kabul etmiyorsanız, web sitemizi kullanmayınız.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Hizmet Tanımı</h2>
            <p className="text-gray-600 mb-6">
              Ağaçören Ev Yemekleri, ev yapımı yemek siparişi ve teslimat hizmeti sağlamaktadır. 
              Hizmetlerimiz Ankara Çankaya bölgesinde sunulmaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Sipariş Koşulları</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Siparişler telefon (0545 282 97 34) veya web sitesi üzerinden verilebilir</li>
              <li>Minimum sipariş tutarı 50 TL'dir</li>
              <li>Teslimat ücretsizdir</li>
              <li>Siparişler günlük menüye göre alınır</li>
              <li>Stok durumuna göre sipariş iptal edilebilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Ödeme Koşulları</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Ödeme teslimat sırasında nakit olarak yapılır</li>
              <li>Kredi kartı ile ödeme kabul edilmez</li>
              <li>Faturalar siparişle birlikte teslim edilir</li>
              <li>Fiyatlar güncel menüde belirtildiği gibidir</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Teslimat Koşulları</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Teslimat süresi 45-60 dakikadır</li>
              <li>Teslimat saatleri 11:00-19:00 arasındadır</li>
              <li>Hava koşulları teslimat süresini etkileyebilir</li>
              <li>Adres bulunamazsa müşteri ile iletişime geçilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. İptal ve İade Koşulları</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Siparişler hazırlığa geçmeden önce iptal edilebilir</li>
              <li>Yemek kalitesinde sorun varsa iade kabul edilir</li>
              <li>İade talepleri teslimat anında belirtilmelidir</li>
              <li>Haklı iade durumlarında ücret iadesi yapılır</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Kullanıcı Sorumlulukları</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Doğru iletişim bilgileri vermelisiniz</li>
              <li>Teslimat adresini net belirtmelisiniz</li>
              <li>Teslimat saatinde hazır bulunmalısınız</li>
              <li>Yemek alerjilerinizi bildirmelisiniz</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Gıda Güvenliği</h2>
            <p className="text-gray-600 mb-6">
              Tüm yemeklerimiz hijyen kurallarına uygun olarak hazırlanır. 
              Gıda güvenliği standartlarına tam uyum sağlanır. 
              Yemek alerjilerinizi mutlaka bildirmeniz gerekmektedir.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Fikri Mülkiyet</h2>
            <p className="text-gray-600 mb-6">
              Web sitesindeki tüm içerik, resimler ve tarifler Ağaçören Ev Yemekleri'nin 
              fikri mülkiyetindedir. İzinsiz kullanımı yasaktır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Sorumluluk Reddi</h2>
            <p className="text-gray-600 mb-6">
              Hizmet kesintileri, gecikmeler veya teknik sorunlardan doğacak zararlardan 
              sorumlu değiliz. Kullanıcıların kişisel bilgilerinin güvenliğini sağlamaya 
              çalışsak da, internet üzerinden iletilen bilgilerin %100 güvenli olduğunu 
              garanti edemeyiz.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Değişiklikler</h2>
            <p className="text-gray-600 mb-6">
              Bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkımız saklıdır. 
              Güncel koşullar web sitemizde yayınlanır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Uyuşmazlıklar</h2>
            <p className="text-gray-600 mb-6">
              Bu sözleşmeden doğacak uyuşmazlıklarda Ankara mahkemeleri yetkilidir. 
              Türkiye Cumhuriyeti kanunları uygulanır.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. İletişim</h2>
            <p className="text-gray-600 mb-4">
              Kullanım koşulları hakkında sorularınız için:
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
