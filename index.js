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

/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

/* -- Text effect -- */

const fancyElement = document.querySelector("fancy1");

// Function to be executed at regular intervals
function animateFancyEffect() {
  let iteration = 0;
  const originalText = fancyElement.dataset.value;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // clearInterval(interval);

  interval = setInterval(() => {
    fancyElement.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

let interval = setInterval(animateFancyEffect, 5000);
