import { Fragment } from "react";
import { useRouter } from "next/router";

import SEO from "../SEO";
import { Header } from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  title: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const pathname = useRouter().pathname;

  return (
    <Fragment>
      <SEO title={title} description={description} pathname={pathname} />
      <Header pathname={pathname} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
