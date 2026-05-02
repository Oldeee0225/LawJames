import { Link } from "react-router-dom";
import { ArrowLeft, Building2, ShieldCheck, Briefcase, FileText, Users, Landmark } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const corporateCategories = [
  {
    category: "1. Strategic Governance",
    entities: [
      {
        title: "Corporate Governance Advisory",
        description: "We provide strategic guidance to ensure your entity operates with structure, transparency, and full regulatory compliance.",
        icon: <Building2 className="w-6 h-6" />
      },
      {
        title: "Governance Framework Design",
        description: "We establish clear governance frameworks that strengthen operational integrity and long-term stability across your entities.",
        icon: <FileText className="w-6 h-6" />
      }
    ]
  },
  {
    category: "2. Records & Resolutions Management",
    entities: [
      {
        title: "Board Resolution Management",
        description: "We manage the drafting, execution, and documentation of board resolutions in accordance with legal standards.",
        icon: <FileText className="w-6 h-6" />
      },
      {
        title: "Corporate Records Maintenance",
        description: "We maintain accurate and up-to-date corporate records, ensuring accessibility and full regulatory compliance.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "3. Internal Controls & Compliance",
    entities: [
      {
        title: "Internal Controls Implementation",
        description: "We design and implement internal control systems tailored to complex legal structures, optimizing operational efficiency.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Regulatory Compliance Audits",
        description: "We assess and verify compliance with applicable regulations to reduce legal and operational risks.",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ]
  },
  {
    category: "4. Governance Structures",
    entities: [
      {
        title: "Board Structuring",
        description: "We advise on the formation and structuring of boards aligned with your entity’s strategic objectives.",
        icon: <Users className="w-6 h-6" />
      },
      {
        title: "Decision-Making Protocols",
        description: "We establish clear and efficient decision-making protocols to eliminate ambiguity and strengthen governance processes.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "5. Stability & Risk Management",
    entities: [
      {
        title: "Corporate Risk Mitigation",
        description: "We identify and mitigate operational and legal risks, ensuring long-term stability across your corporate structures.",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Operational Integrity Management",
        description: "We strengthen operational integrity through frameworks that promote transparency, accountability, and compliance.",
        icon: <Landmark className="w-6 h-6" />
      }
    ]
  }
];
export default function CorporateForm() {
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
            <source src="https://i.imgur.com/JHKuytb.mp4?format=mp4" type="video/mp4" />
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
              Corporate <span className="gold-gradient italic">Governance</span>
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-4xl">
              <p>
                We provide strategic corporate governance advisory to ensure your entity operates with structure, transparency, and full regulatory compliance.
              </p>

              <p>
                Our services include board resolution management, corporate records maintenance, and the implementation of internal controls tailored to complex legal structures.
              </p>

              <p>
                By establishing clear governance frameworks, we help our clients strengthen operational integrity, mitigate risk, and maintain long-term stability across all corporate entities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20 relative z-10 mt-12">
        <div className="space-y-20">
          {corporateCategories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-8 border-b border-[#d4af37]/20 pb-4">
                {cat.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {cat.entities.map((entity, eIdx) => (
                  <div key={eIdx} className="premium-card p-8 rounded-2xl group">
                    <div className="text-[#d4af37] mb-6 flex items-center justify-between">
                      {entity.icon}
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full">Gobernanza</span>
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
            Need <span className="gold-gradient">Governance Advisory?</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We analyze your corporate structure to implement governance frameworks tailored to your specific operational and strategic needs.
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

