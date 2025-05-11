'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { id: string } }) {
  // This is a mock data. In a real application, you would fetch the blog post data based on the ID
  const blogPost = {
    id: params.id,
    title: 'كيفية اختيار أفضل المرشحين للوظائف',
    date: '15 مارس 2025',
    category: 'التوظيف',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    content: `
      <p>اختيار أفضل المرشحين للوظائف هو عملية حساسة ومهمة في أي شركة. إليك بعض النصائح والإرشادات التي يمكن أن تساعدك في هذه العملية:</p>

      <h2>1. تحديد المتطلبات بوضوح</h2>
      <p>قبل البدء في عملية التوظيف، تأكد من تحديد المتطلبات الأساسية للوظيفة بشكل واضح. هذا يشمل:</p>
      <ul>
        <li>المهارات التقنية المطلوبة</li>
        <li>الخبرة العملية</li>
        <li>المؤهلات التعليمية</li>
        <li>المهارات الشخصية</li>
      </ul>

      <h2>2. تحليل السير الذاتية بعناية</h2>
      <p>عند مراجعة السير الذاتية، ابحث عن:</p>
      <ul>
        <li>التناسق في الخبرات</li>
        <li>الإنجازات الملموسة</li>
        <li>المهارات المتعلقة بالوظيفة</li>
        <li>التطور المهني</li>
      </ul>

      <h2>3. إجراء مقابلات فعالة</h2>
      <p>المقابلات هي فرصة مهمة لتقييم المرشحين. تأكد من:</p>
      <ul>
        <li>إعداد أسئلة مفتوحة</li>
        <li>الاستماع بعناية للإجابات</li>
        <li>تقييم المهارات العملية</li>
        <li>التحقق من التوافق الثقافي</li>
      </ul>

      <h2>4. التحقق من المراجع</h2>
      <p>التحقق من المراجع هو خطوة مهمة في عملية التوظيف. تأكد من:</p>
      <ul>
        <li>التواصل مع المراجع المذكورة</li>
        <li>التحقق من الخبرات السابقة</li>
        <li>تقييم الأداء السابق</li>
        <li>التحقق من السلوك المهني</li>
      </ul>

      <h2>5. اتخاذ القرار النهائي</h2>
      <p>عند اتخاذ القرار النهائي، تأخذ في الاعتبار:</p>
      <ul>
        <li>ملاءمة المهارات للمتطلبات</li>
        <li>التوافق مع ثقافة الشركة</li>
        <li>إمكانية النمو والتطور</li>
        <li>التوقعات المستقبلية</li>
      </ul>

      <p>باتباع هذه الخطوات، يمكنك تحسين عملية اختيار المرشحين وزيادة فرص اختيار أفضل المواهب لشركتك.</p>
    `,
    author: {
      name: 'أحمد محمد',
      role: 'مدير التوظيف',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&q=80'
    },
    relatedPosts: [
      {
        id: '2',
        title: 'استراتيجيات زيادة المبيعات في 2025',
        image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
        date: '10 مارس 2025',
        category: 'المبيعات'
      },
      {
        id: '3',
        title: 'كيفية بناء فريق عمل قوي',
        image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
        date: '5 مارس 2025',
        category: 'تطوير الأعمال'
      }
    ]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center text-sm text-secondary-500 mb-6">
              <span>{blogPost.date}</span>
              <span className="mx-2">•</span>
              <span>{blogPost.category}</span>
            </div>
            <h1 className="text-4xl md:text-hero font-bold mb-6 md:mb-8 text-secondary-900">
              {blogPost.title}
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 relative ml-4 scroll-reveal">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900">{blogPost.author.name}</h3>
                <p className="text-secondary-500">{blogPost.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-12 rounded-lg overflow-hidden scroll-reveal">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div 
              className="prose prose-lg max-w-none arabic-text"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-secondary-900">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <article key={post.id} className="card group scroll-reveal">
                  <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center text-sm text-secondary-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <Link href={`/blog/${post.id}`} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    اقرأ المزيد
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 