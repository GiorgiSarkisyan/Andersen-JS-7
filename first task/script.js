const button = document.getElementById("btn");

function moveButton() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

button.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) moveButton();
});

button.addEventListener("click", moveButton);
