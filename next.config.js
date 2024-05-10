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
  async redirects() {
    return [
      {
        source: '/exploit/vote-exploit',
        destination: '/exploit/vote',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
