const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const toast = document.getElementById("toast");

function randomColor(){

    const letters = "0123456789ABCDEF";

    let color = "#";

    for(let i = 0; i < 6; i++){

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;
}

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },1500);

}

function generatePalette(){

    palette.innerHTML = "";

    for(let i = 0; i < 5; i++){

        const color = randomColor();

        const card = document.createElement("div");

        card.className = "color-card";

        card.innerHTML = `

            <div
                class="color"
                style="background:${color}"
            ></div>

            <div class="info">

                <span>${color}</span>

                <i class="fa-regular fa-copy"></i>

            </div>

        `;

        card.addEventListener("click",()=>{

            navigator.clipboard.writeText(color);

            showToast(`${color} copied!`);

        });

        palette.appendChild(card);

    }

}

generateBtn.addEventListener(

    "click",
    generatePalette

);

document.addEventListener(

    "keydown",

    e=>{

        if(e.code === "Space"){

            e.preventDefault();

            generatePalette();

        }

    }

);

generatePalette();