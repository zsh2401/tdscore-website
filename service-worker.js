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
    "revision": "91a9615fa5232c1bd2189e3aa2278e8a"
  },
  {
    "url": "about/index.html",
    "revision": "344cb631ce37e597c2f93c3b84aff522"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2c24e9da96e56e243703ba92a2332d66"
  },
  {
    "url": "assets/css/0.styles.9a5141ea.css",
    "revision": "0962d132c5669723d633726dfd11aae5"
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
    "url": "assets/js/1.df613b0e.js",
    "revision": "b5869bef291215834e9777d1623b4f2c"
  },
  {
    "url": "assets/js/10.67935a30.js",
    "revision": "4b6aa66a8205865d29b37421e599ac79"
  },
  {
    "url": "assets/js/11.f789e3d1.js",
    "revision": "d38c4372c42efcf58940d73156836f3b"
  },
  {
    "url": "assets/js/12.932743fe.js",
    "revision": "e5eb1f65e8f678cc8ded97b87358f13d"
  },
  {
    "url": "assets/js/13.75a6cca6.js",
    "revision": "7fc82c127a8bbd4657881fdef1e05f99"
  },
  {
    "url": "assets/js/14.dfab9bf5.js",
    "revision": "85a79324044968501a5f2ee69f5dc3ef"
  },
  {
    "url": "assets/js/15.f9335bda.js",
    "revision": "a5bb8f45b2cdf3647cc3b1fff6995253"
  },
  {
    "url": "assets/js/16.7f0cb95e.js",
    "revision": "4f93e36f80e6b8087859198ada0abfec"
  },
  {
    "url": "assets/js/17.6a46c04b.js",
    "revision": "e2c23ca341ffe8cbc3f92fa852e85d59"
  },
  {
    "url": "assets/js/18.91c294c6.js",
    "revision": "26a17e73b6c4200dca9b798b4a05d515"
  },
  {
    "url": "assets/js/19.9c87e974.js",
    "revision": "fb21b8b850caa53433ab757c8d2e643b"
  },
  {
    "url": "assets/js/20.e388b6a0.js",
    "revision": "596988da9e67173441151d5b133d1d04"
  },
  {
    "url": "assets/js/21.19d8b8b0.js",
    "revision": "22ebf86b126ad3f2373a7b95bb03f6aa"
  },
  {
    "url": "assets/js/22.4af4086e.js",
    "revision": "e6664c6c6ab61bba92065fa5915520eb"
  },
  {
    "url": "assets/js/23.42d36ed0.js",
    "revision": "a9317e88a512de2090dcd615563d70aa"
  },
  {
    "url": "assets/js/24.c3e02c7d.js",
    "revision": "f47ccae8309e24d4c4ead43545f9d5c2"
  },
  {
    "url": "assets/js/25.db746e58.js",
    "revision": "95a49683ec02633426c84ddc28b64f36"
  },
  {
    "url": "assets/js/26.5f446994.js",
    "revision": "6762988e453aa7b220156993fcf27016"
  },
  {
    "url": "assets/js/27.16a5f7fb.js",
    "revision": "af33efa1b8907c0420c7fe0d55859194"
  },
  {
    "url": "assets/js/28.75bee3db.js",
    "revision": "41d628ebaf562daec668f4284d161511"
  },
  {
    "url": "assets/js/29.10c83b79.js",
    "revision": "ad6361cf0f95eacea2668b03038b5372"
  },
  {
    "url": "assets/js/3.dff1b186.js",
    "revision": "e324f75fee65afa8d2c084b3d01ce37b"
  },
  {
    "url": "assets/js/30.d6b14d97.js",
    "revision": "62115a69d566711f4c8c529dff9cea91"
  },
  {
    "url": "assets/js/31.21f10513.js",
    "revision": "a55c0854e402655ad8d525e249e2db96"
  },
  {
    "url": "assets/js/32.7feeb2b5.js",
    "revision": "399d9ccfc81f813b518a56f6ae038f77"
  },
  {
    "url": "assets/js/33.8be440b1.js",
    "revision": "8c0d8f1920d9acc7028b7b644f897e83"
  },
  {
    "url": "assets/js/34.f6df9a8c.js",
    "revision": "380c72aaf2354b05f5d855aa7df605bb"
  },
  {
    "url": "assets/js/35.8fb139ec.js",
    "revision": "7d65917f4a4583bd82063d0c664e4099"
  },
  {
    "url": "assets/js/36.a51e4ce4.js",
    "revision": "81ce871ad7e583a8e35da652d6bf29c2"
  },
  {
    "url": "assets/js/37.f0b7a3df.js",
    "revision": "c66d8544b38353a01c19c3b02b29cdc3"
  },
  {
    "url": "assets/js/38.4f45d69b.js",
    "revision": "f69921f36bcf4dada9daffab6c14d47e"
  },
  {
    "url": "assets/js/39.021146e1.js",
    "revision": "94867340e984b16af6e5dc4bd85fcf2a"
  },
  {
    "url": "assets/js/4.345163fd.js",
    "revision": "49a0cb2b2a0e6a1d6a294c0cbed2ea15"
  },
  {
    "url": "assets/js/40.52b1305b.js",
    "revision": "861f9cbb84f27b1e2d027aab621094e9"
  },
  {
    "url": "assets/js/41.dcb7a2cc.js",
    "revision": "e13a7177ad33848a3d988c13d4725de8"
  },
  {
    "url": "assets/js/42.8408efa0.js",
    "revision": "4337a20b64ba3451c68c491f73dfcd74"
  },
  {
    "url": "assets/js/43.b2824238.js",
    "revision": "abbc898a8fb85c78de38972e3664cbe6"
  },
  {
    "url": "assets/js/44.3b88f617.js",
    "revision": "fbab3884ce85b45bf280556324463719"
  },
  {
    "url": "assets/js/45.cd13447b.js",
    "revision": "f3f4d5623818f39f5ab9179fa809f0df"
  },
  {
    "url": "assets/js/46.4e3c64e5.js",
    "revision": "8a1076490e2147f40481b62b30fca2fb"
  },
  {
    "url": "assets/js/47.cc0fa229.js",
    "revision": "d7385f7ec581b44229f32b3394f555b3"
  },
  {
    "url": "assets/js/48.4b70e4a3.js",
    "revision": "464aff2d477561e2b1318bb5ca140cad"
  },
  {
    "url": "assets/js/49.4ca23504.js",
    "revision": "41a697c7e9daa0b6c2f1726a0a2f3107"
  },
  {
    "url": "assets/js/5.c49baba1.js",
    "revision": "de9b2e5ce2247bef5e8557fe86068590"
  },
  {
    "url": "assets/js/50.2e8ee110.js",
    "revision": "d28adf8a7c6e0acc1113a2f66264cf77"
  },
  {
    "url": "assets/js/51.5ff66614.js",
    "revision": "8bc5aa3b20796c5e5e410f082f312b58"
  },
  {
    "url": "assets/js/52.a9bb7676.js",
    "revision": "c7a13c5e67d45db5e5c174da0b9af985"
  },
  {
    "url": "assets/js/53.57fc3937.js",
    "revision": "9ee7bc9bc18c432bf3614fe1a6ec1e62"
  },
  {
    "url": "assets/js/54.14136d12.js",
    "revision": "120e54284082c5669e6b3676b379ab51"
  },
  {
    "url": "assets/js/55.3dd4d683.js",
    "revision": "c1e3bf84ffe8b9296f7ff77a6ece1965"
  },
  {
    "url": "assets/js/56.befc3b7e.js",
    "revision": "8f070af76615c5401cf0de34bdf141ff"
  },
  {
    "url": "assets/js/57.6ad0df1e.js",
    "revision": "8e51f70fdecafabca79abf5ef948b549"
  },
  {
    "url": "assets/js/58.5fe31a49.js",
    "revision": "9daed71ad79324c9c5b7bffaedfc94d3"
  },
  {
    "url": "assets/js/59.cb3525a1.js",
    "revision": "b9ee8f6137275ac396cf9c4f82529aab"
  },
  {
    "url": "assets/js/6.f06a473d.js",
    "revision": "5d2efb059d404b4124dc0a4e2cffd9a0"
  },
  {
    "url": "assets/js/60.dfdffa31.js",
    "revision": "ee60c087a5d1821d91cc9bd8c2217229"
  },
  {
    "url": "assets/js/7.95f09e3b.js",
    "revision": "e31d15dbd73cd4d134bc208aa88065c1"
  },
  {
    "url": "assets/js/8.140dac45.js",
    "revision": "d241e8b0b8be777d9a544cc8a3be8029"
  },
  {
    "url": "assets/js/9.25118871.js",
    "revision": "de3be801c62b9b54f78cf87dec83eeec"
  },
  {
    "url": "assets/js/app.e5a41988.js",
    "revision": "cfb0a13052590dfa1bb2b9b7704b70be"
  },
  {
    "url": "categories/index.html",
    "revision": "b534e5a927c2e866b18aa542694cf9e7"
  },
  {
    "url": "docs/algorithms/graph/minimum-spanning-tree/index.html",
    "revision": "4ae1d0b9035fdf565827f1d1b32f89ee"
  },
  {
    "url": "docs/algorithms/graph/shortest-path/index.html",
    "revision": "c88fa841e1ddc0029135610d5312e497"
  },
  {
    "url": "docs/algorithms/graph/travel/index.html",
    "revision": "0d476196295a8fd1dbcba430213632ff"
  },
  {
    "url": "docs/algorithms/index.html",
    "revision": "5d1dfcd23bdb0fd309efefb7b2d5c065"
  },
  {
    "url": "docs/algorithms/sort/index.html",
    "revision": "0aaf12da106411e28cc7cc0f58fb23b4"
  },
  {
    "url": "docs/algorithms/special/index.html",
    "revision": "97cb032062a1c40c2fc9983f330fe0d3"
  },
  {
    "url": "docs/algorithms/tree/avltree/index.html",
    "revision": "fec8b1cfbd9f89f42ed4f089b1b68bdd"
  },
  {
    "url": "docs/algorithms/tree/basic/index.html",
    "revision": "4497cde230aa422d66146409142485e5"
  },
  {
    "url": "docs/algorithms/tree/rbtree/index.html",
    "revision": "fd637cdb7fa14d6ca15d8e8907f2005f"
  },
  {
    "url": "docs/data-structure/graph/index.html",
    "revision": "6b0c57f11828b233882339c766d1249f"
  },
  {
    "url": "docs/data-structure/index.html",
    "revision": "3433936ba0b45f964dbeaf64ab201c8e"
  },
  {
    "url": "docs/data-structure/interfaces/ICollection/index.html",
    "revision": "70de23789fb5e4ff83715129efa378d6"
  },
  {
    "url": "docs/data-structure/interfaces/IIterable/index.html",
    "revision": "94f1421a2c8951fef2a2c8d197a189a0"
  },
  {
    "url": "docs/data-structure/interfaces/IList/index.html",
    "revision": "b6f938dcf84af90e0bcb002970a1b7da"
  },
  {
    "url": "docs/data-structure/ixa/index.html",
    "revision": "f620ff462844a0117058cc0d04a3b77c"
  },
  {
    "url": "docs/data-structure/linear/ArrayList/index.html",
    "revision": "7809b92d134c809b18f882ad26880187"
  },
  {
    "url": "docs/data-structure/linear/BitSpan/index.html",
    "revision": "b372aa5e289cc197ef4bd46464b9e177"
  },
  {
    "url": "docs/data-structure/linear/GList/index.html",
    "revision": "66ee0597d073094c34fa3b494dce5fdc"
  },
  {
    "url": "docs/data-structure/linear/LinkedList/index.html",
    "revision": "a87c9249d2ce1d64a56c9871a76c9da3"
  },
  {
    "url": "docs/data-structure/linear/UngrowableArrayList/index.html",
    "revision": "723499ce2dac255cb55991aa39a85b4f"
  },
  {
    "url": "docs/data-structure/map/HashMap/index.html",
    "revision": "2cb378e7c6a0d590e9478edcbf5479eb"
  },
  {
    "url": "docs/data-structure/tree/index.html",
    "revision": "13ebcd53e47beab98a42e134bb46873c"
  },
  {
    "url": "docs/guide/installation/index.html",
    "revision": "bfc88a67bdffa1d1f513868825e135a7"
  },
  {
    "url": "docs/guide/introduction/index.html",
    "revision": "c67be7509e5d5730888b504700157148"
  },
  {
    "url": "docs/guide/quick-start/index.html",
    "revision": "530151a66bcf553fea094acf1a150c23"
  },
  {
    "url": "docs/infrastructure/ActionFunc/index.html",
    "revision": "1c12f5f1e6ae5813f4e7e181034300cc"
  },
  {
    "url": "docs/infrastructure/DSArray/index.html",
    "revision": "d5cf033b6e859fd19d8c8ce49146e73b"
  },
  {
    "url": "docs/infrastructure/dsEquals/index.html",
    "revision": "08dfa457940790c624a0941237f05f31"
  },
  {
    "url": "docs/infrastructure/DSEvent/index.html",
    "revision": "17e06f94542f013739e03d3e3f8eebbb"
  },
  {
    "url": "docs/infrastructure/dsHashCode/index.html",
    "revision": "159653932e03379726433e89df57bd3d"
  },
  {
    "url": "docs/infrastructure/DSNumber/index.html",
    "revision": "ccbfb810857c1e5891410e2ab2290a65"
  },
  {
    "url": "docs/infrastructure/DSObject/index.html",
    "revision": "fbe0674bc504fec0279a4dab618da8c4"
  },
  {
    "url": "docs/infrastructure/IArrayLike/index.html",
    "revision": "aa9ce0288b61508001cb7c36f4828db1"
  },
  {
    "url": "docs/infrastructure/index.html",
    "revision": "d0d8d4a8f6a78f271ae46d9eafb2200a"
  },
  {
    "url": "docs/infrastructure/Lazy/index.html",
    "revision": "659a32e6dfb9860dd6bf146e8985a997"
  },
  {
    "url": "docs/infrastructure/Optional/index.html",
    "revision": "f96311aaff48a3d3d9d0bb43c6f70c21"
  },
  {
    "url": "docs/mathematics/Complex/index.html",
    "revision": "fcecc83d374c24241e93ef9949ffebc4"
  },
  {
    "url": "docs/mathematics/fn/index.html",
    "revision": "7b966cdc6d35c98101b4f25daf341e92"
  },
  {
    "url": "docs/mathematics/index.html",
    "revision": "af380251d1a8b6076e768dbe7727a183"
  },
  {
    "url": "docs/mathematics/martix/index.html",
    "revision": "74eab661f031a8036b2e769d2d8d05d1"
  },
  {
    "url": "donate/index.html",
    "revision": "4fa7d7a6d5e43c1148acd1ce57a01935"
  },
  {
    "url": "download/index.html",
    "revision": "5b42018f30c63437d8f67d8612e3673e"
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
    "revision": "471002e1305d6d38cd4a1c1bf3a37482"
  },
  {
    "url": "open-source/index.html",
    "revision": "63aeea902cdfedfc09e91fd6c57c53b6"
  },
  {
    "url": "study/index.html",
    "revision": "4688a761f569b3f47562cbfcac14f11f"
  },
  {
    "url": "study/paper/index.html",
    "revision": "700e9acb6f298b94ee32fab9e609492e"
  },
  {
    "url": "study/ref-material/index.html",
    "revision": "ce3c70b8b50705da9b2cf8f9eb3550f2"
  },
  {
    "url": "study/ref/index.html",
    "revision": "6ad87ea9828cf6b82856e46b12c90502"
  },
  {
    "url": "tag/index.html",
    "revision": "21fc13bbd9ff4da82d6f757f7a0a1599"
  },
  {
    "url": "timeline/index.html",
    "revision": "c5d9db065637c42c6fc65188bf22bbb1"
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
