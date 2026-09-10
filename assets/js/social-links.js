const facebookUrl = 'https://www.facebook.com/fedesalciclismo';
const instagramUrl = 'https://www.instagram.com/federacionciclismo_sv/';

const icons = {
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="h-4 w-4" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.931-1.956 1.887v2.259h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="h-4 w-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.782-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`
};

function socialLink(platform, url, extraClasses = '') {
  const label = platform === 'facebook' ? 'Facebook de la Federación Salvadoreña de Ciclismo' : 'Instagram de la Federación Salvadoreña de Ciclismo';
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}" class="inline-flex items-center justify-center transition hover:text-white ${extraClasses}">${icons[platform]}</a>`;
}

// Utility bar: replace the old placeholder Facebook/Instagram/YouTube group.
const utilityBar = document.querySelector('.utility-bar');
if (utilityBar) {
  const facebookPlaceholder = utilityBar.querySelector('a[aria-label="Facebook"]');
  const instagramPlaceholder = utilityBar.querySelector('a[aria-label="Instagram"]');
  const youtubePlaceholder = utilityBar.querySelector('a[aria-label="YouTube"]');

  if (facebookPlaceholder) facebookPlaceholder.outerHTML = socialLink('facebook', facebookUrl, 'h-6 w-6 text-white/80');
  if (instagramPlaceholder) instagramPlaceholder.outerHTML = socialLink('instagram', instagramUrl, 'h-6 w-6 text-white/80');
  youtubePlaceholder?.remove();
}

// Footer: replace the old text glyphs with the two official FSC social channels.
const footer = document.getElementById('contacto');
if (footer) {
  const socialRow = [...footer.querySelectorAll('div')].find(el =>
    el.classList.contains('text-xl') && el.textContent.includes('▶')
  );

  if (socialRow) {
    socialRow.className = 'mt-5 flex items-center gap-3 text-white/75';
    socialRow.innerHTML =
      socialLink('facebook', facebookUrl, 'h-10 w-10 rounded-full border border-white/15 hover:border-white/35 hover:bg-white/10') +
      socialLink('instagram', instagramUrl, 'h-10 w-10 rounded-full border border-white/15 hover:border-white/35 hover:bg-white/10');
  }
}
