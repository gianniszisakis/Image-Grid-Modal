'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonShowModal = document.querySelectorAll('.show-modal'); //querySelectorAll because we have the same class in multiple elements
const images = document.querySelectorAll('.image'); //select the class image of every image

//function to open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//open modal when click the image
for (let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener('click', function () {
    openModal();
  });
}

//get the image url that the user clicked and assign to the modal image
for (let j = 0; j < images.length; j++) {
  images[j].addEventListener('click', function () {
    document.getElementById('modal-image').src = images[j].src;
  });
}

//close modal when click the X button
buttonCloseModal.addEventListener('click', closeModal);

//close modal when click the overlay
overlay.addEventListener('click', closeModal);

//close modal when click the "escape" button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
