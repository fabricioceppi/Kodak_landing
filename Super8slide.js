// Quote sliders

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const sliders = document.querySelectorAll(".slider");
let i = 0;

// Menu elements for toggle menu

const menuBtn = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

// hide and show on scroll elements

const spec1 = document.getElementById("spec1");
const spec2 = document.getElementById("spec2");
const spec3 = document.getElementById("spec3");
const spec4 = document.getElementById("spec4");

const [title1, title2] = document.querySelectorAll(".titles");

// setting the slider function

function nextSlide() {
 if (i === sliders.length - 1) {
   i = 0;
   sliders[sliders.length - 1].classList.remove("active");
 } else {
   i++;
   sliders[i - 1].classList.remove("active");
 }
 sliders[i].classList.add("active")
}

function prevSlide() {
  if (i > 0) {
    i--;
    sliders[i + 1].classList.remove("active");
  } else {
    i = sliders.length - 1;
    sliders[0].classList.remove("active");
  }
  sliders[i].classList.add("active");
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Menu toggle function

menuBtn.addEventListener("click", function() {
  menuBtn.classList.toggle("opened");
  menu.classList.toggle("opened");
  menu.style.transition = "transform 0.5s cubic-bezier(0,.45,.27,1.05) 0.2s";
});

// checking if elements appear on the screen

function onReach(element) {
  let bounding = element.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  }
};

// visualizing elements reached by scrolling

function visualize(element) {
  element.style.transition = 'opacity 1s';
  if (onReach(element)) {
    element.style.opacity = '1';
  } else {
    element.style.opacity = '0';
  }
}

// scrolling events handler

window.addEventListener("scroll", function() {
  visualize(spec1);
  visualize(spec2);
  visualize(spec3);
  visualize(spec4);
  visualize(title1);
  visualize(title2);
}, false);




