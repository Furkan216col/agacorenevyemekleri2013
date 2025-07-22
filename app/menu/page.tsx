
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('pilav-makarna');

  const menuCategories = {
    'pilav-makarna': {
      title: 'Pilav - Makarna',
      items: [
        { name: 'Bulgur Pilavı', price: 70, description: 'Geleneksel bulgur pilavı' },
        { name: 'Pirinç Pilavı', price: 70, description: 'Taze pirinç pilavı' },
        { name: 'Makarna', price: 70, description: 'Soslu makarna' }
      ]
    },
    'ayrilmaz-ikili': {
      title: 'Ayrılmaz İkili',
      items: [
        { name: 'Kuru Fasulye - Pilav', price: 175, description: 'Etli kuru fasulye ve pilav' },
        { name: 'Nohut - Pilav', price: 175, description: 'Etli nohut ve pilav' },
        { name: 'Köfte Ekmek - Ayran', price: 200, description: 'Köfte ekmek ve ayran' },
        { name: 'Kavurma - Pilav', price: 280, description: 'Sulu kavurma ve pilav' }
      ]
    },
    'icecekler': {
      title: 'İçecekler',
      items: [
        { name: 'Kola', price: 40, description: 'Soğuk kola' },
        { name: 'Ayran', price: 25, description: 'Taze ayran' },
        { name: 'Su', price: 10, description: 'Su' },
        { name: 'Ice Tea', price: 40, description: 'Soğuk ice tea' },
        { name: 'Sade Soda', price: 40, description: 'Sade soda' }
      ]
    },
    'kombine-menuler': {
      title: 'Kombine Menüler',
      items: [
        { name: 'Çorba + Bakiyat-Sebze Yemeği + Pilav + Salata', price: 200, description: 'Tam menü' },
        { name: 'Çorba + Tavuk-Sofa + Pilav + Salata', price: 220, description: 'Tavuklu menü' },
        { name: 'Çorba + Orman/Tas Kebabı + Pilav + Salata', price: 270, description: 'Kebaplı menü' },
        { name: 'Çorba + Kavurma + Pilav + Salata', price: 300, description: 'Kavurmalı menü' },
        { name: 'Gün Tabağı', price: 160, description: 'Günün özel menüsü' },
        { name: 'Köy - Patates Salatası - Börek - Kurubiye', price: 160, description: 'Köy kahvaltısı' }
      ]
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
              Günlük Menümüz
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Taze malzemelerle hazırlanan ev yemeklerimiz
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === key
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-600">{item.price}₺</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                  Sipariş Ver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Günlük Menü</h3>
              <p className="text-gray-600">
                Menümüz her gün güncellenir. Taze malzemeler ile hazırlanan yemekler.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Doğal Malzemeler</h3>
              <p className="text-gray-600">
                Tüm yemeklerimizde doğal ve katkısız malzemeler kullanılır.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Taze Hazırlık</h3>
              <p className="text-gray-600">
                Tüm yemeklerimiz günlük olarak taze taze hazırlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sipariş Bilgileri
            </h2>
            <p className="text-lg text-gray-600">
              Sipariş vermek için aşağıdaki bilgileri dikkate alın
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <i className="ri-money-dollar-circle-line text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Minimum Sipariş</h3>
              <p className="text-gray-600">100₺</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <i className="ri-truck-line text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Teslimat</h3>
              <p className="text-gray-600">Ücretsiz</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <i className="ri-time-line text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Teslimat Süresi</h3>
              <p className="text-gray-600">45-60 dk</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <i className="ri-phone-line text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sipariş Hattı</h3>
              <p className="text-gray-600">0545 282 97 34</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Sipariş Verin
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Lezzetli ev yemeklerimizi denemek için hemen arayın
          </p>
          <a href="tel:+905452829734">
            <button className="bg-white text-orange-600 px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              0545 282 97 34
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
