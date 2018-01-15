//////// VARIABLES
let viewport_height = window.innerHeight,
    sticky = false,
    nav_bar = document.querySelector('.nav-bar'),
    nav_bar_sibling = nav_bar.nextElementSibling,
    learn_more_btn = document.querySelector('.learn-more-btn');


/////// FUNCTIONS
//whenever our window is resized, we are re-setting our viewport variable.
let windowResize = () => {
    viewport_height = window.innerHeight;
};

//This function is adding a sticky class to our navbar, so that it will
// be fixed to the top of the page when we scroll past the intro section.
let setStickyNavbar = () => {
    if(window.scrollY > viewport_height && sticky === false){
        let height = nav_bar.clientHeight;
        nav_bar.classList.add('sticky');
        nav_bar_sibling.style.marginTop = `${height}px`; //this is making up for navbars height becoming a fixed element.
        sticky = true;
    } else if(sticky === true && window.scrollY < viewport_height){
        nav_bar.classList.remove('sticky');
        nav_bar_sibling.style.marginTop = 'auto'; //removing the extra margin we gave the sibling when making navbar sticky.
        sticky = false;
    }
};

let scrollToAboutMe = () => {
    window.scroll({
        top: viewport_height,
        left: 0,
        behavior: 'smooth',
    });
};


//////// EVENTS
window.onresize = windowResize;
window.onscroll = setStickyNavbar;
learn_more_btn.onclick = scrollToAboutMe;