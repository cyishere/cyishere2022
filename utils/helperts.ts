import { color } from '@/styles/helpers';
import dayjs from 'dayjs';

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

export const getFormattedDate = (date: string) => {
  return dayjs(date).format('MMMM DD, YYYY');
};
