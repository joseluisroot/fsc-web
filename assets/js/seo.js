(() => {
  const isGitHubPreview = location.hostname.endsWith('github.io');
  const productionUrl = 'https://fsc.org.sv/';
  const productionImage = 'https://fsc.org.sv/assets/images/logo-fsc.webp';

  document.documentElement.lang = 'es-SV';

  const upsertMeta = (selector, attrs) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  // Keep the public GitHub Pages prototype out of search indexes while
  // production metadata remains ready for fsc.org.sv.
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: isGitHubPreview
      ? 'noindex,nofollow,noarchive,nosnippet'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  });

  upsertMeta('meta[name="googlebot"]', {
    name: 'googlebot',
    content: isGitHubPreview
      ? 'noindex,nofollow,noarchive,nosnippet'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  });

  const openGraph = {
    'og:title': 'Federación Salvadoreña de Ciclismo | FSC',
    'og:description': 'Disciplinas, eventos, noticias, licencias, documentos, clubes y transparencia de la Federación Salvadoreña de Ciclismo.',
    'og:type': 'website',
    'og:url': productionUrl,
    'og:image': productionImage,
    'og:image:alt': 'Federación Salvadoreña de Ciclismo',
    'og:site_name': 'Federación Salvadoreña de Ciclismo',
    'og:locale': 'es_SV'
  };

  Object.entries(openGraph).forEach(([property, content]) => {
    upsertMeta(`meta[property="${property}"]`, { property, content });
  });

  const twitter = {
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Federación Salvadoreña de Ciclismo | FSC',
    'twitter:description': 'Disciplinas, eventos, noticias, licencias, documentos, clubes y transparencia de la Federación Salvadoreña de Ciclismo.',
    'twitter:image': productionImage,
    'twitter:image:alt': 'Federación Salvadoreña de Ciclismo'
  };

  Object.entries(twitter).forEach(([name, content]) => {
    upsertMeta(`meta[name="${name}"]`, { name, content });
  });

  upsertMeta('meta[name="author"]', {
    name: 'author',
    content: 'Federación Salvadoreña de Ciclismo'
  });

  upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'SV-SS' });
  upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: 'San Salvador' });

  // Replace the basic schema with a richer graph that connects the
  // organization, website and homepage without inventing institutional data.
  document.querySelectorAll('script[type="application/ld+json"]').forEach(node => node.remove());

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['SportsOrganization', 'Organization'],
        '@id': 'https://fsc.org.sv/#organization',
        name: 'Federación Salvadoreña de Ciclismo',
        alternateName: 'FSC',
        url: productionUrl,
        logo: {
          '@type': 'ImageObject',
          url: productionImage
        },
        sport: 'Cycling',
        telephone: '+503 2280 4053',
        email: 'info@fsc.org.sv',
        sameAs: [
          'https://www.facebook.com/fedesalciclismo',
          'https://www.instagram.com/federacionciclismo_sv/'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Col. Nicaragua, final Calle Los Viveros, Velódromo Nacional',
          addressLocality: 'San Salvador',
          addressRegion: 'San Salvador',
          addressCountry: 'SV'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+503 2280 4053',
          email: 'info@fsc.org.sv',
          contactType: 'customer service',
          availableLanguage: 'Spanish'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://fsc.org.sv/#website',
        url: productionUrl,
        name: 'Federación Salvadoreña de Ciclismo',
        inLanguage: 'es-SV',
        publisher: { '@id': 'https://fsc.org.sv/#organization' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://fsc.org.sv/#webpage',
        url: productionUrl,
        name: 'Federación Salvadoreña de Ciclismo | FSC',
        description: 'Federación Salvadoreña de Ciclismo: disciplinas, eventos, noticias, licencias, documentos, clubes y transparencia.',
        inLanguage: 'es-SV',
        isPartOf: { '@id': 'https://fsc.org.sv/#website' },
        about: { '@id': 'https://fsc.org.sv/#organization' }
      }
    ]
  };

  const structuredData = document.createElement('script');
  structuredData.type = 'application/ld+json';
  structuredData.dataset.fscSeo = 'structured-data';
  structuredData.textContent = JSON.stringify(schema);
  document.head.appendChild(structuredData);
})();
