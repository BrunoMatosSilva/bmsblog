const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['https://bmsblog.000webhostapp.com'],
  },
});
