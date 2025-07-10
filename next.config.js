const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/alextolk' : '',
  assetPrefix: isProd ? '/alextolk/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
