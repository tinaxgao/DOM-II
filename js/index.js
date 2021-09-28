// Your code goes here
//load and resize window
window.addEventListener('load', (event) => {
    console.log('Welcome aboard the Fun Bus!');
  });

window.addEventListener('resize', (event) => {
    console.log('Changing the window size');
  });

// change links colors on mouseover
const navLinks = document.querySelectorAll('nav > a');
navLinks.forEach(i => i.addEventListener('mouseover', (event) => {event.target.style.color='red'}));

// pop up modal on scroll
const modal = document.querySelector('.modal')
function signUp(event) {
    modal.classList.remove('off');
}
window.addEventListener('scroll', signUp);

// close modal on click
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');
function closeModal(event){
    modal.classList.add('off');
}
confirmButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);


// const text = document.querySelectorAll('p');
// text.forEach(i => i.addEventListener('select', alert));
// function alert(event){
//     console.log('copy this text');
// }

