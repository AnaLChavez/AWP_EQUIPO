

const cachePWA ='cache-site-v1';
const assets = [
    "/index.html",
    "/js/app.js",
    "/manifest.json",
    "/css/est.css",
    "/css/reset.css",
    "/iconos/care.png",
    "/images/icons/icons_perro16.png",
    "/images/icons/icons_perro32.png",
    "/images/icons/icons_perros-64.png",
    "/accesorios/sueter.jpg",
    "/accesorios/hueso.jpg",
    "/accesorios/pelotas.jpg",
    "/accesorios/petzy.jpg",
    "/accesorios/cama.jpg",
    "/accesorios/pechera gruesa.jpg",
    "/accesorios/rosa-delgada.jpg",
    "/accesorios/pecheazul.jpg",
    "/tienda.html",
    "/adopcion.html",
    "/adoptar.html",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"

];



self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(cachePWA)
            .then( cacheRes => {
                return cacheRes.addAll(assets);
            })
    )
});

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.open(cachePWA).then( cache => {
            return cache.match(fetchEvent.request).then( response => {
                return response || fetch(fetchEvent.request).then( response => {
                    cache.put(fetchEvent.request, response.clone());
                })
            })
        })
    )
});

/*

self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });
  
self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://www.example.com');
      notification.close();
    }
  });

*/