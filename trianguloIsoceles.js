//contenedor
var triangulo = "";

//estructura general
for(let i = 1 ; i <= 10 ; i=i+2) {//repite 5 veces(10/2) y cambia de dos en dos
    
    for(j = 9 ; j > i ; j=j-1) {//for prepara 8 espacios vacios a la izquierda (9-1)    
         triangulo += "-"; //posiciona primeros espacios vacios izquierda
    }
    for(j = 1 ; j<= i ; j=j+1) {          //otro for se encarga de nuvos elementos
        triangulo =triangulo + "*" + "_";//tras espacios vacios, posiciona elelmntnos a la derecha
    }
    triangulo = triangulo + "\n"; //añade salto de linea tras posicionar elementos vacios de izquierda y elementos derecha
    //repite desde el inicio
    }

console.log(triangulo);
