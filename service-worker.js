/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf3ed44e846b9ad66edc81bf6d08356f"
  },
  {
    "url": "about/index.html",
    "revision": "ba0f55e2349fd3f2f112b74f75a78f2f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2c24e9da96e56e243703ba92a2332d66"
  },
  {
    "url": "assets/css/0.styles.57b0e4bd.css",
    "revision": "5b2b5ee8b2cd2bc9e8a16eacbd3a3c76"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/icon_chrome.d4a7f0f0.png",
    "revision": "d4a7f0f04c027b30ddb5d9997496b265"
  },
  {
    "url": "assets/img/icon_firefox.fbc7ffbb.png",
    "revision": "fbc7ffbb50fd357caae8c1a8318e3372"
  },
  {
    "url": "assets/img/icon_gitee.6bba80ff.png",
    "revision": "6bba80ff74b02b0653622e05ef82fb68"
  },
  {
    "url": "assets/img/icon_github.4eb836ff.png",
    "revision": "4eb836ff9a7bff484419de51d8f2a863"
  },
  {
    "url": "assets/img/icon_ie.56a8faf5.png",
    "revision": "56a8faf507115319ed9c3c8beeca0ab0"
  },
  {
    "url": "assets/img/icon_nodejs.4bad5f07.jpg",
    "revision": "4bad5f07ce38e365019a6afe3db498e9"
  },
  {
    "url": "assets/img/icon_safari.dedc90c5.png",
    "revision": "dedc90c5073addc72494ec3fce326695"
  },
  {
    "url": "assets/img/tri.ddae5f17.jpg",
    "revision": "ddae5f17ecd1700cacd58d8c2ab258dc"
  },
  {
    "url": "assets/img/uml.0af79e35.png",
    "revision": "0af79e35a99ca8fe5c2a8cefc73f47e3"
  },
  {
    "url": "assets/js/1.11d2265d.js",
    "revision": "7ca5826b241de193f90e4cfb244228f3"
  },
  {
    "url": "assets/js/10.f62bc4f4.js",
    "revision": "1c72d61d8ac159fd5a88b3690d8dc752"
  },
  {
    "url": "assets/js/11.de3714d8.js",
    "revision": "b700445e505a2c46275ab7e7d549d3d5"
  },
  {
    "url": "assets/js/12.57dd6b21.js",
    "revision": "24920244083d71241413825e832d508f"
  },
  {
    "url": "assets/js/13.eb636a33.js",
    "revision": "bc565a32085c28b015cda768529935b9"
  },
  {
    "url": "assets/js/14.e161da0d.js",
    "revision": "bd35e32a4da59d852ff4574d7317419c"
  },
  {
    "url": "assets/js/15.18faa12f.js",
    "revision": "39200911cb8d9556ceb9c7c0c7c7eb07"
  },
  {
    "url": "assets/js/16.626c001f.js",
    "revision": "440213ff105b80b55e0a89b810e5aae3"
  },
  {
    "url": "assets/js/17.d3956f8b.js",
    "revision": "ae11b37f1bf421c17b752005a2e70f51"
  },
  {
    "url": "assets/js/18.e533d3c2.js",
    "revision": "dd19dd7a09f70144beda98819ee067ea"
  },
  {
    "url": "assets/js/19.590e219a.js",
    "revision": "dd551dc264149dc287bf3e1de31e47f2"
  },
  {
    "url": "assets/js/20.3185761b.js",
    "revision": "424c622a5a6b27daca972e069e6dc66b"
  },
  {
    "url": "assets/js/21.397a1421.js",
    "revision": "0929247f52e0069bd2e5f9e7631ec6ae"
  },
  {
    "url": "assets/js/22.9cb538a0.js",
    "revision": "f7e34184faef85da76a820ef98b153ce"
  },
  {
    "url": "assets/js/23.a9bbf1b9.js",
    "revision": "f16a36858a3357fed6ead33550ff2a73"
  },
  {
    "url": "assets/js/24.d608cbc8.js",
    "revision": "79c7d493551a0ca20392e1b6cb07a8cc"
  },
  {
    "url": "assets/js/25.8367e297.js",
    "revision": "eb5597d61538c397636d9609e0c01fcf"
  },
  {
    "url": "assets/js/26.131810a7.js",
    "revision": "ad1f331f25f2be2c6746546b719e4d1d"
  },
  {
    "url": "assets/js/27.87516383.js",
    "revision": "f64fa5a4d01962a4e2ba800cb6f382bb"
  },
  {
    "url": "assets/js/28.28cbe23e.js",
    "revision": "1ff1022f66d6349ae4ff99ac897487e7"
  },
  {
    "url": "assets/js/29.2ff4a51e.js",
    "revision": "44e67aa0c6566c352b4a1c4665fa7333"
  },
  {
    "url": "assets/js/3.3a6b4e0f.js",
    "revision": "ba7a99e64f1517852782b1d33a8754b1"
  },
  {
    "url": "assets/js/30.96dc51a0.js",
    "revision": "c558b63db52d8c9216969dac3fe1c932"
  },
  {
    "url": "assets/js/31.6b5882b0.js",
    "revision": "ed3ff90bd185408bbfe5d6d1357c32d8"
  },
  {
    "url": "assets/js/32.1a976146.js",
    "revision": "7820f6c4692781b21faf9721339f998c"
  },
  {
    "url": "assets/js/33.31e9ff88.js",
    "revision": "a71bcc299af978804dc2aa78ef42f965"
  },
  {
    "url": "assets/js/34.bd1cfaa4.js",
    "revision": "c2f1fe01e38006b20f5863d1d64f95d7"
  },
  {
    "url": "assets/js/35.1cdd69f4.js",
    "revision": "53ae2186650b8f9aed7f2dc1e13b9ec3"
  },
  {
    "url": "assets/js/36.ca741d3d.js",
    "revision": "21eb3e9c618abdb7e036f02ecfafcbab"
  },
  {
    "url": "assets/js/37.19da8b94.js",
    "revision": "261deb7a75ebd85ac7b2ab7c05fdd3f7"
  },
  {
    "url": "assets/js/38.e318c190.js",
    "revision": "dc574d653fc8898f1f7d32f171bbbaad"
  },
  {
    "url": "assets/js/39.29ab12d6.js",
    "revision": "aa05f03abbddd35aac70cc076267845d"
  },
  {
    "url": "assets/js/4.b205c454.js",
    "revision": "375481a1cb73ea3369b3cc7fd48eaf01"
  },
  {
    "url": "assets/js/40.f6961180.js",
    "revision": "42b3430e6c89aa7968d6886970d338a0"
  },
  {
    "url": "assets/js/41.c62eb38c.js",
    "revision": "76299ba56c4df43c5f8883f47fd50785"
  },
  {
    "url": "assets/js/42.afb3c737.js",
    "revision": "df049a81c844875d2bcf1e44cfe0023f"
  },
  {
    "url": "assets/js/43.00ce745a.js",
    "revision": "29b8dfcf117092493a52b4b136191643"
  },
  {
    "url": "assets/js/44.3c4cd680.js",
    "revision": "89ef50e92e2a956cc9184e8785449202"
  },
  {
    "url": "assets/js/45.1bc8669e.js",
    "revision": "ad46056058a36ce5dcf7ed6b1fd43e89"
  },
  {
    "url": "assets/js/46.0c5490ef.js",
    "revision": "83cd0a94dfa596b4ddf39b0fa839b8b6"
  },
  {
    "url": "assets/js/47.a2e25ad0.js",
    "revision": "80a9ff37301401d9e9fccfaabf5b60c3"
  },
  {
    "url": "assets/js/48.bb2d065f.js",
    "revision": "d7784db40077e2c23f3e5156374ad7f3"
  },
  {
    "url": "assets/js/49.5fb3b4b3.js",
    "revision": "058b2f97be6c71e1ffe5bd60c122a838"
  },
  {
    "url": "assets/js/5.4f807688.js",
    "revision": "db16f68bbab59f4ff96b6e497efabb68"
  },
  {
    "url": "assets/js/50.f266f45e.js",
    "revision": "a0dc15c4bdc67d2128c252da40e4f3ec"
  },
  {
    "url": "assets/js/51.01022081.js",
    "revision": "ba5716810160bb4e5ce065c4965b876a"
  },
  {
    "url": "assets/js/52.2f666868.js",
    "revision": "3238b41064bdc356633040f260c734c2"
  },
  {
    "url": "assets/js/53.99e04b02.js",
    "revision": "0a3d9871dcd6c8374c0d75180aacfd91"
  },
  {
    "url": "assets/js/54.9d2c650c.js",
    "revision": "c4bbcae1e7c265b8400edf8145584c1c"
  },
  {
    "url": "assets/js/55.7e6ded57.js",
    "revision": "7e3efa793d955ca996b9bf1d77ae6174"
  },
  {
    "url": "assets/js/56.3287ad92.js",
    "revision": "51d52256c21a3a7a64112429bf7b66e6"
  },
  {
    "url": "assets/js/57.61e59a45.js",
    "revision": "e930581b69152a002b07d9f593914aef"
  },
  {
    "url": "assets/js/58.c4b496b4.js",
    "revision": "196344cc4e90dcd89a174fb03eaa6c20"
  },
  {
    "url": "assets/js/59.e7aee515.js",
    "revision": "f080264f2ecf5e715b61c1a265f39f61"
  },
  {
    "url": "assets/js/6.a4c61e95.js",
    "revision": "5b24d2b42c6a89cec45a8b7c6704c7a7"
  },
  {
    "url": "assets/js/60.14f56c41.js",
    "revision": "55e3e7a8f35ed9853e995472403e3999"
  },
  {
    "url": "assets/js/7.262548c3.js",
    "revision": "497789d31b5f4e5e38a60e3ff1322fce"
  },
  {
    "url": "assets/js/8.ef6e65c0.js",
    "revision": "e7815a70c1e293c2dcc34dea1748e5cd"
  },
  {
    "url": "assets/js/9.d3135f55.js",
    "revision": "5bfb43d4de927703dc43faca8ce8ffee"
  },
  {
    "url": "assets/js/app.4dcb1a15.js",
    "revision": "7da6af966fdd3dbf9250fd8aa9a94604"
  },
  {
    "url": "categories/index.html",
    "revision": "0ae08f1156bae991628847656f918677"
  },
  {
    "url": "docs/algorithms/graph/minimum-spanning-tree/index.html",
    "revision": "c5f460db29fc346b4a33fc42035d5f0f"
  },
  {
    "url": "docs/algorithms/graph/shortest-path/index.html",
    "revision": "2850c452fd8156ba91173ca2652d27f7"
  },
  {
    "url": "docs/algorithms/graph/travel/index.html",
    "revision": "5a3ce416cd962d5e16abc222e1d2c9a8"
  },
  {
    "url": "docs/algorithms/index.html",
    "revision": "65109f05e44a71b9aa5b00cc004359eb"
  },
  {
    "url": "docs/algorithms/sort/index.html",
    "revision": "77235451c9c89f87024ba6cd1b0f54cd"
  },
  {
    "url": "docs/algorithms/special/index.html",
    "revision": "aef26b17dcdc8d3aba853aaa19ed1a8a"
  },
  {
    "url": "docs/algorithms/tree/avltree/index.html",
    "revision": "8d80da8bb281e34ca0affab31a36785f"
  },
  {
    "url": "docs/algorithms/tree/basic/index.html",
    "revision": "e7e45c2df599d8f05f03564bbbc33b7a"
  },
  {
    "url": "docs/algorithms/tree/rbtree/index.html",
    "revision": "4ebd117bffe4a8845959f9470f103cb6"
  },
  {
    "url": "docs/data-structure/graph/index.html",
    "revision": "65d5a85f4c6c7d217ec4171da9d0553e"
  },
  {
    "url": "docs/data-structure/index.html",
    "revision": "bbdb04c6c5881b518feac4ee11720bb3"
  },
  {
    "url": "docs/data-structure/interfaces/ICollection/index.html",
    "revision": "e0084dbc83534478604be89d38efaa49"
  },
  {
    "url": "docs/data-structure/interfaces/IIterable/index.html",
    "revision": "fac460ddc1a201069fd498c5cbd3312c"
  },
  {
    "url": "docs/data-structure/interfaces/IList/index.html",
    "revision": "5dc1663568a844b59fb44483a7f3e6c5"
  },
  {
    "url": "docs/data-structure/ixa/index.html",
    "revision": "8fdf05e6b0d08ad76f9807b98ca1c0c3"
  },
  {
    "url": "docs/data-structure/linear/ArrayList/index.html",
    "revision": "fc543a40e7af3368af7f601831c0fa0a"
  },
  {
    "url": "docs/data-structure/linear/BitSpan/index.html",
    "revision": "dcc6582ab51096cba5de34084d506fa4"
  },
  {
    "url": "docs/data-structure/linear/GList/index.html",
    "revision": "7d6096a4ee5d28561462d42b6de260f9"
  },
  {
    "url": "docs/data-structure/linear/LinkedList/index.html",
    "revision": "0af3169bd55f0b4a4cfe0a5cdb6a2db8"
  },
  {
    "url": "docs/data-structure/linear/UngrowableArrayList/index.html",
    "revision": "d511d0bb4bc38a0ee9e13a81dd046db8"
  },
  {
    "url": "docs/data-structure/map/HashMap/index.html",
    "revision": "6264c6bc24803c233990af416be84df7"
  },
  {
    "url": "docs/data-structure/tree/index.html",
    "revision": "9e931a37b4d95b6d6822df1c6ff7f4df"
  },
  {
    "url": "docs/guide/installation/index.html",
    "revision": "4262d94d364a417af3f7bdac649506f2"
  },
  {
    "url": "docs/guide/introduction/index.html",
    "revision": "490ac83facc3ef4bb1e87811de8e9081"
  },
  {
    "url": "docs/guide/quick-start/index.html",
    "revision": "ce615a27ffd2dba24089f3d66ecc9977"
  },
  {
    "url": "docs/infrastructure/ActionFunc/index.html",
    "revision": "68e8b8f12f80f81832500c5f5d562fd6"
  },
  {
    "url": "docs/infrastructure/DSArray/index.html",
    "revision": "1d287dc0f752d7bfaebe97d50fece61a"
  },
  {
    "url": "docs/infrastructure/dsEquals/index.html",
    "revision": "567a370c6fe2f7d560899c17e44f0b02"
  },
  {
    "url": "docs/infrastructure/DSEvent/index.html",
    "revision": "452d9a0ef8659f9a537300c4e65a01e0"
  },
  {
    "url": "docs/infrastructure/dsHashCode/index.html",
    "revision": "8a4ff5c1b53a3a7f7814562b0284cf81"
  },
  {
    "url": "docs/infrastructure/DSNumber/index.html",
    "revision": "7659158486ace0f9855e6ff14bd538e9"
  },
  {
    "url": "docs/infrastructure/DSObject/index.html",
    "revision": "3c2ca74f0e015721db71cb5a5c3e8f22"
  },
  {
    "url": "docs/infrastructure/IArrayLike/index.html",
    "revision": "d5a0ef02c5d3a32564b3eccb5eb6ca2c"
  },
  {
    "url": "docs/infrastructure/index.html",
    "revision": "8de4d63fdcfca0431e82925c8daf1da8"
  },
  {
    "url": "docs/infrastructure/Lazy/index.html",
    "revision": "ebe02544c035b1233d2f8fb89b40f402"
  },
  {
    "url": "docs/infrastructure/Optional/index.html",
    "revision": "f7b9aad9de139bc0929735fc3a36b483"
  },
  {
    "url": "docs/mathematics/Complex/index.html",
    "revision": "7cd1ac2129cf16d3f347cc5d370be1ae"
  },
  {
    "url": "docs/mathematics/fn/index.html",
    "revision": "071fde0afb326139f1dfafcf4df4735f"
  },
  {
    "url": "docs/mathematics/index.html",
    "revision": "81f594f21940953e18b9aa14601b26ff"
  },
  {
    "url": "docs/mathematics/martix/index.html",
    "revision": "a15d6799d2327bc8ba9bf95b0c71997d"
  },
  {
    "url": "donate/index.html",
    "revision": "e5518cc2463f124fc2466ccaf3808311"
  },
  {
    "url": "download/index.html",
    "revision": "6e7ae8a7138e40906f65b789a42cce5b"
  },
  {
    "url": "icon-144x144.png",
    "revision": "828b0bf92bdcef969602540b0d479019"
  },
  {
    "url": "icon-154x154.svg",
    "revision": "c25802ff27b56e1f1a3a7e032a32b190"
  },
  {
    "url": "icon-192x192.png",
    "revision": "ac78c14aecc8eb3c4cac29034b458062"
  },
  {
    "url": "icon-384x384.png",
    "revision": "f8ecd357a63ba99b842b091f8f6a7495"
  },
  {
    "url": "icon-512x512.png",
    "revision": "9a04f0203ed0d92a7db95836a4ce8644"
  },
  {
    "url": "icon.png",
    "revision": "a3157065f7d9c5a8560c7fcb1705895c"
  },
  {
    "url": "index.html",
    "revision": "6c35a6b3d6b6ca29c0180080d9ea631e"
  },
  {
    "url": "open-source/index.html",
    "revision": "6673d6dedec08944d4479389821628e5"
  },
  {
    "url": "study/index.html",
    "revision": "4c86bd7750a3772944d70c1786554488"
  },
  {
    "url": "study/paper/index.html",
    "revision": "6ecb6a6863897acfb8a7c57f86944d92"
  },
  {
    "url": "study/ref-material/index.html",
    "revision": "41977b22ae102181acdab883596ef291"
  },
  {
    "url": "study/ref/index.html",
    "revision": "8f3554da5bf2c055e2325c15133aa0c5"
  },
  {
    "url": "tag/index.html",
    "revision": "8661f79d2e0aa1902694f8988ed4023d"
  },
  {
    "url": "timeline/index.html",
    "revision": "60e6a40aca7bacc8fa765c0d123f56f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
