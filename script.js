document.addEventListener("DOMContentLoaded", function () {
  const tombolBuka = document.querySelector('.btn-open');
  const targetSection = document.getElementById('buka');
  const audioMusic = document.getElementById('bg-music');

  if (tombolBuka) {
    tombolBuka.addEventListener('click', function (e) {
      e.preventDefault();

      // 1. Membuka kuncian scroll pada body
      document.body.classList.remove('is-locked');

      // 2. Memutar musik latar otomatis saat diklik
      if (audioMusic) {
        audioMusic.play().catch(function (error) {
          console.log("Autoplay musik diblokir oleh sistem browser:", error);
        });
      }

      // 3. Scroll halus ke section konten di bawah
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
