//TETRIS LARGA
const filas = 4;
const columnas = 4;
const tetris_larga = [];

const caracter = "[_]";
const espacio = " ";

for (let i=0; i<filas;i++){
    tetris_larga[i]=[];
    for (let j=0;j<columnas;j++){
        if(j == 0){
            tetris_larga[i][j]=caracter
        }
        else {tetris_larga[i][j]=espacio;
        
        }
    }
}

console.log(tetris_larga);
