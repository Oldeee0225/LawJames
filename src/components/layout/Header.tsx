import { Shield, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Language } from "../../i18n/translations";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: 'https://flagcdn.com/w40/us.png', label: 'English' },
  { code: 'es', flag: 'https://flagcdn.com/w40/es.png', label: 'Español' },
  { code: 'it', flag: 'https://flagcdn.com/w40/it.png', label: 'Italiano' },
  { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', label: 'Français' },
  { code: 'pt', flag: 'https://flagcdn.com/w40/pt.png', label: 'Português' },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopLangRef.current && !desktopLangRef.current.contains(event.target as Node)) {
        setIsDesktopLangOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-[#d4af37]" />
          <span className="text-xl font-bold tracking-widest uppercase font-serif">
            Yanguéz Legal <span className="text-[#d4af37]">Group</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.home')}</Link>
          <Link to="/process" className="text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.services')}</Link>
          <Link to="/about" className="text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.about')}</Link>
          <Link to="/contact" className="text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.contact')}</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          {/* Desktop Language Selector */}
          <div className="relative" ref={desktopLangRef}>
            <button 
              onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors px-2 py-1"
            >
              <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-auto rounded-sm" />
              <span className="text-xs font-medium uppercase">{currentLang.code}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isDesktopLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden flex flex-col py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsDesktopLangOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors text-left ${language === lang.code ? 'text-[#d4af37]' : 'text-gray-300'}`}
                  >
                    <img src={lang.flag} alt={lang.code} className="w-5 h-auto rounded-sm" />
                    <span className="text-sm">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="bg-[#d4af37] hover:bg-[#b8962e] text-black px-6 py-2 rounded font-medium text-sm transition-all btn-premium whitespace-nowrap">
            {t('header.consultation')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="relative" ref={mobileLangRef}>
            <button 
              onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
            >
              <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-auto rounded-sm" />
              <ChevronDown className="w-4 h-4" />
            </button>
            {isMobileLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden flex flex-col py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileLangOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors text-left ${language === lang.code ? 'text-[#d4af37]' : 'text-gray-300'}`}
                  >
                    <img src={lang.flag} alt={lang.code} className="w-5 h-auto rounded-sm" />
                    <span className="text-sm">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-[#d4af37] transition-colors p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col px-6 py-8 gap-6 shadow-2xl">
          <Link onClick={() => setIsMenuOpen(false)} to="/" className="text-lg uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.home')}</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/process" className="text-lg uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.services')}</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-lg uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.about')}</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="text-lg uppercase tracking-widest hover:text-[#d4af37] transition-colors">{t('header.contact')}</Link>
          
          <div className="pt-6 border-t border-white/10">
            <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="w-full block text-center bg-[#d4af37] hover:bg-[#b8962e] text-black px-6 py-4 rounded font-bold text-sm transition-all shadow-lg shadow-[#d4af37]/20">
              {t('header.consultation')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
