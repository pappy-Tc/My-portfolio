
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");


// Open / close mobile menu when it exists on the current page
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}


// Reveal content as it enters the viewport
const scrollElements = document.querySelectorAll(".scroll-animate");

if ("IntersectionObserver" in window) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    scrollElements.forEach((element) => scrollObserver.observe(element));
} else {
    scrollElements.forEach((element) => element.classList.add("show"));
}



