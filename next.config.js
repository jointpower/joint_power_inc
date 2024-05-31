/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.hashnode.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
