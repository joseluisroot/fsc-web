(() => {
  const logo = document.querySelector('img[alt="Gobierno de El Salvador"]');
  if (!logo) return;

  fetch('assets/images/partners/goes-logo.b64')
    .then(response => {
      if (!response.ok) throw new Error(`Logo source unavailable: ${response.status}`);
      return response.text();
    })
    .then(base64 => {
      logo.src = `data:image/webp;base64,${base64.trim()}`;
      logo.removeAttribute('srcset');
    })
    .catch(error => console.error('FSC government logo:', error));
})();
