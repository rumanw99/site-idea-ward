import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import StripeLayout from '@/components/StripeLayout'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'ورد آيديا - للتوظيف والاستشارات',
  description: 'شركة ورد آيديا للتوظيف والاستشارات - نقدم خدمات التوظيف، الاستشارات، التدريب، وتصفية السير الذاتية',
  keywords: 'توظيف, مبيعات, استشارات, فلترة سير ذاتية, توظيف سوري, شركات سورية',
  authors: [{ name: 'Ward Idea' }],
  creator: 'Ward Idea',
  publisher: 'Ward Idea',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://wardidea.com',
    siteName: 'ورد آيديا',
    title: 'ورد آيديا - للتوظيف والاستشارات',
    description: 'شركة ورد آيديا للتوظيف والاستشارات - نقدم خدمات التوظيف، الاستشارات، التدريب، وتصفية السير الذاتية',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ورد آيديا',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ورد آيديا - للتوظيف والاستشارات',
    description: 'شركة ورد آيديا للتوظيف والاستشارات - نقدم خدمات التوظيف، الاستشارات، التدريب، وتصفية السير الذاتية',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cairo.className}>
        <StripeLayout>
          <Navigation />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </StripeLayout>
      </body>
    </html>
  )
} 