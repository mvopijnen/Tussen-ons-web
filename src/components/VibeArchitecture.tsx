import React, { useState } from 'react';
import { Sparkles, Users, Heart, Coffee, Compass, Smile, Flame, Moon, Shuffle, Check } from 'lucide-react';

interface VibeArchitectureProps {
  onExplore?: () => void;
}

const GEZELSCHAPPEN = [
  { id: 'date', label: 'Date', desc: 'Spannend & nieuwsgierig' },
  { id: 'partner', label: 'Partner', desc: 'Vertrouwd & verdiepend' },
  { id: 'vrienden', label: 'Vrienden', desc: 'Openhartig & ontspannen' },
  { id: 'familie', label: 'Familie', desc: 'Warme herinneringen' },
  { id: 'groep', label: 'Groep', desc: 'Diners & gezelschap' },
];

const SFEREN = [
  {
    id: 'ontdekken',
    name: 'Ontdekken',
    meaning: 'Dingen horen die je nog niet wist',
    sample: 'Wat is een gewoonte van jezelf waar je stiekem trots op bent?',
  },
  {
    id: 'lachen',
    name: 'Lachen',
    meaning: 'Licht, onverwacht, soms een beetje ongemakkelijk',
    sample: 'Welke trend uit je tienertijd zou je het liefst uit je geheugen wissen?',
  },
  {
    id: 'flirten',
    name: 'Flirten',
    meaning: 'Chemie, spanning en speelsheid',
    sample: 'Wat dacht je in de eerste tien seconden dat je me zag?',
  },
  {
    id: 'verdiepen',
    name: 'Verdiepen',
    meaning: 'Persoonlijker, eerlijker, rustiger',
    sample: 'Waarover twijfel je de laatste tijd zonder dat iemand het merkt?',
  },
  {
    id: 'verrassen',
    name: 'Verrassen',
    meaning: 'Niet kiezen, gewoon kijken waar het gesprek heen gaat',
    sample: 'Als onze levens een film waren, in welke scène zitten we nu?',
  },
];

const DIEPTE_NIVEAUS = [
  { id: 'luchtig', label: 'Luchtig', desc: 'Ontspannen, speels en zonder drempel' },
  { id: 'nieuwsgierig', label: 'Nieuwsgierig', desc: 'Verrassend en met een open blik' },
  { id: 'persoonlijk', label: 'Persoonlijk', desc: 'Eerlijk, kwetsbaarder en verbindend' },
  { id: 'diep', label: 'Diep', desc: 'Voor momenten die er echt toe doen' },
];

export const VibeArchitecture: React.FC<VibeArchitectureProps> = () => {
  const [selectedGezelschap, setSelectedGezelschap] = useState('date');
  const [selectedSfeer, setSelectedSfeer] = useState('ontdekken');
  const [selectedDiepte, setSelectedDiepte] = useState('nieuwsgierig');

  const activeSfeer = SFEREN.find((s) => s.id === selectedSfeer) || SFEREN[0];

  return (
    <section id="vibes" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Drie Duidelijke Lagen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Geen willekeurige vragenlijst. <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">Een afgestemd gesprek.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Tussen Ons bouwt een gesprek op in drie intuïtieve stappen: wie er tegenover je zit, de gewenste sfeer en de diepte die vandaag goed voelt.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* LAAG 1: WIE ZIT TEGENOVER JE? */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-1 font-sans">
                  Laag 1
                </span>
                <h3 className="font-serif text-2xl text-[#201A18] font-normal">
                  Wie zit tegenover je?
                </h3>
              </div>
              <p className="text-xs text-[#6E625D] italic">
                Dezelfde vraag voelt totaal anders afhankelijk van wie tegenover je zit.
              </p>
            </div>

            {/* 5 Visual Choices */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {GEZELSCHAPPEN.map((g) => {
                const isSelected = selectedGezelschap === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGezelschap(g.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#BD3A53] bg-[#FAF0ED] shadow-2xs'
                        : 'border-[#EFE6DE] bg-[#FAF5F0] hover:border-[#BD3A53]/50'
                    }`}
                  >
                    <div className="font-serif text-lg text-[#201A18] mb-1">
                      {g.label}
                    </div>
                    <div className="text-[11px] text-[#6E625D]">
                      {g.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAAG 2: WELKE SFEER PAST BIJ DIT MOMENT? */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-1 font-sans">
                Laag 2
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] font-normal mb-1">
                Welke sfeer past bij dit moment?
              </h3>
              <p className="text-xs text-[#6E625D]">
                Kies uit 5 zorgvuldig ontworpen belevingswerelden.
              </p>
            </div>

            {/* 5 Sferen Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
              {SFEREN.map((s) => {
                const isSelected = selectedSfeer === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSfeer(s.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#BD3A53] bg-[#FAF0ED] shadow-2xs'
                        : 'border-[#EFE6DE] bg-[#FAF5F0] hover:border-[#BD3A53]/50'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-lg text-[#201A18] mb-1">
                        {s.name}
                      </div>
                      <div className="text-[11px] text-[#6E625D] leading-relaxed">
                        {s.meaning}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Sample Question for Selected Vibe */}
            <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                  Voorbeeldvraag binnen &ldquo;{activeSfeer.name}&rdquo;
                </span>
                <p className="font-serif text-base text-[#201A18] italic">
                  &ldquo;{activeSfeer.sample}&rdquo;
                </p>
              </div>
              <span className="text-xs text-[#6E625D] shrink-0 font-medium">
                Sfeer: {activeSfeer.meaning}
              </span>
            </div>
          </div>

          {/* LAAG 3: HOE DIEP? (NIEUW TOEGEVOEGD) */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-1 font-sans">
                Laag 3 · Unieke Feature
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] font-normal mb-2">
                Hoe diep?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed max-w-2xl">
                Niet iedere avond vraagt om hetzelfde gesprek. Tussen Ons laat jullie bepalen hoeveel ruimte er vandaag is.
              </p>
            </div>

            {/* Visual Depth Scale: Luchtig -> Nieuwsgierig -> Persoonlijk -> Diep */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {DIEPTE_NIVEAUS.map((d, idx) => {
                const isSelected = selectedDiepte === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDiepte(d.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-[#BD3A53] bg-[#FAF0ED] shadow-2xs'
                        : 'border-[#EFE6DE] bg-[#FAF5F0] hover:border-[#BD3A53]/50'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] mb-1 font-sans">
                      Niveau 0{idx + 1}
                    </div>
                    <div className="font-serif text-lg text-[#201A18] mb-1">
                      {d.label}
                    </div>
                    <div className="text-[11px] text-[#6E625D]">
                      {d.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Important reassurance banner */}
            <div className="p-4 rounded-2xl bg-[#FAF0ED]/60 border border-[#BD3A53]/20 text-xs text-[#201A18] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#BD3A53] font-bold">✦ Belangrijk:</span>
                <span>Je kunt tijdens het gesprek altijd lichter of dieper gaan.</span>
              </div>
              <span className="text-[11px] text-[#6E625D]">Jullie houden altijd zelf de regie</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
