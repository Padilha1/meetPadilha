/*
    classList - shows/get all classes
    contains - checks classLists for specific class
    add - add class
    remove - remove class
    toggle - toggless class
*/

//  NAVBAR FUNCTION
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    //console.log(links.classList);
    //console.log(links.classList.contains('random'));
    /*if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    } */
    links.classList.toggle("show-links");
});

// VIDEO FUNCTION
    // MDN
    // The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    // The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video= document.querySelector(".video-container");

btn.addEventListener("click", function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }else {
        btn.classList.remove("slide");
        video.play();
    }
});

// VIDEO VOLUME
video.volume = 0.1;

// PRE LOADER
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})
