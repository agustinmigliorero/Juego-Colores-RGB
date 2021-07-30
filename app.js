// letIABLES GLOBALES

let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let pickedColor = pickRandomColor();
let tituloBackground = document.querySelector("#titulo")
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor.toUpperCase();



for (let i = 0; i < squares.length; i++) {
    // COLORES INICIALES DE LOS SQUARES
    squares[i].style.backgroundColor = colors[i];
    // EVENTOS AL CLICKEAR LOS COLORES
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
       if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correcto!"
        changeColors(pickedColor)
        tituloBackground.style.backgroundColor = pickedColor;
        resetButton.textContent = "Jugar de nuevo!"
       } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Intenta otra vez!"
       }
    })
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr;
}

function randomColor() {
   let red = Math.floor(Math.random() * 256);
   let green = Math.floor(Math.random() * 256);
   let blue = Math.floor(Math.random() * 256);
   return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    tituloBackground.style.backgroundColor = "steelblue";
    resetButton.textContent = "Nuevos Colores"
    messageDisplay.textContent = " "
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})


easyButton.addEventListener("click", function(){
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    tituloBackground.style.backgroundColor = "steelblue";
    resetButton.textContent = "Nuevos Colores"
    messageDisplay.textContent = " "
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardButton.addEventListener("click", function(){
    numSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    tituloBackground.style.backgroundColor = "steelblue";
    resetButton.textContent = "Nuevos Colores"
    messageDisplay.textContent = " "
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }
})