const nav=document.querySelector('[data-nav]');
const toggle=document.querySelector('[data-nav-toggle]');
const links=document.querySelector('[data-nav-links]');window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>12));
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');
toggle.setAttribute('aria-expanded',String(open));});
links.addEventListener('click',()=>{nav.classList.remove('open');
toggle.setAttribute('aria-expanded','false');});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counters=document.querySelectorAll('[data-counter]');
const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;
const el=entry.target;
const target=Number(el.dataset.counter);let current=0;
const step=Math.max(1,Math.ceil(target/42));
const tick=()=>{current=Math.min(target,current+step);el.textContent=current;if(current<target)requestAnimationFrame(tick);};tick();counterObserver.unobserve(el);});},{threshold:.7});counters.forEach(counter=>counterObserver.observe(counter));

