import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { confidenTranslations } from "../../i18n/confidenTranslations";

export default function Confiden() {
  const { language } = useLanguage();
  const c = confidenTranslations[language] || confidenTranslations["en"];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#d4af37] hover:gap-4 transition-all mb-12 group"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-widest font-semibold">{c.back}</span>
        </Link>

        <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
          {c.subtitle}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          {c.title} <span className="gold-gradient italic">{c.titleHighlight}</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      </div>

      {/* Legal Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-400 text-[15px] leading-[1.9] mb-20">
        {c.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-[#d4af37]/20 text-center">
        <Shield className="w-10 h-10 text-[#d4af37] mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4 italic">
          {c.ctaTitle} <span className="gold-gradient">{c.ctaTitleHighlight}</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm leading-relaxed">{c.ctaDesc}</p>
        <Link
          to="/contact"
          className="inline-block bg-[#d4af37] hover:bg-[#b8962e] text-black px-10 py-4 rounded font-bold transition-all btn-premium shadow-lg shadow-[#d4af37]/10 uppercase tracking-widest text-sm"
        >
          {c.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
