//formatos
//var alcaldia = "IZ" abreviaci 
//var genero = "H" H/M
//var nivel = "A"  >18000=A  ELSE B
var id = 0 //inicializa contador
    //molde
    class Cuenta {
  constructor(numeroCuenta, nombre, password) {//atributos
    this.numeroCuenta = numeroCuenta;
    this.nombre = nombre;
    this.password = password;
  }
}

while(true){

//input usuario    
    var nombre = prompt("Introducir nombre:");
    let alcaldia = prompt("Introducir alcaldia:");
    let genero = prompt("Introducir genero:");
    let ingresos = prompt("Introducir ingresos:");
        if (ingresos >= 18000){
            nivel = "A"
        }else{
            nivel = "B"
        }
        id = id+1;
    var numeroCuenta = alcaldia+genero+nivel+id;
    var password = prompt("Introducir password:");
    
   //objecto
    const c1 = new Cuenta(numeroCuenta,nombre,password);
    
    console.log(c1)

 
}

