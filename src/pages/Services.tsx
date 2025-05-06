
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service icons
  const serviceIcons = [
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 12.0001M14 11.9976C14 14.4893 11.683 16.9953 8.85714 16.9953C8.52241 16.9953 7.41904 16.9953 7.14286 16.9953C4.30254 16.9953 2 14.7577 2 12.0001M14 11.9976L22 12.0001M2 12.0001H22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V15M10.293 7.293L12 5.586L13.707 7.293C14.077 7.663 14.523 7.9389 15.0148 8.0982C15.5067 8.2575 16.0322 8.2961 16.5432 8.211C17.0542 8.1259 17.5336 7.9197 17.9397 7.6106C18.3459 7.3015 18.6671 6.8986 18.8747 6.4402M3 3L21 21M13.1962 13.1962C12.8045 13.6398 12.2384 13.9109 11.6325 13.9588C11.0267 14.0068 10.4244 13.8284 9.95548 13.4587C9.48653 13.0889 9.18361 12.5526 9.11394 11.9647C9.04427 11.3768 9.2142 10.7796 9.58062 10.3069M10.5 5.5L4 12L10.5 18.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  ];

  const services = [
    {
      icon: serviceIcons[0],
      titleEN: 'Luxury Chandelier Installation',
      titleAR: 'تركيب الثريات الفاخرة',
      descEN: 'Our professional team carefully installs chandeliers of all sizes, ensuring proper placement, secure mounting, and perfect alignment. We handle everything from electrical wiring to final adjustments.',
      descAR: 'يقوم فريقنا المحترف بتركيب الثريات من جميع الأحجام بعناية، مما يضمن التموضع المناسب والتثبيت الآمن والمحاذاة المثالية. نتعامل مع كل شيء من الأسلاك الكهربائية إلى التعديلات النهائية.'
    },
    {
      icon: serviceIcons[1],
      titleEN: 'Lighting Consultation',
      titleAR: 'استشارات الإضاءة',
      descEN: 'Our design experts provide personalized consultation sessions to help you choose the perfect lighting solutions for your space. We consider room dimensions, ceiling height, interior style, and your personal preferences.',
      descAR: 'يقدم خبراء التصميم لدينا جلسات استشارية مخصصة لمساعدتك في اختيار حلول الإضاءة المثالية لمساحتك. نأخذ في الاعتبار أبعاد الغرفة وارتفاع السقف والنمط الداخلي وتفضيلاتك الشخصية.'
    },
    {
      icon: serviceIcons[2],
      titleEN: 'Maintenance & Cleaning',
      titleAR: 'الصيانة والتنظيف',
      descEN: 'Keep your chandeliers looking pristine with our professional maintenance and cleaning services. We carefully dismantle, clean, and reassemble each component, ensuring your lighting fixtures maintain their brilliance.',
      descAR: 'حافظ على مظهر الثريات الخاصة بك نظيفًا مع خدمات الصيانة والتنظيف الاحترافية لدينا. نقوم بتفكيك كل مكون وتنظيفه وإعادة تجميعه بعناية، مما يضمن احتفاظ تركيبات الإضاءة الخاصة بك ببريقها.'
    },
    {
      icon: serviceIcons[3],
      titleEN: 'Custom Design Services',
      titleAR: 'خدمات التصميم المخصص',
      descEN: 'Create a truly unique lighting piece with our custom design service. Our designers work closely with you to bring your vision to life, from initial concept sketches to the final magnificent chandelier.',
      descAR: 'قم بإنشاء قطعة إضاءة فريدة حقًا مع خدمة التصميم المخصصة لدينا. يعمل مصممونا بشكل وثيق معك لتحويل رؤيتك إلى حقيقة، من رسومات المفهوم الأولية إلى الثريا النهائية الرائعة.'
    },
    {
      icon: serviceIcons[4],
      titleEN: 'Lighting Retrofitting',
      titleAR: 'تحديث أنظمة الإضاءة',
      descEN: 'Update your existing lighting systems with modern, energy-efficient solutions while maintaining the elegance of your chandeliers. We specialize in LED conversions and smart lighting integration.',
      descAR: 'قم بتحديث أنظمة الإضاءة الحالية لديك بحلول حديثة وموفرة للطاقة مع الحفاظ على أناقة الثريات الخاصة بك. نحن متخصصون في عمليات تحويل LED ودمج الإضاءة الذكية.'
    },
    {
      icon: serviceIcons[5],
      titleEN: 'Emergency Repairs',
      titleAR: 'إصلاحات الطوارئ',
      descEN: 'Our rapid response team is available for emergency repairs and troubleshooting. Whether it\'s electrical issues, structural problems, or damaged components, we\'ll restore your chandelier quickly.',
      descAR: 'فريق الاستجابة السريعة لدينا متاح للإصلاحات الطارئة واستكشاف الأخطاء وإصلاحها. سواء كانت مشاكل كهربائية أو هيكلية أو مكونات تالفة، سنقوم باستعادة الثريا الخاصة بك بسرعة.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('services')}
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL
                ? 'نقدم خدمات متكاملة من التصميم إلى التركيب والصيانة'
                : 'We provide comprehensive services from design to installation and maintenance'}
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-lg elegant-shadow ${isRTL ? 'text-right' : 'text-left'} animate-fade-in`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="text-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {isRTL ? service.titleAR : service.titleEN}
                </h3>
                <p className="text-gray-600">
                  {isRTL ? service.descAR : service.descEN}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className={`text-center mb-16`}>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 animate-fade-in">
              {isRTL ? 'عملية العمل لدينا' : 'Our Process'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              {isRTL
                ? 'نهج منظم لضمان تنفيذ مشروعك بسلاسة من البداية إلى النهاية'
                : 'A structured approach to ensure your project is executed smoothly from start to finish'}
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {isRTL ? 'الاستشارة الأولية' : 'Initial Consultation'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'نبدأ بفهم احتياجاتك وتفضيلاتك وميزانيتك. خلال هذه المرحلة، نقوم بتقييم المساحة وتحديد أفضل الخيارات لتلبية متطلباتك.'
                    : 'We begin by understanding your needs, preferences, and budget. During this stage, we assess the space and determine the best options to meet your requirements.'}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {isRTL ? 'اختيار التصميم' : 'Design Selection'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'استنادًا إلى المعلومات المقدمة، نعرض مجموعة من الخيارات التي تناسب مساحتك وأسلوبك. يمكننا أيضًا تقديم تصاميم مخصصة إذا كنت تبحث عن شيء فريد.'
                    : 'Based on the information provided, we present a range of options that suit your space and style. We can also offer custom designs if you\'re looking for something unique.'}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {isRTL ? 'التخطيط والتحضير' : 'Planning and Preparation'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'بمجرد الاتفاق على التصميم، نقوم بتطوير خطة تنفيذ تفصيلية. نتأكد من توفر جميع المواد اللازمة ونجدول موعد التركيب.'
                    : 'Once the design is agreed upon, we develop a detailed implementation plan. We ensure all necessary materials are available and schedule the installation date.'}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {isRTL ? 'التنفيذ' : 'Implementation'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'فريقنا المدرب من الفنيين ينفذ المشروع بعناية فائقة، مع الاهتمام بكل تفصيل لضمان التثبيت الآمن والدقيق.'
                    : 'Our trained team of technicians executes the project with meticulous care, paying attention to every detail to ensure safe and precise installation.'}
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                5
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {isRTL ? 'المتابعة وخدمة ما بعد البيع' : 'Follow-up and After-service'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'بعد الانتهاء من التركيب، نقدم تدريبًا على الاستخدام ونصائح للصيانة. نتابع معك للتأكد من رضاك التام عن الخدمة.'
                    : 'After installation is complete, we provide usage training and maintenance tips. We follow up to ensure your complete satisfaction with the service.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            {isRTL ? 'جاهز للبدء في مشروعك؟' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {isRTL
              ? 'اتصل بنا اليوم للحصول على استشارة مجانية حول كيف يمكننا تحويل مساحتك بثريات فاخرة.'
              : 'Contact us today for a free consultation on how we can transform your space with luxury chandeliers.'}
          </p>
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-8 py-4 rounded-md hover:bg-gold-dark transition-colors duration-300"
            >
              {isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
