require('../static/style.less');
(function () {
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
async function subscribeMyPushNotifications() {
  const publicVapidKey = 'BPPgjFp-C1sUYi4vZdKwyJpgc3hLSj4Nac8Pf4KLOmZqXAh9IFB3QfxnaKC3zG_gMNOG2_7371YId_qD4pjuLwg';
  if ('serviceWorker' in navigator) {
    const register = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    console.error('Service workers are not supported in this browser');
  }
}

subscribeMyPushNotifications();

})();

require('./app.js');