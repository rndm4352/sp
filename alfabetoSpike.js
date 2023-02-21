//Input
var alfabetoIn = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
//Output wmpty str
var alfabetoReverse = "";
var alfabetoOut = "";

//Reverse
for (var i = 27-1;i>=0;i--){
    alfabetoReverse += alfabetoIn[i]
}
//Decrease
for (var j = 0;j<=27;j++){
    console.log(alfabetoOut);
    alfabetoOut = alfabetoReverse.slice(j);
}
