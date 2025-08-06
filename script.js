document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'purple') {
    body.classList.add('purple-theme');
  }

  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('purple-theme');
    
    const theme = body.classList.contains('purple-theme') ? 'purple' : 'default';
    localStorage.setItem('theme', theme);
    
    const bgVideo = document.getElementById('bgVideo');
    const bgAltVideo = document.getElementById('bgAltVideo');
    
    if (theme === 'purple') {
      bgVideo.style.display = 'none';
      bgAltVideo.style.display = 'block';
    } else {
      bgVideo.style.display = 'block';
      bgAltVideo.style.display = 'none';
    }
  });

  const bgVideo = document.getElementById('bgVideo');
  const bgAltVideo = document.getElementById('bgAltVideo');
  
  if (body.classList.contains('purple-theme')) {
    bgVideo.style.display = 'none';
    bgAltVideo.style.display = 'block';
  } else {
    bgVideo.style.display = 'block';
    bgAltVideo.style.display = 'none';
  }

 const iconImages = [
    "img/tema.png",
    "img/tema2.png"

  ];

  const themeIcon = document.getElementById("themeIcon");
  const themeToggleBtn = document.getElementById("themeToggle");

  let currentIconIndex = parseInt(localStorage.getItem("themeIconIndex")) || 0;

  themeIcon.src = iconImages[currentIconIndex];

  themeToggleBtn.addEventListener("click", () => {
    currentIconIndex = (currentIconIndex + 1) % iconImages.length;

    themeIcon.src = iconImages[currentIconIndex];

    localStorage.setItem("themeIconIndex", currentIconIndex);
  });

  const bgVideo = document.getElementById('bgVideo');
  const placeholderBg = document.getElementById('placeholderBg');
  const htmlTag = document.documentElement;

  bgVideo.addEventListener('loadeddata', () => {
    if (!htmlTag.classList.contains('purple-theme')) {
      placeholderBg.style.opacity = '0';
      setTimeout(() => {
        placeholderBg.style.display = 'none';
      }, 1000); 
    }
  });
  
});
