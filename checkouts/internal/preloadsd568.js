
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.f8e9ec099dcc1b74ff5d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1941.baseline.en.9c7149ea6c16a8b6f90b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9268.baseline.en.7fc43c222889823977de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7623.baseline.en.f15aa62d2fdc17675c59.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.68be6a9d2851eabc2a79.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9033.baseline.en.b2c4084858957d3ee950.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1377.baseline.en.8bc93eda316aa22e1abc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1519.baseline.en.f13d9ed41bb1b1676af3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/646.baseline.en.28d54549f837d0f34c63.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8510.baseline.en.f87d052e74e2b0aae89f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/411.baseline.en.d3f7de3b16a4c3d58c37.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4760.baseline.en.e8836c938e9d75643449.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/737.baseline.en.6ed1d1570b15eb9bdef0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4253.baseline.en.548809f3e9cd4c86329f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3337.baseline.en.bc3bff45ecb4a98df7d8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.e1e451fb7b8929503184.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/1941.baseline.en.e8e43e29ac9007abab76.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.dd34e026e89cca1a222b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.b8cf1e86bc9af4497761.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0890/1315/8171/files/New_7ded86b3-fce6-4b0f-89f3-652e5bf87f4d_x320.png?v=1722929524"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  