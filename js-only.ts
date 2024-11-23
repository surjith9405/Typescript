const btn = document.querySelector("button")! as HTMLButtonElement; 
// Here ! symbol is called non-null Assersion operator in TS. it means, u are telling TS compiler, that 
//"I am  sure that this value is not null"
const input = document.querySelector("#num")! as HTMLInputElement;  
const input1 = document.querySelector("#num1")! as HTMLInputElement;


console.log("input:", input);
console.log("Value:", input.value)


function sum(num1 : number, num2: number){
    return num1 + num2;
}

btn.addEventListener("click", ()=>{
    console.log(sum(+input.value, +input1.value));
});