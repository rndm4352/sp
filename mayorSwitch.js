//"Encuentra numero mayor switch";
var num1 = 11
var num2 = 6
var num3 = 9
var resultado 

//Inicia comparacion
switch (true){
    case num1>num2 && num1>num3:
        resultado = num1;
        break;
    case num2>num3 && num2>num1:
        resultado = num2;
        break;
    case num3>num1 && num3>num2:
        resultado = num3;
        break;
}
console.log(resultado);
