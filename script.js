// Seleziona gli elementi
const burgerMenu = document.getElementById('burger');
const navbar = document.getElementById('navbar');

// Aggiungi un evento di clic al menu hamburger
burgerMenu.addEventListener('click', () => {
  // Cambia il display della navbar
  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'flex'; // Mostra la navbar
  } else {
    navbar.style.display = 'none'; // Nascondi la navbar
  }
});