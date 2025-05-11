'use client'

import React from 'react'
import { FaTrophy, FaChartLine, FaHandshake, FaUserTie, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* هيدر بصورة نجاح */}
      <section className="relative flex items-center min-h-[50vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-16 animate-fade-in">
          <FaTrophy className="mx-auto text-primary-600 text-6xl mb-4 animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-2">قصص النجاح</h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            نجاحات عملائنا هي أكبر دليل على جودة خدماتنا واحترافيتنا في سوق العمل.
          </p>
        </div>
      </section>

      {/* نماذج من قصص نجاحنا */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">نماذج من قصص نجاحنا</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              قصص حقيقية من عملائنا الذين نجحنا في مساعدتهم في تحقيق أهدافهم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* قصة 1 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.1s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-100 text-primary-700">شركة تقنية</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">توسيع فريق التطوير</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "ساعدتنا ورد آيديا في بناء فريق تطوير متكامل من 15 مطور خلال 3 أشهر فقط. جودة المرشحين كانت استثنائية."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: زيادة إنتاجية الفريق بنسبة 40%</p>
              </div>
            </div>

            {/* قصة 2 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.15s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-100 text-secondary-700">شركة تسويق</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">تطوير فريق التسويق الرقمي</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "فريق ورد آيديا فهم احتياجاتنا بدقة وساعدنا في توظيف خبراء تسويق رقمي متميزين."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: زيادة المبيعات عبر الإنترنت بنسبة 60%</p>
              </div>
            </div>

            {/* قصة 3 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.2s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-50 text-primary-600">شركة خدمات</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">إعادة هيكلة الموارد البشرية</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "استشارة احترافية ساعدتنا في إعادة هيكلة قسم الموارد البشرية وتوظيف الكفاءات المناسبة."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: تحسين كفاءة العمليات بنسبة 35%</p>
              </div>
            </div>

            {/* قصة 4 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.25s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-50 text-secondary-600">شركة ناشئة</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">بناء الفريق المؤسس</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "منذ البداية، ساعدتنا ورد آيديا في بناء فريق مؤسس قوي ومتناسق."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: جذب استثمار بقيمة مليون دولار</p>
              </div>
            </div>

            {/* قصة 5 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.3s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-100 text-primary-700">شركة تصنيع</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">تطوير فريق الإنتاج</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "ساعدتنا في توظيف وتدريب فريق إنتاج متخصص، مما أدى إلى تحسين جودة المنتجات."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: زيادة الإنتاجية بنسبة 45%</p>
              </div>
            </div>

            {/* قصة 6 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.35s'}}>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-100 text-secondary-700">شركة خدمات مالية</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">تطوير فريق المبيعات</h3>
              <p className="text-secondary-600 mb-4 arabic-text">
                "فريق ورد آيديا ساعدنا في بناء فريق مبيعات قوي ومحترف."
              </p>
              <div className="text-sm text-secondary-500">
                <p>النتيجة: زيادة المبيعات بنسبة 75%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* شهادات العملاء */}
      <section className="section bg-secondary-50 animate-fade-in" style={{animationDelay: '0.15s'}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">ماذا يقول عملاؤنا؟</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">آراء العملاء تعكس جودة خدماتنا ورضاهم عن النتائج</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* شهادة 1 */}
            <div className="card text-center p-8 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <FaQuoteLeft className="mx-auto text-primary-400 text-3xl mb-4" />
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">"تعاملنا مع Wared Idea كان نقطة تحول في شركتنا. وجدنا أفضل الكفاءات بوقت قياسي!"</p>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/illustrations/tech-leader.svg" alt="عميل" width={48} height={48} className="rounded-full shadow" />
                <div className="text-primary-600 font-bold">مدير الموارد البشرية</div>
                <div className="text-secondary-600 text-sm">شركة التقنية المتقدمة</div>
              </div>
            </div>
            {/* شهادة 2 */}
            <div className="card text-center p-8 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.05s'}}>
              <FaQuoteLeft className="mx-auto text-primary-400 text-3xl mb-4" />
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">"استشارات Wared Idea ساعدتنا في تطوير استراتيجياتنا وزيادة المبيعات بشكل ملحوظ."</p>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/illustrations/digital-marketing.svg" alt="عميلة" width={48} height={48} className="rounded-full shadow" />
                <div className="text-primary-600 font-bold">المدير التنفيذي</div>
                <div className="text-secondary-600 text-sm">مجموعة التجارة الدولية</div>
              </div>
            </div>
            {/* شهادة 3 */}
            <div className="card text-center p-8 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaQuoteLeft className="mx-auto text-primary-400 text-3xl mb-4" />
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">"فريق Wared Idea محترف وسريع الاستجابة. أنصح بالتعامل معهم لأي شركة تبحث عن التميز."</p>
              <div className="flex flex-col items-center gap-2">
                <Image src="/images/illustrations/executive.svg" alt="عميل" width={48} height={48} className="rounded-full shadow" />
                <div className="text-primary-600 font-bold">مدير العمليات</div>
                <div className="text-secondary-600 text-sm">مؤسسة التطوير العقاري</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="section bg-gradient-to-br from-primary-100 to-primary-200 animate-fade-in" style={{animationDelay: '0.25s'}}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">هل ترغب بأن تكون قصتك القادمة؟</h2>
          <p className="text-lead text-gray-700 mb-8">تواصل معنا اليوم لنساعدك في تحقيق نجاحك القادم</p>
          <Link href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-700 transition-all duration-200">
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  )
} 