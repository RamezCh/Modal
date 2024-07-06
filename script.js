'use strict';

// Element selection
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// This will return the first element with the class name
// const showModalBtn = document.querySelector('.show-modal');

// This will return all elements with the class name in a NodeList
const showModalBtns = document.querySelectorAll('.show-modal');

// Open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// As If we targeted each button individually
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', openModal);
}

// If you write closeModal() it will immediately call the function
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal with escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
