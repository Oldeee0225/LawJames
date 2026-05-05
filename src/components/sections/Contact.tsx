import { Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const commonDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];

const suggestEmail = (email: string) => {
  const parts = email.split("@");
  if (parts.length !== 2) return null;
  const domain = parts[1];
  if (!domain) return null;

  const suggestion = commonDomains.find(d =>
    d.startsWith(domain.slice(0, 3))
  );

  if (suggestion && domain !== suggestion) {
    return email.replace(domain, suggestion);
  }

  return null;
};

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/admin@yanguezlegalgroup.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: data.name,
            Email: emailValue,
            Phone: data.phone || "Not provided",
            Subject: data.subject,
            Message: data.message,
            _subject: "New Contact Request | Yanguéz Legal Group",
            _captcha: "false",
            _template: "table"
        })
      });

      setStatus('success');
      form.reset();
      setEmailValue("");
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error(error);
      setStatus('success');
      form.reset();
      setEmailValue("");
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="premium-card rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-[#0f172a] p-12 lg:p-20 border-r border-white/5">
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-semibold block mb-4">{t('contact.subtitle')}</span>
            <h2 className="text-4xl font-bold mb-8 italic">{t('contact.title')} <br /><span className="gold-gradient">{t('contact.titleHighlight')}</span></h2>
            <p className="text-gray-400 mb-12 font-light">
              {t('contact.description')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{t('contact.emailTitle')}</div>
                  <div className="text-white font-medium">admin@yanguezlegalgroup.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{t('contact.officeTitle')}</div>
                  <div className="text-white font-medium">+507 6889-5353</div>
                </div>
              </div>

              <a href="https://wa.me/50768895353?text=Hello%2C%20I%20am%20interested%20in%20your%20legal%20services%20and%20would%20like%20to%20receive%20more%20information." target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{t('contact.whatsappTitle')}</div>
                  <div className="text-green-500 font-medium cursor-pointer">{t('contact.whatsappSubtitle')}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 lg:p-20 bg-navy-dark/40 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{t('contact.formName')}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.formNamePlaceholder')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{t('contact.formEmail')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      setEmailError(null);
                      setEmailSuggestion(null);
                    }}
                    onBlur={(e) => {
                      const val = e.target.value;
                      if (!val) return;
                      if (!isValidEmail(val)) {
                        setEmailError("Please enter a valid email address.");
                        return;
                      }
                      const suggestion = suggestEmail(val);
                      if (suggestion) {
                        setEmailSuggestion(suggestion);
                      }
                    }}
                    placeholder={t('contact.formEmailPlaceholder')}
                    className={`w-full bg-white/5 border ${emailError ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-4 focus:outline-none focus:border-[#d4af37] transition-colors`}
                  />
                  {emailError && <p className="text-xs text-red-500/90 ml-1 mt-1">{emailError}</p>}
                  {emailSuggestion && (
                    <p 
                      className="text-xs text-[#d4af37] ml-1 mt-1 cursor-pointer hover:underline transition-all" 
                      onClick={() => {
                        setEmailValue(emailSuggestion);
                        setEmailSuggestion(null);
                        setEmailError(null);
                      }}
                    >
                      Did you mean <strong className="font-semibold">{emailSuggestion}</strong>?
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{t('contact.formPhone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.formPhonePlaceholder')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{t('contact.formSubject')}</label>
                  <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#d4af37] transition-colors text-gray-400 appearance-none">
                    <option value={t('contact.option1')}>{t('contact.option1')}</option>
                    <option value={t('contact.option2')}>{t('contact.option2')}</option>
                    <option value={t('contact.option3')}>{t('contact.option3')}</option>
                    <option value={t('contact.option4')}>{t('contact.option4')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{t('contact.formMessage')}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t('contact.formMessagePlaceholder')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#b8962e] text-black font-bold py-5 rounded-lg transition-all btn-premium shadow-lg shadow-[#d4af37]/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' && t('contact.submitIdle')}
                {status === 'submitting' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('contact.submitLoading')}
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {t('contact.submitSuccess')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
