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
// const icons = document.querySelector(".social-icons")

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
    // icons.classList.toggle("show-icons");
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
video.volume = 0.08;


// PRE LOADER
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})


// SCROLL BAR 

const progress = document.getElementById('progressbar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function (){
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

