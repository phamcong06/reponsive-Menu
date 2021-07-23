/* ========EXPANDER MENU======== */
const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle', 'nav-menu');
/*===========Active and Remove Menu===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkActive() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkActive))