import { createContext, useState } from 'react';

const themes = {
  blue: {
    background: 'blue',
    color: 'white',
  },
  red: {
    background: 'red',
    color: 'black',
  },
};

export const ThemeContext = createContext(themes.blue);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('blue');

  const themeProviderData = {
    theme: themes[theme],
    setTheme: (theme) => setTheme(theme),
  };

  return (
    <ThemeContext.Provider value={themeProviderData}>
      {props.children}
    </ThemeContext.Provider>
  );
}
