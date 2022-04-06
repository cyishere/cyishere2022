/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx", "md"],
  // reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
});
