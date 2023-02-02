const staticWebsite = "dev-the-ten-reading-v1";
const assets = [
  "/",
  "/index.html",
  "/src/assets/css/main.css",
  "/src/assets/fonts/Noto_Sans_Arabic.woff2",
  "/src/scripts.js",
  "/src/assets/images/be-patient.jpg",
  "/src/assets/images/peace-be-upon-him.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticWebsite).then(cache => {
      cache.addAll(assets);
    }).catch((e)=>console.log(e))
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});