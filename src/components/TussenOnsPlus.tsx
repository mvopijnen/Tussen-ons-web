import React, { useState } from 'react';
import { Sparkles, Check, Smartphone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface TussenOnsPlusProps {
  onOpenInstallModal: () => void;
}

export const TussenOnsPlus: React.FC<TussenOnsPlusProps> = ({ onOpenInstallModal }) => {
  const [selectedPlan, setSelectedPlan] = useState<'plus' | 'gift'>('plus');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section id="plus" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative overflow-hidden">
      
      {/* Background ambient blush glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F7D8D3]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Strategische Abonnementen</span>
            <span aria-hidden="true">·</span>
            <span>Tussen Ons Plus & Cadeau</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Kies het plan dat past bij jullie moment.
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed font-normal text-balance">
            Start direct gratis met de basis, of ontgrendel alle exclusieve themapacks en verdiepende momenten voor een diepere verbinding.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Plan 1: Basis (Gratis) */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#6E625D] font-bold font-sans">Start</span>
                <span className="px-3 py-1 bg-[#FAF5F0] text-[#201A18] rounded-full text-xs font-semibold">Altijd Gratis</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-1 font-normal">Tussen Ons Basis</h3>
              <p className="text-xs text-[#6E625D] mb-6">Voor spontane avonden en eerste dates.</p>

              <div className="text-3xl font-serif text-[#201A18] mb-6">
                €0 <span className="text-xs font-sans text-[#6E625D] font-normal">/ voor altijd</span>
              </div>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Onbeperkt basissferen & startvragen</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Direct toevoegen aan beginscherm</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>100% privé zonder advertenties</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenInstallModal}
              className="w-full py-3.5 rounded-2xl text-xs font-semibold text-[#201A18] bg-white border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Gratis openen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Plan 2: Tussen Ons Plus (Most Popular) */}
          <div className="bg-white border-2 border-[#BD3A53] rounded-3xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-[#BD3A53] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-2xl font-sans">
              Meest Gekozen
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#BD3A53] font-bold font-sans">Onbeperkt</span>
                <span className="px-3 py-1 bg-[#FAF0ED] text-[#BD3A53] rounded-full text-xs font-semibold">Tussen Ons Plus</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-1 font-normal">Plus Jaarabonnement</h3>
              <p className="text-xs text-[#6E625D] mb-6">Voor koppels die diepte en variatie zoeken.</p>

              <div className="text-3xl font-serif text-[#201A18] mb-1">
                €19,99 <span className="text-xs font-sans text-[#6E625D] font-normal">/ jaar</span>
              </div>
              <p className="text-[11px] text-[#BD3A53] font-medium mb-6">Komt neer op slechts €1,66 per maand</p>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span><strong>Alle themapacks ontgrendeld</strong> (Weekend Weg, Eerste Date Specials, Jaren Samen)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Exclusieve wekelijkse vragen & dilemma’s</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Nachtdimmer & alle sfeerwerelden</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Altijd voorrang op nieuwe features</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setSelectedPlan('plus')}
              className="w-full py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Word Tussen Ons Plus lid</span>
            </button>
          </div>

          {/* Plan 3: Koppel Gift Pass */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#6E625D] font-bold font-sans">Cadeau</span>
                <span className="px-3 py-1 bg-[#FAF5F0] text-[#201A18] rounded-full text-xs font-semibold">Cadeau Pas</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-1 font-normal">Koppel Gift Pass</h3>
              <p className="text-xs text-[#6E625D] mb-6">Het perfecte huwelijks- of verlovingscadeau.</p>

              <div className="text-3xl font-serif text-[#201A18] mb-6">
                €24,99 <span className="text-xs font-sans text-[#6E625D] font-normal">/ eenmalig</span>
              </div>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Onbeperkte Plus toegang voor 2 personen</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Prachtige digitale cadeaukaart met persoonlijke boodschap</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Geen automatische verlenging</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setSelectedPlan('gift')}
              className="w-full py-3.5 rounded-2xl text-xs font-semibold text-[#201A18] bg-white border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-[#BD3A53]" />
              <span>Geef Cadeau Pas</span>
            </button>
          </div>

        </div>

        {/* Action Form for Selected Plan */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-2 font-sans">
            Direct Starten met {selectedPlan === 'plus' ? 'Tussen Ons Plus' : 'de Koppel Gift Pass'}
          </span>
          <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
            Ontvang direct toegang op je telefoon
          </h3>
          <p className="text-xs sm:text-sm text-[#6E625D] mb-6 leading-relaxed">
            Vul je e-mailadres in om je {selectedPlan === 'plus' ? 'Plus account' : 'Cadeau Pass'} direct te activeren.
          </p>

          {subscribed ? (
            <div className="p-5 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center mx-auto text-sm font-bold">
                ✓
              </div>
              <h4 className="font-serif text-lg text-[#201A18]">Welkom bij Tussen Ons Plus!</h4>
              <p className="text-xs text-[#6E625D]">
                We hebben je activatielink gestuurd naar <strong>{email}</strong>. Open de mail op je telefoon om direct te beginnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Jouw e-mailadres"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-2xl border border-[#EFE6DE] bg-[#FAF5F0] text-xs text-[#201A18] placeholder:text-[#6E625D]/50 focus:outline-none focus:ring-1 focus:ring-[#BD3A53] focus:border-[#BD3A53]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Activeer Direct</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-[#6E625D]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BD3A53]" />
              100% Veilig betalen (iDEAL, Bancontact, CC)
            </span>
            <span>✦ Altijd opzegbaar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
