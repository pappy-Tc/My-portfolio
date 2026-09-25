
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



// Let's Talk Modal
const contactModal = document.getElementById("contact-modal");
const contactModalBox = document.getElementById("contact-modal-box");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", (event) => {
    event.preventDefault();

    contactModal.classList.remove("hidden");
    contactModal.classList.add("flex");

    // Trigger opening animation
    requestAnimationFrame(() => {
        contactModalBox.classList.add("show");
    });
});

function closeContactModal() {
    contactModalBox.classList.remove("show");

    setTimeout(() => {
        contactModal.classList.add("hidden");
        contactModal.classList.remove("flex");
    }, 300);
}

closeModal.addEventListener("click", closeContactModal);

contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        closeContactModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeContactModal();
    }
});



// Let's Talk Modal 2
const contactModal2 = document.getElementById("contact-modal");
const contactModalBox2 = document.getElementById("contact-modal-box");
const openModal2 = document.getElementById("open-modal-2");
const closeModal2 = document.getElementById("close-modal");

openModal2.addEventListener("click", (event) => {
    event.preventDefault();

    contactModal2.classList.remove("hidden");
    contactModal2.classList.add("flex");

    // Trigger opening animation
    requestAnimationFrame(() => {
        contactModalBox2.classList.add("show");
    });
});

function closeContactModal() {
    contactModalBox2.classList.remove("show");

    setTimeout(() => {
        contactModal2.classList.add("hidden");
        contactModal2.classList.remove("flex");
    }, 300);
}

closeModal2.addEventListener("click", closeContactModal);

contactModal2.addEventListener("click", (event) => {
    if (event.target === contactModal2) {
        closeContactModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeContactModal();
    }
});