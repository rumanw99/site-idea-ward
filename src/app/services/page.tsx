'use client'

import React from 'react'
import { FaUserTie, FaFileAlt, FaUsers, FaChartLine, FaCheckCircle, FaCogs, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* هيدر بصورة عمل */}
      <section className="relative flex items-center min-h-[50vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-2">خدماتنا</h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            حلول متكاملة في التوظيف، تصفية السير الذاتية، واستقطاب الكفاءات لدعم نمو أعمالك.
          </p>
        </div>
      </section>

      {/* بطاقات الخدمات */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.1s'}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">مجالات خدماتنا</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">نقدم مجموعة واسعة من الخدمات الاحترافية لتلبية جميع احتياجات الشركات والأفراد في سوق العمل الحديث</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* خدمة التوظيف */}
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <FaUserTie className="mx-auto text-primary-600 text-5xl mb-6" />
              <h3 className="text-xl font-bold mb-3 text-primary-700">خدمات التوظيف</h3>
              <p className="text-gray-600 mb-4">نساعدك في استقطاب أفضل الكفاءات من خلال شبكة واسعة وخبرة عميقة في السوق.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> بحث واستقطاب الكفاءات</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> تقييم المرشحين والمقابلات</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> إدارة عمليات التوظيف</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> استشارات الموارد البشرية</li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* تصفية السير الذاتية */}
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.05s'}}>
              <FaFileAlt className="mx-auto text-primary-600 text-5xl mb-6" />
              <h3 className="text-xl font-bold mb-3 text-primary-700">تصفية السير الذاتية</h3>
              <p className="text-gray-600 mb-4">نقوم بفرز وتحليل السير الذاتية لاختيار أفضل المرشحين للوظائف المتاحة.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> تحليل المهارات والخبرات</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> مطابقة المتطلبات الوظيفية</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> تقارير مفصلة لأصحاب العمل</li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
            {/* استقطاب الكفاءات */}
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaUsers className="mx-auto text-primary-600 text-5xl mb-6" />
              <h3 className="text-xl font-bold mb-3 text-primary-700">استقطاب الكفاءات</h3>
              <p className="text-gray-600 mb-4">نستقطب أفضل المواهب المحلية والعالمية لتلبية احتياجات شركتك المتخصصة.</p>
              <ul className="text-sm text-gray-500 text-right w-full space-y-2 mb-4">
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> حملات استقطاب موجهة</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> تقييم ثقافة الشركة والملاءمة</li>
                <li className="flex items-center"><FaCheckCircle className="ml-2 text-primary-500" /> دعم كامل في التوطين والتأهيل</li>
              </ul>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium mt-auto">اطلب الخدمة</Link>
            </div>
          </div>
        </div>
      </section>

      {/* لماذا تختارنا */}
      <section className="section bg-secondary-50 animate-fade-in" style={{animationDelay: '0.15s'}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">لماذا تختار Wared Idea؟</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">نتميز بخبرة عميقة، شبكة علاقات واسعة، ونتائج ملموسة لعملائنا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <FaCogs className="mx-auto text-primary-600 text-4xl mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.05s'}}>
              <FaHandshake className="mx-auto text-primary-600 text-4xl mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">عميل سعيد</div>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaChartLine className="mx-auto text-primary-600 text-4xl mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">مشروع ناجح</div>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.15s'}}>
              <FaLightbulb className="mx-auto text-primary-600 text-4xl mb-4" />
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* خطوات العمل */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">كيف نعمل؟</h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">نلتزم بمنهجية واضحة لضمان أفضل النتائج لعملائنا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <FaLightbulb className="mx-auto text-primary-500 text-4xl mb-4" />
              <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
              <h3 className="text-lg font-bold mb-2 text-secondary-900">التقييم</h3>
              <p className="text-gray-600">نحلل احتياجاتك ونحدد متطلباتك بدقة</p>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.05s'}}>
              <FaCogs className="mx-auto text-primary-500 text-4xl mb-4" />
              <div className="text-2xl font-bold text-primary-600 mb-2">2</div>
              <h3 className="text-lg font-bold mb-2 text-secondary-900">التخطيط</h3>
              <p className="text-gray-600">نضع خطة عمل مفصلة لتحقيق أهدافك</p>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaUsers className="mx-auto text-primary-500 text-4xl mb-4" />
              <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
              <h3 className="text-lg font-bold mb-2 text-secondary-900">التنفيذ</h3>
              <p className="text-gray-600">ننفذ الخطة بكفاءة واحترافية</p>
            </div>
            <div className="card text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.15s'}}>
              <FaCheckCircle className="mx-auto text-primary-500 text-4xl mb-4" />
              <div className="text-2xl font-bold text-primary-600 mb-2">4</div>
              <h3 className="text-lg font-bold mb-2 text-secondary-900">المتابعة</h3>
              <p className="text-gray-600">نتابع النتائج ونقدم الدعم المستمر</p>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة لاتخاذ إجراء */}
      <section className="section bg-gradient-to-br from-primary-100 to-primary-200 animate-fade-in" style={{animationDelay: '0.25s'}}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">جاهز للارتقاء بأعمالك؟</h2>
          <p className="text-lead text-gray-700 mb-8">تواصل معنا اليوم واحصل على استشارة مجانية حول حلول التوظيف وتطوير الأعمال</p>
          <Link href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-700 transition-all duration-200">
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  )
} 