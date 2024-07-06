'use strict';

// Element selection
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// This will return the first element with the class name
// const showModalBtn = document.querySelector('.show-modal');
// This will return all elements with the class name in a NodeList
const showModalBtns = document.querySelectorAll('.show-modal');
// As If we targeted each button individually
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
