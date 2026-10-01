import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { 
  Check, 
  Copy, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface AppColorToken {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  usage: string;
}

const APP_COLOR_TOKENS: AppColorToken[] = [
  {
    name: 'Crimson Berry (Hoofdkleur)',
    role: 'De actieve primaire merkkleur uit de app. Straalt warmte, passie en menselijkheid uit.',
    hex: '#BD3A53',
    rgb: '189, 58, 83',
    cmyk: '15%, 88%, 58%, 8%',
    usage: 'Primaire actieknoppen (Volgende →, Verder →), actieve kaders, icons en badges.',
  },
  {
    name: 'Ivory Warm Canvas',
    role: 'De tactiele basisachtergrond van de app met een zachte papieren ondertoon.',
    hex: '#FAF5F0',
    rgb: '250, 245, 240',
    cmyk: '2%, 3%, 5%, 0%',
    usage: 'Algemene pagina-achtergrond en ontspannen leesruimtes.',
  },
  {
    name: 'Soft Rose Ambient Glow',
    role: 'De subtiele, diffuse gloed in de hoeken van het app-scherm.',
    hex: '#F7D8D3',
    rgb: '247, 216, 211',
    cmyk: '2%, 18%, 13%, 0%',
    usage: 'Achtergrond gradiënten, zachte belichting en icon containers (#FAF0ED).',
  },
  {
    name: 'Deep Warm Charcoal',
    role: 'Hoogwaardige donkere leestekst voor titels en vragen.',
    hex: '#201A18',
    rgb: '32, 26, 24',
    cmyk: '65%, 65%, 65%, 75%',
    usage: 'Headlines, vraagtitels en hoofdnavigatie.',
  },
  {
    name: 'Muted Warm Gray',
    role: 'Subtiele ondersteunende toelichtingen en ondertitels.',
    hex: '#6E625D',
    rgb: '110, 98, 93',
    cmyk: '45%, 45%, 48%, 20%',
    usage: 'Uitlegteksten, categoriekiezers en secundaire labels.',
  },
  {
    name: 'Delicate Border Cream',
    role: 'Verfijnde, subtiele haarlijnkaders voor witte kaarten.',
    hex: '#EFE6DE',
    rgb: '239, 230, 222',
    cmyk: '5%, 6%, 10%, 0%',
    usage: 'Card borders, dividers en tab-omlijstingen.',
  },
];

export const BrandGuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kleuren' | 'typografie' | 'logo' | 'tone-of-voice'>('kleuren');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<AppColorToken>(APP_COLOR_TOKENS[0]);

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedHex(text);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  return (
    <section id="merkgids" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
              <span>Merkidentiteit & Design Systeem</span>
              <span aria-hidden="true">·</span>
              <span>100% Gelijk aan de App</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4">
              De visuele & verbale ziel <br className="hidden sm:inline" />
              <span className="italic text-[#BD3A53]">van Tussen Ons.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E625D] font-normal leading-relaxed">
              De exacte kleuren, zachte glooiende gradiënten, editorial typografie en empathische microcopy rechtstreeks uit de app.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center p-1 bg-[#EFE6DE]/60 rounded-2xl self-start md:self-auto border border-[#EFE6DE] overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('kleuren')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'kleuren'
                  ? 'bg-white text-[#BD3A53] shadow-xs'
                  : 'text-[#6E625D] hover:text-[#201A18]'
              }`}
            >
              Kleurenpalet
            </button>
            <button
              onClick={() => setActiveTab('typografie')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'typografie'
                  ? 'bg-white text-[#BD3A53] shadow-xs'
                  : 'text-[#6E625D] hover:text-[#201A18]'
              }`}
            >
              Typografie
            </button>
            <button
              onClick={() => setActiveTab('logo')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'logo'
                  ? 'bg-white text-[#BD3A53] shadow-xs'
                  : 'text-[#6E625D] hover:text-[#201A18]'
              }`}
            >
              Logo-richtlijnen
            </button>
            <button
              onClick={() => setActiveTab('tone-of-voice')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tone-of-voice'
                  ? 'bg-white text-[#BD3A53] shadow-xs'
                  : 'text-[#6E625D] hover:text-[#201A18]'
              }`}
            >
              Tone of Voice
            </button>
          </div>
        </div>

        {/* Tab 1: Kleurenpalet */}
        {activeTab === 'kleuren' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Color Swatch Picker List */}
            <div className="lg:col-span-6 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                App Kleurentokens:
              </span>
              {APP_COLOR_TOKENS.map((color) => {
                const isSelected = selectedColor.name === color.name;
                return (
                  <div
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-white border-2 border-[#BD3A53] shadow-xs'
                        : 'bg-white border border-[#EFE6DE] hover:border-[#BD3A53]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-xl border border-black/10 shrink-0 shadow-2xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-[#201A18]">
                          {color.name}
                        </div>
                        <div className="text-[11px] text-[#6E625D] font-mono">
                          {color.hex} · {color.rgb}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#BD3A53]">
                        {color.hex}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Color Inspector Card */}
            <div className="lg:col-span-6 sticky top-24">
              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Large Preview Banner with Ambient Gradient */}
                <div
                  className="w-full h-28 rounded-2xl flex items-end p-4 border border-black/5 shadow-inner transition-colors duration-300"
                  style={{ backgroundColor: selectedColor.hex }}
                >
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-md shadow-xs bg-white/95 text-[#201A18]">
                    {selectedColor.hex}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#201A18] mb-1 font-normal">
                    {selectedColor.name}
                  </h3>
                  <p className="text-xs text-[#6E625D] italic mb-4">
                    {selectedColor.role}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-[#FAF5F0] p-3.5 rounded-2xl border border-[#EFE6DE]">
                  <div>
                    <span className="text-[10px] text-[#6E625D] block font-sans uppercase">HEX</span>
                    <button
                      onClick={() => handleCopy(selectedColor.hex)}
                      className="font-bold text-[#201A18] hover:text-[#BD3A53] flex items-center gap-1 cursor-pointer"
                    >
                      <span>{selectedColor.hex}</span>
                      {copiedHex === selectedColor.hex ? <Check className="w-3 h-3 text-[#BD3A53]" /> : <Copy className="w-3 h-3 opacity-60" />}
                    </button>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E625D] block font-sans uppercase">RGB</span>
                    <span className="text-[#201A18] font-bold">{selectedColor.rgb}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E625D] block font-sans uppercase">CMYK</span>
                    <span className="text-[#201A18] font-bold">{selectedColor.cmyk}</span>
                  </div>
                </div>

                {/* Usage Detail */}
                <div className="p-4 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl text-xs space-y-1">
                  <span className="font-bold text-[#201A18] block font-sans">Toepassing in de App & Website:</span>
                  <p className="text-[#6E625D] leading-relaxed">{selectedColor.usage}</p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Typografie */}
        {activeTab === 'typografie' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-7 shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-2 font-sans">
                  Editorial Serif
                </span>
                <h3 className="font-serif text-3xl text-[#201A18] mb-3 font-normal">
                  Fraunces & Instrument Serif
                </h3>
                <p className="text-xs text-[#6E625D] mb-4 leading-relaxed font-normal">
                  Karaktervolle, warme serif gebruikt voor titels zoals „Betere gesprekken beginnen soms met een goede vraag.” en „Met wie praat jij vandaag?”.
                </p>
                <div className="p-4 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] space-y-1">
                  <p className="font-serif text-xl text-[#201A18]">„Betere gesprekken beginnen soms met een goede vraag.”</p>
                  <p className="font-serif text-sm italic text-[#BD3A53]">Voor gesprekken die anders nooit waren begonnen.</p>
                </div>
              </div>

              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-7 shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-2 font-sans">
                  Body & Functional Sans
                </span>
                <h3 className="text-2xl font-bold text-[#201A18] mb-3">
                  Plus Jakarta Sans
                </h3>
                <p className="text-xs text-[#6E625D] mb-4 leading-relaxed font-normal">
                  Moderne, heldere sans-serif voor knoppen zoals „Verder →” en „Zelf samenstellen”.
                </p>
                <div className="p-4 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] space-y-2 text-xs">
                  <p className="font-semibold text-[#201A18]">Knoppen: <strong>Verder → · Zelf samenstellen · Favorieten</strong></p>
                  <p className="text-[#6E625D]">Geen regels, geen puntentelling van winnaars. Alleen echte aandacht.</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Logo-richtlijnen */}
        {activeTab === 'logo' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
              <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-4 font-sans">
                Logo Constructie & De Ruimte Ertussen
              </span>
              
              <div className="py-8 flex items-center justify-center">
                <div className="p-8 border border-dashed border-[#BD3A53]/40 rounded-3xl inline-block bg-[#FAF5F0] relative">
                  <BrandLogo size="xl" />
                  
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-[#BD3A53] text-white text-[10px] font-mono rounded-md shadow-xs">
                    Veiligheidsmarge = 1x Hoogte letter T
                  </div>
                </div>
              </div>

              <p className="font-serif text-lg text-[#201A18] italic max-w-xl mx-auto leading-relaxed mb-3 font-normal">
                &ldquo;De fysieke ruimte tussen ‘Tussen’ en ‘Ons’ is waar de echte verbinding plaatsvindt.&rdquo;
              </p>
              <p className="text-xs text-[#6E625D] max-w-lg mx-auto">
                Gecombineerd met het herkenbare 4-puntige vonk-icoon in een zacht roze kader dat de vonk van het gesprek symboliseert.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Tone of Voice */}
        {activeTab === 'tone-of-voice' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#201A18] block mb-3 font-sans">
                  ✓ Goedgekeurde Merkuitingen (Exact uit de App)
                </span>
                <ul className="space-y-2.5 text-xs text-[#6E625D]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✓</span>
                    <span>„Betere gesprekken beginnen soms met een goede vraag.”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✓</span>
                    <span>„Met wie praat jij vandaag?”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✓</span>
                    <span>„Geen regels, geen puntentelling van winnaars. Alleen echte aandacht.”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✓</span>
                    <span>„100% privé tussen jullie.”</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BD3A53] block mb-3 font-sans">
                  ✗ Verboden Jargon
                </span>
                <ul className="space-y-2.5 text-xs text-[#6E625D]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✕</span>
                    <span>„Optimaliseer jullie relatie”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✕</span>
                    <span>„Relatiecoach & hechtingspatronen”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#BD3A53] font-bold">✕</span>
                    <span>„AI relationship algorithms”</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
