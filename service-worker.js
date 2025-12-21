self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("spriti-cache").then(cache => {
      return cache.addAll([
        "/SpritiMotive/",
        "/SpritiMotive/index.html",
        "/SpritiMotive/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
