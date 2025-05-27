'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`w-full fixed top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-violet-900/90 shadow-lg backdrop-blur-sm transition-all duration-500 ${scrolled ? 'shadow-xl h-16' : 'h-20'}`}>
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <Link href="/" className="hover:opacity-90 transition-opacity group">
                <div className="relative">
                  <Image
                    src="/image.png"
                    alt="Company Logo"
                    width={200}
                    height={50}
                    className={`h-25 w-auto object-contain transition-all duration-500 mt-3 ${scrolled ? 'scale-90' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-violet-600 rounded-full mix-blend-multiply filter blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 h-full">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/theme">Theme</NavLink>
              <NavLink href="/schedule">Schedule</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <NavLink href="/result">Results</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none p-3 rounded-xl hover:bg-violet-800/30 transition-all duration-300 group relative"
                aria-label="Toggle menu"
              >
                <div className="relative w-7 h-7">
                  <span className={`absolute block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1'}`}></span>
                  <span className={`absolute block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}></span>
                  <span className={`absolute block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all duration-500"
            onClick={() => setMobileMenuOpen(false)}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          ></div>
        )}

        {/* Mobile Menu Content */}
      {/* Mobile Menu Content */}
<div 
  className={`md:hidden fixed inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]  ${
    mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
  }`}
  style={{
    background: 'rgba(0,0,0,1)',
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.95)), linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    boxShadow: `
      inset 0 0 60px rgba(139, 92, 246, 0.3),
      0 0 80px rgba(139, 92, 246, 0.4),
      0 0 120px rgba(168, 85, 247, 0.3)
    `
  }}
>
          {/* Glowing border effects */}
          <div className="absolute inset-0 rounded-lg  ">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 blur-xl"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-400 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-400 to-transparent"></div>
          </div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 ">
            <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="flex flex-col h-full relative z-10">
            {/* Header with Logo and Close Button */}
            <div 
              className="flex justify-between items-center mt-2 border-b border-violet-500/30 pb-4 mx-4"
              style={{
                boxShadow: '0 1px 0 0 rgba(139, 92, 246, 0.5)'
              }}
            >
              <div className="flex-shrink-0 p-2 rounded-xl bg-black/50 border border-violet-500/30"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
                }}
              >
                <Image
                  src="/image.png"
                  alt="Company Logo"
                  width={120}
                  height={30}
                  className="h-16 w-auto object-contain opacity-90"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-3 rounded-full border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 transform hover:rotate-90 hover:scale-110 bg-black/50 backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
                }}
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-8  bg-gray-950">
              <div className="w-full max-w-sm space-y-6">
                {[
                  { href: "/", text: "Home", icon: "🏠" },
                  { href: "/about", text: "About Us", icon: "👥" },
                  { href: "/theme", text: "Theme", icon: "🎨" },
                  { href: "/schedule", text: "Schedule", icon: "📅" },
                  { href: "/contact", text: "Contact Us", icon: "📞" },
                  { href: "/result", text: "Results", icon: "🏆" },
                ].map((item, index) => (
                  <MobileNavLink 
                    key={item.href}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    delay={index * 0.1}
                    icon={item.icon}
                  >
                    {item.text}
                  </MobileNavLink>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="mt-8 w-full max-w-sm ">
                <Link 
                  href="/register" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-8 py-4 rounded-2xl bg-black border-2 border-violet-500/50 text-white font-semibold text-lg hover:border-violet-400/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-center backdrop-blur-sm"
                  style={{
                    animation: `slideIn 0.5s ease-out 0.6s both`,
                    opacity: 0,
                    boxShadow: `
                      0 0 30px rgba(139, 92, 246, 0.4),
                      inset 0 0 30px rgba(139, 92, 246, 0.1),
                      0 10px 25px rgba(0, 0, 0, 0.5)
                    `,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(20,20,20,0.9))'
                  }}
                >
                  <span className="flex items-center justify-center">
                    ✨ Register Now
                  </span>
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div 
              className="p-8 text-center border-t border-violet-500/30 mx-4  bg-gray-950" 
              style={{
                boxShadow: '0 -1px 0 0 rgba(139, 92, 246, 0.5)'
              }}
            >
              <div className="flex justify-center space-x-6 mb-6">
                {[
                  { name: 'facebook', icon: '📘' },
                  { name: 'twitter', icon: '🐦' },
                  { name: 'instagram', icon: '📷' },
                  { name: 'linkedin', icon: '💼' }
                ].map((social, index) => (
                  <a 
                    key={social.name}
                    href={`https://${social.name}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-violet-300 transition-all duration-300 transform hover:scale-110"
                    style={{
                      animation: `slideIn 0.5s ease-out ${0.7 + index * 0.1}s both`,
                      opacity: 0
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl bg-black border border-violet-500/30 hover:border-violet-400/50 backdrop-blur-sm flex items-center justify-center transition-all"
                      style={{
                        boxShadow: '0 0 15px rgba(139, 92, 246, 0.3), inset 0 0 15px rgba(139, 92, 246, 0.1)'
                      }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Add padding to the top of your page content */}
      <div className={`transition-all duration-500 ${scrolled ? 'pt-16' : 'pt-20'}`}></div>
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 h-full flex items-center group transition-all duration-300 hover:bg-violet-900/20"
    >
      <span className="relative z-10 flex items-center">
        <span className="font-sans text-lg font-medium tracking-wide text-white">
          {children}
        </span>
        <svg
          width="2"
          height="22"
          viewBox="0 0 2 22"
          className="ml-3 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V22" stroke="currentColor" />
        </svg>
      </span>
      <span className="absolute inset-x-4 bottom-0 h-1 bg-gradient-to-r from-purple-400 to-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
      <style jsx>{`
        .font-sans {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
          letter-spacing: 0.025em;
        }
      `}</style>
    </Link>
  );
}

function MobileNavLink({ href, children, onClick, delay = 0, icon }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative w-full p-4 rounded-2xl bg-black/80 backdrop-blur-sm border border-violet-500/40 hover:border-violet-400/60 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
      style={{
        animation: `slideIn 0.6s ease-out ${delay}s both`,
        opacity: 0,
        boxShadow: `
          0 0 20px rgba(139, 92, 246, 0.3),
          inset 0 0 20px rgba(139, 92, 246, 0.1),
          0 5px 15px rgba(0, 0, 0, 0.3)
        `,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,20,0.8))'
      }}
    >
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-4">
          <span className="text-2xl filter drop-shadow-lg">{icon}</span>
          <span 
            className="text-xl font-medium tracking-wide" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 500,
              textShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
            }}
          >
            {children}
          </span>
        </div>
        <svg 
          className="w-6 h-6 text-violet-400 transform group-hover:translate-x-1 transition-transform duration-300 filter drop-shadow-lg" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* Animated underline with glow */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full group-hover:w-full transition-all duration-500 ease-out"
        style={{
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)'
        }}
      ></div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.2), 0 0 30px rgba(139, 92, 246, 0.4)'
        }}
      ></div>
    </Link>
  );
}
