import type { AppProps } from "next/app";

import GlobalStyles from "styles/GlobalStyles";
import PrismMaterialLight from "@/styles/PrismMaterialLight";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <PrismMaterialLight />
    </>
  );
}
export default MyApp;
