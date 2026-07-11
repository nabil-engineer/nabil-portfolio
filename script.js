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


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

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

if(projectImage){

    projectImage.addEventListener("click", function(){

        lightbox.classList.add("active");

    });

}

const overlay = document.querySelector(".project-overlay");

if(overlay){

    overlay.addEventListener("click", function(){

        lightbox.classList.add("active");

    });

}

if(closeLightbox){

    closeLightbox.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("active");

        }

    });

}


/* =======================================================
   SCROLL PROGRESS BAR
======================================================= */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});


/* =======================================================
   TYPING EFFECT
======================================================= */

const typing = document.getElementById("typing");

const words = [

    "Software Developer",

    "AI Engineer",

    "Python Developer",

    "Aerospace Software Engineer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent =
        current.substring(0,--charIndex);

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();


/* =======================================================
   DARK MODE
======================================================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");

    themeToggle.textContent="☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.textContent="🌙";

    }

});