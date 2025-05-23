/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  },
  webpack: (config, { isServer }) => {
    // Add Babel loader
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel']
        }
      }
    });
    return config;
  }
};

module.exports = nextConfig; 