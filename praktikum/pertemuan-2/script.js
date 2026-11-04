// Tahun otomatis di footer
const footerText = document.querySelector('footer p');
if (footerText) {
  footerText.innerHTML = `&copy; ${new Date().getFullYear()} Nadhiya Auliyah Ramadhani. All rights reserved.`;
}

// Tandai menu yang aktif saat halaman digulir
const links = document.querySelectorAll('nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

function setActive() {
  let current = 0;
  sections.forEach((s, i) => {
    if (s && s.getBoundingClientRect().top <= 120) current = i;
  });
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}

window.addEventListener('scroll', setActive);
setActive();
