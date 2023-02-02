const navToggle = document.getElementById("nav_toggle"),
navMenu = document.getElementById("nav-menu"),
navLink = document.querySelectorAll(".nav__link"),
sidebarToggle = document.getElementById("sidebar_toggle"),
sidebar = document.getElementById("sidebar");

navToggle.addEventListener("click",() =>{
  navMenu.classList.toggle("nav__menu--open");
});

navLink.forEach((link)=>{
  link.addEventListener("click",()=>{
    if(navMenu.classList.contains("nav__menu--open")){
      navMenu.classList.remove("nav__menu--open");
    }
  })
});

// open and close sidebar
sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebar--open");
});



// active menu link
const menuItems = document.querySelectorAll(".filter__item");
function activeMenuItem(){
  menuItems.forEach((item) => item.classList.remove("menu__item--active"));
  this.classList.add("menu__item--active");
}
menuItems.forEach((item)=>item.addEventListener("click",activeMenuItem));


// time

let countDown = new Date();

let getTime=()=>{
 let hours = document.querySelector(".hours");
 let time =countDown.getTime()
 let h=countDown.getHours();
 let m=countDown.getMinutes();
 let s=countDown.getSeconds();
 console.log(`${h}:${m}:${s}`);
}




