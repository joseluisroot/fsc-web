const brandingLinks=[
  ['icon','favicon.svg','image/svg+xml'],
  ['icon','favicon-32x32.png','image/png','32x32'],
  ['icon','favicon-16x16.png','image/png','16x16'],
  ['apple-touch-icon','apple-touch-icon.png','image/png','180x180'],
  ['manifest','site.webmanifest']
];
brandingLinks.forEach(([rel,href,type,sizes])=>{if(document.head.querySelector(`link[rel="${rel}"][href="${href}"]`))return;const link=document.createElement('link');link.rel=rel;link.href=href;if(type)link.type=type;if(sizes)link.sizes=sizes;document.head.appendChild(link);});
if(!document.head.querySelector('meta[name="theme-color"]')){const theme=document.createElement('meta');theme.name='theme-color';theme.content='#0b294d';document.head.appendChild(theme);}
if(!document.head.querySelector('meta[name="application-name"]')){const appName=document.createElement('meta');appName.name='application-name';appName.content='FSC';document.head.appendChild(appName);}
if(!document.head.querySelector('meta[name="apple-mobile-web-app-title"]')){const appleName=document.createElement('meta');appleName.name='apple-mobile-web-app-title';appleName.content='FSC';document.head.appendChild(appleName);}

// Brand icons used for FSC and sponsor social-media links.
if(!document.head.querySelector('link[data-fsc-icons]')){
  const iconsCss=document.createElement('link');
  iconsCss.rel='stylesheet';
  iconsCss.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
  iconsCss.referrerPolicy='no-referrer';
  iconsCss.dataset.fscIcons='font-awesome';
  document.head.appendChild(iconsCss);
}

const btn=document.getElementById('menuBtn');const menu=document.getElementById('mobileMenu');btn?.addEventListener('click',()=>{const hidden=menu.classList.toggle('hidden');btn.setAttribute('aria-expanded',String(!hidden));});menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.add('hidden');btn?.setAttribute('aria-expanded','false');}));const slider=document.getElementById('hero');const slides=[...document.querySelectorAll('.hero-slide')];const dots=[...document.querySelectorAll('.hero-dot')];const count=document.getElementById('heroCount');const prev=document.getElementById('heroPrev');const next=document.getElementById('heroNext');let current=0;let timer=null;const interval=7000;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{const active=i===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));});dots.forEach((dot,i)=>{const active=i===current;dot.classList.toggle('is-active',active);active?dot.setAttribute('aria-current','true'):dot.removeAttribute('aria-current');});if(count)count.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');}function stopAuto(){if(timer){clearInterval(timer);timer=null;}}function startAuto(){if(reduceMotion||slides.length<2)return;stopAuto();timer=setInterval(()=>showSlide(current+1),interval);}prev?.addEventListener('click',()=>{showSlide(current-1);startAuto();});next?.addEventListener('click',()=>{showSlide(current+1);startAuto();});dots.forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);startAuto();}));slider?.addEventListener('mouseenter',stopAuto);slider?.addEventListener('mouseleave',startAuto);slider?.addEventListener('focusin',stopAuto);slider?.addEventListener('focusout',startAuto);document.addEventListener('visibilitychange',()=>document.hidden?stopAuto():startAuto());document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){showSlide(current-1);startAuto();}if(e.key==='ArrowRight'){showSlide(current+1);startAuto();}});showSlide(0);startAuto();

const homeSectionsCss=document.createElement('link');homeSectionsCss.rel='stylesheet';homeSectionsCss.href='assets/css/home-sections.css';document.head.appendChild(homeSectionsCss);
const federationActionCss=document.createElement('link');federationActionCss.rel='stylesheet';federationActionCss.href='assets/css/federation-action.css';document.head.appendChild(federationActionCss);
const servicesSectionCss=document.createElement('link');servicesSectionCss.rel='stylesheet';servicesSectionCss.href='assets/css/services-section.css';document.head.appendChild(servicesSectionCss);
import('./search-icon.js')
  .then(()=>import('./social-links.js'))
  .then(()=>import('./newsletter-icon.js'))
  .then(()=>import('./home-sections.js'))
  .then(()=>import('./government-logo.js'))
  .then(()=>import('./federation-action.js'))
  .then(()=>import('./services-section.js'))
  .catch(error=>console.error('FSC home enhancements:',error));
