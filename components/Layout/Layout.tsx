import { Fragment } from 'react';
import { useRouter } from 'next/router';

import type { LayoutProps } from './types';
import { getBg } from '@/utils/helperts';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const pathname = useRouter().pathname;

  return (
    <Fragment>
      <SEO title={title} description={description} pathname={pathname} />
      <Header pathname={pathname} bg={getBg(pathname)} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
