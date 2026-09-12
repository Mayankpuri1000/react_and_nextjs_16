import { createContext, useContext, useState } from "react";

// Create theme context
type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
  isDark: boolean;
};
const ThemeContext = createContext<ThemeContext | null>(null);

// Theme Proivder Component
type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const value: ThemeContext = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom Hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

function ThemeToggleButton() {
  const {  toggleTheme, isDark } = useTheme();

  return <button onClick={toggleTheme}>{isDark ? "🌙" : "🌞"} </button>;

}

function ThemeToggler() {
  return <div>ThemeToggler</div>;
}

export default ThemeToggler;
