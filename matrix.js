const columnas = 5;
const filas = 4;
const matrix = [];

const caracter = "*";

for (var i=0; i<filas;i++){
    matrix[i]=[];
    for (let j=0;j<columnas;j++){
    matrix[i][j]=caracter;
    }
}

console.log(matrix);
