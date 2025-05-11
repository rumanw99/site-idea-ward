'use client'

import React from 'react'
import ContactForm from '../../components/ContactForm'
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaHandshake, FaRocket, FaUserTie, FaBolt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[40vh] overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-primary-200/80 z-0" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 py-16 animate-fade-in">
          <FaEnvelope className="mx-auto text-primary-600 text-6xl mb-4 animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-900 drop-shadow-lg mb-2">تواصل معنا</h1>
          <p className="text-xl md:text-2xl text-primary-800 font-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            نحن هنا لدعم نجاحك. تواصل معنا لأي استفسار أو شراكة استراتيجية مع فريقنا من الخبراء.
          </p>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.1s'}}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">لماذا تتواصل معنا؟</h2>
            <p className="text-lg text-secondary-700">نحن شريكك الموثوق لتحقيق أهدافك، بخبرة واسعة وفريق محترف واستجابة سريعة وشفافة.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center transform hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
              <FaUserTie className="mx-auto text-primary-600 text-4xl mb-4 animate-bounce" />
              <div className="text-lg font-bold text-primary-600 mb-2">خبرة عميقة</div>
              <div className="text-secondary-600">سنوات من الخبرة في السوق المحلي والدولي</div>
            </div>
            <div className="card text-center transform hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in" style={{animationDelay: '0.15s'}}>
              <FaHandshake className="mx-auto text-secondary-600 text-4xl mb-4 animate-bounce" />
              <div className="text-lg font-bold text-secondary-600 mb-2">ثقة الشركات الكبرى</div>
              <div className="text-secondary-600">شراكات مع مئات الشركات والمؤسسات الرائدة</div>
            </div>
            <div className="card text-center transform hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <FaBolt className="mx-auto text-primary-500 text-4xl mb-4 animate-bounce" />
              <div className="text-lg font-bold text-primary-500 mb-2">استجابة سريعة</div>
              <div className="text-secondary-600">فريقنا جاهز للرد على استفساراتك بسرعة واحترافية</div>
            </div>
            <div className="card text-center transform hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in" style={{animationDelay: '0.25s'}}>
              <FaRocket className="mx-auto text-secondary-500 text-4xl mb-4 animate-bounce" />
              <div className="text-lg font-bold text-secondary-500 mb-2">حلول مخصصة</div>
              <div className="text-secondary-600">نقدم حلولاً تناسب احتياجاتك الفريدة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-white animate-fade-in" style={{animationDelay: '0.15s'}}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-8 text-center text-primary-700">معلومات الاتصال</h2>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.1s'}}>
                <FaMapMarkerAlt className="text-primary-600 text-2xl mr-2" />
                <div>
                  <div className="text-lg font-bold text-primary-700 mb-1">العنوان</div>
                  <div className="text-secondary-600">دمشق، سوريا</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.15s'}}>
                <FaEnvelope className="text-primary-600 text-2xl mr-2" />
                <div>
                  <div className="text-lg font-bold text-primary-700 mb-1">البريد الإلكتروني</div>
                  <div className="text-secondary-600">ideaward868@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.2s'}}>
                <FaWhatsapp className="text-primary-600 text-2xl mr-2" />
                <div>
                  <div className="text-lg font-bold text-primary-700 mb-1">واتساب</div>
                  <div className="text-secondary-600">+963984547466</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all animate-fade-in" style={{animationDelay: '0.25s'}}>
                <FaClock className="text-primary-600 text-2xl mr-2" />
                <div>
                  <div className="text-lg font-bold text-primary-700 mb-1">ساعات العمل</div>
                  <div className="text-secondary-600">السبت - الخميس: 9:00 صباحاً - 5:00 مساءً<br/>الجمعة: مغلق</div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-bold mb-4 text-center text-primary-700">أرسل لنا رسالة</h2>
              <p className="text-secondary-600 mb-8 arabic-text text-center">
                املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="container-custom">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1234567890123!2d36.12345678901234!3d33.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzI0LjUiTiAzNsKwMDcnMjQuNSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 animate-fade-in" style={{animationDelay: '0.25s'}}>
        <div className="container-custom text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow">جاهز للارتقاء بأعمالك؟</h2>
          <p className="text-lg text-primary-100 mb-8">ابدأ شراكتك معنا اليوم أو تواصل مع فريقنا لأي استفسار.</p>
          <a href="#" className="inline-block bg-white text-primary-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-primary-50 transition-all text-lg">ابدأ الآن</a>
        </div>
      </section>
    </div>
  )
} 