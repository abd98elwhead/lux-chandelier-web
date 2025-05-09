
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(9);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', nameEN: 'All', nameAR: 'الكل' },
    { id: 'modern', nameEN: 'Modern', nameAR: 'عصري' },
    { id: 'classic', nameEN: 'Classic', nameAR: 'كلاسيكي' },
    { id: 'crystal', nameEN: 'Crystal', nameAR: 'كريستال' },
    { id: 'custom', nameEN: 'Custom', nameAR: 'مخصص' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'modern',
      imageUrl: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      titleEN: 'Modern Elegance',
      titleAR: 'أناقة عصرية',
      locationEN: 'Luxury Villa, Riyadh',
      locationAR: 'فيلا فاخرة، الرياض'
    },
    {
      id: 2,
      category: 'classic',
      imageUrl: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80',
      titleEN: 'Grand Classic',
      titleAR: 'كلاسيكي فخم',
      locationEN: 'Royal Palace, Jeddah',
      locationAR: 'قصر ملكي، جدة'
    },
    {
      id: 3,
      category: 'crystal',
      imageUrl: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      titleEN: 'Crystal Symphony',
      titleAR: 'سيمفونية كريستال',
      locationEN: 'Grand Hotel, Dubai',
      locationAR: 'فندق جراند، دبي'
    },
    {
      id: 4,
      category: 'modern',
      imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      titleEN: 'Contemporary Simplicity',
      titleAR: 'بساطة معاصرة',
      locationEN: 'Modern Apartment, Dammam',
      locationAR: 'شقة حديثة، الدمام'
    },
    {
      id: 5,
      category: 'custom',
      imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2880&q=80',
      titleEN: 'Bespoke Design',
      titleAR: 'تصميم مخصص',
      locationEN: 'Private Residence, Riyadh',
      locationAR: 'إقامة خاصة، الرياض'
    },
    {
      id: 6,
      category: 'crystal',
      imageUrl: 'https://images.unsplash.com/photo-1601824772624-3a61ff4f2c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
      titleEN: 'Crystal Cascade',
      titleAR: 'شلال كريستال',
      locationEN: 'Luxury Mall, Khobar',
      locationAR: 'مول فاخر، الخبر'
    },
    {
      id: 7,
      category: 'classic',
      imageUrl: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      titleEN: 'Vintage Charm',
      titleAR: 'سحر قديم',
      locationEN: 'Heritage Hotel, Riyadh',
      locationAR: 'فندق تراثي، الرياض'
    },
    {
      id: 8,
      category: 'modern',
      imageUrl: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      titleEN: 'Minimalist Elegance',
      titleAR: 'أناقة بسيطة',
      locationEN: 'Executive Office, Jeddah',
      locationAR: 'مكتب تنفيذي، جدة'
    },
    {
      id: 9,
      category: 'custom',
      imageUrl: 'https://images.unsplash.com/photo-1534581337411-48c845ec349d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      titleEN: 'Artistic Creation',
      titleAR: 'إبداع فني',
      locationEN: 'Art Gallery, Dubai',
      locationAR: 'معرض فني، دبي'
    },
    {
      id: 10,
      category: 'crystal',
      imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      titleEN: 'Multi-Tier Crystal',
      titleAR: 'كريستال متعدد الطبقات',
      locationEN: 'Luxury Restaurant, Riyadh',
      locationAR: 'مطعم فاخر، الرياض'
    },
    {
      id: 11,
      category: 'classic',
      imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      titleEN: 'Golden Opulence',
      titleAR: 'ترف ذهبي',
      locationEN: 'Royal Wedding Hall, Jeddah',
      locationAR: 'قاعة أفراح ملكية، جدة'
    },
    {
      id: 12,
      category: 'modern',
      imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      titleEN: 'Geometric Precision',
      titleAR: 'دقة هندسية',
      locationEN: 'Modern Home, Dammam',
      locationAR: 'منزل عصري، الدمام'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  return (
    <div className="pt-24">
      {/* Header - Updated title */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {isRTL ? 'تشكيلة أعمالنا' : 'Our Collection'}
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL
                ? 'استكشف مجموعتنا من الثريات الفاخرة ومشاريعنا السابقة'
                : 'Explore our collection of luxury chandeliers and previous projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          {/* Categories */}
          <div className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleItems(9);
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {isRTL ? category.nameAR : category.nameEN}
              </button>
            ))}
          </div>

          {/* Gallery Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <div 
                key={item.id} 
                className="animate-fade-in"
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow group">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={isRTL ? item.titleAR : item.titleEN}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {isRTL ? item.titleAR : item.titleEN}
                    </h3>
                    <p className="text-gold">
                      {isRTL ? item.locationAR : item.locationEN}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
              >
                {isRTL ? 'عرض المزيد' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
