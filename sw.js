
// instalação e trabalho ofline
let cacheName="segunda-pwa-app";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js", "/pages/ex1", "/pages/ex2", "/pages/ex3", "/pages/ex4", 
    "/pages/ex5", "/pages/ex6", "/pages/ex7", "/pages/ex8", "images/icon256.png", "images/icon512.png" ];

// inicializando a service worker e fazendo o dawload do conteudo da aplicação
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});

//disponibilizando o conteudo quando estiver offline

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
})