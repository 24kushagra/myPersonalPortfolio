
const main = document.querySelector(".main");
const crsr = document.querySelector("#cursor");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");

// ------------- For Cursor---------------------

main.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:true
  })
})


// -----------------------------------------------


page3.addEventListener("mouseenter",function(){
   gsap.to(crsr,{
     scale:0
   })
})

page3.addEventListener("mouseleave",function(){
  gsap.to(crsr,{
    scale:1
  })
})


//-------------- for navigation bar-------------------


const menu = document.querySelector("#menu");
const cross = document.querySelector("#cross");

var tl = gsap.timeline();

tl.to(".full-nav",{
  right:0,
  duration:0.6
})

tl.from(".full-nav h4",{
  x:150,
  duration:0.67,
  stagger:0.28,
  opacity:0
})

tl.from("#cross",{
  opacity:0
})

tl.pause();

menu.addEventListener("click",function(){
  tl.play();
})

cross.addEventListener("click", function(){
  tl.reverse();
})



// ---------------------------------------------
const myText2 = new SplitType('#quote')

gsap.to(".char",{
  y:0,
  stagger: 0.05,
  delay:0.2,
  duration:0.1,
  scrollTrigger:{
    trigger:".quote-page",
    scroller:"body",
    // markers: true,
    // start:"top 0%",
    // end:"top -200%",
    scrub:3,
    pin:true
  }
})



// ------------------SERVICES H1--------------------------

gsap.from(".page2 h1",{
  xPercent:6,
  duration:1,
  stagger:0.88,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    // markers: true,
    // start:"top 0%",
    // end:"top -200%",
    scrub:3,
  }
})

// -----------for text sliding effect/animation------------

gsap.to(".page3 h1",{
  transform:"translateX(-520%)",
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    // markers: true,
    // start:"top 0%",
    // end:"top -200%",
    scrub:true,
    pin:true
  }
})


// --------------for Swiper--------------

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// ----------------------------------------

const myText = new SplitType('#intro h1')

gsap.to(".char",{
    y:0,
    stagger: 0.05,
    delay:0.2,
    duration:0.1
})


// ------------------------------------------

