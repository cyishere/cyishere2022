import { color } from '@/styles/helpers';

export const getBg = (pathname: string) => {
  switch (pathname.slice(1)) {
    case 'blog':
      return `${color('base.200')}`;

    case 'portfolio':
      return `${color('reverse.main')}`;

    case 'about':
      return `${color('reverse.main')}`;

    default:
      return 'transparent';
  }
};
