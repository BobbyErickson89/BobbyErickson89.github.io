let viewportHeight = window.innerHeight;
let sticky = false;
let nav_bar = document.getElementsByClassName("nav-bar");
nav_bar = nav_bar[0];

//whenever our window is resized, we are re-setting our viewport variable.
let windowResize = () => {
    viewportHeight = window.innerHeight;
};

//This function is adding a sticky class to our navbar, so that it will
// be fixed to the top of the page when we scroll past the intro section.
let setStickyNavbar = () => {
    if(window.scrollY > viewportHeight && sticky === false){
        nav_bar.classList.add('sticky');
        sticky = true;
    } else if(sticky === true && window.scrollY < viewportHeight){
        nav_bar.classList.remove('sticky');
        sticky = false;
    }
};

window.onresize = windowResize;
window.onscroll = setStickyNavbar;