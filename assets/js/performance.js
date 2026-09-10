(() => {
  const head = document.head;
  if (!head) return;

  const connectionHints = [
    ['preconnect', 'https://cdn-pro.elsalvador.com'],
    ['preconnect', 'https://images.unsplash.com'],
    ['preconnect', 'https://cdnjs.cloudflare.com'],
    ['dns-prefetch', '//cdn-pro.elsalvador.com'],
    ['dns-prefetch', '//images.unsplash.com'],
    ['dns-prefetch', '//cdnjs.cloudflare.com']
  ];

  connectionHints.forEach(([rel, href]) => {
    if (head.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (rel === 'preconnect') link.crossOrigin = 'anonymous';
    link.dataset.fscPerformance = 'connection-hint';
    head.appendChild(link);
  });

  const heroSlides = [...document.querySelectorAll('.hero-slide')];
  heroSlides.forEach((slide, index) => {
    const image = slide.querySelector('img');
    if (!image) return;

    image.decoding = 'async';
    if (index === 0) {
      image.loading = 'eager';
      image.fetchPriority = 'high';
    } else {
      image.loading = 'lazy';
      image.fetchPriority = 'low';
    }
  });

  const logo = document.querySelector('.site-logo');
  if (logo) {
    logo.decoding = 'async';
    logo.fetchPriority = 'high';
  }

  function optimizeImage(image) {
    if (!(image instanceof HTMLImageElement)) return;
    image.decoding = 'async';

    if (!image.closest('#hero') && !image.classList.contains('site-logo') && !image.hasAttribute('loading')) {
      image.loading = 'lazy';
    }
  }

  document.querySelectorAll('img').forEach(optimizeImage);

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches('img')) optimizeImage(node);
        node.querySelectorAll?.('img').forEach(optimizeImage);
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('load', () => {
    window.setTimeout(() => observer.disconnect(), 5000);
  }, { once: true });
})();
