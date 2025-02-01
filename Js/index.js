
// Obtém a referência da navbar
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link'); // Seleciona todos os links da navbar

// Adiciona o evento de scroll
// window.addEventListener('scroll', () => {
//   // Verifica a posição do scroll
//   if (window.scrollY > 50) {
//     navbar.classList.add('bg-white', 'shadow'); // Adiciona cor e sombra
//     navbar.classList.remove('bg-transparent'); // Remove a cor transparente

//     // Altera a cor de todos os links
//     navLinks.forEach((link) => {
//       link.classList.add('text-dark');
//       link.classList.remove('text-white');
//     });
//   } else {
//     navbar.classList.add('bg-transparent'); // Retorna para transparente
//     navbar.classList.remove('bg-white', 'shadow'); // Remove cor e sombra

//     // Reverte a cor de todos os links
//     navLinks.forEach((link) => {
//       link.classList.add('text-white');
//       link.classList.remove('text-dark');
//     });
//   }
// });