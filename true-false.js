// Falsy values are
// 0
// ""
// undefined
// null
// NaN
// false

// Truthy values are
// '0', ' ', [], true


let name = 12;
console.log(name)

if(name || name == 0){
    console.log("Condition is True")
} 
else{
    console.log("Condition is False")
}
