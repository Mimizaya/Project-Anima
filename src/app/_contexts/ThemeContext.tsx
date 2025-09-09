"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light-theme" | "dark-theme";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light-theme");

  useEffect(() => {
    const html = document.documentElement;

    const removeThemeClasses = () => {
      html.classList.remove("light-theme", "dark-theme");
    };

    const applyTheme = (theme: Theme) => {
      removeThemeClasses();
      html.classList.add(theme);
      setTheme(theme);
    };

    // Check stored preference
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "light-theme" || storedTheme === "dark-theme") {
      applyTheme(storedTheme);
    } else {
      const systemSettingLight = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;
      const fallbackTheme: Theme = systemSettingLight
        ? "light-theme"
        : "dark-theme";
      applyTheme(fallbackTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "light-theme" ? "dark-theme" : "light-theme";
    document.documentElement.classList.remove("light-theme", "dark-theme");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
