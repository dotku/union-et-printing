'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Professional Printing Services',
    'hero.subtitle': 'Serving San Francisco',
    'hero.description': 'Quality printing and folding services - Local pickup in SF or ship anywhere',

    // Services
    'services.title': 'Our Services',
    'services.printing': 'Printing Services',
    'services.folding': 'Folding Services',
    'services.printing.1': 'Business cards and brochures',
    'services.printing.2': 'Flyers and posters',
    'services.printing.3': 'Large format printing',
    'services.printing.4': 'Marketing materials',
    'services.printing.5': 'Custom printing solutions',
    'services.folding.1': 'Tri-fold brochures',
    'services.folding.2': 'Bi-fold materials',
    'services.folding.3': 'Z-fold documents',
    'services.folding.4': 'Gate fold presentations',
    'services.folding.5': 'Custom folding options',

    // About
    'about.title': 'About Us',
    'about.p1': 'Union ET Printing Service is your trusted partner for professional printing and folding services in San Francisco. We are committed to delivering high-quality printing solutions that meet your business needs, with local service in SF and shipping options for remote customers.',
    'about.p2': 'With years of experience and state-of-the-art equipment, we ensure every project is completed with precision and care. From small business cards to large format prints, we handle it all.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.location': 'Location',
    'contact.location.value': '44 Montgomery St, San Francisco, CA 94104',
    'contact.phone': 'Phone',
    'contact.phone.value': '(415) 851-1937',
    'contact.service.area': 'Service Area',
    'contact.service.serve': 'We serve:',
    'contact.service.local': 'San Francisco city (local service)',
    'contact.service.remote': 'Remote orders with shipping available',
    'contact.quote': 'Get a Quote',
    'contact.quote.text': 'Contact us today for a free quote on your printing needs.',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Sample prints and finished products',

    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Competitive rates for San Francisco Bay Area',
    'pricing.basic': 'Basic Printing',
    'pricing.basic.desc': 'Standard printing services',
    'pricing.basic.1': 'Business cards (500)',
    'pricing.basic.2': 'Flyers (100)',
    'pricing.basic.3': 'Brochures (50)',
    'pricing.basic.4': 'Standard turnaround',
    'pricing.professional': 'Professional',
    'pricing.professional.desc': 'Premium quality printing',
    'pricing.professional.1': 'Premium paper stock',
    'pricing.professional.2': 'Large format prints',
    'pricing.professional.3': 'Custom folding',
    'pricing.professional.4': 'Fast turnaround',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterprise.desc': 'Bulk orders and custom solutions',
    'pricing.enterprise.1': 'Volume discounts',
    'pricing.enterprise.2': 'Dedicated support',
    'pricing.enterprise.3': 'Custom specifications',
    'pricing.enterprise.4': 'Priority processing',
    'pricing.contact': 'Contact for Quote',
    'pricing.starting': 'Starting at',

    // Footer
    'footer.rights': 'Union ET Printing Service. All rights reserved.',
    'footer.tagline': 'Professional Printing and Folding Services in San Francisco | Shipping Available',
  },
  zh: {
    // Navigation
    'nav.services': '服务',
    'nav.gallery': '作品展示',
    'nav.pricing': '价格',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',

    // Hero
    'hero.title': '专业印刷服务',
    'hero.subtitle': '服务旧金山',
    'hero.description': '优质印刷和折叠服务 - 旧金山本地取货或全国配送',

    // Services
    'services.title': '我们的服务',
    'services.printing': '印刷服务',
    'services.folding': '折叠服务',
    'services.printing.1': '名片和宣传册',
    'services.printing.2': '传单和海报',
    'services.printing.3': '大幅面印刷',
    'services.printing.4': '营销材料',
    'services.printing.5': '定制印刷方案',
    'services.folding.1': '三折页宣传册',
    'services.folding.2': '对折材料',
    'services.folding.3': 'Z字折叠文件',
    'services.folding.4': '门折演示文稿',
    'services.folding.5': '定制折叠选项',

    // About
    'about.title': '关于我们',
    'about.p1': 'Union ET 印刷服务是您在旧金山专业印刷和折叠服务的可靠合作伙伴。我们致力于提供满足您业务需求的高质量印刷解决方案，为旧金山本地客户提供服务，并为远程客户提供配送选项。',
    'about.p2': '凭借多年的经验和先进的设备，我们确保每个项目都能精确细致地完成。从小型名片到大幅面印刷，我们应有尽有。',

    // Contact
    'contact.title': '联系我们',
    'contact.location': '位置',
    'contact.location.value': '44 Montgomery St, San Francisco, CA 94104',
    'contact.phone': '电话',
    'contact.phone.value': '+1 (415) 923-1212',
    'contact.service.area': '服务区域',
    'contact.service.serve': '我们提供服务：',
    'contact.service.local': '旧金山市（本地服务）',
    'contact.service.remote': '远程订单可配送',
    'contact.quote': '获取报价',
    'contact.quote.text': '立即联系我们，免费获取您的印刷需求报价。',

    // Gallery
    'gallery.title': '我们的作品',
    'gallery.subtitle': '样品打印和成品展示',

    // Pricing
    'pricing.title': '价格',
    'pricing.subtitle': '旧金山湾区竞争力价格',
    'pricing.basic': '基础印刷',
    'pricing.basic.desc': '标准印刷服务',
    'pricing.basic.1': '名片（500张）',
    'pricing.basic.2': '传单（100张）',
    'pricing.basic.3': '宣传册（50份）',
    'pricing.basic.4': '标准交付时间',
    'pricing.professional': '专业版',
    'pricing.professional.desc': '优质印刷',
    'pricing.professional.1': '高级纸张',
    'pricing.professional.2': '大幅面印刷',
    'pricing.professional.3': '定制折叠',
    'pricing.professional.4': '快速交付',
    'pricing.enterprise': '企业版',
    'pricing.enterprise.desc': '批量订单和定制方案',
    'pricing.enterprise.1': '批量折扣',
    'pricing.enterprise.2': '专属客服',
    'pricing.enterprise.3': '定制规格',
    'pricing.enterprise.4': '优先处理',
    'pricing.contact': '联系获取报价',
    'pricing.starting': '起价',

    // Footer
    'footer.rights': 'Union ET 印刷服务。版权所有。',
    'footer.tagline': '旧金山专业印刷和折叠服务 | 可配送',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>('en');

  // Initialize language from URL path on mount
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    if (langFromPath === 'zh' || langFromPath === 'en') {
      setLanguageState(langFromPath);
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Navigate to the new language path
    router.push(`/${lang}`);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
