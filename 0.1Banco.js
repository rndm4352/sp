//formatos
//var alcaldia = "IZ" abreviaci 
//var genero = "H" H/M
//var nivel = "A"  >18000=A  ELSE B
var id = 0 //inicializa contador
//var dinero = 100
    //molde
    class Cuenta {
    consultar (saldo){
        return (saldo);
    }
//    retirar (saldo,dinero){
  //      saldo = saldo-dinero;
//    }
  //  depositar (saldo,dinero){
    //    saldo = saldo+dinero;
    //}
    constructor(numeroCuenta, nombre, password,saldo) {//atributos
    this.numeroCuenta = numeroCuenta;
    this.nombre = nombre;
    this.password = password;
    this.saldo = saldo;

  }
}


//input usuario    
    let nombre = prompt("Introducir nombre:");
    let alcaldia = prompt("Introducir alcaldia:");
    let genero = prompt("Introducir genero:");
    let ingresos = prompt("Introducir ingresos:");
        if (ingresos >= 18000){
            nivel = "A"
        }else{
            nivel = "B"
        }
        id = id+1;
    let numeroCuenta = alcaldia+genero+nivel+id;
    let password = prompt("Introducir password:");
    let saldo = 10000;

   //objecto
const c1 = new Cuenta(numeroCuenta,nombre,password,saldo);
    
    
console.log(c1.consultar(saldo))
