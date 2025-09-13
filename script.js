/* script.js — slider, hamburger, whatsapp, testimonies, QA toggle */

document.addEventListener('DOMContentLoaded', ()=> {
  /* HERO SLIDER */
  const slider = document.getElementById('heroSlider');
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  let current = 0;
  const total = slides.length;
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  function showSlide(idx){
    slider.style.transform = `translateX(-${idx * 100}%)`;
  }
  function next(){
    current = (current + 1) % total;
    showSlide(current);
  }
  function prev(){
    current = (current - 1 + total) % total;
    showSlide(current);
  }
  let heroInterval = setInterval(next, 5000);
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ next(); resetInterval(); });
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ prev(); resetInterval(); });

  function resetInterval(){
    clearInterval(heroInterval);
    heroInterval = setInterval(next, 5000);
  }

  /* SCROLL BUTTONS IN HERO */
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const sel = e.currentTarget.getAttribute('data-scroll');
      const el = document.querySelector(sel);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  /* HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navList  = document.getElementById('navList');

  // Évite les doublons et cible exactement votre <ul id="navList">
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }
});


// --- script.js ---

// 1️⃣ Mets ici ton numéro complet sans espaces ni "+" (ex : 221771234567)
const whatsappNumber = '221XXXXXXXX';

// 2️⃣ Fonction pour ouvrir WhatsApp avec un message
function openWhatsAppWith(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  // Redirection directe : fonctionne sur mobile et ouvre WhatsApp Web / Desktop
  window.location.href = url;
}

// 3️⃣ Attacher l'évènement sur tous les boutons ayant la classe .btn-choose
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-choose').forEach(btn => {
    btn.addEventListener('click', e => {
      const country = e.currentTarget.dataset.country || 'un pays';
      openWhatsAppWith(
        `Bonjour, je souhaite démarrer une procédure pour ${country}.`
      );
    });
  });
});


  
// Numéro WhatsApp (format international, sans + ou espaces)
const whatsappNumber = '221XXXXXXXX'; // remplace avec ton numéro
// Fonction pour ouvrir WhatsApp
function openWhatsAppWith(message) {
  const text = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile : ouvre l'app WhatsApp directement
    window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;
  } else {
    // PC : essaie Desktop d'abord
    const desktopUrl = `whatsapp://send?phone=${whatsappNumber}&text=${text}`;
    const webUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
    
    // Crée un iframe pour tenter d'ouvrir Desktop
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = desktopUrl;
    document.body.appendChild(iframe);
  }
}

// Sélectionne tous les boutons WhatsApp sur la page
document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', () => {
    const country = btn.getAttribute('data-country') || 'votre pays';
    openWhatsAppWith(`Bonjour, je souhaite commencer ma procédure pour ${country}.`);
  });
});


  
  /* TESTIMONIALS — auto rotate */
  const testiSlides = Array.from(document.querySelectorAll('.testi-slide'));
  let testiIdx = 0;
  if(testiSlides.length){
    setInterval(()=>{
      testiSlides.forEach(s=> s.classList.remove('active'));
      testiSlides[testiIdx].classList.add('active');
      testiIdx = (testiIdx + 1) % testiSlides.length;
    }, 5000);
  }

  /* QA Toggle (Why section) */
  document.querySelectorAll('.qa-q').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const parent = e.currentTarget.parentElement;
      const answer = parent.querySelector('.qa-a');
      const opened = answer.style.display === 'block';
      // close all
      document.querySelectorAll('.qa-a').forEach(a=> a.style.display = 'none');
      if(!opened) answer.style.display = 'block';
    });
  });

  /* small: close mobile nav when clicking a link */
  document.querySelectorAll('.nav-list a').forEach(a=>{
    a.addEventListener('click', ()=> {
      document.querySelector('.nav-list').classList.remove('open');
    });
  });

});



