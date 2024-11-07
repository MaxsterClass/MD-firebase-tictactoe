self.addEventListener('install', function(event) {
    event.waitUntil(caches.open('my-cache').then(function(cache) {
        return cache.addAll([
            '/index.html',
            '/style.css',
            '/script.js',
            '/manifest.json',
            'https://cdn.glitch.global/e1dba59b-423c-47f7-972c-a8b3ccda1d7f/favicon.png?v=1731007815341',
            'https://cdn.glitch.global/e1dba59b-423c-47f7-972c-a8b3ccda1d7f/icon.png?v=1731004434583',
            'https://cdn.glitch.global/e1dba59b-423c-47f7-972c-a8b3ccda1d7f/icon-192x192.png?v=1731004546087',
            'https://cdn.glitch.global/e1dba59b-423c-47f7-972c-a8b3ccda1d7f/icon-512x512.png?v=1731005144719',
        ]);
    }));
});
  
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    }));
});
