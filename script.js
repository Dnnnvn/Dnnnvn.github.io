document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;
  const bgVideo = document.getElementById('bgVideo');
  const bgAltVideo = document.getElementById('bgAltVideo');

  const iconImages = ["img/tema.png", "img/tema2.png"];

  let currentTheme = localStorage.getItem('theme') || 'default';
  let currentIconIndex = parseInt(localStorage.getItem("themeIconIndex")) || 0;

  function applyTheme(theme, iconIndex) {
    if (theme === 'purple') {
      body.classList.add('purple-theme');
      bgVideo.style.display = 'none';
      bgAltVideo.style.display = 'block';
    } else {
      body.classList.remove('purple-theme');
      bgVideo.style.display = 'block';
      bgAltVideo.style.display = 'none';
    }

    themeIcon.src = iconImages[iconIndex];

    localStorage.setItem('theme', theme);
    localStorage.setItem('themeIconIndex', iconIndex);
  }

  applyTheme(currentTheme, currentIconIndex);

  toggleBtn.addEventListener('click', function () {

    currentTheme = body.classList.contains('purple-theme') ? 'default' : 'purple';
    currentIconIndex = (currentIconIndex + 1) % iconImages.length;

    applyTheme(currentTheme, currentIconIndex);
  });
});

