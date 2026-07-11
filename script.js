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

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

/* =======================================================
   CLOSE MOBILE MENU
======================================================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =======================================================
   NAVBAR SCROLL
======================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* =======================================================
   ACTIVE NAVIGATION
======================================================= */


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =======================================================
   BACK TO TOP
======================================================= */

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =======================================================
   HIDE NAVBAR ON SCROLL
======================================================= */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 120){

        navbar.classList.add("hide");

    }else{

        navbar.classList.remove("hide");

    }

    lastScroll = currentScroll;

});


/* =======================================================
   ANIMATED COUNTERS
======================================================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const about = document.querySelector("#about");

    const top = about.getBoundingClientRect().top;

    if(top < window.innerHeight - 150){

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            const update = () => {

                count += increment;

                if(count >= target){

                    if(target === 100){

                     counter.textContent = target + "%";

                    }else if(target !== 2){

                     counter.textContent = target + "+";

                    }else{

                     counter.textContent = target;

                    }

                }else{

                    counter.textContent = count;

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();



/* =======================================================
   PROJECT LIGHTBOX
======================================================= */

const projectImage = document.querySelector(".project-image");

const lightbox = document.getElementById("lightbox");

const closeLightbox = document.querySelector(".close-lightbox");

projectImage.addEventListener("click", function () {

    lightbox.classList.add("active");

});

const overlay = document.querySelector(".project-overlay");

overlay.addEventListener("click", function () {

    lightbox.classList.add("active");

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});