// 1. Fitur Proteksi (Bawaan)
document.ondragstart = function() {
  return false;
};

function nocontext(e) {
  return false;
}
document.oncontextmenu = nocontext;

// 2. Logika Utama Tombol Buka Undangan
document.addEventListener("DOMContentLoaded", function() {
  // Set atribut unselectable pada body
  var bodyElem = document.body;
  if (bodyElem) {
    bodyElem.setAttribute('unselectable', "on");
  }

  // Cari tombol buka undangan
  var tombolBuka = document.getElementById('tombol-buka') || document.querySelector('a[href="#buka"]');
  var targetSection = document.getElementById('buka');

  if (tombolBuka) {
    tombolBuka.addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah loncatan URL bawaan tag <a>

      // A. Buka kunci scroll pada body
      bodyElem.style.position = 'static';
      bodyElem.style.overflowY = 'auto';
      bodyElem.style.height = 'auto';

      // B. Sembunyikan cover utama jika diperlukan (Opsional, tergantung efek bawaan)
      // var coverSection = document.getElementById('section-cover');
      // if (coverSection) { coverSection.style.display = 'none'; }

      // C. Hilangkan muted pada video & putar video secara otomatis saat diklik
      var videoElem = document.querySelector('#buka video');
      if (videoElem) {
        videoElem.muted = false;
        videoElem.play().catch(function(err) {
          console.log("Autoplay dengan suara dicegat browser:", err);
        });
      }

      // D. Smooth Scroll menuju section isi (#buka)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});
