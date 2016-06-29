const devServer = {
  inline: true,
  options: {
    watchOptions: 100
  },
  port: 3000,
  proxy: {
    '/author': 'http://localhost:8080',
    '/message': 'http://localhost:8080'
  },
  historyApiFallback: true
};

module.exports = devServer;
