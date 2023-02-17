const columnas = 5;
const filas = 5;
var matriz = [];


//genera letra aleatoria desde str
function letraAleatoria() {
  const letras = "abcdefghijklmnñopqrstuvwxyz"
  return letras[Math.floor(Math.random() * letras.length)]
}

//matriz 2d
for (let i=0; i<filas;i++){
    matriz[i]=[];
    for (let j=0;j<columnas;j++){
    var caracter = letraAleatoria(); //haz letra aleatoria
    matriz[i][j]=caracter; //inserta letra aleatoria
    //inserta caja en posicion i,j
    if (i == 1&&j == 1){
      matriz[i][j] = "c"
    }
    if (i == 2&&j == 1){
      matriz[i][j] = "a"
    }
    if (i == 3&&j == 1){
      matriz[i][j] = "j"
    }
    if (i == 4&&j == 1){
      matriz[i][j] = "a"
    }
    }
}

console.log(matriz);
