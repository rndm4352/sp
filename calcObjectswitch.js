class Calculadora { 
    //metodos
    sum (num1,num2){
        return num1+num2;
    }
    res (num1,num2){
        return num1-num2;
    }
    mul (num1,num2){
        return num1*num2;
    }
    div (num1,num2){
        if (num2 != 0){
        return num1+num2;
        }
        else {return "Indefinido"}
    }
}

//declarar variables
console.log("sum res mul div")
var oper = prompt("Introducir operacion:")
var num1 = parseFloat (prompt("Introducir numero:"));
var num2 = parseFloat (prompt("Introducir numero:"));

//objeto
var calc = new Calculadora();    

switch (true){
    case oper == "sum":
        resultado = calc.sum(num1,num2);
        break;
        
    case oper == "res":
        resultado = calc.res(num1,num2);
        break;
        
    case oper == "mul":
        resultado = calc.mul(num1,num2);
        break;
    
    case oper == "div":
        resultado = calc.div(num1,num2);
        break;
    default:
    console.log("operacion invalida");
        
}
console.log(resultado);
