function makeScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('makeNotScrollable');
  body.classList.add('makeScrollable');
}

function makeNotScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('makeScrollable');
  body.classList.add('makeNotScrollable');
}

function closeMenu() {
  const menu = document.querySelector('.menu-options');
  menu.classList.remove('visible');
  menu.classList.add('invisible');
  makeScrollable();
}

const optionsBtn = document.querySelector('.hamburger-button');
optionsBtn.addEventListener('click', () => {
  const menu = document.querySelector('.menu-options');
  menu.classList.remove('invisible');
  menu.classList.add('visible');
  makeNotScrollable();
});

const closeOption = document.querySelector('#close-btn');
closeOption.addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.menu-options ul li a')) {
    const menu = document.querySelector('.menu-options');
    menu.classList.remove('visible');
    menu.classList.add('invisible');
    makeScrollable();
  }
});
