'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      // إرسال إشعار للإدارة
      await emailjs.send(
        'service_orbwwqa',
        'template_9a7h9eo',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        'xNll32jEIb-7fkRV6'
      )
      // إرسال رد تلقائي للعميل
      await emailjs.send(
        'service_orbwwqa',
        'template_6dlh8lu',
        {
          to_name: formData.name,
          to_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'xNll32jEIb-7fkRV6'
      )
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً عبر البريد الإلكتروني أو الواتساب.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'حدث خطأ أثناء إرسال الرسالة. يرجى التأكد من البيانات والمحاولة مرة أخرى.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="أدخل اسمك"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="أدخل رقم هاتفك"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            الموضوع
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">اختر الموضوع</option>
            <option value="توظيف">توظيف</option>
            <option value="استشارات">استشارات</option>
            <option value="مبيعات">مبيعات</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="أدخل رسالتك"
        />
      </div>

      {status.message && (
        <div
          className={`p-4 rounded-lg ${
            status.success
              ? 'bg-green-100 text-green-700'
              : status.error
              ? 'bg-red-100 text-red-700'
              : ''
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className="w-full btn btn-primary"
      >
        {status.loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
      </button>
    </form>
  )
} 