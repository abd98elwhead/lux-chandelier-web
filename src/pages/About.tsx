
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('about')}
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {t('section-about-subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'} animate-fade-in`}>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                {isRTL ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-gray-600 mb-4">
                {isRTL 
                  ? 'تأسست شركتنا في عام 2005 بهدف واحد: تقديم أفضل الثريات الفاخرة للمساحات المميزة. بدأنا كمتجر صغير في قلب المدينة، وسرعان ما توسعت أعمالنا لتشمل الاستشارات وخدمات التركيب.'
                  : 'Our company was founded in 2005 with one goal: providing the finest luxury chandeliers for distinguished spaces. We started as a small shop in the heart of the city, and quickly expanded our business to include consultation and installation services.'}
              </p>
              <p className="text-gray-600">
                {isRTL 
                  ? 'على مدار السنوات، أصبحنا المزود الرئيسي للثريات الفاخرة للفنادق والقصور والمساحات التجارية الراقية في المملكة. نحن نفخر بتقديم الجودة والأناقة في كل تفاصيل عملنا.'
                  : 'Over the years, we have become the premier provider of luxury chandeliers for hotels, palaces, and upscale commercial spaces in the Kingdom. We take pride in delivering quality and elegance in every detail of our work.'}
              </p>
            </div>
            <div className={`${isRTL ? 'order-1' : 'order-2'} animate-fade-in`} style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Our Story" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`bg-white p-8 rounded-lg shadow-lg elegant-shadow ${isRTL ? 'text-right' : 'text-left'} animate-fade-in`}>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {isRTL ? 'مهمتنا' : 'Our Mission'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'مهمتنا هي إضاءة المساحات بتصاميم فريدة وأنيقة تتجاوز التوقعات. نحن نهدف إلى تحويل أي مكان إلى تحفة فنية من خلال الإضاءة الاستثنائية والتفاصيل الدقيقة، مع التزامنا المطلق بالجودة والخدمة.'
                  : 'Our mission is to illuminate spaces with unique and elegant designs that exceed expectations. We aim to transform any place into a work of art through exceptional lighting and meticulous details, with our absolute commitment to quality and service.'}
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-white p-8 rounded-lg shadow-lg elegant-shadow ${isRTL ? 'text-right' : 'text-left'} animate-fade-in`} style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {isRTL ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'نتطلع إلى أن نكون الخيار الأول في مجال الإضاءة الفاخرة، معروفين بالابتكار والتفرد. نسعى لتوسيع بصمتنا عالميًا وإلهام الناس من خلال الجمع بين الحرفية التقليدية والتصميم المعاصر.'
                  : 'We aspire to be the first choice in luxury lighting, known for innovation and uniqueness. We seek to expand our global footprint and inspire people by combining traditional craftsmanship with contemporary design.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16`}>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in">
              {isRTL ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL 
                ? 'مبادئ أساسية ترشد كل ما نقوم به'
                : 'Core principles that guide everything we do'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className={`${isRTL ? 'text-right' : 'text-left'} animate-fade-in`} style={{animationDelay: '0.3s'}}>
              <div className="bg-gold w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {isRTL ? 'الجودة' : 'Quality'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'نلتزم بتقديم منتجات وخدمات استثنائية تتجاوز توقعات عملائنا. نستخدم فقط أفضل المواد ونعمل مع أمهر الحرفيين.'
                  : 'We are committed to delivering exceptional products and services that exceed our customers\' expectations. We use only the finest materials and work with the most skilled artisans.'}
              </p>
            </div>

            {/* Value 2 */}
            <div className={`${isRTL ? 'text-right' : 'text-left'} animate-fade-in`} style={{animationDelay: '0.4s'}}>
              <div className="bg-gold w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {isRTL ? 'الابتكار' : 'Innovation'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'نسعى باستمرار إلى تطوير أنفسنا وتقديم تصاميم فريدة وحلول مبتكرة. نجمع بين التقاليد العريقة والتقنيات الحديثة.'
                  : 'We constantly strive to develop ourselves and offer unique designs and innovative solutions. We combine venerable traditions with modern techniques.'}
              </p>
            </div>

            {/* Value 3 */}
            <div className={`${isRTL ? 'text-right' : 'text-left'} animate-fade-in`} style={{animationDelay: '0.5s'}}>
              <div className="bg-gold w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {isRTL ? 'خدمة العملاء' : 'Customer Service'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'نضع عملاءنا في قلب كل ما نقوم به. نستمع ونتفهم احتياجاتهم الفريدة ونسعى جاهدين لتقديم تجربة استثنائية.'
                  : 'We place our customers at the heart of everything we do. We listen to and understand their unique needs and strive to provide an exceptional experience.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16`}>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in">
              {isRTL ? 'فريقنا' : 'Our Team'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL 
                ? 'تعرف على الخبراء الذين يقفون وراء تصاميمنا وتركيباتنا الاستثنائية'
                : 'Meet the experts behind our exceptional designs and installations'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {isRTL ? 'أحمد الخالدي' : 'Ahmed Al-Khalidi'}
                </h3>
                <p className="text-gold mb-3">
                  {isRTL ? 'المدير التنفيذي' : 'CEO & Founder'}
                </p>
                <p className="text-gray-600">
                  {isRTL 
                    ? 'خبرة 20 عامًا في مجال الإضاءة الفاخرة والتصميم الداخلي.'
                    : '20 years of experience in luxury lighting and interior design.'}
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {isRTL ? 'نورة الحربي' : 'Noura Al-Harbi'}
                </h3>
                <p className="text-gold mb-3">
                  {isRTL ? 'مديرة التصميم' : 'Design Director'}
                </p>
                <p className="text-gray-600">
                  {isRTL 
                    ? 'مصممة موهوبة بخلفية في الهندسة المعمارية والتصميم الداخلي.'
                    : 'Talented designer with a background in architecture and interior design.'}
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {isRTL ? 'خالد الراشد' : 'Khalid Al-Rashid'}
                </h3>
                <p className="text-gold mb-3">
                  {isRTL ? 'مدير التركيب' : 'Installation Manager'}
                </p>
                <p className="text-gray-600">
                  {isRTL 
                    ? 'خبير تقني بخبرة 15 عامًا في تركيب الإضاءة الفاخرة.'
                    : 'Technical expert with 15 years of experience in luxury lighting installation.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
