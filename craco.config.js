const path = require('path');
module.exports = {
  webpack: {
    output: {
      publicPath: '/art-practice-react/',
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};