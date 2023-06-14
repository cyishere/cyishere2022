import { Fragment } from 'react';
import { useRouter } from 'next/router';

import type { LayoutProps } from './types';
import SEO from '../SEO';
import { HomeHeader } from '../Header';
import Footer from '../Footer';

const HomeLayout: React.FC<LayoutProps> = ({
  title,
  description,
  children,
}) => {
  const pathname = useRouter().pathname;

  return (
    <Fragment>
      <SEO title={title} description={description} pathname={pathname} />
      <HomeHeader pathname={pathname} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
