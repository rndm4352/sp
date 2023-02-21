var evaluacion = [["Nombre Alumnos", "Espanol", "Matematicas", "Ciencias Naturales", "Promedio"]];
var alumnosNombre = ["Juan", "Pedro", "Maria"];
 
for (var a = 1; a<4; a++){       //combinar array evaluacion con array alumno usando for para practicar 
    evaluacion[a]=[];
    for (let c = 0; c<5; c++){
        if(evaluacion[a]==0){
            evaluacion[a][c]=alumnosNombre [a-1];
        }else{    
            evaluacion[a][c]=0;
        }
    }
}
console.log(evaluacion);



while (true){ //while para elegir alumno o primera coordenada
    flag = 0 //reinicia flag 
    let alumnoElegir = prompt("Introduce en nombre de un alumno:");

    if(alumnoElegir == evaluacion[1][0]){ //compara prompt con nombre en posicion 1 de evaluacion       //falta for
        var alumnoCalificando = [1]; //da variable usada para accear posicion 1 de array,..servira como coordenada,(fila si visto vertical o segundo array dentro de array si visto horizontal
    }else if(alumnoElegir == evaluacion[2][0]){
        var alumnoCalificando = [2];
    }else if(alumnoElegir == evaluacion[3][0]){
        var alumnoCalificando = [3];
    }else{console.log("Nombre invalido")
    flag -= 1 //para repetir ciclo sin entrar en el siguiente while en caso de nombre invalido
    }
    
        while(true && flag != -1){ //while dentro de while para elegir materias o segunda coordenada
        console.log("Presiona ENTER para regresar\n1.- Español\n2.- Matematicas\n3.- Ciencias naturales");
        let materiaElegir = prompt("Introducir numero:");
        if(materiaElegir < 1 || materiaElegir>4){//or materias ya calificadas
            console.log("Regresando");
            break //salir del segundo while y continua al final del primer while
            }
            //copiando estructura de elegir alumno para materia
        if(materiaElegir == 1){
        console.log(evaluacion[0][1]);
        var materiaCalificando = [1];//sirve como segunda coordenada para acceder 2d array
            }
        else if(materiaElegir == 2){
        console.log(evaluacion[0][2]);
        var materiaCalificando = [2];
            }
        else if(materiaElegir == 3){
        console.log(evaluacion[0][3]);
        var materiaCalificando = [3];
            }
        let calificacion = prompt("Introducir calificacion:");//datos que seran escritos en la ubicacion de lsa dos coordenadas
        if(calificacion>= 6.0 && calificacion <=10.0){
            evaluacion[alumnoCalificando][materiaCalificando] = calificacion;
        console.log(evaluacion)
         
        }else {console.log("Calificacion fuera de rango");
        break;//salir del segundo while y continua al final del primer while
        }   
    }
    console.log("Presiona ENTER para seguir calificando\n 1.- Ver promedios\n 2.- Salir");
    let promedio = prompt("Seleccionar:");
        if(promedio==1){
        for (let p = 1; p<4; p++){
        evaluacion[p][4] = (parseFloat(evaluacion[p][1])+parseFloat(evaluacion[p][2])+parseFloat(evaluacion[p][3]))/3;
        }    //parseFloat para poder hacer operaciones aritmeticas dentro de array(sin concatenar)


        console.log(evaluacion)
        }
        else if(promedio==2){
            break
            
        }
    
}
