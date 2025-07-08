import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";

type ProviderProps = {
    children: ReactNode; 
  };


export function AppContextProvider({ children }: ProviderProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      updateHtmlClass(newTheme);
    };
  
    const updateHtmlClass = (theme: 'light' | 'dark') => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  
    return (
      <AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </AppContext.Provider>
    );
};
