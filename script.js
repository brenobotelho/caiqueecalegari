const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30),{passive:true});
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();alert('Formulário demonstrativo. Configure o envio no script.js para conectar ao e-mail, WhatsApp ou backend.');});

const carousel=document.getElementById('heroCarousel');
if(carousel){
  const slides=[...carousel.querySelectorAll('.hero-slide')];
  const section=carousel.closest('.hero');
  const count=section.querySelector('.hero-count');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let current=0;
  let timer;

  const showSlide=index=>{
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      const active=i===current;
      slide.classList.toggle('is-active',active);
      slide.setAttribute('aria-hidden',String(!active));
    });
    count.textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  };
  const stop=()=>{if(timer){window.clearInterval(timer);timer=undefined}};
  const start=()=>{
    stop();
    if(!reducedMotion.matches && !document.hidden && slides.length>1){
      timer=window.setInterval(()=>showSlide(current+1),5500);
    }
  };
  section.querySelector('[data-hero-prev]').addEventListener('click',()=>{showSlide(current-1);start()});
  section.querySelector('[data-hero-next]').addEventListener('click',()=>{showSlide(current+1);start()});
  section.addEventListener('mouseenter',stop);
  section.addEventListener('mouseleave',start);
  section.addEventListener('focusin',stop);
  section.addEventListener('focusout',event=>{if(!section.contains(event.relatedTarget))start()});
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  reducedMotion.addEventListener('change',start);
  section.classList.add('carousel-ready');
  start();
}
