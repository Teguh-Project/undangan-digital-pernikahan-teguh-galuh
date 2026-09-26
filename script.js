document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.getElementById("btn-open-invitation");
  const audioMusic = document.getElementById("bg-music");
  const btnMusicToggle = document.getElementById("btn-music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const floatingNavbar = document.getElementById("floating-navbar");
  const targetSection = document.getElementById("quote");
  const formRsvp = document.getElementById("form-rsvp");
  const ucapanList = document.getElementById("ucapan-list");

  let isPlaying = false;

  // 1. Klik Buka Undangan
  if (btnOpen) {
    btnOpen.addEventListener("click", function () {
      // Membuka kuncian scroll di body
      document.body.classList.remove("is-locked");

      // Menampilkan floating navbar & tombol musik
      if (floatingNavbar) floatingNavbar.classList.remove("hidden");
      if (btnMusicToggle) btnMusicToggle.classList.remove("hidden");

      // Memutar Musik otomatis
      if (audioMusic) {
        audioMusic.play().then(() => {
          isPlaying = true;
        }).catch(err => console.log("Autoplay diblokir browser:", err));
      }

      // Smooth scroll langsung ke isi undangan (Quote)
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 2. Play / Pause Toggle Musik
  if (btnMusicToggle) {
    btnMusicToggle.addEventListener("click", function () {
      if (isPlaying) {
        audioMusic.pause();
        musicIcon.classList.remove("fa-spin");
        isPlaying = false;
      } else {
        audioMusic.play();
        musicIcon.classList.add("fa-spin");
        isPlaying = true;
      }
    });
  }

  // 3. Form RSVP & Submit Ucapan
  if (formRsvp) {
    formRsvp.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("input-nama").value;
      const status = document.getElementById("input-status").value;
      const pesan = document.getElementById("input-pesan").value;

      const newUcapan = document.createElement("div");
      newUcapan.className = "ucapan-card";
      newUcapan.innerHTML = `
        <p class="ucapan-author">${nama} - <small>(${status})</small></p>
        <p class="ucapan-text">${pesan}</p>
      `;

      ucapanList.prepend(newUcapan);
      formRsvp.reset();
      alert("Terima kasih atas ucapan dan konfirmasinya!");
    });
  }
});

// 4. Salin No Rekening
function copyRekening(nomor) {
  navigator.clipboard.writeText(nomor).then(() => {
    alert("Nomor rekening berhasil disalin!");
  });
}
// 5. Lightbox / Modal Foto Gallery
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}
