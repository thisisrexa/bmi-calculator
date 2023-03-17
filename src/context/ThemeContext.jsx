import { createContext, useState, useMemo, useContext } from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({ theme, setTheme, children }) {
  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };
