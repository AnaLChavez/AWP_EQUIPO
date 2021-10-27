
/*if('serviceWorker' in navigator){
    console.log('Service Worker soportado :-)');
}*/

if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
        .then( registration =>{
            console.log('Service Worker registrado correctamente', registration.scope);
        })
        .catch(error => {
            console.log('Falla en el registro del Service Worker', error);
        })
    //console.log('También se puede ejecutar'); 
}