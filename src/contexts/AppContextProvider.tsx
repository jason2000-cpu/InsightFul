import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";

type ProviderProps = {
    children: ReactNode; 
  };


export function AppContextProvider({ children }: ProviderProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
    const toggleTheme = () =>
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  
    return (
      <AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </AppContext.Provider>
    );
};
