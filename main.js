const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const btn = document.createElement("button");

btn.textContent = "Change Grid Size"

container.insertBefore(btn, grid)

function makeGrid(size = 16){
    squares = []
    for(let col=0; col<size; col++){
        const column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        for(let row=0; row<size; row++){
            const square = document.createElement("div");
            square.classList.add("square");
            squares[col, row] = square;
            column.appendChild(squares[col,row]);
            }
    }
}


function colour(){
    const squares = document.querySelectorAll(".square");
    for (let i=0; i < squares.length; i++){
        squares[i].addEventListener("mouseenter", () => {
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            if(!squares[i].style.backgroundColor){
                let brightness = 100
                randomColour = `rgb(${r},${g},${b})`;
                squares[i].style.backgroundColor = randomColour;
                squares[i].style.filter = `brightness(${brightness}%)`
            }
            else{
                let currentBrightness = squares[i].style.filter;
                let num = currentBrightness.slice(11, 14)
                if (num==="100"){
                    num-=10
                }

                else{
                    num = currentBrightness.slice(11, 13)
                    num = Number(num)
                    num -= 10
            }


                console.log(num)
                squares[i].style.filter = `brightness(${num}%)`;
            }
        })
    }}

    

    

btn.addEventListener("click", changeSize)

function changeSize(){
    let input = prompt("How many squares per side would you like?");
    while (input > 100){
        input = prompt("Please enter value of 100 or less:")
    }
    console.log(input)
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    makeGrid(input)
    colour()
}

makeGrid()
colour()
