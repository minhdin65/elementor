import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { landingData, AFFILIATE_LINK, REDIRECT_PAUSED } from '../data/landing-content';

export default function Register() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-elementor transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Elementor Pro" className="h-8" />
              <span className="font-bold text-lg tracking-tight">
                {landingData.site.name}
                <span className="text-elementor">{landingData.site.proSuffix}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {landingData.site.name}
            <span className="text-elementor">{landingData.site.proSuffix}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            Professional web creation solutions. Get access to the best page builder for your agency and clients.
          </p>
          <a
            href={REDIRECT_PAUSED ? '/' : AFFILIATE_LINK}
            target={REDIRECT_PAUSED ? undefined : '_blank'}
            rel={REDIRECT_PAUSED ? undefined : 'noopener noreferrer'}
            onClick={!REDIRECT_PAUSED ? () => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.() : undefined}
            className="inline-flex items-center justify-center gap-2 bg-elementor hover:bg-elementor-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg shadow-rose-500/25 hover:-translate-y-0.5"
          >
            {REDIRECT_PAUSED ? 'Tạm dừng - Về trang chủ' : 'Get Elementor Pro'}
            {!REDIRECT_PAUSED && <ExternalLink className="w-5 h-5" />}
          </a>
          <p className="mt-6 text-sm text-slate-500">
            Trusted by 15M+ websites worldwide. 30-day money-back guarantee.
          </p>
        </div>
      </main>

      {/* Cookie Consent */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 sm:p-6 z-50 shadow-lg">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              This website uses cookies to improve the user experience. By continuing to browse, you agree to the use of cookies.
            </p>
            <button
              onClick={() => setCookieAccepted(true)}
              className="flex-shrink-0 bg-elementor hover:bg-elementor-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              I Agree
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-100 py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} <a href="https://elementorpro.vercel.app" className="text-elementor hover:underline">elementorpro.vercel.app</a> - {landingData.site.name} Affiliate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
