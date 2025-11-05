// Botão hambúrguer
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    menu.classList.remove('active');
  });
});

// ===============================
// EFEITO DE ENTRADA SUAVE AO ROLAR
// ===============================
const sections = document.querySelectorAll('.fade-section');

function aparecerAoRolar() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', aparecerAoRolar);
aparecerAoRolar(); // Chama uma vez ao carregar
