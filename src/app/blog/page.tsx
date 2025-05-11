'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPenNib, FaUserTie, FaClipboardList, FaBookOpen, FaUsers, FaEnvelopeOpenText } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Create wrapper components for the icons
const PenNibIcon = FaPenNib as IconType;
const UserTieIcon = FaUserTie as IconType;
const ClipboardListIcon = FaClipboardList as IconType;
const BookOpenIcon = FaBookOpen as IconType;
const UsersIcon = FaUsers as IconType;
const EnvelopeOpenTextIcon = FaEnvelopeOpenText as IconType;

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* هيدر بصورة أو أيقونة تدوين */}
      <section className="relative flex items-center min-h-[40vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-12 animate-fade-in">
          <PenNibIcon className="mx-auto text-primary-600 text-6xl mb-4 animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-2">المدونة</h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            منصة معرفية متخصصة تقدم أحدث المقالات والرؤى في التوظيف، المهارات، وسوق العمل.
          </p>
        </div>
      </section>

      {/* تصنيفات المقالات */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.1s'}}>
        <div className="container-custom flex flex-wrap justify-center gap-4 mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-bold text-sm cursor-pointer hover:bg-primary-200 transition"> <UserTieIcon /> التوظيف </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 font-bold text-sm cursor-pointer hover:bg-secondary-200 transition"> <ClipboardListIcon /> مهارات </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-bold text-sm cursor-pointer hover:bg-primary-100 transition"> <BookOpenIcon /> مقابلات </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-600 font-bold text-sm cursor-pointer hover:bg-secondary-100 transition"> <UsersIcon /> سوق العمل </span>
        </div>
        <div className="container-custom text-center mb-2">
          <p className="text-lg text-secondary-700 font-medium">تصفح أحدث المقالات والنصائح في عالم التوظيف، المهارات، وسوق العمل.</p>
        </div>
      </section>

      {/* شبكة المقالات */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.15s'}}>
        <div className="container-custom">
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
            {/* مقال 5 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.3s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-primary-100 text-primary-700">الموارد البشرية</span>
                <span className="text-xs text-secondary-500">25 فبراير 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                <Link href="/blog/hr-trends">
                  أحدث اتجاهات الموارد البشرية في 2025
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                تعرف على أحدث التوجهات والتقنيات في مجال إدارة الموارد البشرية.
              </p>
              <Link href="/blog/hr-trends" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
            {/* مقال 6 */}
            <article className="card animate-fade-in group hover:shadow-xl transition-shadow duration-300 p-6" style={{animationDelay: '0.35s'}}>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-100 text-secondary-700">تطوير الأعمال</span>
                <span className="text-xs text-secondary-500">20 فبراير 2025</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                <Link href="/blog/business-growth">
                  استراتيجيات نمو الأعمال في البيئة الاقتصادية الحالية
                </Link>
              </h2>
              <p className="text-secondary-600 mb-4 arabic-text">
                خطوات عملية لتنمية أعمالك وتطويرها في ظل التحديات الاقتصادية.
              </p>
              <Link href="/blog/business-growth" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                اقرأ المزيد
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* دعوة للانضمام للنشرة البريدية */}
      <section className="section bg-gradient-to-br from-primary-100 to-primary-200 animate-fade-in" style={{animationDelay: '0.25s'}}>
        <div className="container-custom text-center">
          <EnvelopeOpenTextIcon className="mx-auto text-primary-600 text-5xl mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">تابع جديد المدونة</h2>
          <p className="text-lead text-gray-700 mb-8">اشترك بالنشرة البريدية ليصلك كل جديد حول التوظيف وسوق العمل</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input type="email" placeholder="أدخل بريدك الإلكتروني" className="form-input flex-1" />
            <button type="submit" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-700 transition-all duration-200">
              اشترك الآن
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 