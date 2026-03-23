const generateButton = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateButton.addEventListener("click", generatePalette);

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
