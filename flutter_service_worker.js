'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8008e2eddb5f6e687c8fa99335a883b",
"index.html": "5ceaa3333be8d2d6857d334ab61bf02b",
"/": "5ceaa3333be8d2d6857d334ab61bf02b",
"main.dart.js": "e794523a3ee6a71cf19bc369ec264ddc",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "3b7e959b4b1a477b3bd679e6d0c86284",
"icons/Icon-192.png": "11f5c1d48686ef2a594dcc69b96aa97c",
"icons/Icon-maskable-192.png": "11f5c1d48686ef2a594dcc69b96aa97c",
"icons/Icon-maskable-512.png": "3c661c3f1606fae82405678e80b1b581",
"icons/Icon-512.png": "3c661c3f1606fae82405678e80b1b581",
"manifest.json": "063938ca79a876cad8fa466245b3c54c",
"assets/AssetManifest.json": "c5cf50cb5aa7c446c522e42b08d3c6a4",
"assets/NOTICES": "dd379455661d31abf2ba1f6fd7ec7a7b",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/admin/add_image.png": "75b091ba9b22d4b40dfd0a0e6ab1f936",
"assets/assets/admin/half-circle.svg": "9998af7d8476f150db38c02b7280b1ea",
"assets/assets/admin/total_sales.svg": "8ac9a4ec41b09f3bea26f8c08deb443e",
"assets/assets/admin/stack_user.png": "0c445649e7194b4fcb2981d72f63f625",
"assets/assets/admin/shopping-bag.svg": "01e72024185771203c2c5c4216a41672",
"assets/assets/admin/order.svg": "8c9f54731150bd32257937f7eaaf8166",
"assets/assets/admin/admin_forget_password.png": "7340d7ca64f74b3b7335831b9ed88ba0",
"assets/assets/admin/user.png": "e876fe410159bf929e57489d43b41250",
"assets/assets/admin/column-chart.svg": "95636d86d208ec3aa9b967bbacf7a9ed",
"assets/assets/admin/dots.png": "d96db7263559d90487b4083ea44e85f1",
"assets/assets/admin/admin_cover.png": "f4510119547de17e16915ebf1028078b",
"assets/assets/admin/setting.svg": "7629e4fd4c80ccc9c10fc406161e19c6",
"assets/assets/admin/logo.png": "2304875aed87e487b05e28c8aada64b0",
"assets/assets/admin/calendar.png": "8461ccb9a7c19150183fe3cc59958960",
"assets/assets/admin/star.svg": "57065b7ce8ef25aaf6bcff6e636add33",
"assets/assets/admin/turn-left.svg": "045c95aea1a2f5e72ca6feb57ed9ef03",
"assets/assets/admin/order_status.png": "73a938531b56444f76e2e4c4d2c7d7d7",
"assets/assets/admin/row_users.svg": "9ad20db038fb6afeff0467d7f912e673",
"assets/assets/admin/accept.png": "403a3d7c942afd509bffcb112b38b2e4",
"assets/assets/admin/enter.svg": "c889040d4a3f93de8b08598754079b46",
"assets/assets/admin/shopping-cart.svg": "9fc8fd256b7c6eb53249dfa86ca9c851",
"assets/assets/admin/customer.svg": "8405111dd7f31a061574a1c2c16a3da4",
"assets/assets/admin/close.png": "2fd780872ac0fc0f900ca81717605d3f",
"assets/assets/admin/nuclear.svg": "0a575d202e7bf7dee63a1e752b2492be",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
