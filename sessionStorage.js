/*
  Detecting storage function provided by MDN
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  Returns true is there is storage available to use
*/
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 // Firefox
      || e.code === 1014 // test name field too, because code might not be present
      // everything except Firefox
      || e.name === 'QuotaExceededError' // Firefox
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')// acknowledge QuotaExceededError only if there's something already stored
      && (storage && storage.length !== 0);
  }
}

const isLocalStorageAvilable = storageAvailable('localStorage');

let formData = { name: '', email: '', comments: '' };
function saveToLocalStorage(key, value) {
  formData[key] = value;
  if (isLocalStorageAvilable) {
    localStorage.setItem('formData', JSON.stringify(formData));
  }
}

function getValueFromStorage(key) {
  if (isLocalStorageAvilable) {
    const data = localStorage.getItem('formData');
    if (data) {
      formData = JSON.parse(data);
      return formData[key];
    }
  }
  return '';
}

window.addEventListener('load', () => {
  document.getElementById('name').value = getValueFromStorage('nameFormData');
  document.getElementById('email').value = getValueFromStorage('emailFormData');
  document.getElementById('comment').value = getValueFromStorage('commentsFormData');
});

document.getElementById('name').addEventListener('change', (e) => {
  saveToLocalStorage('nameFormData', e.target.value);
});
document.getElementById('email').addEventListener('change', (e) => {
  saveToLocalStorage('emailFormData', e.target.value);
});
document.getElementById('comment').addEventListener('change', (e) => {
  saveToLocalStorage('commentsFormData', e.target.value);
});