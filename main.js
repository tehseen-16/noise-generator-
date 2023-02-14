const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2D');
const width = canvas.width = 640;
const height = canvas.height = width/(16/9);
const cellSize = 8;
const cols = Math.floor(width / cellSize);
const rows = Math.floor(height / cellSize);


let density = 0.5;
const density_input = document.querySelector('#density input');
const density_label = document.querySelector('#density span');

density_input.value = density;
density_label.innerText = decimalToPercent(density, density_input.getAttribute('max'));

const generate_button = document.querySelector('#generate');

density_input.addEventListener('input', () =>{
    density = density_input.value;
    density_label.innerText = decimalToPercent(density, density_input.getAttribute('max'));
    
    // GenerateGrid();

});

generate_button.addEventListener('click', () => {
    GenerateGrid();
    DrawGrid();
});

const grid = [];

function GenerateGrid(){
    for(let col=0; col<cols; col++){
       grid[col] = [];
       for(let row=0; row<rows; row++){
        grid[col][row] = Math.random() < density ? 1 : 0;
       }
    } 
}

function DrawGrid(){
    for(let col=0; col<cols; col++){
       for(let row=0; row<rows; row++){
        ctx.fillStyle = grid[col][row] ? '#000' : '#fff';
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
       }
    }
    console.log(grid);
}

GenerateGrid();
    DrawGrid();

function decimalToPercent(decimal, max){
    return (decimal / max * 100) + "%" ; 

}



