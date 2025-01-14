const path = require('path');

module.exports = {
  distDir: '.next', // This will output the `.next` folder directly inside the `renderer` directory
  pageExtensions: ['jsx', 'js'],
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'renderer');
    return config;
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
