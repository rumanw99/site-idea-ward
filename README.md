# Ward Idea Website

موقع شركة Ward Idea للتوظيف والمبيعات، مبني باستخدام Next.js و Tailwind CSS.

## المميزات

- تصميم عصري وجذاب
- واجهة مستخدم سهلة الاستخدام
- تجاوب كامل مع جميع أحجام الشاشات
- أداء عالي وسريع
- دعم كامل للغة العربية
- نموذج اتصال متكامل مع EmailJS
- مدونة متكاملة
- صفحات خدمات مفصلة
- قصص نجاح العملاء
- معلومات عن الشركة وفريق العمل

## التقنيات المستخدمة

- [Next.js](https://nextjs.org/) - إطار عمل React
- [Tailwind CSS](https://tailwindcss.com/) - إطار عمل CSS
- [EmailJS](https://www.emailjs.com/) - خدمة إرسال البريد الإلكتروني
- [TypeScript](https://www.typescriptlang.org/) - لغة البرمجة
- [React](https://reactjs.org/) - مكتبة واجهة المستخدم

## متطلبات التشغيل

- Node.js 18.0.0 أو أحدث
- npm 9.0.0 أو أحدث

## التثبيت

1. قم بنسخ المشروع:
```bash
git clone https://github.com/your-username/ward-idea.git
cd ward-idea
```

2. قم بتثبيت التبعيات:
```bash
npm install
```

3. قم بإنشاء ملف `.env.local` وأضف المتغيرات البيئية المطلوبة:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
```

4. قم بتشغيل خادم التطوير:
```bash
npm run dev
```

5. افتح [http://localhost:3000](http://localhost:3000) في متصفحك.

## البناء

لإنشاء نسخة الإنتاج:

```bash
npm run build
```

لتشغيل نسخة الإنتاج:

```bash
npm start
```

## الهيكل

```
ward-idea/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── success-stories/
│   │   ├── globals.css
│   │   └── page.tsx
│   └── components/
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── public/
│   └── images/
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. قم بعمل Fork للمشروع
2. قم بإنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. قم بعمل Commit للتغييرات (`git commit -m 'Add some amazing feature'`)
4. قم بعمل Push للفرع (`git push origin feature/amazing-feature`)
5. قم بفتح طلب Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## الاتصال

- البريد الإلكتروني: info@wardidea.com
- الموقع: [wardidea.com](https://wardidea.com)
- واتساب: +963 123 456 789 