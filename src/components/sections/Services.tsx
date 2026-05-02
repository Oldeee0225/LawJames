import { Briefcase, Building2, ShieldCheck, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { servicesTranslations } from "../../i18n/servicesTranslations";
import { VIDEOS } from "../../config/videos";

export default function Services() {
  const { language, t } = useLanguage();
  const sT = servicesTranslations[language] || servicesTranslations['en'];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: sT.entityFormationTitle,
      description: sT.entityFormationDesc,
      link: "/services/entity-formation"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: sT.holdingStructuresTitle,
      description: sT.holdingStructuresDesc,
      link: "/services/holding-structures"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: sT.corpGovTitle,
      description: sT.corpGovDesc,
      link: "/services/corporate-governance"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: sT.residentAgentTitle,
      description: sT.residentAgentDesc,
      link: "/services/resident-agent"
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('process.expertise')}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{t('process.servicesTitle')} <br /><span className="gold-gradient italic">{sT.corporateServices}</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cards Grid */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="premium-card p-10 rounded-2xl group block cursor-pointer">
                  <div className="text-[#d4af37] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <span className="text-[#d4af37] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      {t('process.viewDetails')} <span className="text-lg">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-start mt-4">
              <Link to="/process" className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#b8962e] text-black px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all btn-premium">
                {t('process.servicesTitle')} <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Video Side Card */}
          <div className="lg:w-1/3 relative rounded-2xl overflow-hidden premium-card border-none min-h-[400px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src={VIDEOS.video2} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <h4 className="text-[#d4af37] font-serif text-2xl mb-4 italic">Tailored Excellence</h4>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                We design sophisticated corporate structures focused on asset consolidation, corporate optimization, and strategic expansion, aligned with the objectives of business groups and high-level investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}