document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.getElementById("btn-open-invitation");
  const audioMusic = document.getElementById("bg-music");
  const btnMusicToggle = document.getElementById("btn-music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const floatingNavbar = document.getElementById("floating-navbar");
  const mainContent = document.getElementById("main-content");
  const targetSection = document.getElementById("quote");
  const formRsvp = document.getElementById("form-rsvp");
  const ucapanList = document.getElementById("ucapan-list");

  let isPlaying = false;

  // 1. Klik Buka Undangan
  if (btnOpen) {
    btnOpen.addEventListener("click", function () {
      document.body.classList.remove("is-locked");

      if (floatingNavbar) floatingNavbar.classList.remove("hidden");
      if (btnMusicToggle) btnMusicToggle.classList.remove("hidden");

      // Play Audio
      if (audioMusic) {
        audioMusic.play().then(() => {
          isPlaying = true;
        }).catch(err => console.log("Autoplay diblokir browser:", err));
      }

      // Smooth Scroll ke konten pertama
      if (window.innerWidth >= 992) {
        // Pada layar Laptop (scroll di dalam div .main-content)
        mainContent.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        // Pada layar HP
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 2. Play / Pause Music Toggle
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

  // 3. Submit Form RSVP & Ucapan
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
