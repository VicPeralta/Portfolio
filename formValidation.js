/*
  formValidation.js
  25/January/2022
*/

const formCtrl = document.getElementById('form');
const nameCtrl = document.getElementById('name');
const emailCtrl = document.getElementById('email');
const errorCtrl = document.getElementById('error');
const commentsCtrl = document.getElementById('comment');

emailCtrl.addEventListener('input', () => {
  if (emailCtrl.validity.valid) {
    errorCtrl.textContent = ''; // Reset the content of the message
  }
});

formCtrl.addEventListener('submit', (e) => {
  if (!nameCtrl.checkValidity()) {
    nameCtrl.reportValidity();
    e.preventDefault();
    return;
  }
  if (!commentsCtrl.checkValidity()) {
    commentsCtrl.reportValidity();
    e.preventDefault();
    return;
  }
  const email = emailCtrl.value;
  const regex = /([A-Z])/g;
  if (email.search(regex) !== -1) {
    emailCtrl.setCustomValidity('Not good');
    emailCtrl.reportValidity();
    errorCtrl.textContent = 'Expecting lowercase letters';
    emailCtrl.setCustomValidity('');
    e.preventDefault();
    return;
  }
  // Check if is a valid email address
  const regEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/g;
  if (email.search(regEmail) === -1) {
    errorCtrl.textContent = 'Expecting a valid email address';
    e.preventDefault();
  }
});