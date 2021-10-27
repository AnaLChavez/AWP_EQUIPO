
/*hasta ala escucha de la pagina de index
self.addEventListener('fetch', event => {
   //  // de forma directa
   

   // event.respondWith(fotoRequest);
    //console.log(fotoRequest);

   //console.log(event.request.url.include);
   if(event.request.url.includes('style.css')) { 
       let respuesta = new Response(`
                body {
                    background-color:blue !important;
                    color: pink;
                }
            `,  {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(respuesta);
    //let fotoRequest = fetch('img/main.png');

    
   } 
});*/  

let responseContent =   
    "<html>" +
    "<body>" +
    "<style>" +
    "body {text-aling: center; background-color: #333; color: #eee; }"+
    "</style>"+
    "<h1> Página sin conexión</h1>" +
    "<p>Prueba de página sin conexión</p>"+
    "</body>"+
    "</html>";

/*
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                //console.log(error);
                return new Response(responseContent, {headers: {'Content-Type': 'text/html'}});
            })
    );
});*/

const cachePWA ='cache-site-v1';
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/pages/prueba.html",
    "/manifest.json",
    "/css/est.css",
    "/css/reset.css",
    "/data/conexion.php",
    "/data/datos.php",
    "/data/validar.php",
    "/formulario/datos.php",
    "/js/app.js",
    "/Practica prof/contacto.html",
    "/Practica prof/index.html",
    "/Practica prof/login.html",
    "/Practica prof/nuevo_formato.html",
    "/Practica prof/principal.html",
    "/Practica prof/producto.html",
    "/Practica prof/prueba.html",
    "/manifest.json",
    "/tienda.html",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

];

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(cachePWA).then( cacheRes => {
            return cacheRes.addAll(assets);

        })
    ) 
});

self.addEventListener('fetch', fetchEvent =>{
    fetchEvent.respondWith(
        caches.open(cachePWA).then( cache => {
            return cache.match(fetchEvent.request).then(respose =>{
                return response || fetch (fetchEvent.request).then(response =>{
                    cache.put(fetchEvent.request, response.clone());
                });
            });
       })
   );
});