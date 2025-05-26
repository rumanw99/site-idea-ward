'use client'

import * as React from 'react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
<<<<<<< HEAD
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(0) scale(1.1); }
          20% { transform: translateX(-4px) scale(1.15); }
          40% { transform: translateX(2px) scale(1.2); }
          60% { transform: translateX(-2px) scale(1.15); }
          80% { transform: translateX(2px) scale(1.1); }
        }
        .attention-arrow {
          animation: wiggle 1.2s infinite, pulse 1.2s infinite;
          color: #0284c7;
          filter: drop-shadow(0 0 6px #38bdf8);
          font-size: 2rem;
        }
      `}</style>
=======
>>>>>>> ceb2da3 (fix icons)
      {/* بداية الصفحة مباشرة بقسم الهيرو */}
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[80vh] md:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* تدرج لوني شفاف فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-20">
          <div className="mb-6 flex justify-center">
            <Image 
              src="/logo.jpg" 
              alt="Ward Idea Logo" 
              width={130} 
              height={130} 
              className="rounded-full shadow-2xl border-4 border-white bg-white/80"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-4 animate-fade-in">
            ورد آيديا
          </h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.1s'}}>
            خبراء التوظيف والاستشارات لتنمية أعمالك واختيار أفضل الكفاءات
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.15s'}}>
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-700 transition-all duration-200">
              تواصل معنا
            </Link>
            <Link href="/services" className="bg-white text-primary-700 border border-primary-200 px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary-50 transition-all duration-200">
              خدماتنا
            </Link>
<<<<<<< HEAD
            <Link href="/about#founder" className="bg-primary-100 text-primary-700 border border-primary-200 px-8 py-3 rounded-lg text-lg font-bold hover:bg-primary-200 transition-all duration-200 flex items-center gap-3 justify-center shadow-md hover:shadow-xl">
              <span className="attention-arrow">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              تعرف على المؤسس
=======
            <Link href="/about#founder" className="bg-primary-100 text-primary-700 border border-primary-200 px-8 py-3 rounded-lg text-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-200 transition-all duration-200 relative overflow-hidden">
              تعرف على المؤسس
              <span className="inline-block animate-pulse-arrow">
                <svg className="w-6 h-6 text-primary-500 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
>>>>>>> ceb2da3 (fix icons)
            </Link>
          </div>
          {/* إحصائيات مختصرة */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">+500</div>
              <div className="text-sm text-gray-600">شركة شريكة</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">+2000</div>
              <div className="text-sm text-gray-600">توظيف ناجح</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">رضا العملاء</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">+15</div>
              <div className="text-sm text-gray-600">سنوات خبرة</div>
            </div>
          </div>
        </div>
        {/* موجة SVG أسفل الهيرو */}
        <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f0f7ff" d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"/></svg>
      </section>

      {/* Intro Video Section */}
      <section className="section bg-gradient-to-br from-primary-100/60 to-white/80 flex items-center justify-center animate-fade-in scroll-reveal slide-in-left" style={{animationDelay: '0.15s'}}>
        <div className="container flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-700 mb-4">تعرف على ورد آيديا</h2>
            <p className="text-lead mb-6">شاهد هذا الفيديو القصير لتتعرف على خدماتنا، رؤيتنا، ولماذا نحن الخيار الأمثل للشركات والأفراد الباحثين عن التميز.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border border-primary-100 bg-white animate-fade-in" style={{animationDelay: '0.2s'}}>
              <iframe
                src="https://www.youtube.com/embed/bHalJIOhBKg"
                title="Ward Idea Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80"
                style={{minHeight: '260px', background: '#e0f2fe'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white animate-fade-in scroll-reveal slide-in-right" style={{animationDelay: '0.2s'}}>
        <div className="container">
<<<<<<< HEAD
          <div className="text-center mb-12">
            <h2 className="title">خدماتنا</h2>
=======
          <div className="text-center mb-8">
            <h2 className="title mb-2 text-3xl md:text-4xl font-extrabold text-primary-700">خدماتنا</h2>
>>>>>>> ceb2da3 (fix icons)
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الاحترافية لمساعدة الشركات والأفراد في تحقيق أهدافهم وتطوير أعمالهم
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center">
            {/* Service 1 */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">خدمات التوظيف</h3>
              <p className="text-gray-600 text-base mb-4">
                حلول توظيف شاملة للشركات والأفراد، مع ضمان جودة المرشحين وسرعة الإنجاز.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  البحث عن الكفاءات
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  المقابلات الأولية
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  تقييم المهارات
                </li>
              </ul>
              <Link href="/services#recruitment" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">
                اقرأ المزيد
                <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">تصفية السير الذاتية</h3>
              <p className="text-gray-600 text-base mb-4">
                فرز احترافي للسير الذاتية لاختيار أفضل الكفاءات للوظائف المتاحة.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  تحليل المهارات
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  تقييم الخبرات
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  مطابقة المتطلبات
                </li>
              </ul>
              <Link href="/services#cv-screening" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">
                اقرأ المزيد
                <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">خدمات المبيعات</h3>
              <p className="text-gray-600 text-base mb-4">
                حلول واستشارات متكاملة لزيادة مبيعاتك وتطوير فريقك وتحقيق نمو مستدام.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  بناء وتدريب فرق المبيعات
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  تطوير استراتيجيات البيع والتسويق
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  أتمتة عمليات البيع وإدارة العملاء
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  تحفيز الفريق وتحقيق الأهداف البيعية
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  استشارات في التسعير وتحليل السوق
                </li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* Service 4 */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">الاستشارات</h3>
              <p className="text-gray-600 text-base mb-4">
                استشارات متخصصة في الموارد البشرية والمبيعات وتطوير الأعمال.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  استشارات الموارد البشرية
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  تطوير الأعمال
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  تحسين الأداء
                </li>
              </ul>
              <Link href="/services#consulting" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">
                اقرأ المزيد
                <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
            {/* Service 5 - بيع الحلول والتطبيقات */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-2V7a2 2 0 00-4 0v2H7a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">بيع الحلول والتطبيقات الجاهزة</h3>
              <p className="text-gray-600 text-base mb-4">
                نوفر لك حلولاً برمجية وتطبيقات جاهزة تلبي احتياجات شركتك وتساعدك على تطوير أعمالك بسرعة وكفاءة.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  حلول محاسبية، موارد بشرية، متاجر إلكترونية وغيرها
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  تطبيقات مخصصة حسب الطلب
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  دعم فني وتحديثات مستمرة
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  إمكانية دمج الحلول مع أنظمة شركتك
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  استشارات تقنية لاختيار الحل الأنسب
                </li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* Service 7 - جلسات فردية وتطوير مهني */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">جلسات فردية وتطوير مهني</h3>
              <p className="text-gray-600 text-base mb-4">
                احصل على دعم شخصي واحترافي لتطوير مسارك الوظيفي وتحقيق أهدافك بثقة مع خبراء التوظيف.
              </p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>تدريب عملي على مقابلات العمل</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>نصائح للتفاوض على الراتب بثقة</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>جلسات توجيه فردية حسب مجالك وخبرتك</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>سيرة ذاتية (CV) احترافية</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>رسالة تقديم (Cover Letter) مخصصة</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>موقع شخصي و بورتفوليو أنيق</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-primary-500 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>تحسين شامل لحسابك على LinkedIn</li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">احجز جلستك الآن</Link>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* خدمة المبيعات */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">خدمات المبيعات</h3>
              <p className="text-gray-600 text-sm mb-3">حلول واستشارات مبيعات لزيادة مبيعاتك وتطوير فريقك وتحقيق نمو مستدام.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> بيع ذكي وتطوير مهني</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تطوير استراتيجيات المبيعات</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تدريب فرق المبيعات</li>
              </ul>
              <Link href="/services#sales" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* تصفية السير الذاتية */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">تصفية السير الذاتية</h3>
              <p className="text-gray-600 text-sm mb-3">فرز احترافي للسير الذاتية لاختيار أفضل الكفاءات للوظائف المتاحة.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تحليل السير الذاتية</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تقييم الخبرات</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> مطابقة المتطلبات</li>
              </ul>
              <Link href="/services#cv-screening" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اقرأ المزيد</Link>
            </div>
            {/* خدمات التوظيف */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">خدمات التوظيف</h3>
              <p className="text-gray-600 text-sm mb-3">حلول توظيف شاملة للشركات والأفراد مع ضمان جودة المرشحين وسرعة الإنجاز.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> البحث عن الكفاءات</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> المقابلات الأولية</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تقييم المهارات</li>
              </ul>
              <Link href="/services#recruitment" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اقرأ المزيد</Link>
            </div>
            {/* جلسات فردية وتطوير مهني */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0H3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">جلسات فردية وتطوير مهني</h3>
              <p className="text-gray-600 text-sm mb-3">احصل على دعم شخصي واستشارات لتطوير مسارك الوظيفي وتحقيق النجاح في التوظيف.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> استشارات مهنية فردية</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تطوير السيرة الذاتية</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تجهيز للمقابلات</li>
              </ul>
              <Link href="/services#coaching" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">احجز جلستك الآن</Link>
            </div>
            {/* بيع الحلول والمنتجات الجاهزة */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 01-4 4H4a4 4 0 01-4-4V7a4 4 0 014-4h4a4 4 0 014 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">بيع الحلول والمنتجات الجاهزة</h3>
              <p className="text-gray-600 text-sm mb-3">نوفر لك حلولاً ومنتجات جاهزة تلبي احتياجات شركتك وتساعدك على تطوير أعمالك بسرعة وكفاءة.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> منتجات جاهزة للاستخدام</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> حلول برمجية متكاملة</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> دعم فني مستمر</li>
              </ul>
              <Link href="/services#products" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* الاستشارات */}
            <div className="card flex flex-col items-center text-center p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-700">الاستشارات</h3>
              <p className="text-gray-600 text-sm mb-3">استشارات متخصصة في الموارد البشرية والمبيعات وتطوير الأعمال.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-1 mb-3">
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> استشارات الموارد البشرية</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تطوير الأعمال</li>
                <li className="flex items-center"><span className="text-primary-500 ml-2">✔</span> تحسين الأداء</li>
              </ul>
              <Link href="/services#consulting" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اقرأ المزيد</Link>
>>>>>>> ceb2da3 (fix icons)
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-secondary-50 animate-fade-in scroll-reveal slide-in-left" style={{animationDelay: '0.3s'}}>
        <div className="container">
          <h2 className="title">آراء العملاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Testimonial 1 */}
            <div className="card text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                "تعاملنا مع شركة ورد آيديا في عملية التوظيف وكانت تجربة رائعة. وجدنا أفضل المرشحين للوظائف المطلوبة."
              </p>
              <div className="text-primary-600 font-bold">مدير الموارد البشرية</div>
              <div className="text-secondary-600">شركة التقنية المتقدمة</div>
            </div>
            {/* Testimonial 2 */}
            <div className="card text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                "استفدنا كثيراً من استشارات ورد آيديا في مجال المبيعات. زادت مبيعاتنا بنسبة 40% خلال 3 أشهر."
              </p>
              <div className="text-primary-600 font-bold">المدير التنفيذي</div>
              <div className="text-secondary-600">مجموعة التجارة الدولية</div>
            </div>
            {/* Testimonial 3 */}
            <div className="card text-center transform hover:scale-105 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                "شركة ورد آيديا شريك موثوق في مجال الاستشارات. ساعدونا في تطوير استراتيجياتنا وتحسين أدائنا."
              </p>
              <div className="text-primary-600 font-bold">مدير العمليات</div>
              <div className="text-secondary-600">مؤسسة التطوير العقاري</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white animate-fade-in scroll-reveal slide-in-right" style={{animationDelay: '0.35s'}}>
        <div className="container text-center">
<<<<<<< HEAD
          <h2 className="title mb-8 text-3xl md:text-4xl text-primary-700">شركاؤنا في النجاح</h2>
          <p className="text-lead mb-10 text-gray-600">نفخر بالتعاون مع نخبة من الشركات المحلية والعالمية</p>
          <div className="grid grid-cols-3 gap-10 justify-center items-center mx-auto max-w-3xl">
            {/* أيقونة موحدة لجميع الشركات */}
            <div className="flex flex-col items-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="SEMA Brands" width={80} height={80} className="mb-2 object-contain bg-white rounded-full" />
              <span className="text-primary-700 font-bold text-base">SEMA Brands</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Voila Digital" width={80} height={80} className="mb-2 object-contain bg-white rounded-full" />
              <span className="text-primary-700 font-bold text-base">Voila Digital</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Sohu" width={80} height={80} className="mb-2 object-contain bg-white rounded-full" />
              <span className="text-primary-700 font-bold text-base">Sohu</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="شركة الخواجا للمحاسبة" width={80} height={80} className="mb-2 object-contain bg-white rounded-full" />
              <span className="text-primary-700 font-bold text-base">شركة الخواجا للمحاسبة</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="شركة سبيندو لبناء الأنظمة المحاسبية" width={80} height={80} className="mb-2 object-contain bg-white rounded-full" />
              <span className="text-primary-700 font-bold text-base">شركة سبيندو لبناء الأنظمة المحاسبية</span>
=======
          <h2 className="title mb-4 text-3xl md:text-4xl text-primary-700">شركاؤنا في النجاح</h2>
          <p className="text-lead mb-10 text-gray-600">نفخر بالتعاون مع نخبة من الشركات المحلية والعالمية</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1 w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {/* الصف الأول: 3 شركاء */}
              <div className="flex flex-col items-center w-40">
                <img src="/images/illustrations/executive.svg" alt="Sohu" className="w-20 h-20 mb-2 rounded-full bg-primary-50 shadow" />
                <span className="font-bold text-primary-700 text-base">Sohu</span>
              </div>
              <div className="flex flex-col items-center w-40">
                <img src="/images/illustrations/executive.svg" alt="Voila Digital" className="w-20 h-20 mb-2 rounded-full bg-primary-50 shadow" />
                <span className="font-bold text-primary-700 text-base">Voila Digital</span>
              </div>
              <div className="flex flex-col items-center w-40">
                <img src="/images/illustrations/executive.svg" alt="SEMA Brands" className="w-20 h-20 mb-2 rounded-full bg-primary-50 shadow" />
                <span className="font-bold text-primary-700 text-base">SEMA Brands</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mt-6">
              {/* الصف الثاني: 2 شركاء */}
              <div className="flex flex-col items-center w-40">
                <img src="/images/illustrations/executive.svg" alt="شركة سيندو لبناء الأنظمة المحاسبية" className="w-20 h-20 mb-2 rounded-full bg-primary-50 shadow" />
                <span className="font-bold text-primary-700 text-base">شركة سيندو لبناء الأنظمة المحاسبية</span>
              </div>
              <div className="flex flex-col items-center w-40">
                <img src="/images/illustrations/executive.svg" alt="شركة الأخوان للمحاسبة" className="w-20 h-20 mb-2 rounded-full bg-primary-50 shadow" />
                <span className="font-bold text-primary-700 text-base">شركة الأخوان للمحاسبة</span>
              </div>
>>>>>>> ceb2da3 (fix icons)
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-white animate-fade-in scroll-reveal slide-in-left" style={{animationDelay: '0.35s'}}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">أحدث المقالات</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              اكتشف أحدث المقالات والنصائح في مجالات التوظيف والموارد البشرية وتطوير الأعمال
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* مقال 1 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.1s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-100 text-primary-700">التوظيف</span>
                <span className="text-xs text-secondary-500">15 مارس 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                <Link href="/blog/choose-candidates">
                  كيف تختار الشركة المرشحين المناسبين؟
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                خطوات عملية ونصائح ذهبية لمساعدة الشركات في اختيار أفضل الكفاءات.
              </p>
              <Link href="/blog/choose-candidates" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
            {/* مقال 2 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.15s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-100 text-secondary-700">التوظيف</span>
                <span className="text-xs text-secondary-500">10 مارس 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-secondary-600 transition-colors">
                <Link href="/blog/traditional-vs-agency">
                  الفرق بين التوظيف التقليدي والتوظيف عبر شركات مختصة
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                مقارنة شاملة بين طرق التوظيف التقليدية والاستعانة بشركات متخصصة.
              </p>
              <Link href="/blog/traditional-vs-agency" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
            {/* مقال 3 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.2s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-50 text-secondary-600">سوق العمل</span>
                <span className="text-xs text-secondary-500">5 مارس 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                <Link href="/blog/syrian-market-stories">
                  قصص حقيقية من سوق العمل السوري
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                تجارب واقعية تلهم الشركات والأفراد في مواجهة تحديات سوق العمل المحلي.
              </p>
              <Link href="/blog/syrian-market-stories" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
            {/* مقال 4 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.25s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-50 text-primary-600">مقابلات</span>
                <span className="text-xs text-secondary-500">1 مارس 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                <Link href="/blog/interview-skills">
                  مهارات المقابلات الشخصية
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                أهم المهارات والنصائح لاجتياز المقابلات الشخصية بنجاح.
              </p>
              <Link href="/blog/interview-skills" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-primary text-lg">
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white animate-fade-in scroll-reveal slide-in-left" style={{animationDelay: '0.4s'}}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">تواصل معنا</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا للحصول على استشارة مجانية أو أي استفسار.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="card p-6 hover:shadow-lg transition-all duration-300">
<<<<<<< HEAD
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 md:mr-6 ml-2 md:ml-4">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-700 mb-2">اتصل بنا</h3>
                    <p className="text-gray-600 mb-2">هاتف: +963984547466</p>
                    <p className="text-gray-600">واتساب: +963984547466</p>
                  </div>
                </div>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 md:mr-6 ml-2 md:ml-4">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-700 mb-2">راسلنا</h3>
                    <p className="text-gray-600 mb-2">البريد الإلكتروني: ideaward868@gmail.com</p>
                    <p className="text-gray-600">الموقع: دمشق، سوريا</p>
                  </div>
                </div>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 md:mr-6 ml-2 md:ml-4">
                    <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-700 mb-2">ساعات العمل</h3>
                    <p className="text-gray-600 mb-2">الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                    <p className="text-gray-600">الجمعة - السبت: مغلق</p>
                  </div>
                </div>
=======
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary-700">اتصل بنا</h3>
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-600 mb-2">هاتف: +963984547466</p>
                <p className="text-gray-600">واتساب: +963984547466</p>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary-700">راسلنا</h3>
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-600 mb-2">البريد الإلكتروني: ideaward868@gmail.com</p>
                <p className="text-gray-600">الموقع: دمشق، سوريا</p>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary-700">ساعات العمل</h3>
                  <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-600 mb-2">الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                <p className="text-gray-600">الجمعة - السبت: مغلق</p>
>>>>>>> ceb2da3 (fix icons)
              </div>
            </div>
            <div className="card p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 