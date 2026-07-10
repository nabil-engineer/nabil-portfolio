const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

revealSections();

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}


/* =======================================================
   MOBILE MENU
======================================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});