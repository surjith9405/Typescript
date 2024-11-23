function Add(num1, num2) {
    return num1 + num2;
}
function ShowResult(total) {
    console.log("Result:", total);
    return;
}
ShowResult(Add(10, 20));
// let combinedValue: Function; 
//TS does not produce any error because it is also a function; so that's a reason function Type came into the picture.
var combinedValue; // TS Function Type. in this way we can avoiding the uage of passing wrong function. this way we can define the specific function with apporpriate arguments.
combinedValue = Add;
// combinedValue = 5;
// combinedValue = ShowResult;
console.log(combinedValue(10, 6));
//Callback in Function Types
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(10, 10, function (result) {
    console.log("callback result:", result);
});
