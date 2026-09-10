(() => {
  const oldImpact = [...document.querySelectorAll('main > section')].find(section => section.classList.contains('grid') && section.querySelector('h2')?.textContent?.trim() === 'Tierra de ciclistas');
  const oldPartners = [...document.querySelectorAll('main > section')].find(section => section.textContent?.includes('Aliados estratégicos'));

  if (!oldImpact) return;

  const peopleIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17.5 21.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm13-1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM5 39v-4.2c0-5.7 5.6-10.3 12.5-10.3S30 29.1 30 34.8V39H5Zm25-13.4c6.5.3 11.5 4.2 11.5 9V39H34"/></svg>`;
  const clubIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40h32M11 18h26v22H11V18Zm-3 0 16-11 16 11H8Zm9 8h5v14h-5V26Zm9 0h5v14h-5V26Z"/></svg>`;
  const trophyIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 8h18v8c0 8-3.5 13-9 13s-9-5-9-13V8Zm4 21h10m-5 0v7m-8 4h16M15 12H8v3c0 6 3.2 9 8.2 9M33 12h7v3c0 6-3.2 9-8.2 9"/></svg>`;
  const documentIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 6h16l7 7v29H13V6Zm16 0v8h7M19 22h11M19 28h11M19 34h8"/></svg>`;

  const impact = document.createElement('section');
  impact.className = 'impact-band';
  impact.setAttribute('aria-labelledby', 'impact-title');
  impact.innerHTML = `
    <div class="impact-story">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85" alt="Paisaje que representa la riqueza natural de El Salvador" loading="lazy">
      <div class="impact-story-overlay"></div>
      <div class="impact-story-copy">
        <p class="impact-eyebrow">El Salvador</p>
        <h2 id="impact-title">Tierra de ciclistas</h2>
        <p>Promovemos un país más saludable, más competitivo y con más oportunidades para las nuevas generaciones.</p>
      </div>
    </div>
    <div class="impact-metrics" aria-label="Indicadores institucionales demostrativos">
      <div class="impact-metrics-grid">
        <article class="metric-item"><span class="metric-icon">${peopleIcon}</span><span class="metric-label">Atletas</span><strong>+500</strong></article>
        <article class="metric-item"><span class="metric-icon">${clubIcon}</span><span class="metric-label">Clubes afiliados</span><strong>+25</strong></article>
        <article class="metric-item"><span class="metric-icon">${trophyIcon}</span><span class="metric-label">Eventos al año</span><strong>+10</strong></article>
        <article class="metric-item"><span class="metric-icon">${documentIcon}</span><span class="metric-label">Documentos disponibles</span><strong>+50</strong></article>
      </div>
      <p class="impact-demo-note">Datos demostrativos del prototipo</p>
    </div>`;

  const partners = document.createElement('section');
  partners.className = 'partners-section';
  partners.setAttribute('aria-labelledby', 'partners-title');
  partners.innerHTML = `
    <div class="partners-inner">
      <div class="section-heading-row">
        <div>
          <p class="section-eyebrow">Aliados estratégicos</p>
          <h2 id="partners-title">Instituciones que impulsan el ciclismo</h2>
          <p class="section-lead">Vínculos institucionales que fortalecen el desarrollo, la representación y la proyección del ciclismo salvadoreño.</p>
        </div>
      </div>
      <div class="partners-grid">
        <a class="partner-card" href="https://teamesa.org/" target="_blank" rel="noopener noreferrer" aria-label="Comité Olímpico de El Salvador — abrir sitio oficial">
          <span class="partner-logo-wrap partner-logo-square"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo%20-%20Comit%C3%A9%20Ol%C3%ADmpico%20de%20El%20Salvador.png?width=360" alt="Comité Olímpico de El Salvador" loading="lazy"></span>
          <span class="partner-name">Comité Olímpico de El Salvador</span><span class="partner-link">Sitio oficial <b>↗</b></span>
        </a>
        <a class="partner-card" href="https://web.indes.gob.sv/" target="_blank" rel="noopener noreferrer" aria-label="INDES — abrir sitio oficial">
          <span class="partner-logo-wrap"><span class="indes-mark" aria-hidden="true"><i></i><b>INDES</b><em>Instituto Nacional de los Deportes<br>de El Salvador</em></span></span>
          <span class="partner-name">Instituto Nacional de los Deportes</span><span class="partner-link">Sitio oficial <b>↗</b></span>
        </a>
        <a class="partner-card" href="https://www.uci.org/" target="_blank" rel="noopener noreferrer" aria-label="Union Cycliste Internationale — abrir sitio oficial">
          <span class="partner-logo-wrap"><img src="https://www.uci.org/images/default-source/default-album/uci-logo.svg" alt="UCI — Union Cycliste Internationale" loading="lazy"></span>
          <span class="partner-name">Union Cycliste Internationale</span><span class="partner-link">Sitio oficial <b>↗</b></span>
        </a>
        <a class="partner-card" href="https://www.presidencia.gob.sv/" target="_blank" rel="noopener noreferrer" aria-label="Gobierno de El Salvador — abrir sitio oficial">
          <span class="partner-logo-wrap"><img src="https://web.indes.gob.sv/wp-content/themes/instituciones/img/Logo_GOES_horizontal.svg" alt="Gobierno de El Salvador" loading="lazy"></span>
          <span class="partner-name">Gobierno de El Salvador</span><span class="partner-link">Sitio oficial <b>↗</b></span>
        </a>
      </div>
      <div class="partners-message"><span></span><p>Trabajando juntos por el desarrollo del ciclismo salvadoreño.</p></div>
    </div>
  </section>`;

  const sponsors = document.createElement('section');
  sponsors.className = 'sponsors-section';
  sponsors.setAttribute('aria-labelledby', 'sponsors-title');
  sponsors.innerHTML = `
    <div class="sponsors-inner">
      <div class="sponsors-copy">
        <p class="section-eyebrow">Patrocinadores</p>
        <h2 id="sponsors-title">Marcas que acompañan nuestro camino</h2>
        <p>Un espacio independiente para reconocer a las marcas que respaldan actividades, atletas y proyectos vinculados al ciclismo nacional.</p>
      </div>
      <article class="sponsor-card">
        <div class="sponsor-brand" aria-label="Gatorade El Salvador"><span class="gatorade-bolt">G</span><strong>GATORADE</strong><small>EL SALVADOR</small></div>
        <div class="sponsor-info"><span class="sponsor-type">Patrocinador</span><h3>Gatorade El Salvador</h3><p>Presencia institucional de patrocinio en el prototipo. La relación y alcance deberán validarse con información oficial antes de producción.</p><div class="sponsor-links"><a href="https://www.facebook.com/GatoradeElSalvador/?locale=es_LA" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://www.instagram.com/gatoradesv/?hl=es" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></div>
      </article>
    </div>
  </section>`;

  oldImpact.replaceWith(impact);
  if (oldPartners) oldPartners.remove();
  impact.insertAdjacentElement('afterend', partners);
  partners.insertAdjacentElement('afterend', sponsors);
})();
