
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-orange-600 cursor-pointer" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Ağaçören Ev Yemekleri
              </h1>
            </Link>
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

          <button 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
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
          </div>
        )}
      </div>
    </header>
  );
}
