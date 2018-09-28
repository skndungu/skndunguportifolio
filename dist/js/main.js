// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const git_response = document.querySelector('.btngit_unknown');
// Set Initial State Of Menu
let showMenu = false;
let unknownres = false;
if(menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}


function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


if(git_response) {
  git_response.addEventListener('click',maintenanceres);
}

function maintenanceres (){
  if (!unknownres){
    alert("Oops!! This repository is under maintenace, Try again later");
  }
}