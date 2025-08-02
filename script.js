class HamburgerMenu {
  constructor(hamburgerId, navlinksId) {
    this.hamburger = document.getElementById(hamburgerId);
    this.navlinks = document.getElementById(navlinksId);

    this.hamburger.addEventListener('click', () => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.navlinks.classList.toggle('show');
  }
}

// Ініціалізація класу:
const menu = new HamburgerMenu('hamburger', 'navlinks');
