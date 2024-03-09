class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.hundleClick = this.hundleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation ? (link.animation ="") : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s"); 
        });
    }

    hundleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);     
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.hundleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
    
}

const mobileNavBar = new MobileNavBar(
    ".mobile_menu",
    ".ul",
    ".li",
);

mobileNavBar.init();