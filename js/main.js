const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const nav=$('#nav');addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>40),{passive:true});
$('#bg').onclick=()=>$('#links').classList.toggle('o');
$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('o'));
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('v');io.unobserve(e.target);
 e.target.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n,s=c.dataset.s||'',t0=performance.now();
 (function f(t){const p=Math.min((t-t0)/1400,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(p>=1?s:'');p<1&&requestAnimationFrame(f)})(t0)})}),{threshold:.2});
$$('.rv,.rl').forEach(e=>io.observe(e));
// active link
const secs=$$('header,section[id]'),lk=$$('#links a');
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;lk.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id||(id==='book'&&a.getAttribute('href')==='#facilities')))}}),{rootMargin:'-45% 0px -50%'}).observe;
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;lk.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))}}),{rootMargin:'-45% 0px -50%'});
secs.forEach(s=>s.id&&so.observe(s));
// booking modal
const m=$('#m');let slot='';
$$('[data-book]').forEach(b=>b.onclick=e=>{e.preventDefault();m.classList.add('o')});
$('#mx').onclick=()=>m.classList.remove('o');m.onclick=e=>e.target===m&&m.classList.remove('o');
$('#dt').min=new Date().toISOString().slice(0,10);
$$('#sl button').forEach(b=>b.onclick=()=>{$$('#sl button').forEach(x=>x.classList.remove('on'));b.classList.add('on');slot=b.textContent});
$('#go').onclick=()=>{const t=`Hi Sporton! I'd like to book the turf. Name: ${$('#nm').value||'-'}, Date: ${$('#dt').value||'-'}, Slot: ${slot||'-'}`;
 window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank');m.classList.remove('o')};
// lightbox
const lb=$('#lb');$$('.g,[data-gal]').forEach(g=>g.onclick=()=>{const im=g.querySelector('img')||$('.g img');$('#lbi').src=im.src;lb.classList.add('o')});
lb.onclick=()=>lb.classList.remove('o');
addEventListener('keydown',e=>{if(e.key==='Escape'){m.classList.remove('o');lb.classList.remove('o')}});
// hero parallax
const sc=$('.hero-bg');
addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;sc.style.translate=`${x*-16}px ${y*-8}px`},{passive:true});