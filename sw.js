const CACHE_NAME = 'pwa-GPD-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['/GPD/', '/GPD/index.html', '/GPD/manifest.json']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));