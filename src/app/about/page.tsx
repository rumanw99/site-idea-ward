'use client'

import React from 'react'
import Image from 'next/image'
import { FaHandshake, FaLightbulb, FaUserShield, FaUsers } from 'react-icons/fa';
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* هيدر بصورة فريق */}
      <section className="relative flex items-center min-h-[60vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-16 animate-fade-in">
          <Image src="/logo.jpg" alt="Ward Idea Logo" width={140} height={140} className="rounded-full shadow-2xl border-4 border-white bg-white/80 mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-2">من نحن</h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Wared Idea شركة متخصصة في خدمات التوظيف، تصفية السير الذاتية، واستقطاب الكفاءات. نؤمن بالاحترافية، الشفافية، والابتكار في كل ما نقدمه.
          </p>
        </div>
      </section>

      {/* رسالتنا ورؤيتنا */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.1s'}}>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="card p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaLightbulb className="mx-auto text-primary-500 text-5xl mb-4 animate-fade-in" />
            <h2 className="text-3xl font-bold mb-4 text-primary-700">رؤيتنا</h2>
            <p className="text-lg text-secondary-700">أن نكون الشريك الاستراتيجي الأول في مجال التوظيف واستقطاب الكفاءات في المنطقة العربية، ونساهم في بناء مستقبل مهني أفضل للأفراد والشركات.</p>
          </div>
          <div className="card p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaHandshake className="mx-auto text-primary-500 text-5xl mb-4 animate-fade-in" />
            <h2 className="text-3xl font-bold mb-4 text-primary-700">رسالتنا</h2>
            <p className="text-lg text-secondary-700">تقديم حلول توظيف مبتكرة وموثوقة، وتصفية السير الذاتية باحترافية، مع التركيز على تلبية احتياجات عملائنا وتحقيق رضاهم الكامل.</p>
          </div>
        </div>
      </section>

      {/* قيم الشركة */}
      <section className="section bg-secondary-50 animate-fade-in" style={{animationDelay: '0.15s'}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">قيمنا</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">نلتزم بمجموعة من القيم التي تميزنا وتوجه عملنا اليومي</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card group text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <FaUserShield className="mx-auto text-primary-600 text-4xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-primary-700">الاحترافية</h3>
              <p className="text-gray-600">نلتزم بأعلى معايير الجودة في كل خدمة نقدمها.</p>
            </div>
            <div className="card group text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.05s'}}>
              <FaLightbulb className="mx-auto text-primary-600 text-4xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-primary-700">الابتكار</h3>
              <p className="text-gray-600">نبحث دائماً عن حلول جديدة تلبي تطلعات عملائنا.</p>
            </div>
            <div className="card group text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaHandshake className="mx-auto text-primary-600 text-4xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-primary-700">الشفافية</h3>
              <p className="text-gray-600">نؤمن بالوضوح في التعامل مع العملاء والشركاء.</p>
            </div>
            <div className="card group text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.15s'}}>
              <FaUsers className="mx-auto text-primary-600 text-4xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-primary-700">العمل الجماعي</h3>
              <p className="text-gray-600">ننجح معاً بروح الفريق والتعاون المستمر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم فريقنا */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">فريقنا</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              فريق من الخبراء والمتخصصين في مجالات التوظيف والموارد البشرية وتطوير الأعمال
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder Card */}
            <div id="founder" className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-primary-500" style={{animationDelay: '0.05s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700 flex items-center justify-center gap-2">
                ورد رمان
                <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded-full ml-2">مؤسس الشركة</span>
              </h3>
              <div className="text-secondary-600 font-medium mb-2">تجارة واقتصاد، هندسة معلوماتية</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>المبيعات والتفاوض</li>
                <li>التحدث أمام الجمهور</li>
                <li>التدريب على المبيعات البرمجية (في مراكز تدريب أو أونلاين)</li>
                <li>تطوير المسار المهني</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-4 list-disc list-inside text-right">
                <li>أسعى دائمًا لنقل خبرتي للآخرين عبر الدروس، الجلسات الفردية، والاستشارات، لمساعدة الشباب والمهنيين على تطوير مهاراتهم وتحقيق النجاح في سوق العمل.</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أسعى لبناء بيئة عمل محفزة وتحقيق التميز المؤسسي.</p>
              <a
                href="https://www.linkedin.com/in/ward-ruman-718aa622b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg border border-primary-200 text-primary-700 hover:bg-primary-50 transition-all duration-200 font-bold text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
                حساب لينكدإن
              </a>
            </div>
            {/* عضو 1 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">Abdullah Kabalan</h3>
              <div className="text-secondary-600 font-medium mb-2">أخصائي مبيعات</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>خبرة في الشركات العالمية</li>
                <li>تطوير سياسات الموارد البشرية</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>إدارة فرق العمل</li>
                <li>حل المشكلات التنظيمية</li>
                <li>التواصل الفعال</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أسعى لبناء بيئة عمل محفزة وتحقيق التميز المؤسسي.</p>
            </div>
            {/* عضو 2 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.15s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">Mirna Ibrahem</h3>
              <div className="text-secondary-600 font-medium mb-2">أخصائية مبيعات</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>بحث واستقطاب الكفاءات</li>
                <li>إدارة عمليات التوظيف</li>
                <li>خبرة واسعة في السوق المحلي</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>التفاوض مع المرشحين</li>
                <li>تحليل السير الذاتية</li>
                <li>التواصل مع العملاء</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أؤمن بأهمية اختيار الشخص المناسب للمكان المناسب.</p>
            </div>
            {/* عضو 3 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">Leen Fandi</h3>
              <div className="text-secondary-600 font-medium mb-2">أخصائية مبيعات</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>تطوير الأعمال واستراتيجيات النمو</li>
                <li>نجاحات في الشركات الناشئة</li>
                <li>إدارة المشاريع</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>التخطيط الاستراتيجي</li>
                <li>بناء الشراكات</li>
                <li>قيادة الفرق</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أسعى لتحقيق النمو المستدام وتوسيع نطاق الأعمال.</p>
            </div>
            {/* عضو 4 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.25s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">Farah Micheline Elias</h3>
              <div className="text-secondary-600 font-medium mb-2">أخصائية مبيعات</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>تطوير المهارات وبناء فرق العمل</li>
                <li>تصميم وتنفيذ برامج التدريب</li>
                <li>خبرة في التدريب المؤسسي</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>إعداد الحقائب التدريبية</li>
                <li>التواصل مع المتدربين</li>
                <li>تحفيز الفرق</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أطمح لصناعة قادة المستقبل من خلال التدريب الفعّال.</p>
            </div>
            {/* عضو 5 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">Rahaf Al Mlhem</h3>
              <div className="text-secondary-600 font-medium mb-2">أخصائية مبيعات</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>استراتيجيات المبيعات</li>
                <li>تطوير فرق العمل</li>
                <li>خبرة في الأسواق المحلية والدولية</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>إدارة العلاقات مع العملاء</li>
                <li>تحليل السوق</li>
                <li>قيادة فرق المبيعات</li>
              </ul>
              <p className="text-secondary-600 arabic-text">هدفي تحقيق أفضل النتائج وزيادة الإيرادات للشركة.</p>
            </div>
            {/* عضو 6 */}
            <div className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.35s'}}>
              <h3 className="text-xl font-bold mb-2 text-primary-700">ليلى حسن</h3>
              <div className="text-secondary-600 font-medium mb-2">مديرة التسويق</div>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">الخبرات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>التسويق الرقمي</li>
                <li>إدارة العلامات التجارية</li>
                <li>تطوير استراتيجيات التسويق</li>
              </ul>
              <div className="text-secondary-700 text-sm mb-2 font-semibold">المهارات:</div>
              <ul className="text-secondary-600 text-sm mb-2 list-disc list-inside text-right">
                <li>إدارة الحملات الإعلانية</li>
                <li>تحليل البيانات التسويقية</li>
                <li>التواصل الإبداعي</li>
              </ul>
              <p className="text-secondary-600 arabic-text">أسعى لتعزيز حضور الشركة الرقمي وتحقيق الانتشار الواسع.</p>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="section bg-gradient-to-br from-primary-100 to-primary-200 animate-fade-in" style={{animationDelay: '0.25s'}}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">هل ترغب بالانضمام لنجاحاتنا؟</h2>
          <p className="text-lead text-gray-700 mb-8">تواصل معنا اليوم لنساعدك في تحقيق أهدافك المهنية أو تطوير شركتك</p>
          <Link href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-700 transition-all duration-200">
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  )
} 