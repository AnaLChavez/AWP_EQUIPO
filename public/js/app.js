if( navigator.serviceWorker ){
    navigator.serviceWorker.register('/sw.js')
        .then( registration => {
            console.log('Service Worker registrado correctamente', registration.scope)
         })
        .catch( error => {
            console.log('Falla en el registro del Service Worker', error) 
        })
}

/*---register the Service Worker---
window.addEventListener('load', e => {
  if (!('serviceWorker' in navigator)) {
      console.log('Service worker not supported');
      return;
  }
  navigator.serviceWorker.register('/sw.js')
  .then(function() {
       console.log('Service Worker Registered');
  })
  .catch(function(error) {
      console.log('Service Worker Registration failed:', error);
  });
});

//---Update the Push Notification Status---
function updatePushNotificationStatus(status) {
  pushElement.dataset.checked = status;
  
}

function checkIfPushIsEnabled() {
  //---check if push notification permission has been denied by the user---
  if (Notification.permission === 'denied') {
      alert('User has blocked push notification.');
      return;
  }
  //---check if push notification is supported or not---
  if (!('PushManager' in window)) {
      alert('Sorry, Push notification is ' + 'not supported on this browser.');
      return;
  }
  //---get push notification subscription if serviceWorker is registered and ready---
  navigator.serviceWorker.ready
  .then(function (registration) {
      registration.pushManager.getSubscription()
      .then(function (subscription) {
          if (subscription) {
              //---user is currently subscribed to push---
          updatePushNotificationStatus(true);
          }
          else {
              //---user is not subscribed to push---
              updatePushNotificationStatus(false);
          }
      })
      .catch(function (error) {
          console.error('Error occurred enabling push ', error);
      });
  });
}*/

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});
function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!');
      });
    }
}

function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Here is a notification body!',
          icon: 'images/example.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };
        reg.showNotification('Hello world!', options);
      });
    }
  }


