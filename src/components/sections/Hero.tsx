import { Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { VIDEOS } from "../../config/videos";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={VIDEOS.video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Location Badge */}
        <div className="absolute top-0 right-6 flex items-center gap-2 text-white/80 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Panama City</span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#d4af37]/30 rounded-full mb-8 bg-[#d4af37]/5 backdrop-blur-md">
          <Award className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">{t('hero.tagline')}</span>
        </div>

        <h1 className="text-5xl md:text-8xl mb-8 leading-[1.1] font-bold">
          {t('hero.title')} <br />
          <span className="gold-gradient italic">{t('hero.titleHighlight')}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex justify-center items-center">
          <Link to="/contact" className="bg-[#d4af37] hover:bg-[#b8962e] text-black px-10 py-4 rounded font-semibold transition-all min-w-[200px] btn-premium inline-block text-center">
            {t('header.consultation')}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5">
          <div>
            <div className="text-3xl font-serif text-[#d4af37] mb-1" translate="no">5+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Years Excellence</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-[#d4af37] mb-1" translate="no">10+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-[#d4af37] mb-1" translate="no">30+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Legal Services</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-[#d4af37] mb-1" translate="no">99%</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}