/* =====================================================
   NASH ACADEMY
   INTERACTIVE JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR — SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   GALLERY MODAL
===================================================== */

const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        imageModal.classList.add("open");

        document.body.style.overflow = "hidden";

    });

});


/* Close modal */

function closeModal() {

    imageModal.classList.remove("open");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


/* Close by clicking outside image */

imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {
        closeModal();
    }

});


/* Close with Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !phone || !email) {

        formMessage.textContent =
            "Please complete all required fields.";

        return;
    }


    /*
        This is currently a FRONT-END demo.

        To actually receive submissions,
        connect this form to:

        - Formspree
        - Web3Forms
        - EmailJS
        - Your own backend/API
    */

    formMessage.textContent =
        `Thanks ${name}! Your enquiry has been received.`;

    contactForm.reset();

});


/* =====================================================
   SIMPLE REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .program-card, .about-content, .about-image, .event, .contact-info, .contact-form"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   PREVENT BROKEN HASH SCROLLING
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetID = link.getAttribute("href");

        if (targetID === "#") {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});