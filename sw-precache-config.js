module.exports = {
  verbose: true,
  replacePrefix: '',
  navigateFallback: '',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'cacheFirst',
    options: {
        cache: {
          maxEntries: 500,
          name: 'food-cache'
        }
    }
  }],
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'order/order.nocache.js'
  ]
};
