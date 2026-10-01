import React, { useState } from 'react';
import { BRAND_IDENTITY } from '../data/brandIdentityData';
import { BrandLogo } from './BrandLogo';
import { X, Check, Copy, BookOpen } from 'lucide-react';

interface BrandIdentityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandIdentityModal: React.FC<BrandIdentityModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'kern' | 'visie' | 'architectuur' | 'taal' | 'visueel' | 'waarden'>('kern');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF5F0] text-[#201A18] w-full max-w-5xl max-h-[90vh] rounded-3xl border border-[#EFE6DE] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 border-b border-[#EFE6DE] bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] border-l border-[#EFE6DE] pl-3 font-sans">
              Brand Identity & Merkgids
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAF5F0] text-[#6E625D] hover:text-[#201A18] transition-colors cursor-pointer"
            aria-label="Sluit merkgids"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-3 border-b border-[#EFE6DE] bg-[#FAF5F0] flex items-center gap-2 overflow-x-auto text-xs font-medium shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab('kern')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'kern' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            1. Kern & Positionering
          </button>
          <button
            onClick={() => setActiveTab('visie')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'visie' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            2. Visie, Missie & Purpose
          </button>
          <button
            onClick={() => setActiveTab('architectuur')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'architectuur' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            3. Architectuur & Sferen
          </button>
          <button
            onClick={() => setActiveTab('taal')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'taal' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            4. Taalgebruik & Copy
          </button>
          <button
            onClick={() => setActiveTab('visueel')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'visueel' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            5. Kleuren & Typografie
          </button>
          <button
            onClick={() => setActiveTab('waarden')}
            className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer font-semibold ${
              activeTab === 'waarden' ? 'bg-[#BD3A53] text-white shadow-xs' : 'text-[#6E625D] hover:bg-black/5'
            }`}
          >
            6. Kernwaarden & KPI
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed">
          
          {/* Tab 1: Kern & Positionering */}
          {activeTab === 'kern' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-1 font-sans">
                  Merkfundament
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#201A18] mb-4 font-normal">
                  De Kern van Tussen Ons
                </h3>
                <p className="text-sm text-[#6E625D] mb-6 font-normal">
                  Niet meer zoeken tussen &ldquo;relatie-app&rdquo;, &ldquo;vragenkaartjes&rdquo;, &ldquo;date game&rdquo; en &ldquo;AI-app&rdquo;. De kracht zit juist in een heel eigen categorie: <strong>Een slimme gesprekservaring voor twee mensen.</strong>
                </p>
              </div>

              {/* Specification Table */}
              <div className="bg-white border border-[#EFE6DE] rounded-2xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF5F0] border-b border-[#EFE6DE] text-[#201A18]/80 font-bold uppercase tracking-wider text-[11px] font-sans">
                    <tr>
                      <th className="py-3 px-4 sm:px-6 w-1/3">Onderdeel</th>
                      <th className="py-3 px-4 sm:px-6">Definitieve keuze</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE6DE]/60 text-[#201A18]">
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Merknaam</td>
                      <td className="py-3 px-4 sm:px-6 text-[#BD3A53] font-serif text-base">Tussen Ons</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Categorie</td>
                      <td className="py-3 px-4 sm:px-6">Interactieve gesprekservaring</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Kernbelofte</td>
                      <td className="py-3 px-4 sm:px-6 font-serif text-base">De juiste vraag. Op het juiste moment.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Emotionele belofte</td>
                      <td className="py-3 px-4 sm:px-6 italic font-serif">Voor gesprekken die anders misschien nooit waren begonnen.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Merkgedachte</td>
                      <td className="py-3 px-4 sm:px-6">De telefoon brengt jullie samen en verdwijnt daarna naar de achtergrond.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Privacybelofte</td>
                      <td className="py-3 px-4 sm:px-6">Wat tussen jullie wordt gezegd, blijft tussen jullie.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Primaire doelgroep</td>
                      <td className="py-3 px-4 sm:px-6">Dates en jonge koppels (secundair: langdurige relaties, vrienden en familie)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Merkpersoonlijkheid</td>
                      <td className="py-3 px-4 sm:px-6">Warm, nieuwsgierig, intelligent, speels, subtiel</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 sm:px-6 font-bold">Wat het NIET is</td>
                      <td className="py-3 px-4 sm:px-6 text-[#BD3A53]">Therapie, datingplatform, AI-coach, quiz, simpele vragenlijst</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Visie, Missie & Purpose */}
          {activeTab === 'visie' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-1 font-sans">
                    Purpose (Het Waarom)
                  </span>
                  <h4 className="font-serif text-2xl text-[#201A18] mb-2 font-normal">
                    Mensen helpen weer echt naar elkaar te kijken.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                    Je bouwt een merk tegen oppervlakkige digitale interactie, terwijl je technologie gebruikt als middel.
                  </p>
                </div>

                <div className="border-t border-[#EFE6DE]/60 pt-6">
                  <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-1 font-sans">
                    Visie
                  </span>
                  <blockquote className="font-serif text-lg sm:text-xl text-[#201A18] italic leading-relaxed font-normal">
                    &ldquo;Wij geloven dat echte verbinding niet ontstaat doordat mensen meer communiceren, maar doordat ze oprecht nieuwsgierig blijven naar elkaar. In een wereld waarin technologie steeds meer aandacht opeist, wil Tussen Ons technologie juist gebruiken om die aandacht terug te brengen naar degene die tegenover je zit.&rdquo;
                  </blockquote>
                </div>

                <div className="border-t border-[#EFE6DE]/60 pt-6">
                  <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-bold block mb-1 font-sans">
                    Missie
                  </span>
                  <p className="text-sm text-[#6E625D] leading-relaxed">
                    Tussen Ons maakt bijzondere gesprekken vanzelfsprekender door op ieder moment de juiste vraag, opdracht of interactie aan te reiken. Slim afgestemd op wie er tegenover je zit, zonder het gesprek over te nemen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Architectuur & Sferen */}
          {activeTab === 'architectuur' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-[#EFE6DE] rounded-2xl p-5 space-y-3">
                  <h4 className="font-serif text-lg text-[#201A18] font-normal">De 5 Sferen (Vibes)</h4>
                  <ul className="space-y-2 text-xs text-[#6E625D]">
                    <li><strong className="text-[#201A18]">Ontdekken:</strong> Voor dingen die je nog niet van elkaar weet.</li>
                    <li><strong className="text-[#201A18]">Lachen:</strong> Luchtig, onverwacht en soms een beetje ongemakkelijk.</li>
                    <li><strong className="text-[#201A18]">Flirten:</strong> Chemie, spanning en net iets langer oogcontact.</li>
                    <li><strong className="text-[#201A18]">Verdiepen:</strong> Voor gesprekken die normaal niet vanzelf beginnen.</li>
                    <li><strong className="text-[#201A18]">Verrassen:</strong> Geen keuzes. Wij bepalen waar het gesprek heen gaat.</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#EFE6DE] rounded-2xl p-5 space-y-3">
                  <h4 className="font-serif text-lg text-[#201A18] font-normal">Gezelschaps Categorieën</h4>
                  <ul className="space-y-2 text-xs text-[#6E625D]">
                    <li><strong className="text-[#201A18]">Date:</strong> Nieuwsgierig aftasten, lachen & chemie.</li>
                    <li><strong className="text-[#201A18]">Mijn partner:</strong> Samen verdiepen, herinneringen & herontdekken.</li>
                    <li><strong className="text-[#201A18]">Vrienden:</strong> Gêne laten vallen & ontwapenende verhalen.</li>
                    <li><strong className="text-[#201A18]">Familie:</strong> Generatiebruggen & warme anekdotes.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Taalgebruik & Copy */}
          {activeTab === 'taal' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-[#EFE6DE] rounded-2xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18] mb-3 font-sans">
                    ✓ Wel gebruiken (Karakter)
                  </h4>
                  <ul className="space-y-2 text-xs text-[#6E625D]">
                    <li>• &ldquo;Betere gesprekken beginnen soms met een goede vraag.&rdquo;</li>
                    <li>• &ldquo;Met wie praat jij vandaag?&rdquo;</li>
                    <li>• &ldquo;De juiste vraag. Op het juiste moment.&rdquo;</li>
                    <li>• &ldquo;Wat tussen jullie wordt gezegd, blijft tussen jullie.&rdquo;</li>
                    <li>• &ldquo;Niet meer schermtijd. Meer gesprekstijd.&rdquo;</li>
                  </ul>
                </div>

                <div className="bg-white border border-[#EFE6DE] rounded-2xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#BD3A53] mb-3 font-sans">
                    ✗ Absoluut verboden (Jargon)
                  </h4>
                  <ul className="space-y-2 text-xs text-[#6E625D]">
                    <li>• &ldquo;Optimaliseer jullie relatie&rdquo;</li>
                    <li>• &ldquo;Vergroot emotionele intimiteit&rdquo;</li>
                    <li>• &ldquo;Ontdek jullie hechtingspatroon&rdquo;</li>
                    <li>• &ldquo;AI relationship algorithms&rdquo;</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Visuele Identiteit & Kleuren */}
          {activeTab === 'visueel' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {BRAND_IDENTITY.colorPalette.map((color) => (
                  <div
                    key={color.name}
                    className="bg-white border border-[#EFE6DE] rounded-2xl p-3.5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl border border-black/10 shrink-0 shadow-2xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-[#201A18]">{color.name}</div>
                        <div className="font-mono text-[11px] text-[#6E625D]">{color.hex}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopyHex(color.hex)}
                      className="p-1.5 rounded-lg hover:bg-[#FAF5F0] text-[#6E625D] hover:text-[#201A18] transition-colors cursor-pointer"
                      title="Kopieer hex-code"
                    >
                      {copiedHex === color.hex ? (
                        <Check className="w-3.5 h-3.5 text-[#BD3A53]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 6: Kernwaarden & KPI */}
          {activeTab === 'waarden' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                {BRAND_IDENTITY.coreValues.map((val, i) => (
                  <div key={val.name} className="bg-white border border-[#EFE6DE] rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                    <span className="font-serif text-xl text-[#BD3A53] shrink-0 w-6">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-base text-[#201A18] font-normal">
                        {val.name} <span className="text-xs text-[#6E625D] font-normal italic font-sans">— {val.meaning}</span>
                      </h4>
                      <p className="text-xs text-[#6E625D] mt-1 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#EFE6DE] rounded-2xl p-5 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                  Unieke KPI
                </span>
                <h4 className="font-serif text-xl text-[#201A18] mb-2 font-normal">
                  Conversation Minutes (Gespreksminuten)
                </h4>
                <p className="text-xs text-[#6E625D] max-w-lg mx-auto leading-relaxed">
                  Niet hoeveel seconden iemand naar het scherm keek, maar hoeveel tijd twee mensen met elkaar in gesprek waren terwijl de telefoon plat op tafel lag.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#EFE6DE] bg-white flex items-center justify-between shrink-0 text-xs text-[#6E625D]">
          <span>Tussen Ons — Brand Identity & Design System</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#BD3A53] text-white rounded-xl text-xs font-semibold hover:bg-[#A72D45] transition-colors cursor-pointer shadow-xs"
          >
            Sluiten
          </button>
        </div>

      </div>
    </div>
  );
};
