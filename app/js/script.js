const headerMenuBtn = document.querySelector("#header-menu");
const header = document.querySelector("#header");

headerMenuBtn.addEventListener("click", (e) => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
