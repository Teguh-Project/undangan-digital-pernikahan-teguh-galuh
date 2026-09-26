document.addEventListener("DOMContentLoaded", function () {
  // Tangkap tombol Open Invitation dan Target Section
  var tombolBuka = document.getElementById('tombol-buka') || document.querySelector('a[href="#buka"]');
  var targetSection = document.getElementById('buka');

  if (tombolBuka) {
    tombolBuka.addEventListener('click', function (e) {
      e.preventDefault();

      // Buka kunci scroll pada body
      document.body.style.position = 'static';
      document.body.style.overflow = 'auto';
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';

      // Jalankan audio/video jika ada
      var mediaElem = document.querySelector('#buka video, #buka audio');
      if (mediaElem) {
        mediaElem.muted = false;
        mediaElem.play().catch(function (err) {
          console.log("Autoplay dicegat browser:", err);
        });
      }

      // Scroll halus ke section di bawahnya (#buka)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback jika id #buka berada di elemen lain
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    });
  }
});
