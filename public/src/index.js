require('../static/style.less');
(function () {
  console.log('Registering serviceWorker');
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker
  //     .register('./service-worker.js')
  //     .then(function () { console.log('Service Worker Registerd!!!!!'); });
  // }
})();
require('./app.js');