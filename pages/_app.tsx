import type { AppProps } from "next/app";

import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/GlobalStyles";
import PrismMaterialLight from "@/styles/PrismMaterialLight";
import { cupcakeTheme, draculaTheme } from "@/styles/theme";

interface ContextValue {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextValue | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      <ThemeProvider theme={isLight ? cupcakeTheme : draculaTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <PrismMaterialLight />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default MyApp;
