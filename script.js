const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function randomColor() {
    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {

    const boxes = document.querySelectorAll(".color-box");

    boxes.forEach(box => {

        const color = randomColor();

        box.style.backgroundColor = color;

        box.querySelector("span").textContent = color;

    });

}

generateBtn.addEventListener("click", generatePalette);

generatePalette();