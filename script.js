$(".owl-carousel").owlCarousel({
  loop: true,
  centeredSlide: true,
  margin: 10,
  autoplay: 2000,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#Login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  if (window.scroll > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scroll > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelector(".home-parallax").array.forEach((elm) => {
    let speed = elm.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageX * speed) / 90;
    elm.style.transform = "translateX(${y}px) translateY(${x}px)";
  });
};
