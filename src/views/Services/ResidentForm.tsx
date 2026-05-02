import { Link } from "react-router-dom";
import { ArrowLeft, Building2, ShieldCheck, Briefcase, FileText, Users, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const residentCategories = [
  {
    category: "1. Legal Representation",
    entities: [
      {
        title: "Registered Resident Agent",
        description: "We act as your official legal representative in Panama, providing reliable and discreet services for your entity.",
        icon: <Building2 className="w-6 h-6" />
      },
      {
        title: "Corporate Representation",
        description: "Comprehensive representation services for corporations and foundations, ensuring continuous legal presence in Panama.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "2. Regulatory Compliance",
    entities: [
      {
        title: "Local Compliance Management",
        description: "We ensure your entity remains fully compliant with Panamanian regulations at all times.",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ]
  },
  {
    category: "3. Document Management",
    entities: [
      {
        title: "Official Correspondence Handling",
        description: "We receive and process all official notices and legal documents on behalf of your entity.",
        icon: <FileText className="w-6 h-6" />
      },
      {
        title: "Legal Document Maintenance",
        description: "We maintain a secure and organized record of all legal documentation required under Panamanian law.",
        icon: <Briefcase className="w-6 h-6" />
      }
    ]
  },
  {
    category: "4. Continuity & Support",
    entities: [
      {
        title: "Ongoing Support",
        description: "We provide continuous support to ensure your legal structure remains properly maintained at all times.",
        icon: <Users className="w-6 h-6" />
      },
      {
        title: "Confidentiality Assurance",
        description: "We prioritize confidentiality, precision, and continuity, giving our clients complete peace of mind.",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ]
  },
  {
    category: "5. Specialized Services",
    entities: [
      {
        title: "Multi-Entity Management",
        description: "We coordinate resident agent services across multiple entities under a unified management structure.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Proactive Compliance Advisory",
        description: "We provide proactive guidance on regulatory changes that may impact your entity in Panama.",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ]
  }
];

export default function ResidentForm() {
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
              Resident Agent <span className="gold-gradient italic">Services</span>
            </h1>

            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-4xl">
              <p>
                We provide reliable and discreet resident agent services, acting as your official legal representative in Panama.
              </p>

              <p>
                Our role ensures that your entity remains fully compliant with local regulations while maintaining proper communication with regulatory authorities.
              </p>

              <p>
                We prioritize confidentiality, precision, and continuity, giving our clients peace of mind that their legal structure is properly maintained and supported at all times.
              </p>
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
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-white/5 px-3 py-1 rounded-full">Agente</span>
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
            Need a <span className="gold-gradient">Resident Agent?</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We assess your specific requirements to provide a resident agent service tailored to your entity’s needs.
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
