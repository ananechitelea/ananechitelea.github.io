'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aeb3c950fb94367b8bd8c5b896e6114a",
"assets/AssetManifest.bin.json": "67ecb3099407cc587a5680172a8b9bc9",
"assets/AssetManifest.json": "8767e332aecabe103119040101658364",
"assets/assets/fonts/dpcomic.regular.ttf": "a3620c0b63573282ebcccca50fe4c7b0",
"assets/assets/images/1.png": "063c1426a6b39337d703c6717ee886dc",
"assets/assets/images/10.png": "050332a4d3ba732f9d312bdbe8f1c739",
"assets/assets/images/11.png": "06528ae4ae9b8435171dc4541c530957",
"assets/assets/images/12.png": "f5778c865b2bac2c84de84e052af7f7d",
"assets/assets/images/13.png": "910b46f3c890372638b966fec3b391ec",
"assets/assets/images/14.png": "327c7561ff8c022ea50def9b04be050a",
"assets/assets/images/15.png": "8473d02afd612fd05ebd0747f08f7610",
"assets/assets/images/16.png": "1d7a38b1e5492f652f02132e99c53de2",
"assets/assets/images/17.png": "075e0c515c52a52c60ef2ffc535c61ba",
"assets/assets/images/18.png": "64bf5d54571657a77d9fe835ed121850",
"assets/assets/images/19.png": "1ee3936015a3b07f49021f0eb45725e2",
"assets/assets/images/2.png": "76d2f18d2f685e2f5ee3972e49216cbe",
"assets/assets/images/20.png": "4b20756bd4613a98030133b796698b1e",
"assets/assets/images/21.png": "079ea8b4002c074989e54881ad77b1d5",
"assets/assets/images/22.png": "3d1df72b1e745875bdef70df06ea9bc0",
"assets/assets/images/23.png": "bdbdfb19faadf04bea786f6394c7e785",
"assets/assets/images/3.png": "95f65b313b06850cf4eab15e12f793bf",
"assets/assets/images/4.png": "b4463a1ee439a1397583f95c2a558514",
"assets/assets/images/5.png": "a24e3a7d84b4aede29d8711d8ee8e2f5",
"assets/assets/images/6.png": "a4e3d9702c52ac20dae6d727ded69ffc",
"assets/assets/images/7.png": "2a097d052c6e8c1f744b98f0b908d72c",
"assets/assets/images/8.png": "3113d5963731106a716d77d79c0ce727",
"assets/assets/images/9.png": "9c104f2f96d6d3ed9345e52e6ce8ac36",
"assets/assets/images/header_background.png": "bd3f63d5c8163c5231f72c07eaf884af",
"assets/assets/images/locked.png": "538f1d69c6ae67d29ec3f15fc510e063",
"assets/assets/images/outdated.png": "e4ab8512dfbdbc097bcb2f5049d61091",
"assets/assets/images/today.png": "15c20841f3cc44b3eca6a7c2c67ba1ba",
"assets/assets/images/unlocked.png": "d5b9a5c8d290daf1af2cdd29f3eae7ea",
"assets/assets/messages/1.txt": "47f3cbf77a7edd8103cd24a6d7ae398a",
"assets/assets/messages/10.txt": "7062468aebdfdfb5e53eaac495e22b96",
"assets/assets/messages/11.txt": "f50957afcd0db916726d2d80e5eeb906",
"assets/assets/messages/12.txt": "78a29d695b6c243befafb1410ad2236d",
"assets/assets/messages/13.txt": "fe7378e9c39ca5e191159070f8a9b895",
"assets/assets/messages/14.txt": "750206c02ec4118e20040ee6a5697400",
"assets/assets/messages/15.txt": "1e96c915d3ea5172a1d5fe5686acc493",
"assets/assets/messages/16.txt": "b0ab8e483e7dee099891302c7795e591",
"assets/assets/messages/17.txt": "8e93d196457ebd1f607696ca7563d6ea",
"assets/assets/messages/18.txt": "3c0245caada0ded9da2ba855fd1eb2a1",
"assets/assets/messages/19.txt": "ddabcd196263142d43f62ae5c2a1e0ef",
"assets/assets/messages/2.txt": "244365c3c4e153ef6380ce151bb26ae1",
"assets/assets/messages/20.txt": "6cc8f78c894386d36c4715c15126f74b",
"assets/assets/messages/21.txt": "80bb5ef5b443c966ae9d5da8bb726212",
"assets/assets/messages/22.txt": "50db51a2c6f627b8bcda280a858c1527",
"assets/assets/messages/23.txt": "ec7d9cbcc4d62f649388fdccda269818",
"assets/assets/messages/3.txt": "7e4ec34d834deae7cc502a1ee6fd1ca1",
"assets/assets/messages/4.txt": "65896bce1730bb8556ee0a27f7db56f5",
"assets/assets/messages/5.txt": "87f1d69e03f4a55e25e58cc52c743c34",
"assets/assets/messages/6.txt": "4f910bf8564c57e699fee0ea5cf56964",
"assets/assets/messages/7.txt": "cc92ea7248d551a22332457409e860df",
"assets/assets/messages/8.txt": "443e2346343169f71fec3458fdc66822",
"assets/assets/messages/9.txt": "a378cdeba1d7786a6889a105014ed441",
"assets/FontManifest.json": "3e28c488981d39152b2508c901cc0944",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4241a75765d22141cd04e2caa78b338f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5e4583021dbee135d97234715d17e001",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ae513534159115a031ce418a65ca1d3",
"/": "2ae513534159115a031ce418a65ca1d3",
"main.dart.js": "10c7cf6cb39005704a5eaa5f2a0a20f4",
"manifest.json": "0f937b2f55c4ac1df30cd77754cc5c3e",
"version.json": "c5b37c68f97421c2d460deb0317ef640"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
