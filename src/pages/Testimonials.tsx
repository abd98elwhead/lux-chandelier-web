
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      nameEN: 'Mohammed Al-Amri',
      nameAR: 'محمد العمري',
      roleEN: 'Hotel Owner',
      roleAR: 'مالك فندق',
      textEN: 'They installed more than 15 chandeliers in our hotel. The quality was exceptional and the service was highly professional. I strongly recommend their services to anyone looking for luxury lighting solutions.',
      textAR: 'قاموا بتركيب أكثر من 15 ثريا في فندقنا. كانت الجودة استثنائية والخدمة احترافية للغاية. أوصي بشدة بخدماتهم لكل من يبحث عن حلول إضاءة فاخرة.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
    },
    {
      id: 2,
      nameEN: 'Sarah Al-Faisal',
      nameAR: 'سارة الفيصل',
      roleEN: 'Interior Designer',
      roleAR: 'مصممة داخلية',
      textEN: 'I work with them on all my projects. They provide luxury chandeliers with unique designs and professional installation service. A trusted partner for upscale projects.',
      textAR: 'أتعامل معهم في كل مشاريعي. يقدمون ثريات فاخرة بتصاميم فريدة وخدمة تركيب محترفة. شريك موثوق للمشاريع الراقية.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80'
    },
    {
      id: 3,
      nameEN: 'Abdullah Al-Qahtani',
      nameAR: 'عبدالله القحطاني',
      roleEN: 'Luxury Villa Owner',
      roleAR: 'مالك فيلا فاخرة',
      textEN: 'From the consultation to the installation, everything was perfect. The team was very knowledgeable and helped me choose the perfect chandeliers for each room in my villa.',
      textAR: 'من الاستشارة إلى التركيب، كان كل شيء مثاليًا. كان الفريق على دراية كبيرة وساعدني في اختيار الثريات المثالية لكل غرفة في فيلتي.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
    },
    {
      id: 4,
      nameEN: 'Fatima Al-Dosari',
      nameAR: 'فاطمة الدوسري',
      roleEN: 'Real Estate Developer',
      roleAR: 'مطورة عقارية',
      textEN: 'We use their services for all our luxury developments. Their chandeliers add significant value to our properties and always impress potential buyers.',
      textAR: 'نستخدم خدماتهم لجميع مشاريعنا الفاخرة. تضيف ثرياتهم قيمة كبيرة لعقاراتنا وتبهر دائمًا المشترين المحتملين.',
      image: 'https://images.unsplash.com/photo-1545912193-31ce2f0e9a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
    },
    {
      id: 5,
      nameEN: 'Khalid Al-Saud',
      nameAR: 'خالد آل سعود',
      roleEN: 'Business Owner',
      roleAR: 'رجل أعمال',
      textEN: 'The maintenance service they provide is excellent. My chandeliers still look brand new thanks to their regular cleaning and care.',
      textAR: 'خدمة الصيانة التي يقدمونها ممتازة. لا تزال الثريات الخاصة بي تبدو جديدة تمامًا بفضل التنظيف والعناية المنتظمة.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
    },
    {
      id: 6,
      nameEN: 'Nora Al-Ahmad',
      nameAR: 'نورة الأحمد',
      roleEN: 'Restaurant Owner',
      roleAR: 'مالكة مطعم',
      textEN: 'The custom chandelier they designed for our restaurant has become a conversation piece among our guests. It perfectly captures the essence of our brand.',
      textAR: 'أصبحت الثريا المخصصة التي صمموها لمطعمنا محور حديث بين ضيوفنا. إنها تعكس بشكل مثالي جوهر علامتنا التجارية.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
    },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('testimonials')}
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL
                ? 'اكتشف ما يقوله عملاؤنا عن تجربتهم معنا'
                : 'Discover what our clients say about their experience with us'}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={item.id}
                className="animate-fade-in"
                style={{animationDelay: `${0.1 + index * 0.1}s`}}
              >
                <TestimonialCard
                  name={isRTL ? item.nameAR : item.nameEN}
                  role={isRTL ? item.roleAR : item.roleEN}
                  text={isRTL ? item.textAR : item.textEN}
                  image={item.image}
                  isRTL={isRTL}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-12`}>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in">
              {isRTL ? 'شاركنا تجربتك' : 'Share Your Experience'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL
                ? 'نحن نقدر آراءك. شاركنا تجربتك مع ثرياتنا وخدماتنا.'
                : 'We value your feedback. Share your experience with our chandeliers and services.'}
            </p>
          </div>

          <div className="max-w-xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            <form className={`bg-white p-8 rounded-lg shadow-lg elegant-shadow ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-charcoal mb-2">
                  {isRTL ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-charcoal mb-2">
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-charcoal mb-2">
                  {isRTL ? 'المسمى الوظيفي / الشركة' : 'Title / Company'}
                </label>
                <input
                  type="text"
                  id="role"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="testimonial" className="block text-charcoal mb-2">
                  {isRTL ? 'شهادتك' : 'Your Testimonial'}
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white py-3 px-6 rounded hover:bg-gold-dark transition-colors duration-300"
              >
                {isRTL ? 'إرسال شهادتك' : 'Submit Testimonial'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
