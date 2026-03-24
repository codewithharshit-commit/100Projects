const generateButton = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateButton.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")),
      );
  }
});

function showCopySuccess(element) {
  element.classList.remove("far", "fa-copy");
  element.classList.add("fas", "fa-check");

  element.style.color = "#48bb78";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");

    element.style.color = "";
  }, 1500);
}

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColors());
  }

  updatePalette(colors);
}

function generateRandomColors() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function updatePalette(colors) {
  const colorBox = document.querySelectorAll(".color-box");

  colorBox.forEach((box, index) => {
    const color = colors[index];

    const colorDiv = box.querySelector(".color");
    const hexDiv = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexDiv.textContent = color;
  });
}

generatePalette();
