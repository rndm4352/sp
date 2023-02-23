// TETRIS L
const filas = 3;
const columnas = 2;
const tetris_L = [];

const caracter = "[_]";
const espacio = " ";

for (let i=0; i<filas;i++){
    tetris_L[i]=[];
    for (let j=0;j<columnas;j++){
        if(j == 0 || i==0 ){
            tetris_L[i][j]=caracter
        }
        else {tetris_L[i][j]=espacio;
        
        }
    }
}

console.log(tetris_L);
