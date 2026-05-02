import { Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-[#d4af37]" />
              <span className="text-lg font-bold tracking-widest uppercase font-serif">
                Yanguéz Legal <span className="text-[#d4af37]">Group</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
          </div>

          {/* Law Firm */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('footer.lawFirm')}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/process" className="hover:text-[#d4af37] transition-colors">{t('footer.ourProcess')}</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">{t('footer.expertise')}</Link></li>
              <li><Link to="/confidentiality" className="hover:text-[#d4af37] transition-colors">Confidentiality Policy</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Direct Contact</h4>
            <p className="text-gray-500 text-sm mb-4">Reach out to our experts directly for a private consultation.</p>
            <div className="flex">
              <Link
                to="/contact"
                className="bg-[#d4af37] text-black px-6 py-3 rounded text-sm font-bold hover:bg-[#b8962e] transition-colors w-full flex items-center justify-center gap-3 tracking-widest uppercase btn-premium"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <p>© 2026 YANGUÉZ LEGAL GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}