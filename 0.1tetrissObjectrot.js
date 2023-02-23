//TETRIS S OBJECT ROTACION 

var tetrisS = [];
const espacio = "___"
const caracter = "|_|"
//var columna = 4;
//var fila 4

for(let i = 1 ; i <= 2 ; i=i+1) {//triangulo (2*1)/2
    for(j = 2 ; j > i ; j=j-1) {    //espacio izquierdo
         tetrisS = tetrisS + espacio; 
    }
    for(j = 1 ; j<= i ; j=j+1) {         
        tetrisS =tetrisS + caracter ;
    }
    tetrisS = tetrisS + "\n"; 
}
//fila 3
        for(let i = 1 ; i <= 1 ; i=i+1) {
            for(j = 2 ; j > i ; j=j-1) {
             tetrisS = tetrisS + caracter; 
            }
            //right space
        for(j = 1 ; j<= i ; j=j+1) {   
            tetrisS = tetrisS + espacio ;
        }
    }

console.log(tetrisS);

