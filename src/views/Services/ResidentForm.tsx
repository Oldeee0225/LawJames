import { Link } from "react-router-dom";
import { ArrowLeft, Building2, ShieldCheck, Briefcase, FileText, Users, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { servicesTranslations } from "../../i18n/servicesTranslations";
import { VIDEOS } from "../../config/videos";

export default function ResidentForm() {
  const { language, t } = useLanguage();
  const sT = servicesTranslations[language] || servicesTranslations['en'];

  const residentCategories = [
    {
      category: sT.residentCat1,
      entities: [
        { title: sT.residentCat1E1Title, description: sT.residentCat1E1Desc, badge: sT.residentCat1E1Badge, icon: <Building2 className="w-6 h-6" /> },
        { title: sT.residentCat1E2Title, description: sT.residentCat1E2Desc, badge: sT.residentCat1E2Badge, icon: <Briefcase className="w-6 h-6" /> }
      ]
    },
    {
      category: sT.residentCat2,
      entities: [
        { title: sT.residentCat2E1Title, description: sT.residentCat2E1Desc, badge: sT.residentCat2E1Badge, icon: <ShieldCheck className="w-6 h-6" /> }
      ]
    },
    {
      category: sT.residentCat3,
      entities: [
        { title: sT.residentCat3E1Title, description: sT.residentCat3E1Desc, badge: sT.residentCat3E1Badge, icon: <FileText className="w-6 h-6" /> },
        { title: sT.residentCat3E2Title, description: sT.residentCat3E2Desc, badge: sT.residentCat3E2Badge, icon: <Briefcase className="w-6 h-6" /> }
      ]
    },
    {
      category: sT.residentCat4,
      entities: [
        { title: sT.residentCat4E1Title, description: sT.residentCat4E1Desc, badge: sT.residentCat4E1Badge, icon: <Users className="w-6 h-6" /> },
        { title: sT.residentCat4E2Title, description: sT.residentCat4E2Desc, badge: sT.residentCat4E2Badge, icon: <ShieldCheck className="w-6 h-6" /> }
      ]
    },
    {
      category: sT.residentCat5,
      entities: [
        { title: sT.residentCat5E1Title, description: sT.residentCat5E1Desc, badge: sT.residentCat5E1Badge, icon: <Globe className="w-6 h-6" /> },
        { title: sT.residentCat5E2Title, description: sT.residentCat5E2Desc, badge: sT.residentCat5E2Badge, icon: <ShieldCheck className="w-6 h-6" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Top Header Section with Video Background */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          >
            <source src={VIDEOS.videoNoche} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:gap-4 transition-all mb-12 group">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest font-semibold">{t('forms.back')}</span>
          </Link>

          <div>
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
              {t('forms.specializedService')}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              {sT.residentFormPageTitle} <span className="gold-gradient italic">{sT.residentFormPageTitleHighlight}</span>
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-4xl">
              <p>{sT.residentFormPageP1}</p>
              <p>{sT.residentFormPageP2}</p>
              <p>{sT.residentFormPageP3}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20 relative z-10 mt-12">
        <div className="space-y-20">
          {residentCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-8 border-b border-[#d4af37]/20 pb-4">
                {cat.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {cat.entities.map((entity, eIdx) => (
                  <div key={eIdx} className="premium-card p-8 rounded-2xl group">
                    <div className="text-[#d4af37] mb-6 flex items-center justify-between">
                      {entity.icon}
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full">{entity.badge}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{entity.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{entity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-[#d4af37]/20 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">
            {sT.residentFormCTA} <span className="gold-gradient">{sT.residentFormCTAHighlight}</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">{sT.residentFormCTADesc}</p>
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#b8962e] text-black px-10 py-4 rounded font-bold transition-all btn-premium shadow-lg shadow-[#d4af37]/10"
          >
            {t('forms.contactExpert')}
          </Link>
        </div>
      </div>
    </div>
  );
}
