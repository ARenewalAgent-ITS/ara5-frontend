/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['ara-its.id'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
