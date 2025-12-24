document.addEventListener('DOMContentLoaded', () => {

/* ================= SPLASH SCREEN ================= */
const splash = document.getElementById('splash');

if (splash) {
  setTimeout(() => {
    splash.classList.add('hide');
  }, 1600); // durasi splash (ms)
}


  /* ================= NAV MOBILE ================= */
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  /* ================= JOIN FORM → WHATSAPP ================= */
  const form = document.getElementById('joinForm');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const jurusan = document.getElementById('jurusan').value.trim();
      const angkatan = document.getElementById('angkatan').value.trim();

      if (!nama || !jurusan || !angkatan) return;

      const msg = `Halo Admin Raharja FC
Saya mau join.

Nama: ${nama}
Jurusan: ${jurusan}
Angkatan: ${angkatan}`;

      window.open(
        `https://wa.me/6285117440835?text=${encodeURIComponent(msg)}`,
        '_blank'
      );
    });
  }

  /* ================= PLAYER CARD (CLICK / TAP) ================= */
  document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  /* ================= REVEAL & JADWAL ANIMATION ================= */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .match-league').forEach(el => {
    observer.observe(el);
  });

  /* ================= COUNTDOWN MATCH ================= */
  const countdownCards = document.querySelectorAll('.match-league[data-date]');

  function updateCountdown() {
    const now = Date.now();

    countdownCards.forEach(card => {
      const target = new Date(card.dataset.date).getTime();
      const diff = target - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      card.querySelector('.day').textContent = String(days).padStart(2, '0');
      card.querySelector('.hour').textContent = String(hours).padStart(2, '0');
      card.querySelector('.minute').textContent = String(minutes).padStart(2, '0');
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);

  /* ================= BACK TO TOP ================= */
  const toTop = document.getElementById('toTop');

  window.addEventListener('scroll', () => {
    if (!toTop) return;
    if (window.scrollY > 300) toTop.classList.add('show');
    else toTop.classList.remove('show');
  });

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});

/* HERO PARALLAX */
const heroBg = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (!heroBg) return;
  heroBg.style.setProperty(
    '--scroll',
    window.scrollY * 0.2 + 'px'
  );
});

// const cards = document.querySelectorAll('.player-card');
// const modal = document.getElementById('playerModal');

// const modalImg  = document.getElementById('modalImg');
// const modalName = document.getElementById('modalName');
// const modalMajor= document.getElementById('modalMajor');
// const modalRole = document.getElementById('modalRole');
// const modalAge  = document.getElementById('modalAge');

// cards.forEach(card=>{
//   card.addEventListener('click',()=>{
//     modalImg.src   = card.dataset.img;
//     modalName.textContent  = card.dataset.name;
//     modalMajor.textContent = card.dataset.major;
//     modalRole.textContent  = card.dataset.role;
//     modalAge.textContent   = card.dataset.age;

//     modal.classList.add('active');
//   });
// });

// modal.addEventListener('click',e=>{
//   if(e.target.classList.contains('player-modal') || e.target.classList.contains('close-modal')){
//     modal.classList.remove('active');
//   }
// });
