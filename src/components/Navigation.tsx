'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setShowNavbar(false) // Scroll down: hide
      } else {
        setShowNavbar(true) // Scroll up: show
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -60, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      style={{
        pointerEvents: showNavbar ? 'auto' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Ward Idea Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="mr-3 text-xl font-bold text-gray-900">ورد آيديا</span>
          </Link>

          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                الرئيسية
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                من نحن
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600 transition-colors">
                خدماتنا
              </Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-primary-600 transition-colors">
                قصص النجاح
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                المدونة
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn btn-primary">
              تواصل معنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                قصص النجاح
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
} 