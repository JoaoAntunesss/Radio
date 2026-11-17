/* Rádio da Secretaria — service worker
   Guarda só os ficheiros do próprio site, para a aplicação abrir depressa e poder ser instalada.
   As emissões, a lista de rádios e as capas vêm sempre da internet (não são guardadas). */
const CACHE = "radio-sec-v1";
const FICHEIROS = [
  "./", "index.html", "fundo.jpg", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png",
  "icons/apple-touch-icon.png", "icons/favicon-64.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHEIROS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;           // rádios, API, capas: direto da rede

  if (req.mode === "navigate") {                         // página: rede primeiro (apanha logo as atualizações)
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put("index.html", c)); return r; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  e.respondWith(                                         // imagens e ícones: cache, atualizado em segundo plano
    caches.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); } return r; }).catch(() => hit);
      return hit || net;
    })
  );
});
