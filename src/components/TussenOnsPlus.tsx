import React, { useState } from 'react';
import { 
  Sparkles, Check, ArrowRight, ShieldCheck, Heart, Clock, Tag, 
  Moon, Compass, Flame, Coffee, MapPin, HeartHandshake, Wine, Lock, ChevronRight 
} from 'lucide-react';

interface TussenOnsPlusProps {
  onOpenInstallModal: () => void;
}

interface ThemePackItem {
  id: string;
  title: string;
  tag: string;
  icon: React.ElementType;
  count: string;
  desc: string;
  sampleQuestion: string;
  vibeText: string;
}

const PREMIUM_PACKS: ThemePackItem[] = [
  {
    id: 'date',
    title: 'Eerste Date Special',
    tag: 'Chemie & IJsbreker',
    icon: Flame,
    count: '45 vragen',
    desc: 'Ontwapenende dilemma’s en speelse vragen die direct het sollicitatiegevoel wegnemen.',
    sampleQuestion: 'Wat is iets wat mensen vaak over jou aannemen dat totaal niet klopt?',
    vibeText: 'Speels, ontspannen en direct chemie voelbaar.',
  },
  {
    id: 'weekend',
    title: 'Weekend Weg',
    tag: 'Kaarslicht & Vuurkorf',
    icon: Compass,
    count: '55 vragen',
    desc: 'Speciaal samengesteld voor een weekendje in een huisje, aan het strand of bij een goed glas wijn.',
    sampleQuestion: 'Wat is een droom die we samen nog nooit hardop hebben durven uitspreken?',
    vibeText: 'Tijdloos, intiem en ongestoord verbinden.',
  },
  {
    id: 'latenight',
    title: 'Late Night',
    tag: 'Na Middernacht',
    icon: Moon,
    count: '40 vragen',
    desc: 'Voor de late uurtjes wanneer de telefoons op stil staan en de gesprekken oprecht worden.',
    sampleQuestion: 'Wanneer voelde jij je de afgelopen tijd kwetsbaar zonder dat je het liet merken?',
    vibeText: 'Ongefilterd, zacht en diepgaand.',
  },
  {
    id: 'jaren',
    title: 'Jaren Samen',
    tag: 'Verdieping & Herontdekking',
    icon: Heart,
    count: '60 vragen',
    desc: 'Voor stellen die elkaar al jaren kennen en willen ontdekken wat er nog onbesproken is gebleven.',
    sampleQuestion: 'Waarover verander je de laatste tijd langzaam maar zeker van gedachten?',
    vibeText: 'Brengt nieuwsgierigheid terug in het vertrouwde.',
  },
  {
    id: 'roadtrip',
    title: 'Roadtrip & Onderweg',
    tag: 'Urenlang Praten',
    icon: MapPin,
    count: '48 vragen',
    desc: 'Hilarische dilemma’s en filosofische gedachtesprongen voor in de auto of trein.',
    sampleQuestion: 'Als we bij de volgende afslag blindelings naar links gaan, waar komen we dan uit?',
    vibeText: 'Lachen, verrassende wendingen en tijd die voorbij vliegt.',
  },
  {
    id: 'diner',
    title: 'Diner & Goede Vrienden',
    tag: 'Aan Tafel',
    icon: Wine,
    count: '50 vragen',
    desc: 'Gêne overboord. Vragen die een avond met vrienden voorbij het standaard bijpraten tillen.',
    sampleQuestion: 'Wat is de vreemdste beslissing die je ooit hebt genomen en achteraf geniaal bleek?',
    vibeText: 'Echte verhalen, schaterlachen en loyaliteit.',
  },
];

export const TussenOnsPlus: React.FC<TussenOnsPlusProps> = ({ onOpenInstallModal }) => {
  const [billingCycle, setBillingCycle] = useState<'jaar' | 'maand'>('jaar');
  const [activePackId, setActivePackId] = useState<string>('weekend');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const activePack = PREMIUM_PACKS.find((p) => p.id === activePackId) || PREMIUM_PACKS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section id="plus" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative overflow-hidden">
      
      {/* Background ambient blush glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#F7D8D3]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Flexibel & Vrijblijvend</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Begin gratis. <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">Verdiep wanneer het moment erom vraagt.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed font-normal text-balance">
            Kies voor een eenmalig themapack voor een speciale avond, of ontdek alle diepgang met 7 dagen gratis Tussen Ons Plus.
          </p>
        </div>

        {/* 3-Tier Hybrid Offer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* TIER 1: Basis (Altijd Gratis) */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#6E625D] font-bold font-sans">Basis</span>
                <span className="px-3 py-1 bg-[#FAF5F0] text-[#201A18] rounded-full text-xs font-semibold">Altijd Gratis</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-2 font-normal">Tussen Ons Basis</h3>
              <p className="text-xs text-[#6E625D] mb-6">Om elkaar op ieder moment de juiste vraag te kunnen stellen.</p>

              <div className="text-3xl font-serif text-[#201A18] mb-6">
                €0 <span className="text-xs font-sans text-[#6E625D] font-normal">/ voor altijd</span>
              </div>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Vaste selectie van vragen en dilemma’s</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Direct bewaren op je beginscherm</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Geen account of download nodig</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>100% privé en advertentievrij</span>
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

          {/* TIER 2: Tussen Ons Plus (Het Premium Segment met 7 Dagen Trial) */}
          <div className="bg-white border-2 border-[#BD3A53] rounded-3xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-[#BD3A53] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-2xl font-sans">
              7 Dagen Gratis Proberen
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#BD3A53] font-bold font-sans">Routine & Diepgang</span>
                <span className="px-3 py-1 bg-[#FAF0ED] text-[#BD3A53] rounded-full text-xs font-semibold">Tussen Ons Plus</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-1 font-normal">Tussen Ons Plus</h3>
              <p className="text-xs text-[#6E625D] mb-4">Voor koppels en daters die echte gesprekstijd inbouwen.</p>

              {/* Billing Cycle Switcher */}
              <div className="flex items-center p-1 bg-[#FAF5F0] rounded-xl border border-[#EFE6DE] mb-5">
                <button
                  type="button"
                  onClick={() => setBillingCycle('jaar')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    billingCycle === 'jaar' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D]'
                  }`}
                >
                  Jaarlijks (€24,99)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('maand')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    billingCycle === 'maand' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D]'
                  }`}
                >
                  Maandelijks (€4,99)
                </button>
              </div>

              <div className="text-3xl font-serif text-[#201A18] mb-1">
                {billingCycle === 'jaar' ? '€24,99' : '€4,99'}
                <span className="text-xs font-sans text-[#6E625D] font-normal">
                  {billingCycle === 'jaar' ? ' / jaar (ca. €2,08/mnd)' : ' / maand'}
                </span>
              </div>
              <p className="text-[11px] text-[#BD3A53] font-medium mb-6">
                Eerste 7 dagen 100% gratis · Altijd opzegbaar
              </p>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span><strong>Onbeperkte toegang</strong> tot alle sferen en diepteniveaus</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Inclusief <strong>alle 6+ themapacks</strong> (Weekend Weg, Eerste Date etc.)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Wekelijks nieuwe vragen, dilemma’s en opdrachten</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Nachtdimmer voor ontspannen sfeer bij kaarslicht</span>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={onOpenInstallModal}
                className="w-full py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 mb-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start 7 dagen gratis proefperiode</span>
              </button>
              <div className="text-[10px] text-center text-[#6E625D]">
                Geen kosten voor dag 7. Eenvoudig met één klik te stoppen.
              </div>
            </div>
          </div>

          {/* TIER 3: Incidentele Aankoop (De Losse "Pack") */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#6E625D] font-bold font-sans">Geen Abonnement</span>
                <span className="px-3 py-1 bg-[#FAF5F0] text-[#201A18] rounded-full text-xs font-semibold">Eenmalig</span>
              </div>

              <h3 className="font-serif text-2xl text-[#201A18] mb-2 font-normal">Los Themapack</h3>
              <p className="text-xs text-[#6E625D] mb-6">Ideaal voor een specifieke avond, date of vakantie.</p>

              <div className="text-3xl font-serif text-[#201A18] mb-6">
                €3,99 <span className="text-xs font-sans text-[#6E625D] font-normal">/ eenmalig per pack</span>
              </div>

              <ul className="space-y-3 text-xs text-[#6E625D] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span><strong>Levenslang toegang</strong> tot het gekozen thema</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Geen herhalende kosten of abonnement</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Kies uit Weekend Weg, Eerste Date of Late Night</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#BD3A53]" />
                  <span>Direct beschikbaar op je beginscherm</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('themapacks-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-2xl text-xs font-semibold text-[#201A18] bg-white border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Tag className="w-3.5 h-3.5 text-[#BD3A53]" />
              <span>Bekijk de themapacks hieronder ↓</span>
            </button>
          </div>

        </div>

        {/* 7-Daagse Trial Explainer Box */}
        <div className="bg-[#FAF0ED]/60 border border-[#BD3A53]/20 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#BD3A53]/30 text-[#BD3A53] flex items-center justify-center shrink-0 shadow-2xs">
            <Clock className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-serif text-lg text-[#201A18] mb-1 font-normal">
              Waarom geven we een proefperiode van 7 dagen?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
              Omdat een goed gesprek zich niet laat dwingen in 48 uur. Met 7 dagen test je Tussen Ons rustig op meerdere momenten: van een ontspannen ontmoeting op woensdagavond tot een gezellige borrel of date night in het weekend. Pas als jullie het echt waardevol vinden, loopt het Plus-lidmaatschap door.
            </p>
          </div>
          <button
            onClick={onOpenInstallModal}
            className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shrink-0 cursor-pointer shadow-xs"
          >
            Start proefweek
          </button>
        </div>

        {/* 🌟 NEW HIGH-QUALITY VISUAL COMPONENT: THEME PACKS SHOWCASE */}
        <div id="themapacks-showcase" className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-14 shadow-xs max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#BD3A53] text-[11px] font-bold uppercase tracking-widest font-sans mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>De Premium Bibliotheek van Tussen Ons</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#201A18] mb-3 font-normal">
              Alle themapacks binnen handbereik
            </h3>
            <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
              Klik op een pack om de sfeer en een voorbeeldvraag te bekijken. Als <strong>Plus-lid</strong> heb je direct en onbeperkt toegang tot alle huidige en toekomstige packs.
            </p>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {PREMIUM_PACKS.map((pack) => {
              const isSelected = activePackId === pack.id;
              const IconComp = pack.icon;
              return (
                <div
                  key={pack.id}
                  onClick={() => setActivePackId(pack.id)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'border-[#BD3A53] bg-[#FAF0ED]/40 shadow-sm ring-2 ring-[#BD3A53]/20'
                      : 'border-[#EFE6DE] bg-[#FAF5F0]/60 hover:border-[#BD3A53]/40 hover:bg-white'
                  }`}
                >
                  {/* Subtle top indicator */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-[#BD3A53] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-bl-xl font-sans">
                      Bekijk
                    </div>
                  )}

                  <div>
                    {/* Icon & Count Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs ${
                        isSelected 
                          ? 'bg-[#BD3A53] text-white' 
                          : 'bg-white text-[#BD3A53] border border-[#EFE6DE]'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#6E625D] bg-white px-2.5 py-1 rounded-full border border-[#EFE6DE]">
                        {pack.count}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                      {pack.tag}
                    </span>
                    <h4 className="font-serif text-xl text-[#201A18] mb-2 font-normal group-hover:text-[#BD3A53] transition-colors">
                      {pack.title}
                    </h4>
                    <p className="text-xs text-[#6E625D] leading-relaxed mb-4">
                      {pack.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EFE6DE]/60 flex items-center justify-between text-xs font-semibold text-[#BD3A53]">
                    <span>{isSelected ? 'Actief geselecteerd' : 'Klik voor preview'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Pack Detailed Preview Banner */}
          <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BD3A53] mb-2 font-sans">
                <span>Voorbeeld uit: {activePack.title}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#6E625D] font-normal normal-case">{activePack.vibeText}</span>
              </div>
              <blockquote className="font-serif text-lg sm:text-xl text-[#201A18] italic leading-snug">
                &ldquo;{activePack.sampleQuestion}&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenInstallModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ontgrendel alle packs met Plus</span>
              </button>
            </div>
          </div>

          {/* Value Anchor Footer Note */}
          <div className="mt-8 pt-6 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E625D]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#BD3A53]" />
              <span>Losse packs kosten €3,99 per stuk · <strong>Tussen Ons Plus bevat ze allemaal</strong> inclusief alle toekomstige uitbreidingen.</span>
            </div>
            <div className="text-[11px] text-[#BD3A53] font-semibold whitespace-nowrap">
              7 dagen proefperiode inbegrepen
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
