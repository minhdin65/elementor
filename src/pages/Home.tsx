import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Info, Menu, X } from 'lucide-react';
import { landingData, AFFILIATE_LINK } from '../data/landing-content';
import { iconMap } from '../data/iconMap';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Elementor Pro" className="h-8" />
              <span className="font-bold text-xl tracking-tight">{landingData.site.name}<span className="text-elementor">{landingData.site.proSuffix}</span></span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {landingData.nav.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-elementor transition-colors">{link.label}</a>
              ))}
              <Link to="/register" className="text-sm font-medium text-slate-600 hover:text-elementor transition-colors">{landingData.nav.registerLabel}</Link>
              <a 
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.()}
                className="bg-elementor hover:bg-elementor-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                {landingData.nav.ctaText} {React.createElement(iconMap.ExternalLink, { className: "w-4 h-4" })}
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4">
            <div className="flex flex-col gap-4">
              {landingData.nav.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              ))}
              <Link to="/register" className="text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>{landingData.nav.registerLabel}</Link>
              <a 
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.()}
                className="bg-elementor text-white px-6 py-3 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2"
              >
                {landingData.nav.ctaText} {React.createElement(iconMap.ExternalLink, { className: "w-4 h-4" })}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-elementor opacity-10 blur-[120px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-elementor text-sm font-semibold mb-6 border border-rose-100 uppercase tracking-wide">
                  {React.createElement(iconMap.Star, { className: "w-4 h-4 fill-elementor" })} {landingData.hero.badge.text}
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                  {landingData.hero.title.line1} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-elementor to-rose-400">{landingData.hero.title.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">{landingData.hero.subtitle}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {landingData.hero.ctas.map((cta, idx) => {
                    const IconC = iconMap[cta.icon as keyof typeof iconMap];
                    return (
                      <a key={idx} href={cta.href} target={cta.href.startsWith('http') ? "_blank" : undefined} rel={cta.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        onClick={cta.href.startsWith('http') ? () => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.() : undefined}
                        className={cta.primary ? "w-full sm:w-auto bg-elementor hover:bg-elementor-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5" : "w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2"}>
                        {cta.icon === 'PlayCircle' && IconC ? React.createElement(IconC, { className: "w-5 h-5" }) : null} {cta.text} {cta.icon === 'ExternalLink' && IconC ? React.createElement(IconC, { className: "w-5 h-5" }) : null}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-4 text-sm text-slate-500 font-medium">{landingData.hero.trustNote}</p>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-16 relative max-w-5xl mx-auto">
              <div className="rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-xl p-2 shadow-2xl">
                <img src={landingData.hero.image.src} alt={landingData.hero.image.alt} className="rounded-xl w-full object-cover aspect-[16/9] border border-slate-100" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 border-y border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">{landingData.logos.title}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {landingData.logos.items.map((item, idx) => {
                const IconC = iconMap[item.icon as keyof typeof iconMap];
                return <div key={idx} className="flex items-center gap-2 text-xl font-bold">{IconC && React.createElement(IconC, { className: "w-6 h-6" })} {item.name}</div>;
              })}
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{landingData.features.title}</h2>
              <p className="text-lg text-slate-600">{landingData.features.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingData.features.items.map((feature, idx) => {
                const IconC = iconMap[feature.icon];
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-elementor/30 hover:shadow-lg hover:shadow-rose-500/5 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {IconC && React.createElement(IconC, { className: "w-6 h-6 text-elementor" })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{landingData.workflow.title}</h2>
                <p className="text-slate-400 text-lg mb-8">{landingData.workflow.description}</p>
                <div className="space-y-6">
                  {landingData.workflow.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0"><CheckCircle2 className="w-6 h-6 text-elementor" /></div>
                      <p className="text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.()} className="inline-flex items-center gap-2 text-elementor font-semibold hover:text-rose-400 transition-colors">
                    {landingData.workflow.ctaText} <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-elementor/20 to-transparent rounded-3xl blur-2xl"></div>
                <img src={landingData.workflow.image.src} alt={landingData.workflow.image.alt} className="relative rounded-3xl border border-slate-700 shadow-2xl object-cover aspect-square md:aspect-[4/3]" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{landingData.testimonials.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {landingData.testimonials.items.map((t, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-6">{[...Array(t.rating)].map((_, i) => React.createElement(iconMap.Star, { key: i, className: "w-5 h-5 fill-amber-400 text-amber-400" }))}</div>
                  <p className="text-lg text-slate-700 mb-6 italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                      <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t.author}</h4>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-elementor"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{landingData.cta.title}</h2>
            <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">{landingData.cta.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.()} className="w-full sm:w-auto bg-white text-elementor px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                {landingData.cta.buttonText} {React.createElement(iconMap.ExternalLink, { className: "w-5 h-5" })}
              </a>
            </div>
            <p className="mt-6 text-rose-200 text-sm font-medium">{landingData.cta.trustBadges.join(' • ')}</p>
          </div>
        </section>

        <section className="py-8 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="flex-shrink-0 mt-1"><Info className="w-6 h-6 text-slate-400" /></div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{landingData.affiliateDisclaimer.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {landingData.affiliateDisclaimer.text.split(landingData.affiliateDisclaimer.linkPhrase).map((part, i) => (
                    <span key={i}>
                      {i > 0 && (
                        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => (window as Window & { gtag_report_conversion_track?: () => void }).gtag_report_conversion_track?.()} className="text-elementor hover:underline font-medium inline-flex items-center gap-1">
                          {landingData.affiliateDisclaimer.linkPhrase} {React.createElement(iconMap.ExternalLink, { className: "w-3 h-3" })}
                        </a>
                      )}
                      {part}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">{React.createElement(iconMap.Layout, { className: "w-4 h-4 text-white" })}</div>
              <span className="font-bold text-lg text-white">{landingData.footer.brandLabel} <span className="text-slate-400 font-normal">{landingData.footer.brandSub}</span></span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {landingData.footer.links.map((link) => (
                <button key={link.key} onClick={() => setActiveModal(link.key)} className="text-slate-400 hover:text-white transition-colors text-sm">{link.label}</button>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center md:text-left">
            <p className="text-slate-400 text-xs leading-relaxed mb-4"><strong>Tuyên bố từ chối trách nhiệm (Disclaimer):</strong> {landingData.footer.disclaimer}</p>
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} {landingData.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {activeModal && landingData.modals[activeModal as keyof typeof landingData.modals] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            {(() => {
              const modal = landingData.modals[activeModal as 'terms' | 'privacy' | 'contact'];
              if (!modal) return null;
              const isContact = activeModal === 'contact';
              return (
                <>
                  <div className="flex justify-between items-center p-6 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">{modal.title}</h3>
                    <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600"><X className="w-6 h-6" /></button>
                  </div>
                  <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4">
                    {isContact ? (
                      <>
                        <p>{(modal as typeof landingData.modals.contact).intro}</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                          {(modal as typeof landingData.modals.contact).items.map((item, i) => <li key={i}><strong>{item.label}:</strong> {item.value}</li>)}
                        </ul>
                      </>
                    ) : (
                      (modal as { content: Array<{ heading: string; text: string }> }).content.map((item, i) => <p key={i}><strong>{item.heading}</strong> {item.text}</p>)
                    )}
                  </div>
                </>
              );
            })()}
            <div className="p-6 border-t border-slate-100 bg-slate-50 text-right">
              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
