const body = document.body;
const buttons = document.querySelectorAll('.lang-btn');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const setLanguage = (lang) => {
  body.setAttribute('data-lang', lang);
  buttons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  localStorage.setItem('digo-lang', lang);
};

const savedLang = localStorage.getItem('digo-lang') || 'vi';
setLanguage(savedLang);

buttons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
