const facebookUrl = 'https://www.facebook.com/fedesalciclismo';
const instagramUrl = 'https://www.instagram.com/federacionciclismo_sv/';

function socialLink(platform, url, extraClasses = '') {
  const isFacebook = platform === 'facebook';
  const label = isFacebook
    ? 'Facebook de la Federación Salvadoreña de Ciclismo'
    : 'Instagram de la Federación Salvadoreña de Ciclismo';
  const iconClass = isFacebook ? 'fa-brands fa-facebook-f' : 'fa-brands fa-instagram';

  return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}" class="inline-flex items-center justify-center transition hover:text-white ${extraClasses}"><i class="${iconClass}" aria-hidden="true"></i></a>`;
}

// Utility bar: replace the legacy Facebook / Instagram / YouTube placeholders.
const utilityBar = document.querySelector('.utility-bar');
if (utilityBar) {
  const facebookPlaceholder = utilityBar.querySelector('a[aria-label="Facebook"]');
  const instagramPlaceholder = utilityBar.querySelector('a[aria-label="Instagram"]');
  const youtubePlaceholder = utilityBar.querySelector('a[aria-label="YouTube"]');

  if (facebookPlaceholder) facebookPlaceholder.outerHTML = socialLink('facebook', facebookUrl, 'h-6 w-6 text-white/80');
  if (instagramPlaceholder) instagramPlaceholder.outerHTML = socialLink('instagram', instagramUrl, 'h-6 w-6 text-white/80');
  youtubePlaceholder?.remove();
}

// Footer: replace the legacy text glyphs with the official FSC channels.
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
