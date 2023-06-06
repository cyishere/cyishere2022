import type { AppProps } from 'next/app';

import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/GlobalStyles';
import { PrismLucario, PrismMaterialLight } from '@/styles/PrismThemes';
import { cupcakeTheme, draculaTheme } from '@/styles/theme';
import { LOCAL_THEME_NAME, THEME_NAMES } from '@/utils/constants';

interface ContextValue {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextValue | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setIsLight(
      localStorage.getItem(LOCAL_THEME_NAME) !== THEME_NAMES.dark ? true : false
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      <ThemeProvider theme={isLight ? cupcakeTheme : draculaTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        {isLight ? <PrismMaterialLight /> : <PrismLucario />}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default MyApp;
