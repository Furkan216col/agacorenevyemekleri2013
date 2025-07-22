
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sipariş vermek veya sorularınız için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Adres</h3>
              <p className="text-gray-600">
                Öveçler Mahallesi, Kabil Caddesi No: 35/D<br />
                Çankaya / Ankara
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefon</h3>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-posta</h3>
              <p className="text-gray-600">
                <a href="mailto:info@agacorenevyemekleri.com" className="text-orange-600 hover:text-orange-700">
                  info@agacorenevyemekleri.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Bize Yazın
              </h2>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors resize-none"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 karakter
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium">
                    Mesajınız başarıyla gönderildi!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-medium">
                    Mesaj gönderilemedi. Lütfen tekrar deneyin.
                  </div>
                )}
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Konum
              </h2>
              <div className="bg-gray-200 rounded-lg h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7516665045377!2d32.8597!3d39.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a7a5c45%3A0x6f0c5f5e5f5f5f5f!2sKabil%20Cd.%2C%20%C3%96ve%C3%A7ler%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1703456789012!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Çalışma Saatleri</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <i className="ri-time-line text-orange-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Pazartesi - Cumartesi</p>
                      <p className="text-sm">11:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="ri-time-line text-orange-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Pazar</p>
                      <p className="text-sm">Kapalı</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Sipariş alım: 11:00 - 18:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hızlı Sipariş
            </h2>
            <p className="text-lg text-gray-600">
              Telefonla sipariş vermek için arayın
            </p>
          </div>
          <div className="text-center">
            <a href="tel:+905452829734">
              <button className="bg-orange-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                0545 282 97 34
              </button>
            </a>
            <p className="text-gray-600 mt-4">
              Telefon siparişleriniz için günün 24 saati arayabilirsiniz
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
