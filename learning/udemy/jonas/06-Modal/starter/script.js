'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// function closing the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//function opening the modal
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function adding eventListener to all 3 buttons withe the same class
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// close modal uppon clicking x
btnCloseModal.addEventListener('click', closeModal);

// close modal uppon clicking on background(overlay)
overlay.addEventListener('click', closeModal);

//keybord event listener for esc button to close the modal
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
