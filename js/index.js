// Your code goes here
//load window message
window.addEventListener('load', (event) => {
    console.log('Welcome aboard the Fun Bus!');
  });

// resize window message
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

// makes images disappear when dblclicked
const imgs = document.querySelectorAll('img');
imgs.forEach(i => i.addEventListener('dblclick', hide));
function hide(event){
    event.target.classList.add('off');
    event.stopPropagation();
}

// change mouse cursor on hover
imgs.forEach(i => i.addEventListener('mouseover', changeCursor));
    function changeCursor(event) {
    event.target.style.cursor="wait";
 }

// drag & drop
const element = document.getElementById("div");
const section = document.getElementById("section");
element.draggable="true";
section.ondrop="drop_handler(event)";
section.ondragover="dragover_handler(event)";

  window.addEventListener('DOMContentLoaded', () => {
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });

  function dragstart_handler(event) {
    // Add the target element's id to the data transfer object
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.dropEffect = "copy";
    // event.dataTransfer.setData("application/my-app", event.target.id);
    // event.dataTransfer.effectAllowed = "move";
  }

  function dragover_handler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
   }

   function drop_handler(event) {
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = event.dataTransfer.getData("text/plain");
    // const data = event.dataTransfer.getData("application/my-app");
    event.target.appendChild(document.getElementById(data));
   }

   //greensock try??
   gsap.to("img.intro", {duration:2, x:300, backgroundColor: "#560563"});



   