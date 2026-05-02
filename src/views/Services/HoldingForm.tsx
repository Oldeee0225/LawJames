import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Globe, Briefcase, Landmark, Network } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const holdingCategories = [
  {
    category: "1. Offshore Holding Structures",
    entities: [
      {
        title: "Panama Offshore Holding",
        description: "A centralized structure in Panama for holding international assets. It offers confidentiality, operational flexibility, and tax efficiency for global investors.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Foreign Investment Holding",
        description: "A vehicle designed to channel international investments, enabling unified management of diversified portfolios under a favorable jurisdiction.",
        icon: <Building2 className="w-6 h-6" />
      }
    ]
  },
  {
    category: "2. Family & Wealth Holdings",
    entities: [
      {
        title: "Estate Planning Holding",
        description: "Designed to ensure a structured transfer of assets across generations, minimizing legal risks and optimizing wealth distribution.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "3. Asset-Specific Holdings",
    entities: [
      {
        title: "Real Estate Holding",
        description: "A specialized structure for owning and managing properties across multiple jurisdictions, centralizing control and enhancing asset protection.",
        icon: <Landmark className="w-6 h-6" />
      },
      {
        title: "Intellectual Property Holding",
        description: "A vehicle for centralizing ownership and management of intangible assets, royalties, and intellectual property rights under a tax-efficient structure.",
        icon: <Network className="w-6 h-6" />
      }
    ]
  },
  {
    category: "4. Control & Management Structures",
    entities: [
      {
        title: "Corporate Control Holding",
        description: "A parent entity designed to centralize ownership and control of multiple subsidiaries, improving decision-making and administrative efficiency.",
        icon: <Building2 className="w-6 h-6" />
      },
      {
        title: "Asset Consolidation Holding",
        description: "A structure to unify ownership of dispersed assets, simplifying management and enhancing financial and operational control.",
        icon: <Network className="w-6 h-6" />
      }
    ]
  },
];
export default function HoldingForm() {
  const { t } = useLanguage();
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
            <source src="https://ajax.streamable.com/rkxi15.mp4" type="video/mp4" />
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
              Holding <span className="gold-gradient italic">Structures</span>
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-4xl">
              <p>
                We design and implement sophisticated holding structures tailored to centralize and protect your global assets.
              </p>

              <p>
                Through the strategic use of Panamanian entities, we help optimize tax efficiency, streamline ownership, and enhance long-term wealth management across multiple jurisdictions.
              </p>

              <p>
                Our approach ensures flexibility, compliance, and confidentiality, enabling our clients to operate with greater control and security in an international environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20 relative z-10 mt-12">
        <div className="space-y-20">
          {holdingCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-8 border-b border-[#d4af37]/20 pb-4">
                {cat.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {cat.entities.map((entity, eIdx) => (
                  <div key={eIdx} className="premium-card p-8 rounded-2xl group">
                    <div className="text-[#d4af37] mb-6 flex items-center justify-between">
                      {entity.icon}
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full">Estructura</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{entity.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {entity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-[#d4af37]/20 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">
            Need a <span className="gold-gradient">Tailored Structure?</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We analyze your specific situation to design a holding structure aligned with your wealth and international objectives.
          </p>

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
