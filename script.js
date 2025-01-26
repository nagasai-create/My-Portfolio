function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const roles = [
  "Data Analyst",
  "Python Developer",
  "Power BI Expert",
  "Youtuber",
  "Content Creator",
  "Video Editor",
];
let currentRoleIndex = 0; // Keeps track of the current role
let charIndex = 0; // Keeps track of the current character being typed
const roleElement = document.getElementById("role-text");
const typingSpeed = 100; // Speed of typing (ms per character)
const erasingSpeed = 50; // Speed of erasing (ms per character)
const delayBetweenRoles = 2000; // Pause between typing and erasing a role

function typeRole() {
  if (charIndex < roles[currentRoleIndex].length) {
    // Type each character one by one
    roleElement.textContent += roles[currentRoleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed); // Continue typing
  } else {
    // Pause after finishing typing before erasing
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    // Erase each character one by one
    roleElement.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed); // Continue erasing
  } else {
    // Move to the next role after erasing
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop back to the first role
    setTimeout(typeRole, typingSpeed); // Start typing the next role
  }
}

// Initialize the typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeRole, delayBetweenRoles); // Start after an initial delay
});


// Function to add 'visible' class on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight) {
      section.classList.add("visible");
    }
  });
});

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=> {
  sections.forEach(sec => {
    let top=window.scrollY;
    let offset=sec.offsetTop - 150;
    let height =sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top>=offset && top<offset+height){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
      })
    }
  })
}

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100); 


// scroll reveal

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal.reveal('.home-content ,.heading',{origin: 'top'});
ScrollReveal.reveal('.home-img, .services-container, .portfolio-box',{origin: 'bottom'})

//certificate

document.querySelectorAll('.certificate').forEach((image) => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <img src="${image.src}" alt="Certificate">
        <button class="close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});


function toggleSkill(element) {
  element.classList.toggle('active');
}