import { useRouter } from "next/router";

import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ seoTitle, seoDescription, children }) => {
  const pathname = useRouter().pathname;
  const pageSection = useRouter().pathname.split("/")[1];

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} pathname={pathname} />

      <Header pageSection={pageSection} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
