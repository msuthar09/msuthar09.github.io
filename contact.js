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
  } else {
    toggle();
  }
}

const menuLinks = document.querySelectorAll(".link");
menuLinks.forEach((link) => {
  link.addEventListener("click", animateMenuOut);
});

/* -- Copy function -- */

function copyTextToClipboard(textToCopy) {
  const tempInput = document.createElement("textarea");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();

  tempInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(tempInput.value);
  document.body.removeChild(tempInput);

  // Show a confirmation message or perform any other action
  alert("Text copied to clipboard: " + textToCopy);
}

const parentContainer = document.body;
parentContainer.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("card-content") ||
    event.target.parentElement.classList.contains("card-content")
  ) {
    const coptText = event.target.innerText;
    copyTextToClipboard(coptText);
  }
});
