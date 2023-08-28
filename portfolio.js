/* -- Menu effect -- */

const menuButton = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
};

menuButton.onclick = () => toggle();

const content = document.getElementById("content");

const untoggle = () => {
  document.body.classList.toggle("menu-toggled");
  content.style.display = "none";
};

function animateMenuOut(event) {
  event.preventDefault();

  if (event.srcElement.parentElement.href != event.target.baseURI) {
    untoggle();

    setTimeout(() => {
      window.location.href = event.srcElement.parentElement.href;
    }, 800);

  }
  else {
    toggle();
  }
}

const menuLinks = document.querySelectorAll(".link");
menuLinks.forEach((link) => {
  link.addEventListener("click", animateMenuOut);
});