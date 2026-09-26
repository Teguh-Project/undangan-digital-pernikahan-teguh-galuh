document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.getElementById("btn-open-invitation");
  const audioMusic = document.getElementById("bg-music");
  const btnMusicToggle = document.getElementById("btn-music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const floatingNavbar = document.getElementById("floating-navbar");
  const targetSection = document.getElementById("quote");
  const rsvpForm = document.getElementById("rsvp-form");
  const ucapanList = document.getElementById("ucapan-list");

  let isPlaying = false;

  // 1. Tombol Buka Undangan
  if (btnOpen) {
    btnOpen.addEventListener("click", function () {
      // Un-lock scroll
      document.body.classList.remove("is-locked");

      // Tampilkan Floating Navbar & Musik Button
      if (floatingNavbar) floatingNavbar.classList.remove("hidden");
      if (btnMusicToggle) btnMusicToggle.classList.remove("hidden");

      // Play Musik
      if (audioMusic) {
        audioMusic.play().then(() => {
          isPlaying = true;
        }).catch(err => console.log("Autoplay blocked:", err));
      }

      // Smooth Scroll ke konten pertama
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 2. Toggle Music (Stop / Play)
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
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("rsvp-name").value;
      const status = document.getElementById("rsvp-status").value;
      const message = document.getElementById("rsvp-message").value;

      const item = document.createElement("div");
      item.className = "ucapan-item";
      item.innerHTML = `
        <p class="ucapan-author">${name} - <small>(${status})</small></p>
        <p class="ucapan-text">${message}</p>
      `;

      ucapanList.prepend(item);
      rsvpForm.reset();
      alert("Terima kasih atas konfirmasi dan ucapan Anda!");
    });
  }
});

// 4. Salin Nomor Rekening
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor rekening berhasil disalin!");
  });
}
