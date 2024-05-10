//hamburger menu functionality 
const navMainMenuToggle = document.querySelector(".nav-main-menu-toggle");

navMainMenuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const ariaControls = navMainMenuToggle.getAttribute("aria-controls");
    if (navMainMenuToggle.getAttribute("aria-expanded") === "false") {
        navMainMenuToggle.setAttribute("aria-expanded", "true");
        navMainMenuToggle.setAttribute("aria-label", "Close menu");
        navMainMenuToggle.parentElement.querySelector(`#${ariaControls}`).toggleAttribute("hidden");
    } else {
        navMainMenuToggle.setAttribute("aria-expanded", "false");
        navMainMenuToggle.setAttribute("aria-label", "Open menu");
        navMainMenuToggle.parentElement.querySelector(`#${ariaControls}`).toggleAttribute("hidden");
    }
});

/*Fancybox gallery for baking page*/
var Fancybox = Fancybox || undefined

if (Fancybox) {
    Fancybox.bind('[data-fancybox]', {

    });

    Fancybox.bind('[data-fancybox="gallery-a"]', {
    });
}

////loading final projects in the iframe 
function loadFrame(elButton) {
    let elIframe = document.querySelector("#frame");
    let src = elButton.getAttribute("data-src");
    elIframe.setAttribute("src", src);
}


