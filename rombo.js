//contenedor
var triangulo = ""; //rombo = 2 triangulos

//estructura general
for(let i = 1 ; i <= 10 ; i=i+2) {//repite 5 veces(10/2) y cambia de dos en dos
    
    for(j = 9 ; j > i ; j=j-1) {//for prepara 8 espacios vacios a la izquierda (9-1)    
         triangulo = triangulo + "-"; //posiciona primeros espacios vacios izquierda
    }
    for(j = 1 ; j<= i ; j=j+1) {          //otro for se encarga de nuvos elementos
        triangulo =triangulo + "*" + "_";//tras espacios vacios, posiciona elelmntnos a la derecha
    }
    triangulo = triangulo + "\n"; //añade salto de linea tras posicionar elementos vacios de izquierda y elementos derecha 
    //repite desde el inicio
    }

//repetir triangulo anterior pero revertir for inicial i=i+2 -> i=i-2
for(let i = 8 ; i >= 1 ; i=i-2) {//retrosedemos de dos en dos..como no es encesario repetir el renglon inferior...solo necesitamos 4 repeticione (8/2)
    
    for(j = 10 ; j > i ; j=j-1) {//se mantiene igual solo añadir esacio a la izquierda(9->10)para compensar falta de renglon
         triangulo = triangulo + "-";
    }
    for(j = 2 ; j<= i ; j=j+1) {          //se mantiene igual solo añadir esacio a la izquierda(1->2)para compensar falta de renglon
        triangulo =triangulo + "*" + "_";
    }
    triangulo = triangulo + "\n"; 
    }
console.log(triangulo);
