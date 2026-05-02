import { Briefcase, Building2, ShieldCheck, UserCheck, Home, Globe, Plane, MapPin, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { servicesTranslations } from "../../i18n/servicesTranslations";

export default function Process() {
  const { language, t } = useLanguage();
  const steps = [
    {
      number: "01",
      title: t('process.step1Title'),
      description: t('process.step1Desc')
    },
    {
      number: "02",
      title: t('process.step2Title'),
      description: t('process.step2Desc')
    },
    {
      number: "03",
      title: t('process.step3Title'),
      description: t('process.step3Desc')
    }
  ];

  const sT = servicesTranslations[language] || servicesTranslations['en'];

  const serviceCategories = [
    {
      category: sT.corporateServices,
      showDetails: true,
      entities: [
        {
          title: sT.entityFormationTitle,
          description: sT.entityFormationDesc,
          link: "/services/entity-formation",
          icon: <Building2 className="w-6 h-6" />,
          badge: sT.entityFormationBadge
        },
        {
          title: sT.holdingStructuresTitle,
          description: sT.holdingStructuresDesc,
          link: "/services/holding-structures",
          icon: <Briefcase className="w-6 h-6" />,
          badge: sT.holdingStructuresBadge
        },
        {
          title: sT.corpGovTitle,
          description: sT.corpGovDesc,
          link: "/services/corporate-governance",
          icon: <ShieldCheck className="w-6 h-6" />,
          badge: sT.corpGovBadge
        },
        {
          title: sT.residentAgentTitle,
          description: sT.residentAgentDesc,
          link: "/services/resident-agent",
          icon: <UserCheck className="w-6 h-6" />,
          badge: sT.residentAgentBadge
        }
      ]
    },
    {
      category: sT.litigation,
      entities: [
        {
          title: sT.judicialColTitle,
          description: sT.judicialColDesc,
          link: "/services/corporate-governance",
          icon: <ShieldCheck className="w-6 h-6" />,
          badge: sT.judicialColBadge
        },
        {
          title: sT.civilLitTitle,
          description: sT.civilLitDesc,
          link: "/services/resident-agent",
          icon: <UserCheck className="w-6 h-6" />,
          badge: sT.civilLitBadge
        },
        {
          title: sT.comLitTitle,
          description: sT.comLitDesc,
          link: "/services/resident-agent",
          icon: <UserCheck className="w-6 h-6" />,
          badge: sT.comLitBadge
        },
        {
          title: sT.enfGuaTitle,
          description: sT.enfGuaDesc,
          link: "/services/resident-agent",
          icon: <UserCheck className="w-6 h-6" />,
          badge: sT.enfGuaBadge
        }
      ]
    },
    {
      category: sT.realEstate,
      entities: [
        {
          title: sT.reAdvisoryBuyTitle,
          description: sT.reAdvisoryBuyDesc,
          link: "/services/bienes-inmuebles",
          icon: <Home className="w-6 h-6" />,
          badge: sT.reAdvisoryBuyBadge
        },
        {
          title: sT.reAdvisorySellTitle,
          description: sT.reAdvisorySellDesc,
          link: "/services/bienes-inmuebles",
          icon: <Building2 className="w-6 h-6" />,
          badge: sT.reAdvisorySellBadge
        },
        {
          title: sT.reTransactTitle,
          description: sT.reTransactDesc,
          link: "/services/bienes-inmuebles",
          icon: <Briefcase className="w-6 h-6" />,
          badge: sT.reTransactBadge
        },
        {
          title: sT.reDueDiligenceTitle,
          description: sT.reDueDiligenceDesc,
          link: "/services/bienes-inmuebles",
          icon: <ShieldCheck className="w-6 h-6" />,
          badge: sT.reDueDiligenceBadge
        }
      ]
    },
    {
      category: sT.immigration,
      entities: [
        {
          title: sT.immigServTitle,
          description: sT.immigServDesc,
          link: "/services/migracion",
          icon: <Globe className="w-6 h-6" />,
          badge: sT.immigServBadge
        },
        {
          title: sT.resByInvTitle,
          description: sT.resByInvDesc,
          link: "/services/migracion",
          icon: <Briefcase className="w-6 h-6" />,
          badge: sT.resByInvBadge
        },
        {
          title: sT.intCorpMobTitle,
          description: sT.intCorpMobDesc,
          link: "/services/migracion",
          icon: <Plane className="w-6 h-6" />,
          badge: sT.intCorpMobBadge
        },
        {
          title: sT.intExpAdvTitle,
          description: sT.intExpAdvDesc,
          link: "/services/migracion",
          icon: <MapPin className="w-6 h-6" />,
          badge: sT.intExpAdvBadge
        }
      ]
    },
    {
      category: sT.ip,
      entities: [
        {
          title: sT.tmRegTitle,
          description: sT.tmRegDesc,
          link: "/services/propiedad-intelectual",
          icon: <FileCheck className="w-6 h-6" />,
          badge: sT.tmRegBadge
        },
        {
          title: sT.tmMonTitle,
          description: sT.tmMonDesc,
          link: "/services/propiedad-intelectual",
          icon: <ShieldCheck className="w-6 h-6" />,
          badge: sT.tmMonBadge
        },
        {
          title: sT.tmPortTitle,
          description: sT.tmPortDesc,
          link: "/services/propiedad-intelectual",
          icon: <Briefcase className="w-6 h-6" />,
          badge: sT.tmPortBadge
        },
        {
          title: sT.ipEnfTitle,
          description: sT.ipEnfDesc,
          link: "/services/propiedad-intelectual",
          icon: <ShieldCheck className="w-6 h-6" />,
          badge: sT.ipEnfBadge
        }
      ]
    }
  ];

  return (
    <>
      <section id="process" className="relative py-32 px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="https://i.imgur.com/XENewI2.mp4?format=mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 text-center md:text-left">
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('process.methodology')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('process.title')} <span className="gold-gradient italic">{t('process.titleHighlight')}</span> {t('process.titleEnd')}</h2>
            <p className="text-gray-300 max-w-2xl font-light text-lg mx-auto md:mx-0">
              {t('process.description')}
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/5" />

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="group">
                  <div className="w-24 h-24 rounded-full bg-navy-dark border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#d4af37]/50 transition-colors duration-500 bg-[#020617]">
                    <span className="text-3xl font-serif text-[#d4af37]">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('process.expertise')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('process.servicesTitle')}</h2>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((cat, idx) => (
              <div key={idx}>
                <h2 className="text-[#d4af37] uppercase tracking-[0.2em] text-xl md:text-2xl font-bold mb-8 border-b border-[#d4af37]/20 pb-4">
                  {cat.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {cat.entities.map((entity, eIdx) => (
                    <Link key={eIdx} to={entity.link} className="premium-card p-8 rounded-2xl group block cursor-pointer flex flex-col h-full">
                      <div className="text-[#d4af37] mb-6 flex items-center justify-between">
                        {entity.icon}
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full group-hover:border-[#d4af37]/50 transition-colors">
                          {entity.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{entity.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                        {entity.description}
                      </p>
                      {cat.showDetails && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <span className="text-[#d4af37] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                            {t('process.viewDetails')} <span className="text-lg">→</span>
                          </span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
