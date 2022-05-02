import type { AppProps } from "next/app";
import React from "React";

import GlobalStyles from "styles/GlobalStyles";
import PrismMaterialLight from "@/styles/PrismMaterialLight";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
      <PrismMaterialLight />
    </React.Fragment>
  );
}
export default MyApp;
