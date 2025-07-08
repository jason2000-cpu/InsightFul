import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useTheme() {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  }