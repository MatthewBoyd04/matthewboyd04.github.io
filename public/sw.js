const CACHE = 'mbp-v1';

// Network-first for navigation (always get fresh HTML),
// cache-first for hashed assets (JS/CSS/images never change URL).
self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
  } else {
    e.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            if (res.ok && request.url.includes('/assets/')) {
              const clone = res.clone();
              caches.open(CACHE).then((c) => c.put(request, clone));
            }
            return res;
          })
      )
    );
  }
});

// Remove old caches on activation.
self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
  )
);
