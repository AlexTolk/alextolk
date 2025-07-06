/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: isProd ? '/alextolk' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
