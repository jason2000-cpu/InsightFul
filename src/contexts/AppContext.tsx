import { createContext } from 'react';



type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const AppContext = createContext<ThemeContextType | null>(null);
