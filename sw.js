/* MEE 9:30 Timer — offline-first service worker (open-core) */
const VERSION = 'mee-930-v2';
const PRECACHE = [
  './',
  './index.html',
  './mee-930-timer.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];
const SHELL = './mee-930-timer.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Only cache complete same-origin responses (no opaque, partial or error bodies).
function cacheable(res) {
  return res && res.ok && res.status === 200 && res.type === 'basic';
}

function revalidate(req) {
  return fetch(req).then((res) => {
    if (cacheable(res)) {
      const copy = res.clone();
      caches.open(VERSION).then((c) => c.put(req, copy));
    }
    return res;
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let the network handle cross-origin links

  // Navigations: cache-first (ignoring ?source=pwa etc.), refresh in background,
  // fall back to the timer shell when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then((hit) => {
        const net = revalidate(req).catch(() => null);
        if (hit) {
          event.waitUntil(net);
          return hit;
        }
        return net.then((res) => res || caches.match(SHELL));
      })
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((hit) => {
      const net = revalidate(req);
      if (hit) {
        event.waitUntil(net.catch(() => {}));
        return hit;
      }
      return net;
    })
  );
});
