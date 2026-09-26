
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



// Contact modal: use delegated handling so desktop, mobile, and page CTAs
// all open the same form, including when an element is repeated in the markup.
const contactModal = document.getElementById("contact-modal");
const contactModalBox = document.getElementById("contact-modal-box");

function openContactModal(event) {
    event.preventDefault();
    if (!contactModal || !contactModalBox) return;

    contactModal.classList.remove("hidden");
    contactModal.classList.add("flex");
    requestAnimationFrame(() => contactModalBox.classList.add("show"));
}

function closeContactModal() {
    if (!contactModal || !contactModalBox) return;

    contactModalBox.classList.remove("show");
    window.setTimeout(() => {
        contactModal.classList.add("hidden");
        contactModal.classList.remove("flex");
    }, 300);
}

document.querySelectorAll("#open-modal, #open-modal-2, [data-open-contact]")
    .forEach((trigger) => trigger.addEventListener("click", openContactModal));

const closeModalButton = document.getElementById("close-modal");
if (closeModalButton) closeModalButton.addEventListener("click", closeContactModal);

if (contactModal) {
    contactModal.addEventListener("click", (event) => {
        if (event.target === contactModal) closeContactModal();
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeContactModal();
});
