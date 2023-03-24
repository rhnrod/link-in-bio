import {useState, useEffect, useContext, createContext } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}){
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const rewindTheme = theme === "dark" ? "light" : "dark";
    
    root.classList.add(theme);
    root.classList.remove(rewindTheme);
    localStorage.setItem("theme", theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
