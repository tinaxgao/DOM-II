// Your code goes here
const navLinks = document.querySelectorAll('nav > a');
navLinks.forEach(i => i.addEventListener('mouseover', (event) => {event.target.style.color='red'}));
