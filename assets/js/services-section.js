(() => {
  const oldSection = document.getElementById('documentos');
  if (!oldSection) return;

  const documentIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 6h16l7 7v29H13V6Zm16 0v8h7M19 22h11M19 28h11M19 34h8"/></svg>`;
  const licenseIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 11h30v26H9V11Zm7 8h8M16 24h12M16 29h9M31 17a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 13c1.2-2.9 3.2-4.3 5-4.3s3.8 1.4 5 4.3"/></svg>`;
  const transparencyIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6 39 12v10c0 9.8-6.2 16.6-15 20-8.8-3.4-15-10.2-15-20V12L24 6Zm-7 17 4.5 4.5L31 18"/></svg>`;
  const portalIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 10h32v28H8V10Zm0 8h32M15 14h.1M20 14h.1M25 14h.1M15 25h8M15 31h15"/></svg>`;
  const infoIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>`;

  const section = document.createElement('section');
  section.id = 'documentos';
  section.className = 'services-hub';
  section.setAttribute('aria-labelledby', 'services-title');
  section.innerHTML = `
    <div class="services-inner">
      <div class="services-heading">
        <div>
          <p class="services-eyebrow">Servicios e información institucional</p>
          <h2 id="services-title">Todo lo que necesitas, en un solo lugar.</h2>
        </div>
        <p class="services-heading-copy">Centralizamos documentación, trámites y acceso a información institucional para que atletas, clubes, entrenadores y ciudadanía puedan encontrar lo que necesitan de forma clara y ordenada.</p>
      </div>

      <div class="services-grid">
        <article class="service-card">
          <div class="service-top"><span class="service-icon">${documentIcon}</span><span class="service-index">01</span></div>
          <h3>Documentos</h3>
          <p>Consulta normativa, convocatorias, circulares y documentos oficiales vinculados al funcionamiento de la Federación.</p>
          <div class="service-links">
            <a class="service-link" href="#"><span>Estatutos</span><span>→</span></a>
            <a class="service-link" href="#"><span>Reglamentos</span><span>→</span></a>
            <a class="service-link" href="#"><span>Circulares y convocatorias</span><span>→</span></a>
          </div>
          <a class="service-cta" href="#">Ver centro de documentos <span>→</span></a>
        </article>

        <article id="licencias" class="service-card">
          <div class="service-top"><span class="service-icon">${licenseIcon}</span><span class="service-index">02</span></div>
          <h3>Licencias y afiliación</h3>
          <p>Un punto de acceso para conocer requisitos, procesos y documentación relacionada con licencias FSC, UCI y afiliación deportiva.</p>
          <div class="service-links">
            <a class="service-link" href="#"><span>Licencia FSC</span><span>→</span></a>
            <a class="service-link" href="#"><span>Licencia UCI</span><span>→</span></a>
            <a class="service-link" href="#"><span>Afiliación de clubes y atletas</span><span>→</span></a>
          </div>
          <a class="service-cta" href="#">Conocer trámites y requisitos <span>→</span></a>
        </article>

        <article id="transparencia" class="service-card">
          <div class="service-top"><span class="service-icon">${transparencyIcon}</span><span class="service-index">03</span></div>
          <h3>Transparencia</h3>
          <p>Acceso organizado a información institucional que fortalece la rendición de cuentas y la gestión responsable de la Federación.</p>
          <div class="service-links">
            <a class="service-link" href="#"><span>Informes institucionales</span><span>→</span></a>
            <a class="service-link" href="#"><span>Resoluciones y actas</span><span>→</span></a>
            <a class="service-link" href="#"><span>Gestión y cumplimiento</span><span>→</span></a>
          </div>
          <a class="service-cta" href="#">Explorar transparencia <span>→</span></a>
        </article>
      </div>

      <div class="services-note">
        ${infoIcon}
        <p><strong>Contenido demostrativo del prototipo.</strong> La estructura está preparada para que, en la versión dinámica, categorías, archivos, requisitos, estados y publicaciones se administren desde el backend de la FSC.</p>
      </div>

      <div class="services-band">
        <div class="services-band-inner">
          <div class="services-band-copy">
            <span class="services-band-icon">${portalIcon}</span>
            <div><h3>Una experiencia más simple para la comunidad ciclista.</h3><p>El objetivo es reducir búsquedas dispersas y convertir estos servicios en rutas claras, trazables y fáciles de mantener.</p></div>
          </div>
          <a href="#contacto">¿Necesitas orientación? <span>→</span></a>
        </div>
      </div>
    </div>`;

  oldSection.replaceWith(section);
})();
