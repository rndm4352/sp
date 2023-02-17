const columnas = 5;
const filas = 4;
const matriz = [];

const caracter = "*";

for (var i=0; i<filas;i++){
    matriz[i]=[];
    for (let j=0;j<columnas;j++){
    matriz[i][j]=caracter;
    }
}

console.log(matriz);
