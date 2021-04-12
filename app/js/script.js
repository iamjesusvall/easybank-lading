const headerMenuBtn = document.querySelector("#header-toggle");
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector("#header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

headerMenuBtn.addEventListener("click", (e) => {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    html.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    html.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
