const photos = window.PHOTOS || [];
const locations = window.MEMORY_LOCATIONS || [];

window.addEventListener('load', () => setTimeout(() => document.getElementById('intro')?.classList.add('hide'), 1450));
const topbar=document.querySelector('.topbar'); window.addEventListener('scroll',()=>topbar.classList.toggle('scrolled',scrollY>35),{passive:true});
const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function weddingDiff(){return Math.max(0,new Date('2027-04-24T18:00:00+03:00')-new Date())}
function updateTimers(){
  let diff=weddingDiff(); const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=d;document.getElementById('hours').textContent=h;document.getElementById('minutes').textContent=m;document.getElementById('seconds').textContent=s;
  document.getElementById('hero-countdown').innerHTML=`<div><b>${d}</b><span>GÜN</span></div><div><b>${h}</b><span>SAAT</span></div><div><b>${m}</b><span>DAKİKA</span></div><div><b>${s}</b><span>SANİYE</span></div>`;
  let t=Math.max(0,Date.now()-new Date('2024-05-12T00:00:00+03:00').getTime()); const td=Math.floor(t/86400000),th=Math.floor(t%86400000/3600000),tm=Math.floor(t%3600000/60000),ts=Math.floor(t%60000/1000);
  document.getElementById('together').innerHTML=`<b>${td}</b> gün, <b>${th}</b> saat, <b>${tm}</b> dakika, <b>${ts}</b> saniyedir birlikteyiz.`;
}
updateTimers();setInterval(updateTimers,1000);

document.getElementById('photo-total').textContent=photos.length;
let shown=0,current=0;const chunk=24,grid=document.getElementById('gallery-grid'),more=document.getElementById('load-more');
function renderMore(){photos.slice(shown,shown+chunk).forEach((src,i)=>{const index=shown+i,btn=document.createElement('button'),img=document.createElement('img');btn.className='gallery-item';btn.type='button';img.src=src;img.loading='lazy';img.alt=`Baran ve Kerime anısı ${index+1}`;img.onerror=()=>btn.remove();btn.appendChild(img);btn.addEventListener('click',()=>openLightbox(index));grid.appendChild(btn)});shown=Math.min(shown+chunk,photos.length);if(shown>=photos.length)more.style.display='none'}
more.addEventListener('click',renderMore);renderMore();
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightbox-img'),count=document.getElementById('photo-count');
function showPhoto(){lbImg.src=photos[current];count.textContent=`${current+1} / ${photos.length}`}
function openLightbox(i){current=i;showPhoto();lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLightbox(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('close-lightbox').addEventListener('click',closeLightbox);document.getElementById('prev-photo').addEventListener('click',()=>{current=(current-1+photos.length)%photos.length;showPhoto()});document.getElementById('next-photo').addEventListener('click',()=>{current=(current+1)%photos.length;showPhoto()});lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowRight'){current=(current+1)%photos.length;showPhoto()}if(e.key==='ArrowLeft'){current=(current-1+photos.length)%photos.length;showPhoto()}});

const music=document.getElementById('music'),musicBtn=document.getElementById('music-btn');musicBtn.addEventListener('click',async()=>{if(music.paused){try{await music.play();musicBtn.classList.add('playing');musicBtn.textContent='❚❚';musicBtn.title='Müziği durdur'}catch{alert('Müziği başlatmak için butona tekrar dokun.')}}else{music.pause();musicBtn.classList.remove('playing');musicBtn.textContent='♫';musicBtn.title='Müziği aç'}});

if(window.L&&locations.length){const mapEl=document.getElementById('map');mapEl.innerHTML='';const map=L.map('map',{scrollWheelZoom:false}).setView([locations[0].lat,locations[0].lng],13);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);const icon=L.divIcon({html:'<div class="heart-marker">♥</div>',className:'',iconSize:[32,32],iconAnchor:[16,28]});const bounds=[],list=document.getElementById('place-list');locations.forEach(p=>{const marker=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(`<b>${p.title}</b><br>${p.date}<br>${p.text}`);bounds.push([p.lat,p.lng]);const card=document.createElement('article');card.className='place-card';card.innerHTML=`<small>${p.date}</small><h3>${p.title}</h3><p>${p.text}</p>`;card.addEventListener('click',()=>{map.setView([p.lat,p.lng],15);marker.openPopup()});list.appendChild(card)});if(bounds.length>1)map.fitBounds(bounds,{padding:[45,45]})}else{document.getElementById('map').innerHTML='<div class="map-loading">Harita bağlantısı kurulamadı.</div>'}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
