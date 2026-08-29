import { createContext, useState } from "react";

export const MyStore = createContext();

export const ThemeContext = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState(false);
  return (
    <MyStore.Provider value={{ themeToggle, setThemeToggle }}>
      {children}
    </MyStore.Provider>
  );
};
