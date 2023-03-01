let navToggle = document.querySelector(".menu");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

const text = new SplitType('.text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.3,
    duration: .1,
})
