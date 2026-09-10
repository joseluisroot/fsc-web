(() => {
  const federation = document.getElementById('federacion');
  if (!federation) return;

  federation.className = 'federation-action';
  federation.setAttribute('aria-labelledby', 'federation-action-title');
  federation.innerHTML = `
    <div class="federation-action-inner">
      <div class="federation-action-head">
        <div>
          <p class="federation-action-kicker">Federación en acción</p>
          <h2 id="federation-action-title">Gestión que se convierte en oportunidades.</h2>
          <p class="federation-action-lead">Conoce cómo la Federación articula formación, planificación, desarrollo deportivo y representación para fortalecer el ciclismo salvadoreño.</p>
        </div>
        <a class="federation-action-all" href="#noticias">Ver más acciones <span>→</span></a>
      </div>

      <div class="federation-action-grid">
        <article class="federation-feature">
          <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1400&q=85" alt="Jornada de formación y desarrollo deportivo" loading="lazy">
          <div class="federation-feature-overlay"></div>
          <div class="federation-feature-copy">
            <span class="action-badge">Formación y desarrollo</span>
            <h3>Más conocimiento para quienes hacen crecer nuestro ciclismo.</h3>
            <p>Capacitaciones, actualización técnica y espacios de aprendizaje dirigidos a entrenadores, comisarios, dirigentes y actores de nuestra comunidad deportiva.</p>
            <a class="action-link" href="#">Conocer iniciativa <span>→</span></a>
          </div>
        </article>

        <div class="federation-side">
          <a class="federation-mini" href="#eventos">
            <span class="federation-mini-media"><img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=700&q=80" alt="Planificación y coordinación institucional" loading="lazy"></span>
            <span class="federation-mini-copy"><span class="federation-mini-tag">Gestión</span><h3>Planificación del calendario deportivo</h3><p>Coordinación de fechas, disciplinas y procesos para una agenda nacional más organizada.</p><span class="federation-mini-more">Conocer más →</span></span>
          </a>

          <a class="federation-mini" href="#disciplinas">
            <span class="federation-mini-media"><img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80" alt="Desarrollo de jóvenes atletas" loading="lazy"></span>
            <span class="federation-mini-copy"><span class="federation-mini-tag">Desarrollo deportivo</span><h3>Nuevas generaciones sobre ruedas</h3><p>Iniciativas orientadas al crecimiento, participación y proyección de atletas en las distintas modalidades.</p><span class="federation-mini-more">Conocer más →</span></span>
          </a>

          <a class="federation-mini" href="#">
            <span class="federation-mini-media"><img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80" alt="Representación deportiva en competencia" loading="lazy"></span>
            <span class="federation-mini-copy"><span class="federation-mini-tag">Representación</span><h3>El Salvador presente en cada escenario</h3><p>Procesos de representación, acompañamiento y proyección del ciclismo salvadoreño dentro y fuera del país.</p><span class="federation-mini-more">Conocer más →</span></span>
          </a>
        </div>
      </div>
      <p class="federation-action-note">Contenido demostrativo del prototipo. Las acciones, cifras y publicaciones serán sustituidas por información oficial de la FSC.</p>
    </div>`;

  const sponsorBrand = document.querySelector('.sponsor-brand');
  if (sponsorBrand) {
    sponsorBrand.innerHTML = '<img src="assets/images/partners/gatorade-el-salvador.webp" alt="Gatorade El Salvador" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block">';
    sponsorBrand.style.padding = '0';
    sponsorBrand.style.overflow = 'hidden';
  }
})();
