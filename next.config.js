module.exports = {
  // some configuration
  webpack: config => {
    config.node = {
      fs: 'empty'
    };
    return config;
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/gindee' : ''
  // another configuration
};
