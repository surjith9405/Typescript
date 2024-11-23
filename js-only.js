var btn = document.querySelector("button");
// Here ! symbol is called non-null Assersion operator in TS. it means, u are telling TS compiler, that 
//"I am  sure that this value is not null"
var input = document.querySelector("#num");
var input1 = document.querySelector("#num1");
console.log("input:", input);
console.log("Value:", input.value);
function sum(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(sum(+input.value, +input1.value));
});
