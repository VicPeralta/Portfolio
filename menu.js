
function makeScrollable() {
  let body = document.querySelector('body');
  body.classList.remove('makeNotScrollable');
  body.classList.add('makeScrollable');
}

function makeNotScrollable() {
  let body = document.querySelector('body');
  body.classList.remove('makeScrollable');
  body.classList.add('makeNotScrollable');
}

function closeMenu() {
  let menu = document.querySelector('.menu-options');
  menu.classList.remove('visible');
  menu.classList.add('invisible');
  makeScrollable();
}

let optionsBtn = document.querySelector(".hamburger-button");
optionsBtn.addEventListener('click', e => {
  let menu = document.querySelector('.menu-options');
  menu.classList.remove('invisible');
  menu.classList.add('visible');
  makeNotScrollable();
});

let closeOption = document.querySelector("#close-btn");
closeOption.addEventListener('click', e => {
  closeMenu();
});

document.addEventListener('click', e => {
if (e.target.matches('.menu-options ul li a')) {
  let menu = document.querySelector('.menu-options');
  menu.classList.remove('visible');
  menu.classList.add('invisible');
  makeScrollable();
}});
