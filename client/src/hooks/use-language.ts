import { create } from 'zustand';

type Language = 'en' | 'fr';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'fr' : 'en' })),
  setLanguage: (lang) => set({ language: lang }),
}));
