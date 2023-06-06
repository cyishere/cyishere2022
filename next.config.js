/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ['ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};
