// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  background: string;
  withPattern: boolean;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setTertiaryColor: (color: string) => void;
  setBackground: (background: string) => void;
  setWithPattern: (withPattern: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#3498db');
  const [secondaryColor, setSecondaryColor] = useState('#2ecc71');
  const [tertiaryColor, setTertiaryColor] = useState('#e74c3c');
  const [background, setBackground] = useState('#ffffff');
  const [withPattern, setWithPattern] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        tertiaryColor,
        background,
        withPattern,
        setPrimaryColor,
        setSecondaryColor,
        setTertiaryColor,
        setBackground,
        setWithPattern,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
