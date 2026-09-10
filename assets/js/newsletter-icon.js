(() => {
  const footer = document.getElementById('contacto');
  if (!footer) return;

  const subscribeHeading = [...footer.querySelectorAll('h3')].find(
    heading => heading.textContent.trim() === 'Suscríbete a nuestras noticias'
  );
  if (!subscribeHeading) return;

  const subscribeBlock = subscribeHeading.parentElement;
  const button = subscribeBlock?.querySelector('button');
  if (!button) return;

  button.setAttribute('type', 'button');
  button.setAttribute('aria-label', 'Suscribirse a las noticias');
  button.setAttribute('title', 'Suscribirse');
  button.className = 'rounded-r bg-blue-500 px-4 text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-fsc-950';
  button.innerHTML = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
})();
