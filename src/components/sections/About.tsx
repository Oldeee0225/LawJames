import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-[#1e293b] rounded-2xl overflow-hidden premium-card border-none">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Legal Expertise"
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden md:block premium-card p-8 rounded-2xl max-w-[280px]">
            <p className="text-[#d4af37] font-serif text-3xl mb-2 italic">{t('about.imageTrust')}</p>
            <p className="text-sm text-gray-400 font-light">
              {t('about.imageDesc')}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('about.subtitle')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t('about.title')} <br /><span className="gold-gradient italic">{t('about.titleHighlight')}</span></h2>

          <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-2">{t('about.exclusivityTitle')}</h4>
              <p className="text-sm text-gray-500">{t('about.exclusivityDesc')}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">{t('about.precisionTitle')}</h4>
              <p className="text-sm text-gray-500">{t('about.precisionDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}