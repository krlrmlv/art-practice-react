const path = require('path');
module.exports = {
  output: {
    publicPath: '/art-practice-react/'
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};