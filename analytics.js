/* Visitor tracking for paintingsuae.com
   - Google Analytics 4: visitor numbers, countries, sources, pages
   - Microsoft Clarity: heatmaps and session recordings
   - Contact clicks (WhatsApp, email, Instagram) sent to GA4 as events */
(function () {
  var GA_ID = 'G-K810WYDM3G';
  var CLARITY_ID = 'zbx8hebaab';

  // Don't count local testing
  if (!/paintingsuae\.com$/.test(location.hostname)) return;

  if (GA_ID.indexOf('G-') === 0) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  if (CLARITY_ID && CLARITY_ID.indexOf('__') !== 0) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  // Track clicks on contact links
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !window.gtag) return;
    var href = a.getAttribute('href');
    var type = null;
    if (/wa\.me\//.test(href)) type = 'whatsapp_message';
    else if (/chat\.whatsapp\.com/.test(href)) type = 'whatsapp_community';
    else if (/^mailto:/.test(href)) type = 'email';
    else if (/instagram\.com/.test(href)) type = 'instagram';
    if (!type) return;
    var subject = (href.match(/subject=([^&]*)/) || [])[1];
    gtag('event', 'contact_click', {
      contact_method: type,
      link_text: (a.textContent || '').trim().slice(0, 100),
      topic: subject ? decodeURIComponent(subject) : undefined,
      page: location.pathname
    });
  }, true);
})();
