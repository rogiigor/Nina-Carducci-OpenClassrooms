const CACHE_NAME = 'site-cache-v1';
const FILES_TO_CACHE = [
  '/',           // cache homepage
  '/index.html', // adjust as needed
  '/assets/style.css', // add your CSS file
  '/assets/scripts.js',  // add your JS file
  '/assets/images/',    // add paths to your images folder or specific images
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});