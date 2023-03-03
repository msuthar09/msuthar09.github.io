const button = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
};

button.onclick = () => toggle();

setTimeout(toggle, 200);

const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);
