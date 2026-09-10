(() => {
  const searchButton = document.querySelector('.utility-bar button[aria-label="Buscar"]');
  if (!searchButton) return;

  searchButton.innerHTML = '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>';
  searchButton.className = 'inline-flex h-6 w-6 items-center justify-center text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b294d]';
})();
