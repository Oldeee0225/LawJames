import { Globe, Scale, Lock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { VIDEOS } from "../../config/videos";

export default function WhyPanama() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: t('whyUs.reason1Title'),
      description: t('whyUs.reason1Desc')
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: t('whyUs.reason2Title'),
      description: t('whyUs.reason2Desc')
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: t('whyUs.reason3Title'),
      description: t('whyUs.reason3Desc')
    }
  ];

  return (
    <section id="why-panama" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('whyUs.subtitle')}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('whyUs.title')} <span className="gold-gradient italic">{t('whyUs.titleHighlight')}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            {t('whyUs.description')}
          </p>
        </div>



        <div className="grid md:grid-cols-3 gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/5 text-[#d4af37] mb-8 group-hover:bg-[#d4af37]/10 transition-colors duration-500">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
          <video
             src={VIDEOS.video3}
             autoPlay
             loop
             muted
             playsInline
             className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-1000"
           />
        </div>
      </div>
    </section>
  );
}
