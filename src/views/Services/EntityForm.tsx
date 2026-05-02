import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Globe, ShieldCheck, Briefcase, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const entityCategories = [
  {
    category: "1. Corporate Entities",
    entities: [
      {
        title: "Corporations",
        description: "The most widely used corporate structure in Panama for both local and international business operations. It offers flexibility, confidentiality, and ease of administration.",
        icon: <Building2 className="w-6 h-6" />
      },
    ]
  },
  {
    category: "2. Offshore & International",
    entities: [
      {
        title: "Offshore Corporation",
        description: "An entity designed for operations outside Panama. It is not subject to taxation on foreign-sourced income, making it ideal for international trade and asset holding structures.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Panama Holding Company",
        description: "A holding company is a legal entity established to own and manage shares in other companies, assets, investments, or wealth structures. In Panama, holding structures are widely used by entrepreneurs, investors, and corporate groups for strategic asset management.",
        icon: <Globe className="w-6 h-6" />
      }
    ]
  },
  {
    category: "3. Asset Protection",
    entities: [
      {
        title: "Private Interest Foundation",
        description: "A legal vehicle used for asset protection and estate planning. It allows individuals to structure and manage assets with a high level of confidentiality and security.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Trust (Fideicomiso)",
        description: "A legal arrangement for managing and protecting assets through a third party (trustee). Commonly used in financial structures and wealth planning strategies.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "4. Special Entities",
    entities: [
      {
        title: "Non-Profit Association",
        description: "An entity established for social, educational, or institutional purposes, without commercial intent.",
        icon: <Users className="w-6 h-6" />
      }
    ]
  }
];

export default function EntityForm() {
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
            <source src="https://streamable.com/rkxi15.mp4" type="video/mp4" />
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
              Corporations & <span className="gold-gradient italic">Foundations</span> in Panama
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-4xl">
              <p>
                Panama offers one of the most efficient and flexible legal frameworks for the formation of corporate entities and asset protection structures, both locally and internationally.
              </p>

              <p>
                Depending on each client’s objectives—whether to operate commercially, structure investments, or protect assets—different legal vehicles are available, each designed to meet specific strategic needs.
              </p>

              <p>
                Among the most commonly used are corporations and private interest foundations, each with distinct characteristics that should be carefully evaluated before implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20 relative z-10 mt-12">
        <div className="space-y-20">
          {entityCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-8 border-b border-[#d4af37]/20 pb-4">
                {cat.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {cat.entities.map((entity, eIdx) => (
                  <div key={eIdx} className="premium-card p-8 rounded-2xl group">
                    <div className="text-[#d4af37] mb-6 flex items-center justify-between">
                      {entity.icon}
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full">Escritura</span>
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
            Need <span className="gold-gradient">Strategic Legal Guidance?</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We analyze your specific situation to recommend the legal structure that best aligns with your personal or business objectives.
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
