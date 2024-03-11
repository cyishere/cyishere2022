export const THEME_NAMES = { light: 'light', dark: 'dark' };

export const LOCAL_THEME_NAME = 'cy-theme';

export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://cyishere.dev'
    : 'http://localhost:3000';
