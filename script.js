document.addEventListener("DOMContentLoaded", function () {
  const tombolBuka = document.querySelector('.btn-open');
  const targetSection = document.getElementById('buka');
  const videoElem = document.getElementById('wedding-video');

  if (tombolBuka) {
    tombolBuka.addEventListener('click', function (e) {
      e.preventDefault();

      // 1. Buka kuncian scroll pada Body
      document.body.classList.remove('is-locked');

      // 2. Putar Video & Aktifkan Suara
      if (videoElem) {
        videoElem.muted = false;
        videoElem.play().catch(function (error) {
          console.log("Autoplay dengan suara butuh interaksi pengguna tambahan:", error);
        });
      }

      // 3. Scroll Halus (Smooth Scroll) ke Section #buka di Bawahnya
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
