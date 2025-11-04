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
