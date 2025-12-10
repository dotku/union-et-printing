'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = [
    '/images/3025da7daaabfef104ec063a74013e83.jpg',
    '/images/3d8370e17f9e30b343c9d642f02f4ac1.jpg',
    '/images/43666db93757e349e2f75dc03f5fdaef.jpg',
    '/images/4e93921acb79f330ede701a0a429a39b.jpg',
    '/images/7d46c02dcf13f808d3ea0e6369adc647.jpg',
    '/images/7d9228d7a2b7a3f797bf9d81802638c3.jpg',
    '/images/a6ea4c2a47a63aad4c0bad466ef6bcb5.jpg',
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold">Union ET Printing Service</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                <a href="#services" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">{t('nav.services')}</a>
                <a href="#gallery" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">{t('nav.gallery')}</a>
                <a href="#pricing" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">{t('nav.pricing')}</a>
                <a href="#about" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">{t('nav.about')}</a>
                <a href="#contact" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">{t('nav.contact')}</a>
              </div>
              <div className="ml-4 flex items-center space-x-2 border-l border-blue-700 pl-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-blue-700 text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'zh' ? 'bg-blue-700 text-white' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  中文
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'en' ? 'bg-blue-700 text-white' : 'text-blue-200'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    language === 'zh' ? 'bg-blue-700 text-white' : 'text-blue-200'
                  }`}
                >
                  中文
                </button>
              </div>

              {/* Hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#gallery"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.gallery')}
              </a>
              <a
                href="#pricing"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.pricing')}
              </a>
              <a
                href="#about"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#contact"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h2>
          <p className="text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('services.printing')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.printing.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.printing.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.printing.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.printing.4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.printing.5')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('services.folding')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.folding.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.folding.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.folding.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.folding.4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t('services.folding.5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">{t('gallery.title')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('gallery.subtitle')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`Printing sample ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">{t('pricing.title')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('pricing.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{t('pricing.basic')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.basic.desc')}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$89</span>
                <span className="text-gray-600">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.basic.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.basic.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.basic.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.basic.4')}</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">{t('pricing.starting')}</p>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform scale-105">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.professional')}</h3>
              <p className="text-blue-200 mb-6">{t('pricing.professional.desc')}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-blue-200">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('pricing.professional.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('pricing.professional.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('pricing.professional.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('pricing.professional.4')}</span>
                </li>
              </ul>
              <p className="text-sm text-blue-200">{t('pricing.starting')}</p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{t('pricing.enterprise')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.enterprise.desc')}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{t('pricing.contact')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.enterprise.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.enterprise.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.enterprise.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{t('pricing.enterprise.4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">{t('about.title')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-700">
              {t('about.p2')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{t('contact.title')}</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-blue-900">{t('contact.location')}</h3>
                  <p>{t('contact.location.value')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-blue-900">{t('contact.phone')}</h3>
                  <p>
                    <a href={`tel:${t('contact.phone.value')}`} className="hover:text-blue-600 transition-colors">
                      {t('contact.phone.value')}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-blue-900">{t('contact.service.area')}</h3>
                  <p>{t('contact.service.serve')}</p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• {t('contact.service.local')}</li>
                    <li>• {t('contact.service.remote')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-blue-900">{t('contact.quote')}</h3>
                  <p>{t('contact.quote.text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <p className="text-sm mt-2">
            {t('footer.tagline')}
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
