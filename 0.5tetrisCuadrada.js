//TETRIS CUADRADA
const filas = 2;
const columnas = 2;
const tetris_cuadrada = [];

const caracter = "[_]";
const espacio = " ";

for (let i=0; i<filas;i++){
    tetris_cuadrada[i]=[];
    for (let j=0;j<columnas;j++){
        if(i < 2 && j < 2){
            tetris_cuadrada[i][j]=caracter
        }
        else {tetris_cuadrada[i][j]=espacio;
        
        }
    }
}

console.log(tetris_cuadrada);
