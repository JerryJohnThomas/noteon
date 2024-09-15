// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  background: string;
  debugBackground: string;
  withPattern: boolean;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setTertiaryColor: (color: string) => void;
  setBackground: (background: string) => void;
  setDebugBackground: (background: string) => void;
  setWithPattern: (withPattern: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme = {
    background:"#F9F8F8",
    primaryColor :'#000000',
    secondaryColor :'rgba(0,0,0,0.4)',
    tertiaryColor :'#e74c3c',
    debugBackground :'peachpuff',
    withPattern :false,
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(lightTheme.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(lightTheme.secondaryColor);
  const [tertiaryColor, setTertiaryColor] = useState(lightTheme.tertiaryColor);
  const [background, setBackground] = useState(lightTheme.background);
  const [debugBackground, setDebugBackground] = useState(lightTheme.debugBackground);
  const [withPattern, setWithPattern] = useState(lightTheme.withPattern);
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
        debugBackground,
        setDebugBackground
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
