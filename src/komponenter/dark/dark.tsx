import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

const ThemeContext = createContext<{
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
} | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark" ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
      console.log("Dark mode:", darkMode);

  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeButton must be used within a ThemeProvider");
  }
  const { darkMode, setDarkMode } = context;
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-700 transition duration-300"
      onClick={() => setDarkMode(!darkMode)}
    >
      Byt till {darkMode ? "Ljust" : "Mörkt"} tema
    </button>
  );
}

export { ThemeProvider, ThemeButton };
