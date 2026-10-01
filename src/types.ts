export type VibeType = 'ontdekken' | 'lachen' | 'flirten' | 'verdiepen' | 'verrassen';

export type StageType = 
  | 'datum'
  | 'partner'
  | 'vrienden'
  | 'familie'
  | 'groepsijsbrekers'
  | 'net-ontmoet'
  | 'paar-dates'
  | 'daten-even'
  | 'serieus'
  | 'flirty-avond'
  | 'jaren-samen'
  | 'goede-vrienden';

export type ThemeType = 'linnen' | 'salie' | 'blush' | 'espresso';

export interface QuestionCard {
  id: string;
  question: string;
  subtext?: string;
  type: 'vraag' | 'dilemma' | 'opdracht' | 'reveal';
  vibe: VibeType;
  stage: StageType[];
  vibeLabel: string;
  theme: ThemeType;
}

export interface Pack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  sampleQuestion: string;
  count: number;
  theme: ThemeType;
}

export interface CoreValue {
  name: string;
  meaning: string;
  description: string;
}
