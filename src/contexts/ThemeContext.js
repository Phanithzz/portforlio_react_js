import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const IS_DARK = "isDarkMode";
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(IS_DARK);
    return saved ? saved === "true" : false;
  });
  
  
  useEffect(()=> {
    localStorage.setItem(IS_DARK, isDark);
  },[isDark])
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }} key={isDark ? "dark" : "light"}>
      {children}
    </ThemeContext.Provider>
  );
}
