// Service Worker for offline functionality
const CACHE_NAME = 'edugamehub-v1.0.0';
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/main.tsx',
  '/App.tsx',
  '/styles/globals.css',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(() => {
          // If network fails and no cache, return offline page
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any pending data sync when online
      console.log('Background sync triggered')
    );
  }
});

// Push notification handling (for future features)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/favicon-32x32.png',
      badge: '/favicon-16x16.png'
    };
    
    event.waitUntil(
      self.registration.showNotification('EduGameHub', options)
    );
  }
});