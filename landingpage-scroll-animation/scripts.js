// Ribbon animation
const ribbonAnimation = () => {
  const elements = document.querySelectorAll(".ribbon[data-animation]");
  const animationClass = "ribbon-animation";

  function ribbonAnimationScroll() {
    const topPage = window.pageYOffset + (window.innerHeight * 3) / 4;

    elements.forEach((element) => {
      if (
        !element.classList.contains("ribbon-animation") &&
        topPage > element.offsetTop
      ) {
        element.classList.add(animationClass);
      }
    });
  }

  if (elements.length) {
    window.addEventListener("scroll", function () {
      ribbonAnimationScroll();
    });
  }
};

const svgAnimation = () => {
  const elements = document.querySelectorAll('[data-animation="svg"]');

  const animationClass = "svg-animation";

  function svgAnimationScroll() {
    elements.forEach((element) => {
      console.log("element", element);

      if (!element.classList.contains("svg-animation")) {
        element.classList.add(animationClass);
      }
    });
  }

  if (elements.length) {
    window.addEventListener("scroll", function () {
      svgAnimationScroll();
    });
  }
};

ribbonAnimation();
svgAnimation();
/*
const elements = document.querySelectorAll('[data-animation]')
const rotateElements = document.querySelectorAll('[data-animation-rotate]')

const animationClass = 'animation'

function animationScroll() {
    const topPage = window.pageYOffset + (window.innerHeight*3/4)
    
    elements.forEach(element => {
        if (topPage > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })

    rotateElements.forEach(element => {
        if (topPage > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

if (elements.length) {
    window.addEventListener('scroll', function () {
        animationScroll()
    })
}

*/
